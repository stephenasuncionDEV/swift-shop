import { useState, useEffect } from 'react'
import { useCore } from '@/providers/CoreProvider'
import { useUser } from '@/providers/UserProvider'

export const useCart = () => {
    const { getCart, cart, setPaymentModalState } = useCore();
    const { protectPage } = useUser();
    const [total, setTotal] = useState();
    const [paymentName, setPaymentName] = useState('');
    const [paymentEmail, setPaymentEmail] = useState('');
    const [paymentAddress, setPaymentAddress] = useState('');
    const [paymentCity, setPaymentCity] = useState('');
    const [paymentState, setPaymentState] = useState('');
    const [paymentZip, setPaymentZip] = useState('');
    const [paymentCountry, setPaymentCountry] = useState('');
    const [paymentPackage, setPaymentPackage] = useState('package1');
    const [isPaying, setIsPaying] = useState(false);

    useEffect(() => {
        protectPage();

        (async () => {
            await getCart();
		})()
    }, [])

    useEffect(() => {
        if (!cart) return;
        
        // Get total
        const total = cart.map(c => {
            return c.price.raw;
        }).reduce((sum, a) => sum + a, 0);

        setTotal(total);

    }, [cart])

    const onCheckout = () => {
        setPaymentModalState(true);
    }

    return {
        total,
        paymentName,
        setPaymentName,
        paymentEmail,
        setPaymentEmail,
        paymentAddress,
        setPaymentAddress,
        paymentCity,
        setPaymentCity,
        paymentState,
        setPaymentState,
        paymentZip,
        setPaymentZip,
        paymentCountry,
        setPaymentCountry,
        isPaying,
        setIsPaying,
        paymentPackage,
        setPaymentPackage,
        onCheckout
    }
}