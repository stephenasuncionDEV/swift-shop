import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { CoreProvider } from '@/providers/CoreProvider'
import { UserProvider } from '@/providers/UserProvider'
import theme from '@/utils/theme'

const MyApp = ({ Component, pageProps }) => {
    return (
        <ChakraProvider theme={theme}>
            <CoreProvider>
                <UserProvider>
                    <Component {...pageProps} />
                </UserProvider>
            </CoreProvider>
        </ChakraProvider>
    )
}

export default MyApp
