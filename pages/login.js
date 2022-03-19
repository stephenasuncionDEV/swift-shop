import Head from 'next/head'
import { Box } from '@chakra-ui/react'
import LoginContents from '@/components/pages/login'

const Login = () => {
    return (
        <Box>
            <Head>
                <title>Log in | Swift Shop</title>
            </Head>
            <LoginContents />
        </Box>
    )
}

export default Login