import { Box, Text, Image, Flex, Heading, Button, Link, VStack, HStack, SlideFade } from '@chakra-ui/react'
import NextLink from 'next/link'
import { useCore } from '@/providers/CoreProvider'
import { useUser } from '@/providers/UserProvider'
import { BsArrowRightShort } from 'react-icons/bs'

const SiteInfoList = [
    {heading: 'Heading 1', subHeading: '', desc: 'This is some description like i dont know what to write here. May be with the God grace i will know soon.This is some description like i dont know what to write here. May be with the God grace i will know soon. This is some description like i dont know what to write here. May be with the God grace i will know soon. This is some description like i dont know what to write here. May be with the God grace i will know soon.'},
    {heading: 'Heading 2', subHeading: '', desc: 'This is some description like i dont know what to write here. May be with the God grace i will know soon.This is some description like i dont know what to write here. May be with the God grace i will know soon. This is some description like i dont know what to write here. May be with the God grace i will know soon. This is some description like i dont know what to write here. May be with the God grace i will know soon.'},
]

const LandingContents = () => {
    const { isLoggedIn } = useUser();
    const { hotDeals } = useCore();

    return ( 
        <Flex mt="10px" flexWrap="wrap" px="24px" justifyContent='center'>
            <Flex maxW='8xl' w='full' flexDir='column'>
            <Flex justifyContent='space-between' maxW='8xl' w='full' mx='auto' px='2em' mt='10em'>
                    <VStack spacing='1.5em' maxW='630px'>
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
                    </VStack>
                    <Box maxW='600px'>
                        <SlideFade in={true} offsetY='20px' delay={.45}>
                            <Image src='/assets/mockup.png' alt='Swift Shop Preview'/>
                        </SlideFade>
                    </Box>
                </Flex>
                <Flex flexDir='column' mt='10em'>
                    <Text fontSize="5xl" fontWeight="extrabold" color='rgb(67,122,255)'>
                        Hot Deals
                    </Text>
                    <Text>
                        A list of most sold items in this month
                    </Text>
                    <Flex justifyContent='space-evenly' p='2em' flexWrap='wrap'>
                        {hotDeals.map((deal, idx) => (
                            <VStack key={idx} p="10px" borderRadius="10px" maxW='275px'>
                                <Image 
                                    mb="10px"
                                    boxSize='275px'
                                    objectFit='cover'
                                    src={deal.image.url}
                                    fallbackSrc = 'https://via.placeholder.com/300'
                                />
                                <Text>{deal.name}</Text>
                                <Text fontSize='10pt' color='whiteAlpha.500'>
                                    {deal.description.substr(3, deal.description.length / 2)}...
                                </Text>
                            </VStack>
                        ))}
                    </Flex>
                </Flex>
                {SiteInfoList.map((info, idx) => (
                    <Box display="flex" width="100%" mt="10em" p="10px" flexDirection={idx === 0 ? "row-reverse" : "row"} key={idx}>
                        <Image 
                            boxShadow='dark-lg' rounded='md'
                            mb="10px"
                            objectFit='cover'
                            src = 'gibbresh.png' 
                            fallbackSrc = 'https://via.placeholder.com/300'
                        />
                        <VStack p="20px" m="20px">
                            <Heading>{info.heading}</Heading>
                            <Text fontSize='2xl'>{info.subHeading}</Text>
                            <Text>
                                {info.desc} 
                            </Text>
                        </VStack>
                    </Box>
                ))}
            </Flex>
        </Flex>
    )
}

export default LandingContents