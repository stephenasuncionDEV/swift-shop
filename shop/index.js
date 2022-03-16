import { Box, Text, Image, Flex, Heading, Button, Link, VStack, HStack, SlideFade } from '@chakra-ui/react'
import NextLink from 'next/link'
import { useCore } from '@/providers/CoreProvider'
import { useUser } from '@/providers/UserProvider'
import { BsArrowRightShort } from 'react-icons/bs'

const SiteInfoList = [
    {heading: 'Heading 1', subHeading: '', desc: 'shop stuff shop stuff shop stuff shop stuff shop stuff shop stuff shop stuff shop stuff shop stuff shop stuff shop stuff shop stuff '},
    
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
                                Find what you're looking for with Swift Shop
                            </Text>
                        </header>
                    </VStack>
                    <Box maxW='600px'>
                        <SlideFade in={true} offsetY='20px' delay={.45}>
                            <Image src='/assets/mockup.png' alt='Swift Shop Preview'/>
                        </SlideFade>
                    </Box>
                </Flex>
                <Flex flexDir='column' mt='10em'>
                    <Text fontSize="5xl" fontWeight="extrabold" color='rgb(67,122,255)'>
                        Recomended items for you
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
            </Flex>
        </Flex>
    )
}

export default LandingContents