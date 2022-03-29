import { Flex, Image, Text, IconButton, HStack, Link, Button, Tag, TagRightIcon, TagLabel, Menu, MenuItem, MenuList, MenuButton } from '@chakra-ui/react'
import { FiCopy } from 'react-icons/fi'
import NextLink from 'next/link'
import { useUser } from '@/providers/UserProvider'
import { useCore } from '@/providers/CoreProvider'
import { FaChevronDown } from 'react-icons/fa'

const Navbar = ({ isLanding = false, isHome = true }) => {
    const { isLoggedIn, Logout, email, CopyEmail } = useUser();
    const { cart, onPayments } = useCore();

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
                                <HStack>
                                    <HStack>
                                        {isHome && (
                                            <NextLink href='/' shallow passHref>
                                                <Button background='none'>
                                                    Home 🏠
                                                </Button>
                                            </NextLink>
                                        )}
                                        {!isLanding && (
                                            <>
                                            <NextLink href='/shop' shallow passHref>
                                                <Button background='none'>
                                                    Categories 🛍️
                                                </Button>
                                            </NextLink>
                                            <NextLink href='/cart' shallow passHref>
                                                <Button background='none'>
                                                    My Cart &nbsp; <Tag size='sm'>{cart ? cart?.length : 0}</Tag> &nbsp;🛒
                                                </Button>
                                            </NextLink>
                                            </>
                                        )}
                                    </HStack>
                                    <HStack>
                                        <Tag bg='rgba(67,122,255,0.5)' cursor='pointer' onClick={CopyEmail}>
                                            <TagLabel>
                                                {email}
                                            </TagLabel>
                                            <TagRightIcon>
                                                <FiCopy fontSize='18pt'/>
                                            </TagRightIcon>
                                        </Tag>
                                        <Menu>
                                            <MenuButton as={Button} rightIcon={<FaChevronDown />} size='sm'>
                                                My User
                                            </MenuButton>
                                            <MenuList>
                                                <MenuItem onClick={onPayments}>
                                                    Payments 💵
                                                </MenuItem>
                                                <MenuItem onClick={Logout}>
                                                    Logout ✌️
                                                </MenuItem>
                                            </MenuList>
                                        </Menu>
                                    </HStack>
                                </HStack>
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