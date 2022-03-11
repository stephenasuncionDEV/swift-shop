import { Flex, Text, VStack, Image, Box } from '@chakra-ui/react'

const Footer = () => {
    return (
        <Flex h='500px' bg='rgb(17,20,28)' mt='10em' justifyContent='center' alignItems='center'>
            <Flex maxW='8xl' w='full' px='24px' justifyContent='space-between'>
                <VStack alignItems='flex-start'>
                    <Image
                        src='/assets/logo-white.png'
                        alt='Swift NFT Logo'
                        w='250px'
                    />
                    <Text>
                        Copyright &copy; 2022 Swift Shop Ltd.
                    </Text>
                    <Text color='whiteAlpha.400'>
                        All rights reserved.
                    </Text>
                </VStack>
                <VStack alignItems='flex-start'>
                    <Text>
                        Swift Shop Team
                    </Text>
                    <Text color='whiteAlpha.400'>
                        Stephen Asuncion
                    </Text>
                    <Text color='whiteAlpha.400'>
                        Damandeep Singh
                    </Text>
                    <Text color='whiteAlpha.400'>
                        Cyrus Lum
                    </Text>
                    <Text color='whiteAlpha.400'>
                        Ryuho Kikuchi
                    </Text>
                </VStack>
            </Flex>
        </Flex>
    )
}

export default Footer