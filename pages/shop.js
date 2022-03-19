import Head from 'next/head'
import { Box } from '@chakra-ui/react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ShopContents from '@/components/pages/shop'

const Shop = () => {
    return (
        <Box>
            <Head>
                <title>Shop | Swift Shop</title>
            </Head>
            <Navbar />
            <ShopContents />
            <Footer />
        </Box>
    )
}

export default Shop