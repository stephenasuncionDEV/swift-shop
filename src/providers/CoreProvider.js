import { useState, useEffect, useContext, createContext } from 'react'
import { useToast } from '@chakra-ui/react'
import Commerce from '@chec/commerce.js';
import config from 'config'

const commerce = new Commerce(config.commerce.publicKey);

export const CoreContext = createContext({})
export const useCore = () => useContext(CoreContext)

export const CoreProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState();
    const [hotDeals, setHotDeals] = useState();
    const [categoryProducts, setCategoryProducts] = useState([]);
    const [categoryProductsLoading, setCategoryProductsLoading] = useState(false);
    const [token, setToken] = useState();
    const [isAddingCart, setIsAddingCart] = useState(false);
    const toast = useToast();
    
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

            await getCart();

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

    const getProduct = async (productId) => {
        const res = await commerce.products.retrieve(productId);
        return res;
    }

    const AddToCart = async (productId) => {
        setIsAddingCart(true);

        await commerce.cart.add(productId, 1);

        await getCart();

        setIsAddingCart(false);

        toast({
            title: 'Success',
            description: `Successfully added <${productId}> to cart`,
            status: 'success',
            duration: 3000,
            isClosable: true,
        })
    }

    const addCustomer = async (email) => {
        const token = await commerce.customer.login(email, 'http://localhost:3000/shop');
        //console.log('token', token);

        //localStorage.setItem('swiftshop-token', token);

        //setToken(token);
    }

    const getCart = async () => {
        const res = await commerce.cart.contents();
        setCart(res);
    }

    const removeItemCart = async (itemId) => {
        await commerce.cart.remove(itemId);
        await getCart();
    }

    const emptyCart = async () => {
        await commerce.cart.empty();
        await getCart();
    }

    const getCardId = async () => {
        const res = await commerce.cart.id();
        return res;
    }

    const controllers = {
        products,
        hotDeals,
        categoryProducts,
        getCategoryProducts,
        categoryProductsLoading,
        getCategory,
        getProduct,
        AddToCart,
        addCustomer,
        getCart,
        removeItemCart,
        emptyCart,
        getCardId,
        cart,
        isAddingCart,
    }

    return (
		<CoreContext.Provider
			value={controllers}
		>
			{ children }
		</CoreContext.Provider>
	)
}