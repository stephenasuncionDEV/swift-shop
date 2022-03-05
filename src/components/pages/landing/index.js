import { Box, Text,Image,Flex,Heading,Spacer,Center, VStack, WrapItem, Wrap} from '@chakra-ui/react'

const LandingContents = () => {
    return ( 

        <Flex m="10px" flexWrap="wrap" spacing='24px' bg='black' p="10px">

            <Box mb="10px"  width="100%">
                <Image 
                height='500px'
                width='100%'
                objectFit='cover'
                src = 'gibbresh.png' 
                fallbackSrc = 'https://via.placeholder.com/500'/>
            </Box>

            <Wrap bgGradient="linear(to-t, blue.400, pink.700)" width="100%" padding={"10px"}>

                <WrapItem width="100%" height="80px" p="10px">
                    <Center
                        width="100%"
                        fontSize="5xl"
                        fontWeight="extrabold"
                    >
                        HOT DEALS
                    </Center>
                </WrapItem>

                <Spacer />

                <WrapItem >
                    <VStack p="10px" bg="black" borderRadius="10px">
                        <Image 
                            mb="10px"
                            objectFit='cover'
                            src = 'gibbresh.png' 
                            fallbackSrc = 'https://via.placeholder.com/300'
                        />
                        <Text>Item 1</Text>
                        <Text>This is where the description goes!</Text>
                    </VStack>
             
                </WrapItem>

                <Spacer />
                <WrapItem>

                    <VStack p="10px" bg="black" borderRadius="10px">
                        <Image 
                            mb="10px"
                            objectFit='cover'
                            src = 'gibbresh.png' 
                            fallbackSrc = 'https://via.placeholder.com/300'
                        />
                        <Text>Item 2</Text>
                        <Text>This is where the description goes!</Text>
                    </VStack>
                </WrapItem>
                <Spacer />
                <WrapItem >
                    <VStack p="10px" bg="black" borderRadius="10px">
                        <Image 
                            mb="10px"
                            objectFit='cover'
                            src = 'gibbresh.png' 
                            fallbackSrc = 'https://via.placeholder.com/300'
                        />
                        <Text>Item 3</Text>
                        <Text>This is where the description goes!</Text>
                    </VStack>
                </WrapItem>

                <Spacer />
                <WrapItem>
                    <VStack p="10px" bg="black" borderRadius="10px">
                        <Image 
                            mb="10px"
                            objectFit='cover'
                            src = 'gibbresh.png' 
                            fallbackSrc = 'https://via.placeholder.com/300'
                        />
                        <Text>Item 4</Text>
                        <Text>This is where the description goes!</Text>
                    </VStack>
                </WrapItem>

                <Spacer />
            </Wrap>


        <Box display="flex" width="100%" bg="pink.600"  mt="10px" p="10px" flexDirection="row-reverse">

            <Image 
                boxShadow='dark-lg' rounded='md'
                mb="10px"
                objectFit='cover'
                src = 'gibbresh.png' 
                fallbackSrc = 'https://via.placeholder.com/300'
            />

            <VStack  border='2px' borderColor='gray.200' bg="black" p="20px" m="20px">
                <Heading >I'm a Heading</Heading>
                <Text fontSize='2xl'>This is some description like i dont know what to write here. May be with the God grace i will know soon.</Text>
                <Text>
                    This is some description like i dont know what to write here. May be with the God grace i will know soon.This is some description like i dont know what to write here. May be with the God grace i will know soon.
                    This is some description like i dont know what to write here. May be with the God grace i will know soon.
                    This is some description like i dont know what to write here. May be with the God grace i will know soon.
                    
                </Text>

            </VStack>
        </Box>

        <Box display="flex" width="100%" bg="pink.600"  mt="10px" p="10px" >

           <Image 
                boxShadow='dark-lg' rounded='md'
                mb="10px"
                objectFit='cover'
                src = 'gibbresh.png' 
                fallbackSrc = 'https://via.placeholder.com/300'
            />

            <VStack border='2px' borderColor='gray.200' bg="black" p="20px" m="20px">
                <Heading >I'm a Heading</Heading>
                <Text fontSize='2xl'>This is some description like i dont know what to write here. May be with the God grace i will know soon.</Text>
                <Text>
                    This is some description like i dont know what to write here. May be with the God grace i will know soon.This is some description like i dont know what to write here. May be with the God grace i will know soon.
                    This is some description like i dont know what to write here. May be with the God grace i will know soon.
                    This is some description like i dont know what to write here. May be with the God grace i will know soon.
                    
                </Text>

            </VStack>
        </Box>



    </Flex>
    )
}

export default LandingContents