import { Box, Text, Flex, Button, Wrap, WrapItem, IconButton } from '@chakra-ui/react'
import NextLink from 'next/link'
import { FiExternalLink } from 'react-icons/fi'
import { useShop } from './hooks/useShop'

const ShopContents = () => {
    const { categories,  } = useShop();

    return ( 
        <Flex mt="10px" flexWrap="wrap" px="24px" justifyContent='center'>
            <Flex maxW='8xl' w='full' flexDir='column'>
                <Flex flexDir='column' mt='3em'>
                    <Text fontSize="5xl" fontWeight="extrabold" color='rgb(67,122,255)'>
                        Shop by Category
                    </Text>
                    <Wrap spacing='2em' mt='2em'>
                        {categories?.map((category, idx) => (
                            <WrapItem key={idx}>
                                <Box w='220px' bg='whiteAlpha.200' borderRadius='10px' boxShadow='rgb(9 30 66 / 25%) 0px 1px 2px 0px;' p='1em' position='relative'>
                                    <Text isTruncated>
                                        {category.name}
                                    </Text>
                                    <Text fontSize='8pt' color='whiteAlpha.500'>
                                        Created Date: {new Date(category.created).toString()}
                                    </Text>
                                    <NextLink href={`/category/${category.name.toLowerCase()}`} shallow passHref>
                                        <Button w='full' mt='.5em' fontWeight='normal' fontSize='10pt' rightIcon={<FiExternalLink />}>
                                            Shop
                                        </Button>
                                    </NextLink>
                                    <NextLink href={`/category/${category.name.toLowerCase()}`} shallow passHref>
                                        <IconButton 
                                            aria-label='Visit Category' 
                                            position='absolute'
                                            top='-2.5'
                                            right='-2.5'
                                            isRound
                                            icon={<FiExternalLink />}
                                            bg='rgb(44,49,61)'
                                            size='sm'
                                        />
                                    </NextLink>
                                </Box>
                            </WrapItem>
                        ))}
                    </Wrap>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default ShopContents