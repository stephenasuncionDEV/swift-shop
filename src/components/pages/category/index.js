import { useEffect } from 'react'
import { Flex, Image, Text, Button,Box, Heading, Spinner, VStack, HStack, InputGroup, InputLeftElement, Input } from '@chakra-ui/react'
import NextLink from 'next/link'
import { useCategory } from './hooks/useCategory'
import { useCore } from '@/providers/CoreProvider'
import { BsFillCartPlusFill } from 'react-icons/bs'
import { FiSearch } from 'react-icons/fi'

const Category = () => {
    const { categoryProducts, categoryProductsLoading, AddToCart, isAddingCart } = useCore();
    const { searchInput, setSearchInput } = useCategory();

    return (
        <Flex mt="10px" flexWrap="wrap" px="24px" justifyContent='center'>
            {!categoryProductsLoading ? (
                <Flex maxW='8xl' w='full' flexDir='column' >
                    <Flex justifyContent='space-between'>
                        <VStack alignItems='flex-start' flex='1'>
                            <Heading>{categoryProducts[0]?.categories[0]?.name}</Heading>
                            <Text>A list of available products under the category {categoryProducts[0]?.categories[0]?.name}.</Text>
                        </VStack>
                        <InputGroup flex='1' maxW='260px'>
                            <InputLeftElement
                                pointerEvents='none'
                                children={<FiSearch />}
                            />
                            <Input type='text' placeholder='Search Product' value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
                        </InputGroup>
                    </Flex>
                    <Flex flexDir='row' mt="20px" flexWrap="wrap" px="24px" justifyContent='space-evenly' p="10px" >
                        {categoryProducts?.filter((product) => product.name.indexOf(searchInput) !== - 1)
                        .map((product, idx) => (     
                            <Box key={idx} mt="10px" p="10px" borderRadius="10px" maxW='300px' bg="rgb(17,20,28)" textAlign="left" mb='2em'>
                                <Box>
                                    <Image 
                                        mb="10px"
                                        boxSize='275px'
                                        objectFit='cover'
                                        src={product.image.url}
                                        fallbackSrc = 'https://via.placeholder.com/300'
                                    />
                                </Box>
                                <Text noOfLines={2}>{product.name}</Text>
                                <Text fontWeight='bold' mt='.5em'>${product.price.formatted}</Text>
                                <Text fontSize='10pt' color='whiteAlpha.500' mt='.5em' noOfLines={5}>
                                    {product.description.replaceAll('<p>', '').replaceAll('</p>', '')}
                                </Text>
                                <Flex mt="1em" justifyContent='flex-end'>
                                    <NextLink href={`/product/${product.id}`} shallow passHref>
                                        <Button size='sm'>View Details</Button>
                                    </NextLink>
                                    <Button rightIcon={<BsFillCartPlusFill />} size='sm' ml='.5em' onClick={() => AddToCart(product.id)} disabled={isAddingCart}>Add to cart</Button>
                                </Flex>
                            </Box>                  
                        ))}
                    </Flex>
                </Flex>
            ) : (
                <Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='blue.500'
                    size='xl'
                />
            )}     
        </Flex>
    )
}

export default Category