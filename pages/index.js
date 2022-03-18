import Head from 'next/head'
import { Box } from '@chakra-ui/react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LandingContents from '@/components/pages/landing'

const Home = () => {
    return (
        <Box>
            <Head>
                <title>Home | Swift Shop</title>
            </Head>
            <Navbar isLanding isHome={false} />
            <LandingContents />
            <Footer />
        </Box>
    )
}

export default Home