import { render, screen, fireEvent, getByTestId, getByLabelText, getByText, waitFor, findByPlaceholderText, cleanup } from '@testing-library/react'
import { toBeInTheDocument, toBe } from '@testing-library/jest-dom'
import Shop from '../pages/Shop'
import ShopContents from '@/components/pages/shop'
import CartContent from '@/components/pages/cart'
import PaymentModal from '@/components/pages/cart/PaymentModal'
import { Elements } from '@stripe/react-stripe-js'
import '@/utils/setupTests'
import axios from 'axios'
import * as Mock from '../__mocks__/hook.mock'

jest.mock('../src/components/pages/shop/hooks/useShop.js', () => ({
    useShop: () => ({ categories: Mock.mockCategories })
}))

jest.mock('../src/providers/CoreProvider.js', () => ({
    useCore: () => ({ 
        cart: Mock.mockCart,
        ...Mock.mockPaymentForm
    })
}))

jest.mock('../src/components/pages/cart/hooks/useCart.js', () => ({
    useCart: () => ({ total: 39.98 })
}))

jest.mock('@stripe/react-stripe-js', () => ({
    useStripe: () => jest.fn(),
    useElements: () => jest.fn(),
    Elements: () => <></>,
    CardElement: () => <></>
}))

// Api: Commerce.js
// Feature #1: Categories

describe('shop page', () => {
    it('should display 6 categories', async () => { 
        render(<ShopContents />)
    
        expect(await screen.findByText('Mouse')).toBeInTheDocument();
        expect(await screen.findByText('Monitor')).toBeInTheDocument();
        expect(await screen.findByText('Speaker')).toBeInTheDocument();
        expect(await screen.findByText('Mic')).toBeInTheDocument();
        expect(await screen.findByText('Keyboard')).toBeInTheDocument();
        expect(await screen.findByText('Headset')).toBeInTheDocument();
    })
})

// Api: Commerce.js
// Feature #2: Cart

describe('cart page', () => {
    it('should display a product on cart', async () => { 
        render(<CartContent />)
    
        expect(await screen.findByText('ID: item_7RyWOwmK5nEa2V')).toBeInTheDocument();
    })
})

// Api: Commerce.js
// Feature #3: Shipping Rates

describe('payment modal', () => {
    it('should display shipping rates', async () => { 
        render(<PaymentModal />)
    
        expect(await screen.findByText('Domestic - ($0.00)')).toBeInTheDocument();
    })
})

// Api: Stripe
// Feature #1: Payment Method

// Api: Stripe
// Feature #2: Discount Code

// describe('discount code', () => {
//     it('should retrieve discount code and validate', async () => { 
//         render(<PaymentModal />)
    
//         const checkout = await screen.findByRole('payBtn');

//         //expect(await screen.findByText('Domestic - ($0.00)')).toBeInTheDocument();
//     })
// })

// Api: Stripe
// Feature #3: Refund

