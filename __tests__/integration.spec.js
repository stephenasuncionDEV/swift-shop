import { useState, useEffect, useContext, createContext } from 'react'
import { render, screen, fireEvent, getByTestId, getByLabelText, getByText, waitFor, findByPlaceholderText, cleanup } from '@testing-library/react'
import { toBeInTheDocument, toBe } from '@testing-library/jest-dom'
import Shop from '../pages/shop'
import ShopContents from '@/components/pages/shop'
import CartContent from '@/components/pages/cart'
import PaymentModal from '@/components/pages/cart/PaymentModal'
import Payments from '../pages/payments'
import { Elements } from '@stripe/react-stripe-js'
import '@/utils/setupTests'
import axios from 'axios'
import * as Mock from '../__mocks__/index.mock'
import userEvent from '@testing-library/user-event'
import LandingContents from '@/components/pages/landing'
//import { useCore, CoreContext } from '@/providers/CoreProvider'

jest.mock("axios");

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

jest.mock('../src/components/pages/landing/hooks/useLanding.js', () => ({
    useLanding: () => ({ customerCount: 1337 })
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
// Feature #1: Get customers
describe('landing page', () => {
    it('should display 1337 guest customers', async () => { 
        render(<LandingContents />)
    
        expect(await screen.findByText('1337')).toBeInTheDocument();
    })
})

// Api: Stripe
// Feature #2: Discount Code

describe('discount code', () => {
    it('should retrieve discount code and validate', async () => { 
        const mockUserInput = 'EAC8FC3FF2';

        const mockCouponDataFromBackend = [
            {id: 'ASDG243T3F'},
            {id: 'CF4FRTV4TE'},
            {id: 'EAC8FC3FF2'}
        ]

        const isValid = mockCouponDataFromBackend.filter(codes => codes.id == mockUserInput).length > 0;

        expect(isValid).toBe(true);
    })
})

// Api: Stripe
// Feature #3: Refund

describe('payment refund', () => {
    it('should not proceed refund', async () => { 
        render(<Payments />)

        const refundBtn = screen.getByText('Refund');
        fireEvent.click(refundBtn);

        expect(await screen.findByText('Charge ID is required')).toBeInTheDocument();
    })
})