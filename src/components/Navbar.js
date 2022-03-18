import { Flex, Image, Text, IconButton, HStack, Link, Button } from '@chakra-ui/react'
import { SiDiscord, SiTwitter } from 'react-icons/si'
import NextLink from 'next/link'
import { useUser } from '@/providers/UserProvider'

const Navbar = ({ isLanding = false, isHome = true }) => {
    const { isLoggedIn, Logout } = useUser();

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
                        <HStack spacing='.5em'>
                            {isLanding && (
                                <>
                                    <NextLink href='#hotdeals' shallow passHref>
                                        <Button background='none'>
                                            Hot Deals 🔥
                                        </Button>
                                    </NextLink>
                                    <NextLink href='#features' shallow passHref>
                                        <Button background='none'>
                                            Features ✨
                                        </Button>
                                    </NextLink>
                                </>
                            )}
                            {isLoggedIn ? (
                                <>
                                    {isHome && (
                                        <NextLink href='/' shallow passHref>
                                            <Button background='none'>
                                                Home 🏠
                                            </Button>
                                        </NextLink>
                                    )}
                                    <NextLink href='/shop' shallow passHref>
                                        <Button background='none'>
                                            Categories 🛍️
                                        </Button>
                                    </NextLink>
                                    <NextLink href='/cart' shallow passHref>
                                        <Button background='none'>
                                            My Cart 🛒
                                        </Button>
                                    </NextLink>
                                    <Button background='none' onClick={Logout}>
                                        Logout
                                    </Button>
                                </>
                            ) : (
                                <NextLink href='/login' shallow passHref>
                                    <Button background='none'>
                                        Login
                                    </Button>
                                </NextLink>
                            )}
                        </HStack>
                    </HStack>
                </Flex>
            </Flex>
        </header>
    )
}

export default Navbar