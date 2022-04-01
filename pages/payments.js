import Head from 'next/head'
import { useEffect } from 'react'
import { Box, Flex, Text, VStack, HStack, Button, Heading, Wrap, WrapItem, Tag, Input, Link, FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useCore } from '@/providers/CoreProvider'

const Payments = () => {
    const {
       orders,
       getOrders,
       chargeId,
       setChargeId,
       refund,
       isWrongChargeId
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
                <Flex my='4em' justifyContent='center'>
                    <Flex maxW='8xl' w='full' px='24px' justifyContent='flex-start'>
                        <Flex flexDir='column' w='full'> 
                            <Heading textAlign='left'>Orders</Heading>
                            <Text fontSize='18pt'>
                                Request a Refund
                            </Text>
                            <Text fontSize='10pt'>
                                To request a refund, you must <Link color='orange' fontWeight='bold' href='https://www.instagram.com/stephenasuncion/' isExternal>contact</Link> a staff to get your order's charge ID
                            </Text>
                            <HStack mt='.5em' alignItems='flex-end'>
                                <FormControl isRequired isInvalid={isWrongChargeId} w='400px'>
                                    <FormLabel htmlFor='chargeId'>Charge ID</FormLabel>
                                    <HStack>
                                    <Input type='text' value={chargeId} onChange={(e) => setChargeId(e.target.value)} placeholder='ch_XXXXXXXXXXXXXXXXXXX' w='400px' />
                                        <Button onClick={refund}>
                                            Refund
                                        </Button>
                                    </HStack>
                                    {isWrongChargeId && (
                                        <FormErrorMessage>
                                            <FormErrorMessage>Charge ID is required</FormErrorMessage>
                                        </FormErrorMessage>
                                    )}
                                </FormControl>
                            </HStack>
                            <Text fontSize='18pt' mt='2em'>
                                List
                            </Text>
                            <Text fontSize='10pt'>
                                A list of all your orders
                            </Text>
                            <Wrap mt='1em'>
                                {orders?.map((order, idx) => (
                                    <WrapItem key={idx} w='full' p='1em' bg='rgb(47,77,150)'>
                                        <VStack alignItems='flex-start'>
                                            <Text>
                                                Order ID: <Tag>{order.id}</Tag>
                                            </Text>
                                            <Text>
                                                Amount: <Tag>${order.order.total_with_tax.formatted}</Tag>
                                            </Text>
                                            <Text>
                                                Order Status: <Tag>{order.status}</Tag>
                                            </Text>
                                            <Text>
                                                Payment Status: <Tag>{order.status_payment}</Tag>
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