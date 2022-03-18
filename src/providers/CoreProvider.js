import { useState, useEffect, useContext, createContext } from 'react'
import Commerce from '@chec/commerce.js';
import config from 'config'

const commerce = new Commerce(config.commerce.publicKey);

export const CoreContext = createContext({})
export const useCore = () => useContext(CoreContext)

export const CoreProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [hotDeals, setHotDeals] = useState([]);
    const [categoryProducts, setCategoryProducts] = useState([]);
    const [categoryProductsLoading, setCategoryProductsLoading] = useState(false);

    useEffect(() => {
        const getProducts = async () => {

            // Get all products
            const res = await commerce.products.list();
            setProducts(res.data);

            // Get hot deals
            let tempHotDeals = [];
            for (let i = 0; i < 5; i++) {
                tempHotDeals.push(res.data[Math.floor(Math.random() * res.data.length)]);
            }
            setHotDeals(tempHotDeals);

        }
        getProducts();
    }, [])

    const getCategoryProducts = async (category) => {
        setCategoryProductsLoading(true);
        const res = await commerce.products.list({
            category_slug: [category]
        });
        setCategoryProducts(res.data);
        setCategoryProductsLoading(false);
    }

    const getCategory = async () => {
        const res = await commerce.categories.list();
        return res.data;
    }

    const controllers = {
        products,
        hotDeals,
        categoryProducts,
        getCategoryProducts,
        categoryProductsLoading,
        getCategory,
    }

    return (
		<CoreContext.Provider
			value={controllers}
		>
			{ children }
		</CoreContext.Provider>
	)
}