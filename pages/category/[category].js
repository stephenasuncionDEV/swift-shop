import Head from 'next/head'
import { Box } from '@chakra-ui/react'
import Navbar from '@/components/Navbar'
import Products from '@/components/pages/category'
import Footer from '@/components/Footer'
import LandingContents from '@/components/pages/landing'

const Category = () => {
    return (
        <Box>
            <Head>
                <title>Category | Swift Shop</title>
            </Head>
            <Navbar />
            <Products />
            <Footer />
        </Box>
    )
}

export default Category