import Head from 'next/head'
import { Box } from '@chakra-ui/react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LoginContents from '@/components/pages/login'

const Home = () => {
    return (
        <Box>
            <Head>
                <title>Swift Shop | Login</title>
            </Head>
            <LoginContents />
        </Box>
    )
}

export default Home