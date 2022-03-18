import { Box, Flex, ScaleFade, VStack, Text, InputGroup, InputLeftElement, Input, Button, Alert, AlertIcon, Image, FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/react'
import { FiMail, FiLock } from 'react-icons/fi'
import { useUser } from '@/providers/UserProvider'

const LoginContents = () => {
    const { email, setEmail, LoginAsGuest, isEmailWrong, protectLoginPage } = useUser();
    protectLoginPage();
    
    return (
        <Box>
            <Flex justifyContent='center' alignItems='center' h='100vh'>
                <ScaleFade initialScale={0.9} in={true} delay={.25}>
                    <VStack
                        maxW='400px' 
                        w='full'
                        alignItems='flex-start'
                        spacing='1.5em'
                    >
                        <Image 
                            src='/assets/logo.png' 
                            alt='Swift Shop Logo'
                        />
                        <VStack 
                            w='full'
                            bg='rgb(17, 20, 28)'
                            borderRadius='10px'
                            boxShadow='rgb(0 0 0 / 10%) 0px 10px 15px -3px, rgb(0 0 0 / 5%) 0px 4px 6px -2px'
                            p='1.5em'
                            justifyContent='center'
                            spacing='1.5em'
                        >
                            <Text fontSize='32pt' fontWeight='500'>
                                Log in
                            </Text>
                            <FormControl isRequired isInvalid={isEmailWrong}>
                                <FormLabel htmlFor='email'>Email</FormLabel>
                                <InputGroup>
                                    <InputLeftElement pointerEvents='none' children={<FiMail color='gray.300' />} />
                                    <Input id='email' type='email' placeholder='you@domain.com' value={email} onChange={(e) => setEmail(e.target.value)} />
                                </InputGroup>
                                {isEmailWrong && (
                                    <FormErrorMessage>
                                        <FormErrorMessage>Email is required.</FormErrorMessage>
                                    </FormErrorMessage>
                                )}
                            </FormControl>
                            <Button w='full' onClick={LoginAsGuest}>
                                Login as guest
                            </Button>
                        </VStack>
                    </VStack>     
                </ScaleFade>
            </Flex>
        </Box>
    )
}

export default LoginContents