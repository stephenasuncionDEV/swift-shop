import Head from 'next/head'
import { Box } from '@chakra-ui/react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LandingContents from '@/components/pages/landing'

const Home = () => {
    return (
        <Box>
            <Head>
                <title>Swift Shop | Home</title>
            </Head>
            <Navbar />
            <LandingContents />
        </Box>
    )
}

export default Home