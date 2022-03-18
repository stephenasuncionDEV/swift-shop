import Head from 'next/head'
import { Box } from '@chakra-ui/react'
import Navbar from '@/components/Navbar'
import ProductContent from '@/components/pages/product'
import Footer from '@/components/Footer'

const Product = () => {
    return (
        <Box>
            <Head>
                <title>Swift Shop | Home</title>
            </Head>
            <Navbar />
            <ProductContent />      
            <Footer />
        </Box>
    )
}

export default Product