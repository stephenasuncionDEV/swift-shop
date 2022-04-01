import { Box, Text, Image, Flex, Heading, Button, VStack, HStack, SlideFade, Spinner, Tag } from '@chakra-ui/react'
import NextLink from 'next/link'
import { useCore } from '@/providers/CoreProvider'
import { useUser } from '@/providers/UserProvider'
import { BsArrowRightShort } from 'react-icons/bs'
import { FiExternalLink } from 'react-icons/fi'
import { useLanding } from './hooks/useLanding'

const SiteInfoList = [
    {src: '/assets/customer-service.jpg', heading: 'Top Customer Service ✅', subHeading: '', desc: 'Swift Shop provide the best customer experience. We provide 24 hour assistance to our customers. We help our customer both before and after they buy and use our products or services which gives them  have an easy and enjoyable experience.'},
    {src: '/assets/quick-checkout.jpg', heading: 'Quick Checkout 🚀', subHeading: '', desc: 'Swift Shop lets you shop with ease. All you have to do is pick a category, find a product, add to card, and checkout the product. We like to keep it simple for our customers so they can have the best shopping experience with us.'},
]

const LandingContents = () => {
    const { isLoggedIn } = useUser();
    const { hotDeals } = useCore();
    const { customerCount } = useLanding();

    return ( 
        <Flex mt="10px" flexWrap="wrap">
            <Flex justifyContent='space-between' maxW='8xl' w='full' mx='auto' px='2em' mt='10em'>
                <VStack spacing='1.5em' maxW='630px' alignItems='flex-start'>
                    <header>
                        <Text fontSize='3.75rem' lineHeight='55pt'>
                            Find your favourite tech products
                            <span style={{ color: 'rgb(67,122,255)' }}>
                                &nbsp;with ease
                            </span>
                        </Text>
                    </header>
                    <Text fontSize='14pt' mt='.5em' color='rgba(255,255,255,0.6)'>
                        We provide the best electronics to consumers at the best prices and in an efficient way.
                    </Text>
                    <HStack justifyContent='flex-start' width='full' spacing='1em'>
                        <NextLink href={isLoggedIn ? '/shop' : '/login'} shallow passHref>
                            <Button 
                                fontWeight='normal' 
                                rightIcon={<BsArrowRightShort />} 
                                size='lg' 
                                bg={isLoggedIn ? 'rgb(67,122,255)' : 'rgb(44,49,61)'}
                                _hover={{
                                    bg: isLoggedIn ? 'rgb(67,122,255)' : 'rgb(63,68,78)'
                                }}
                            >
                                {isLoggedIn ? 'Go to Shop' : 'Get Started'}
                            </Button>
                        </NextLink>
                    </HStack>
                    <Text fontSize='11pt' color='whiteAlpha.600'>
                        <Tag>{customerCount}</Tag> guest customers have shopped with us!
                    </Text>
                </VStack>
                <Box maxW='600px'>
                    <SlideFade in={true} offsetY='20px' delay={.45}>
                        <Image src='/assets/mockup.png' alt='Swift Shop Preview' fallbackSrc='https://via.placeholder.com/1000'/>
                    </SlideFade>
                </Box>
            </Flex>
            <Flex bg='rgb(19,22,25)' mt='10em' w='full' justifyContent='center'>
                <section id='hotdeals'>
                    <Flex maxW='8xl' w='full' flexDir='column'>
                        <Text fontSize="5xl" fontWeight="extrabold" color='rgb(67,122,255)' mt='1.25em'>
                            Hot Deals
                        </Text>
                        <Text>
                            A list of most sold items in this month
                        </Text>
                        <Flex justifyContent='space-evenly' p='2em' flexWrap='wrap'>
                            {!hotDeals ? (
                                <Spinner
                                    thickness='4px'
                                    speed='0.65s'
                                    emptyColor='gray.200'
                                    color='blue.500'
                                    size='xl'
                                />
                            ) : (
                                <>
                                    {hotDeals?.map((deal, idx) => (
                                        <VStack key={idx} p="10px" borderRadius="10px" maxW='275px' mb='1em' className='feature-container'>
                                            <Image 
                                                mb="10px"
                                                boxSize='275px'
                                                objectFit='cover'
                                                src={deal.image.url}
                                                alt={`Feature ${idx}`}
                                                fallbackSrc = 'https://via.placeholder.com/300'
                                            />
                                            <Text noOfLines={2}>{deal.name}</Text>
                                            <Text noOfLines={5} fontSize='10pt' color='whiteAlpha.500'>
                                                {deal.description.substr(3, deal.description.length / 2)}...
                                            </Text>
                                            {isLoggedIn ? (
                                                <Flex justifyContent='flex-end' w='full'>
                                                    <NextLink href={`/product/${deal.id}`} shallow passHref>
                                                        <Button rightIcon={<FiExternalLink />}>
                                                            Shop 
                                                        </Button>
                                                    </NextLink>
                                                </Flex>
                                            ) : (
                                                <Text fontSize='10pt' color='whiteAlpha.200'>
                                                    You must be logged in to buy this product.
                                                </Text>
                                            )}
                                        </VStack>
                                    ))}
                                </>
                            )}
                        </Flex>
                    </Flex>
                </section>
            </Flex>
            <Flex w='full' justifyContent='center'>
                <section id='features'>
                    <Flex maxW='8xl' w='full' flexDir='column'>
                        {SiteInfoList.map((info, idx) => (
                            <Box display="flex" width="100%" mt="10em" p="1em" flexDirection={idx === 0 ? "row-reverse" : "row"} key={idx} bg='rgb(19,22,25)' borderRadius='10px'>
                                <Image 
                                    boxShadow='dark-lg' rounded='md'
                                    boxSize='300px'
                                    objectFit='cover'
                                    src={info.src}
                                    fallbackSrc = 'https://via.placeholder.com/300'
                                />
                                <VStack p="20px" m="20px" flex='1' alignItems={idx === 0 ? "flex-start" : "flex-end"}>
                                    <Heading>{info.heading}</Heading>
                                    <Text fontSize='2xl' color='whiteAlpha.500'>{info.subHeading}</Text>
                                    <Text color='whiteAlpha.600'>
                                        {info.desc} 
                                    </Text>
                                </VStack>
                            </Box>
                        ))}
                    </Flex>
                </section>
            </Flex>
        </Flex>
    )
}

export default LandingContents