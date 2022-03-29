import { useState, useEffect, useContext, createContext } from 'react'
import { useToast } from '@chakra-ui/react'
import Commerce from '@chec/commerce.js'
import { config } from '@/config/index'
import { useUser } from '@/providers/UserProvider'
import { useRouter } from 'next/router'

const commerce = new Commerce('pk_test_398294a9de672ab31322d419feef940b471fbaf308968');

export const CoreContext = createContext({})
export const useCore = () => useContext(CoreContext)

export const CoreProvider = ({ children }) => {
    const { email } = useUser();
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState();
    const [hotDeals, setHotDeals] = useState();
    const [categoryProducts, setCategoryProducts] = useState([]);
    const [categoryProductsLoading, setCategoryProductsLoading] = useState(false);
    const [token, setToken] = useState();
    const [isAddingCart, setIsAddingCart] = useState(false);
    const [paymentModalState, setPaymentModalState] = useState(false);
    const [paymentData, setPaymentData] = useState();
    const [paymentName, setPaymentName] = useState('');
    const [paymentLastName, setPaymentLastName] = useState('');
    const [paymentAddress, setPaymentAddress] = useState('');
    const [paymentCity, setPaymentCity] = useState('');
    const [paymentState, setPaymentState] = useState('');
    const [paymentZip, setPaymentZip] = useState('');
    const [paymentCountry, setPaymentCountry] = useState('');
    const [paymentEmail, setPaymentEmail] = useState('');
    const [isPaying, setIsPaying] = useState(false);
    const [checkoutData, setCheckoutData] = useState();
    const [shippingCountries, setShippingCountries] = useState();
    const [shippingCountry, setShippingCountry] = useState();
    const [shippingSubdivisions, setShippingSubdivisions] = useState();
    const [shippingSubdivision, setShippingSubdivision] = useState();
    const [shippingOptions, setShippingOptions] = useState();
    const [shippingOption, setShippingOption] = useState();
    const [isCheckingOut, setIsCheckingOut] = useState(false);
    const toast = useToast();
    const router = useRouter();

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

    const getCardId = () => {
        const res = commerce.cart.id();
        return res;
    }

    const getShippingCountries = async (checkoutTokenId) => {
        const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);
        setShippingCountries(countries);
        setShippingCountry(Object.keys(countries)[0]);
        return Object.keys(countries)[0];
    }

    const getSubdivisions = async (countryCode) => {
        const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode);
        setShippingSubdivisions(subdivisions);
        setShippingSubdivision(Object.keys(subdivisions)[0]);
        return Object.keys(subdivisions)[0];
    }
    
    const getShippingOptions = async (checkoutTokenId, country, stateProvince = null) => {
        const options = await commerce.checkout.getShippingOptions(checkoutTokenId, { country, region: stateProvince });
        setShippingOptions(options);
        setShippingOption(options[0].id);
    }

    const onCheckout = async (total) => {
        try {
            if (!cart.length) throw new Error("You must add item(s) to your cart");

            setIsCheckingOut(true);

            const checkoutDataRes = await commerce.checkout.generateToken(getCardId(), { type: 'cart' });
            setCheckoutData(checkoutDataRes);

            const country = await getShippingCountries(checkoutDataRes.id);
            const division = await getSubdivisions(country);
            await getShippingOptions(checkoutDataRes.id, country, division);

            setPaymentModalState(true);
            setPaymentData({
                price: total
            })

            setIsCheckingOut(false);
        }
        catch (err) {
            setIsCheckingOut(false);

            toast({
                title: 'Error',
                description: err.message,
                status: 'error',
                duration: 3000,
                isClosable: true,
            })
        }
    }

    const checkoutItem = async (stripe, elements, CardElement) => {
        try {
            if (!stripe || !elements) return;

            const fieldsLength = [paymentName.length, paymentAddress.length, paymentCity.length, paymentState.length, paymentZip.length, paymentCountry.length, paymentEmail.length];
            fieldsLength.forEach((field) => {
                if (field === 0) throw new Error("Please fill in all the required fields");
            })

            const cardElement = elements.getElement(CardElement);
    
            const { error, paymentMethod } = await stripe.createPaymentMethod({ type: 'card', card: cardElement });
    
            if (error) throw new Error(error.message);

            const orderData = {
                line_items: checkoutData.live.line_items,
                customer: { 
                    firstname: paymentName, 
                    lastname: paymentLastName, 
                    email: paymentEmail
                },
                shipping: { 
                    name: 'International', 
                    street: paymentAddress, 
                    town_city: paymentCity, 
                    county_state: shippingSubdivision, 
                    postal_zip_code: paymentZip, 
                    country: shippingCountry 
                },
                fulfillment: { 
                    shipping_method: shippingOption 
                },
                payment: {
                    gateway: 'stripe',
                    stripe: {
                        payment_method_id: paymentMethod.id,
                    },
                },
            };

            const res = await commerce.checkout.capture(checkoutData.id, orderData);
            
            router.push('/success', undefined, { shallow: true });
        }
        catch (err) {
            toast({
                title: 'Error',
                description: err.message,
                status: 'error',
                duration: 3000,
                isClosable: true,
            })
        }
    }

    const goBackToCategories = () => {
        router.push('/shop', undefined, { shallow: true });
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
        paymentModalState,
        setPaymentModalState,
        paymentData,
        setPaymentData,
        checkoutItem,
        paymentName,
        setPaymentName,
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
        setPaymentLastName,
        paymentLastName,
        checkoutData,
        shippingCountries,
        shippingCountry,
        setShippingCountry,
        shippingSubdivisions,
        shippingSubdivision,
        setShippingSubdivision,
        shippingOptions,
        shippingOption,
        setShippingOption,
        onCheckout,
        paymentEmail,
        setPaymentEmail,
        isCheckingOut,
        setIsCheckingOut,
        goBackToCategories
    }

    return (
		<CoreContext.Provider
			value={controllers}
		>
			{ children }
		</CoreContext.Provider>
	)
}