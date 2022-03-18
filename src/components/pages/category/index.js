import { Flex, Image, Text, Button,Box, Heading, Spinner } from '@chakra-ui/react'
import NextLink from 'next/link'
import { useCategory } from './hooks/useCategory'
import { useCore } from '@/providers/CoreProvider'
import { BsFillCartPlusFill } from 'react-icons/bs'

const Category = () => {
    useCategory();
    const { categoryProducts, categoryProductsLoading } = useCore();

    return (
        <Flex mt="10px" flexWrap="wrap" px="24px" justifyContent='center'>
            {!categoryProductsLoading ? (
                <Flex maxW='8xl' w='full' flexDir='column' >
                    <Flex flexDir='column'>
                        <Heading>{categoryProducts[0]?.categories[0]?.name}</Heading>
                        <Text>A list of available products under the category {categoryProducts[0]?.categories[0]?.name}.</Text>
                    </Flex>
                    <Flex flexDir='row' mt="20px" flexWrap="wrap" px="24px" justifyContent='space-evenly' p="10px" >
                        {categoryProducts?.map((product, idx) => (     
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
                                <NextLink href={`/product/${product.id}`} shallow passHref>
                                    <Flex mt="1em" justifyContent='flex-end'>
                                        <Button size='sm'>View Details</Button>
                                        <Button rightIcon={<BsFillCartPlusFill />} size='sm' ml='.5em'>Add to cart</Button>
                                    </Flex>
                                </NextLink>
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