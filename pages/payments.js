import Head from 'next/head'
import { useEffect } from 'react'
import { Box, Flex, Text, VStack, HStack, Button, Heading, Wrap, WrapItem } from '@chakra-ui/react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useCore } from '@/providers/CoreProvider'

const Payments = () => {
    const {
       orders,
       getOrders
    }
    = useCore();

    useEffect(() => {
        if (!getOrders) return;
        getOrders();
    }, [])

    return (
        <Box>
            <Head>
                <title>Payments | Home</title>
            </Head>
            <Navbar />
                <Flex h='500px' mt='4em' justifyContent='center'>
                    <Flex maxW='8xl' w='full' px='24px' justifyContent='flex-start'>
                        <Flex flexDir='column' w='full'> 
                            <Heading textAlign='left'>My Orders</Heading>
                            <Wrap mt='1em'>
                                {orders?.map((order, idx) => (
                                    <WrapItem key={idx} w='full' p='1em' bg='rgb(47,77,150)'>
                                        <VStack alignItems='flex-start'>
                                            <Text>
                                                Order ID: {order.id}
                                            </Text>
                                            <Text>
                                                Amount: ${order.order.total_with_tax.formatted}
                                            </Text>
                                            <Text>
                                                Order Status: {order.status}
                                            </Text>
                                            <Text>
                                                Payment Status: {order.status_payment}
                                            </Text>
                                        </VStack>
                                    </WrapItem>
                                ))}
                            </Wrap>
                        </Flex>
                    </Flex>
                </Flex>
            <Footer />
        </Box>
    )
}

export default Payments