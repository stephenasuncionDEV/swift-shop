import { useState, useEffect, useContext, createContext } from 'react'
import Commerce from '@chec/commerce.js';
import config from 'config'

const commerce = new Commerce(config.commerce.publicKey);

export const CoreContext = createContext({})
export const useCore = () => useContext(CoreContext)

export const CoreProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [hotDeals, setHotDeals] = useState([]);

    useEffect(() => {
        const getProducts = async () => {

            // Get all products
            const res = await commerce.products.list();
            setProducts(res.data);

            console.log(res.data[0])

            // Get hot deals
            let tempHotDeals = [];
            for (let i = 0; i < 5; i++) {
                tempHotDeals.push(res.data[Math.floor(Math.random() * res.data.length)]);
            }
            setHotDeals(tempHotDeals);

        }
        getProducts();
    }, [])

    const controllers = {
        products,
        hotDeals
    }

    return (
		<CoreContext.Provider
			value={controllers}
		>
			{ children }
		</CoreContext.Provider>
	)
}