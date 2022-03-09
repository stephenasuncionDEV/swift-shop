import Head from 'next/head'
import { Box } from '@chakra-ui/react'
import Navigation from '@/components/pages/category'
import Products from '@/components/pages/category/products'
import Footer from '@/components/Footer'
import LandingContents from '@/components/pages/landing'

const Category = () => {
    return (
        <Box>
            <Head>
                <title>Swift Shop | Home</title>
            </Head>
            <Navigation />
            <Products />
            
            <Footer />
        </Box>
    )
}

export default Category