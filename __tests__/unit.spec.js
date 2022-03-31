import Commerce from '@chec/commerce.js'
import axios from 'axios'
import '@/utils/setupTests'

const commerce = new Commerce('pk_test_398294a9de672ab31322d419feef940b471fbaf308968');

// Retrieve product information
describe('commerce.js product', () => {
    const getProduct = async (productId) => {
        const res = await commerce.products.retrieve(productId);
        return res;
    }

    it('should retrieve product with id prod_0egY5eMRp253Qn', async () => { 
        const product = await getProduct('prod_0egY5eMRp253Qn');
        expect(product.name).toBe('Corsair Ironclaw RGB 18000 DPI Optical Gaming Mouse - Black');
    })
})

// Retrieve categories
describe('commerce.js categories', () => {
    const getCategory = async () => {
        const res = await commerce.categories.list();
        return res.data;
    }

    it('should retrieve 6 categories', async () => { 
        const categories = await getCategory();
        expect(categories.length).toBe(6);
    })
})

// Retrieve category products
describe('commerce.js category products', () => {
    const getCategoryProducts = async (category) => {
        const res = await commerce.products.list({
            category_slug: [category]
        });
        return res.data   
    }

    it('should retrieve 5 products of Keyboard category', async () => { 
        const products = await getCategoryProducts('Keyboard');
        expect(products.length).toBe(5);
    })
})

// Add products to cart
describe('commerce.js carts', () => {
    const addToCart = async () => {
        await commerce.cart.add('prod_0egY5eMRp253Qn', 1);
    }

    const getCart = async () => {
        const res = await commerce.cart.contents();
        return res;
    }

    it('should add product to cart', async () => { 
        await addToCart();
        const cart = await getCart();
        expect(cart[0].product_id).toBe('prod_0egY5eMRp253Qn');
    })
})

// Get shipping rates
describe('commerce.js shipping rates', () => {
    const getCardId = () => {
        const res = commerce.cart.id();
        return res;
    }

    const getShippingOptions = async () => {
        try {
        const cartId = getCardId();  
        const checkoutData = await commerce.checkout.generateToken(cartId, { type: 'cart' });
        const options = await commerce.checkout.getShippingOptions(checkoutData.id, { country: 'CA', region: null });
        return options;
        }
        catch (err) {
            console.log(err);
        }
    }

    it('should get Domestic shipping rate', async () => { 
        const options = await getShippingOptions();
        expect(options[0].description).toBe('Domestic');
    })
})

// Get Customers 
describe('Stripe Customers', () => {
    const getCustomers = async () => {
        const res = await axios.get(`http://localhost:4000/api/payment/getCustomers`);
        return res.data;
    }

    it('first customer should have an email stephenasuncion01@gmail.com', async () => { 
        const customers = await getCustomers();
        expect(customers[0].email).toBe('stephenasuncion01@gmail.com');
    })
})

// Retrieve Discount Codes
describe('Stripe Discount Codes', () => {
    const getDiscountCodes = async () => {
        const res = await axios.get(`http://localhost:4000/api/payment/getCoupons`);
        return res.data;
    }

    it('should get EAC8FC3FF2 discount code', async () => { 
        const codes = await getDiscountCodes();
        expect(codes[0].id).toBe('EAC8FC3FF2');
    })
})

// Refund Payment
describe('Stripe Refund', () => {
    const refund = async (chargeId) => {
        const res = await axios.post(`http://localhost:4000/api/payment/refund`, {
            chargeId
        })
        return res.data;
    }

    it('should refund payment with chargeId ch_3KibjpF6dJsgtS310iYZMczd', async () => { 
        const res = await refund('ch_3KibjpF6dJsgtS310iYZMczd');
        expect(res.message).toBe('Successfully created a refund');
    })
})