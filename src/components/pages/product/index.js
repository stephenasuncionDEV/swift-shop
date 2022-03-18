import { Flex, Image, Text, IconButton, HStack, Link, Button,Box, Heading, VStack } from '@chakra-ui/react'
import { useProduct } from './hooks/useProduct'
import { BsFillCartPlusFill } from 'react-icons/bs'

const simlilarProducts = [
    {
        name:"Item1",
        src:"",
        description:"This is product of category similar to the shown product."
    },
    {
        name:"Item2",
        src:"",
        description:"This is product of category similar to the shown product."
    },
    {
        name:"Item3",
        src:"",
        description:"This is product of category similar to the shown product."
    },
    {
        name:"Item4",
        src:"",
        description:"This is product of category similar to the shown product."
    },
    {
        name:"Item5",
        src:"",
        description:"This is product of category similar to the shown product."
    }
]
   
const ProductContent = () => {
    const { product } = useProduct();

    return (
        <Flex mt="10px" justifyContent="center" wrap="wrap">
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
            <Flex justifyContent='space-evenly' p='2em' flexWrap='wrap'>
                <Text fontSize="3xl" flexBasis="100%">Similar Products:</Text>
                {product?.related_products?.map((product, idx) => (
                    <VStack key={idx} p="10px" borderRadius="10px" maxW='275px'>
                        <Image 
                            mb="10px"
                            boxSize='275px'
                            objectFit='cover'
                            src={product.image.url}
                            fallbackSrc = 'https://via.placeholder.com/300'
                        />
                        <Text>{product.name}</Text>
                        <Text fontSize='10pt' color='whiteAlpha.500'>
                            {product.description.substring(0, product.description.length / 2)}...
                        </Text>
                    </VStack>
                ))}
            </Flex>
        </Flex>
    )
}

export default ProductContent