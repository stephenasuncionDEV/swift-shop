import { Flex, Image, Text, IconButton, HStack, Link, Button,Box, Heading, VStack } from '@chakra-ui/react'
import { SiDiscord, SiTwitter } from 'react-icons/si'
import NextLink from 'next/link'


const categoryName={
    name:'Laptops',
    desc:'Whether you’re working, creating, gaming, or just surfing, we have a huge range of amazing laptops for you at incredible prices.'
}

const productsInfo = [
    {name: 'Name',des:"Awesome product", price: 200,src:"#"},
    {name: 'Name', des:"Awesome product",price: 300,src:"#"},
    {name: 'Name', des:"Awesome product",price: 400,src:"#"},
    {name: 'Name', des:"Awesome product",price: 400,src:"#"},
    {name: 'Name', des:"Awesome product",price: 400,src:"#"},
    {name: 'Name', des:"Awesome product",price: 400,src:"#"},
    {name: 'Name', des:"Awesome product",price: 400,src:"#"},
    {name: 'Name', des:"Awesome product",price: 400,src:"#"}
    
]

const Products = () => {
    return (
        <Flex mt="10px" flexWrap="wrap" px="24px" justifyContent='center'>

            <Flex  maxW='8xl' w='full' flexDir='column' >

                <Flex flexDir='column'>
                    <Heading>{categoryName.name}</Heading>
                    <Text>{categoryName.desc}</Text>
                </Flex>
                <Flex flexDir='row' mt="20px" flexWrap="wrap" px="24px" justifyContent='space-around'  p="10px" bg="white">



                     {productsInfo.map((product, idx) => (
                    
                        <Box mt="10px" p="10px" borderRadius="10px" maxW='300px' bg="#1A202C" textAlign="left">
                            <Box>
                                    <Image 
                                        mb="10px"
                                        boxSize='275px'
                                        objectFit='cover'
                                        src={product.src}
                                        fallbackSrc = 'https://via.placeholder.com/300'
                                    />
                            </Box>
                                    <Text>{product.name}</Text>
                                    <Text fontSize='10pt' color='whiteAlpha.500'>
                                        {product.des}
                                    </Text>
                                    <Text fontWeight='bold'>${product.price}</Text>

                            <Flex mt="10px" justifyContent='space-evenly'>
                                <Button>View Details</Button>
                                
                                <Button>Add to cart</Button>

                            </Flex>

                                    
                        </Box>
                       
                    ))}

                </Flex>
            </Flex>

            
        </Flex>
    )
}

export default Products