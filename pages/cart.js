import Head from 'next/head'
import { Box } from '@chakra-ui/react'
import Navbar from '@/components/Navbar'
import Cart from '@/components/pages/cart'
import Footer from '@/components/Footer'


const Product = () => {
    return (
        <Box>
            <Head>
                <title>Swift Shop | Home</title>
            </Head>
            <Navbar />
            <Cart />
            
            <Footer />
        </Box>
    )
}

export default Product