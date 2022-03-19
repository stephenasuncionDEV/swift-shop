import Head from 'next/head'
import { Box } from '@chakra-ui/react'
import Navbar from '@/components/Navbar'
import CartContent from '@/components/pages/cart'
import Footer from '@/components/Footer'

const Cart = () => {
    return (
        <Box>
            <Head>
                <title>Swift Shop | Home</title>
            </Head>
            <Navbar />
            <CartContent />      
            <Footer />
        </Box>
    )
}

export default Cart