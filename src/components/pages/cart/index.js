import { Flex, Image, Text, Button, Box, Heading, VStack, Spinner, SlideFade, HStack, Tag, IconButton } from '@chakra-ui/react'
import NextLink from 'next/link'
import { BsTrashFill } from 'react-icons/bs'
import { BiPurchaseTag } from 'react-icons/bi'
import { useCore } from '@/providers/CoreProvider'
import { useCart } from './hooks/useCart'
import PaymentModal from './PaymentModal'
import { config } from '@/config/index'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

const stripePromise = loadStripe(config.stripe.publicKey);

const CartContent = () => {
    const { cart, removeItemCart, onCheckout } = useCore();
    const { total } = useCart();

    return (
        <Flex mt="10px" justifyContent="center" wrap="wrap">
            <Elements stripe={stripePromise}>
                <PaymentModal />
            </Elements>
            <Flex maxW='8xl' w='full' flexDir='column' px="24px">
                <Text fontSize="5xl" fontWeight="extrabold" color='rgb(67,122,255)'>
                    Your Cart
                </Text>
                <Text fontSize="12pt" color='whiteAlpha.500'>
                    List of items you added to cart
                </Text>
                <VStack mt='2em'>
                    <HStack w='full' alignItems='flex-start'>
                        <VStack bg='rgb(19,22,25)' p='2em' borderRadius='10px' flex='1'>
                            <HStack spacing='2em' alignItems='flex-start' w='full'>
                                <Text fontSize='32pt'>
                                    🛒
                                </Text>
                                <VStack spacing='1em' flex='1'>
                                    {!cart ? (
                                        <Spinner />
                                    ) : (
                                        <>
                                        <Text fontSize='16pt'>
                                            Items
                                        </Text>
                                        {cart?.map((item, idx) => (
                                            <Flex key={idx} bg='rgb(44,49,61)' p='1em' borderRadius='10px' alignItems='flex-start' flexDir='column' position='relative' w='full'>
                                                <Text>
                                                    {item.name}
                                                </Text>
                                                <Text fontSize='10pt' color='orange'>
                                                    ID: {item.id}
                                                </Text>
                                                <Tag>
                                                    <Text>
                                                        ${item.price.formatted}
                                                    </Text>
                                                </Tag>
                                                <NextLink href='' shallow passHref>
                                                    <IconButton 
                                                        aria-label='Delete Item' 
                                                        position='absolute'
                                                        top='-2.5'
                                                        right='-2.5'
                                                        isRound
                                                        icon={<BsTrashFill />}
                                                        bg='rgb(44,49,61)'
                                                        size='sm'
                                                        onClick={() => removeItemCart(item.id)}
                                                    />
                                                </NextLink>
                                            </Flex>
                                        ))}
                                        </>
                                    )}
                                </VStack>
                            </HStack>
                        </VStack>
                        <VStack p='2em' flex='1' alignItems='flex-start'>
                            <Text fontSize='32pt'>
                                Price
                            </Text>
                            <Text>
                                Product Total : ${total}
                            </Text>
                            <Flex w='full' justifyContent='flex-end'>
                                <Button rightIcon={<BiPurchaseTag />} onClick={() => onCheckout(total)} bg='yellow.600'>
                                    Checkout
                                </Button>
                            </Flex>
                        </VStack>
                    </HStack>
                </VStack>
            </Flex>
        </Flex>
    )
}

export default CartContent