import { Flex, Image, Text, Input, Divider , Link, Button,Box, Heading, VStack,Icon } from '@chakra-ui/react'

import { AddIcon, MinusIcon, DeleteIcon} from '@chakra-ui/icons'



const  orderedProducts = [

    {
        name:"HP 14 Laptop with 1 year of Microsoft 365 - Silver (AMD 3020e/64GB eMMC/4GB RAM/Windows 10 S)",
        src:"",
        price:200,
    },
    {
        name:"HP 14 Laptop with 1 year of Microsoft 365 - Silver (AMD 3020e/64GB eMMC/4GB RAM/Windows 10 S)",
        src:"",
        price:20,
    },
    {
        name:"HP 14 Laptop with 1 year of Microsoft 365 - Silver (AMD 3020e/64GB eMMC/4GB RAM/Windows 10 S)",
        src:"",
        price:300,
    },
    {
        name:"HP 14 Laptop with 1 year of Microsoft 365 - Silver (AMD 3020e/64GB eMMC/4GB RAM/Windows 10 S)",
        src:"",
        price:1000,
    },
    {
        name:"HP 14 Laptop with 1 year of Microsoft 365 - Silver (AMD 3020e/64GB eMMC/4GB RAM/Windows 10 S)",
        src:"",
        price:400,
    }
]




   
    


const Cart = () => {
    return (

        
       
        
        <Flex mt="10px" alignItems="start" p = "10px"  wrap="wrap">

        <Box flexBasis="100%">
            <Text fontSize="3xl">Your Cart</Text>
        </Box>

           <VStack mr="30px">

           {orderedProducts.map((product, idx) => (
                            <Flex key={idx} p="20px"  borderRadius="10px"  maxW="900px" bg="rgb(17,20,28)" >
                                <Image 
                                    mb="10px"
                                    boxSize='275px'
                                    objectFit='cover'
                                    src={product.src}
                                    fallbackSrc = 'https://via.placeholder.com/300'
                                />
                                <Box ml="20px" alignContent="left">
                                    <Text mt="25px"  fontSize="2xl">{product.name}</Text>
                                    <Text mt="25px" fontSize="xl"><MinusIcon h="12px" className="decrease" marginRight="20px"/>  1  <AddIcon  marginLeft="20px" h="12px"className="increase"  /></Text>
                                    <Text mt="25px" fontSize="xl" pt="5px" color="blue"><DeleteIcon marginRight="10px"  />Remove </Text>

                                   
                                </Box>
                               
                            </Flex>
                        ))}
           </VStack>


           <Box  p="10px"  >
               <Text>Enter Promo Code: </Text>
               <Input mt="10px" placeholder='Enter code' />

               <Box  mt="25px" w="100%" minW="400px">
                   <Text fontWeight="bold" fontSize="2xl">Order Summary</Text>
                   <Flex mt="25px" width="100%"  justifyContent='space-between'>
                       <Text>Product Subtotal</Text>
                       <Text>$1233</Text>

                   </Flex>
                   <Flex mt="25px" width="100%"  justifyContent='space-between'>
                       <Text>Estimated Shipping</Text>
                       <Text>Free</Text>
                       
                   </Flex>
                   <Flex mt="25px" width="100%"  justifyContent='space-between'>
                       <Text>Environmental Handling Fees</Text>
                       <Text>$1.15</Text>
                       
                   </Flex>
                   <Flex mt="25px" width="100%"  justifyContent='space-between'>
                       <Text>Estimated Taxes</Text>
                       <Text>$124.35</Text>
                       
                   </Flex>

                   <Flex mt="25px" width="100%"  justifyContent='space-between'>
                       <Text>Promo Applied</Text>
                       <Text>$12</Text>
                       
                   </Flex>
                <Divider mt="25px"/>

                   <Flex mt="25px" width="100%"  justifyContent='space-between' fontWeight="bold">
                       <Text >Total</Text>
                       <Text>$1160.48</Text>
                       
                   </Flex>

                   <Button mt="25px">Continue to Checkout</Button>
               </Box>

               
           </Box>
                

            
        </Flex>

        
    )
}

export default Cart