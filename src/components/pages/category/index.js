import { Flex, Image, Text, IconButton, HStack, Link, Button } from '@chakra-ui/react'
import { SiDiscord, SiTwitter } from 'react-icons/si'
import NextLink from 'next/link'


const navInfo = [
    {url: '#', text: 'Shop'},
    {url: '#', text: 'Cart'},
    {url: '#', text: 'Payment'},
]


const Navigation = () => {
    return (
        <header>
            <Flex justifyContent='center'>
                <Flex 
                    px='24px'
                    py='1.5em'
                    justifyContent='space-between'
                    alignItems='center'
                    maxW='8xl'
                    w='full'
                >
                    <NextLink href='/' shallow passHref>
                        <Link _hover={{ textDecoration: 'none' }}>
                            <Flex alignItems='center'>
                                <Image 
                                    src='/assets/logo-icon.png' 
                                    alt='SwiftNFT Logo'
                                    width='15%'
                                />
                                <Text fontWeight='bold' fontSize='1.5em' ml='1em'>
                                    Swift Shop
                                </Text>
                            </Flex>
                        </Link>
                    </NextLink>
                    <HStack alignItems='center' spacing='1.5em'>


                    {navInfo.map((link, idx) => (

                        <HStack id={idx} spacing='.5em'>
                           <NextLink href={link.url} shallow passHref>
                               <Button background='none'>
                                   {link.text}
                               </Button>
                           </NextLink>

                       </HStack>


                        ))}
                        
                    </HStack>
                </Flex>
            </Flex>
        </header>
    )
}

export default Navigation