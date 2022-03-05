import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { UserProvider } from '@/providers/UserProvider'
import theme from '@/utils/theme'

const MyApp = ({ Component, pageProps }) => {
    return (
        <ChakraProvider theme={theme}>
            <UserProvider>
                <Component {...pageProps} />
            </UserProvider>
        </ChakraProvider>
    )
}

export default MyApp
