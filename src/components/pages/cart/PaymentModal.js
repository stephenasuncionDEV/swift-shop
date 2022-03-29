import { Modal, ModalOverlay, ModalContent, 
    ModalHeader, ModalFooter, ModalBody,
    ModalCloseButton, Button, Text, Input,
    FormControl, FormLabel, InputGroup, 
    InputLeftElement, VStack, HStack, Box,
    Menu, MenuButton, MenuList, MenuOptionGroup,
    MenuItemOption, MenuDivider, MenuItem, Image, MenuGroup,
    Radio, RadioGroup, Stack
} from '@chakra-ui/react'
import { useUser } from '@/providers/UserProvider'
import { useCore } from '@/providers/CoreProvider'
import { FiMail } from 'react-icons/fi'
import { FaChevronDown } from 'react-icons/fa'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { useCart } from './hooks/useCart'

const PaymentModal = () => {
    const { 
        paymentModalState, 
        setPaymentModalState, 
        paymentData, 
        checkoutItem,
        paymentName,
        setPaymentName,
        paymentEmail,
        setPaymentEmail,
        paymentAddress,
        setPaymentAddress,
        paymentCity,
        setPaymentCity,
        paymentState,
        setPaymentState,
        paymentZip,
        setPaymentZip,
        paymentCountry,
        setPaymentCountry,
        isPaying
    } = useCore();
    
    const stripe = useStripe();
    const elements = useElements();

    return (
        <Modal onClose={() => setPaymentModalState(false)} isOpen={paymentModalState} isCentered size='xl'>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    Checkout Item
                    <Text fontSize='10pt' fontWeight='normal' color='whiteAlpha.600'>
                        
                    </Text>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <VStack>
                        <FormControl isRequired>
                            <FormLabel htmlFor='name'>Name</FormLabel>
                            <Input id='name' type='text' placeholder='Jane Doe' value={paymentName} onChange={(e) => setPaymentName(e.target.value)} />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel htmlFor='email'>Email</FormLabel>
                            <InputGroup>
                                <InputLeftElement pointerEvents='none' children={<FiMail color='gray.300' />} />
                                <Input id='email' type='email' placeholder='you@domain.com' value={paymentEmail} onChange={(e) => setPaymentEmail(e.target.value)} />
                            </InputGroup>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel htmlFor='address'>Address</FormLabel>
                            <Input id='address' type='text' placeholder='4796 Roosevelt Road' value={paymentAddress} onChange={(e) => setPaymentAddress(e.target.value)} />
                        </FormControl>
                        <HStack>
                            <FormControl isRequired>
                                <FormLabel htmlFor='city'>City</FormLabel>
                                <Input id='city' type='text' placeholder='Moundridge' value={paymentCity} onChange={(e) => setPaymentCity(e.target.value)} />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel htmlFor='state'>State</FormLabel>
                                <Input id='state' type='text' placeholder='Kansas' value={paymentState} onChange={(e) => setPaymentState(e.target.value)} />
                            </FormControl>
                        </HStack>
                        <HStack>
                            <FormControl isRequired>
                                <FormLabel htmlFor='country'>Country</FormLabel>
                                <Input id='country' type='text' placeholder='United States' value={paymentCountry} onChange={(e) => setPaymentCountry(e.target.value)} />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel htmlFor='zip'>ZIP</FormLabel>
                                <Input id='zip' type='text' placeholder='69273' value={paymentZip} onChange={(e) => setPaymentZip(e.target.value)} />
                            </FormControl>
                        </HStack>
                    </VStack>
                </ModalBody>
                <ModalFooter>
                    <VStack w='full' spacing='1em'>
                        <Box w='full' bg='rgb(26,32,44)' borderRadius='10px' p='5'>
                            <CardElement options={{ 
                                hidePostalCode: true, 
                                style: { 
                                    base: {
                                        color: 'white'
                                    }
                                } 
                            }} />
                        </Box>
                        <Menu closeOnSelect={true}>
                            <MenuButton as={Button} bg='black' _hover={{ bg: 'rgba(0,0,0,0.8)' }} w='full' rightIcon={<FaChevronDown />} disabled={isPaying}>
                                Pay $
                                {paymentData?.price}
                                &nbsp;with
                            </MenuButton>
                            <MenuList>
                                <MenuGroup title='Bank Card'>
                                    <MenuItem onClick={() => checkoutItem(stripe, elements, CardElement)}>
                                        <HStack>
                                            <Image
                                                boxSize='2rem'
                                                borderRadius='full'
                                                src='https://cdn.iconscout.com/icon/free/png-256/stripe-2-498440.png'
                                                alt='Stripe'
                                                mr='12px'
                                            />
                                            <VStack alignItems='flex-start' spacing='0'>
                                                <span>Stripe</span>
                                                <Text fontSize='8pt' color='whiteAlpha.500'>
                                                    Credit/Debit Card
                                                </Text>
                                            </VStack>
                                        </HStack>
                                    </MenuItem>
                                </MenuGroup>
                            </MenuList>
                        </Menu>
                    </VStack>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default PaymentModal