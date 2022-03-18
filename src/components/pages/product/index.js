import { Flex, Image, Text, Button,Box, Heading, VStack, Spinner, SlideFade } from '@chakra-ui/react'
import NextLink from 'next/link'
import { useProduct } from './hooks/useProduct'
import { BsFillCartPlusFill } from 'react-icons/bs'
import { FiExternalLink } from 'react-icons/fi'

const ProductContent = () => {
    const { product } = useProduct();

    return (
        <Flex mt="10px" justifyContent="center" wrap="wrap">
            {!product ? (
                <Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='blue.500'
                    size='xl'
                />
            ) : (
                <>
                    <Flex bg="rgb(17,20,28)" p="24px" wrap="wrap" >
                    <Image 
                        mb="10px"
                        boxSize='400px'
                        objectFit='cover'
                        src={product?.image?.url}
                        fallbackSrc = 'https://via.placeholder.com/400'
                    />        
                    <Box pl="20px" width="70%">
                        <Heading>{product?.name}</Heading>
                        <Text mt="25px" mb="20px" fontSize="2xl">Price: ${product?.price?.formatted_with_code}</Text>
                        <Text fontWeight='bold'>Overview</Text>
                        <Text>${product?.description?.replaceAll('<p>', '').replaceAll('</p>', '')}</Text>
                        <Box mt="20px"> 
                        <Button rightIcon={<BsFillCartPlusFill />} size='sm' ml='.5em'>Add to cart</Button>
                        </Box>
                    </Box>
                </Flex> 
                <SlideFade in={true} offsetY='20px' delay={.45}>
                    <Flex justifyContent='space-evenly' p='2em' flexWrap='wrap'>
                        <Text fontSize="3xl" flexBasis="100%" mt='2em' mb='1em'>Related Products:</Text>
                        {product?.related_products?.map((product, idx) => (
                            <VStack key={idx} p="10px" borderRadius="10px" maxW='275px' bg='rgb(17,20,28)'>
                                <Image 
                                    mb="10px"
                                    boxSize='275px'
                                    objectFit='cover'
                                    src={product.image.url}
                                    fallbackSrc = 'https://via.placeholder.com/300'
                                />
                                <Text noOfLines={2}>{product.name}</Text>
                                <Text noOfLines={5} fontSize='10pt' color='whiteAlpha.500'>
                                    {product.description.replaceAll('<p>', '').replaceAll('</p>', '')}
                                </Text>
                                <Flex justifyContent='flex-end' w='full'>
                                    <NextLink href={`/product/${product.id}`} shallow passHref>
                                        <Button rightIcon={<FiExternalLink />}>
                                            Shop 
                                        </Button>
                                    </NextLink>
                                </Flex>
                            </VStack>
                        ))}
                    </Flex>
                </SlideFade>
                </>
            )}
        </Flex>
    )
}

export default ProductContent