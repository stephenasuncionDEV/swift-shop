import { useState, useEffect } from "react"
import axios from 'axios'
import { config } from '@/config/index'

export const useLanding = () => {
    const [customerCount, setCustomerCount] = useState(0);

    useEffect(() => {
        const getCustomers = async () => {
            const res = await axios.get(`${config.serverUrl}/api/payment/getCustomers`);
            setCustomerCount(res.data.length);
        }
        getCustomers();
    }, [])

    return {
        customerCount
    }
}