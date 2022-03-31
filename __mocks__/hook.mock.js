import axios from 'axios'

jest.mock("axios");

export const mockCategories = [
    { name: 'Mouse', created: new Date() },
    { name: 'Monitor', created: new Date() },
    { name: 'Speaker', created: new Date() },
    { name: 'Mic', created: new Date() },
    { name: 'Keyboard', created: new Date() },
    { name: 'Headset', created: new Date() },
]

export const mockCart = [
    { 
        name: 'Logitech G502 HERO SE 16000 DPI Optical Gaming Mouse - Black', 
        id: 'item_7RyWOwmK5nEa2V',
        price: {
            formatted: '39.98'
        }
    },
]

export const mockShippingOptions = [
    {
        id: 'ship_QG375vbex5rMOg',
        description: 'Domestic',
        price: {
            formatted_with_symbol: '$0.00'
        },
        countries: ['CA']
    }
]

export const mockCheckoutItem = jest.fn(() => {
    const res = axios.get.mockImplementation(() => Promise.resolve({ data: {
        id: 'EAC8FC3FF2'
    }}));

    console.log(res)

})

export const mockPaymentForm = {
    paymentModalState: true, 
    setPaymentModalState: () => jest.fn(),
    paymentData: { price: 39.98 },  
    checkoutItem: () => mockCheckoutItem,
    paymentName: 'Stephen',
    setPaymentName: () => jest.fn(),
    paymentAddress: '100 Hotdog Road',
    setPaymentAddress: () => jest.fn(),
    paymentCity: 'Vancouver',
    setPaymentCity: () => jest.fn(),
    paymentState: 'British Columbia',
    setPaymentState: () => jest.fn(),
    paymentZip: 'XXXXXX',
    setPaymentZip: () => jest.fn(),
    paymentCountry: 'Canada',
    setPaymentCountry: () => jest.fn(),
    isPaying: false,
    setPaymentLastName: () => jest.fn(),
    paymentLastName: 'Asuncion',
    shippingCountries: ['Canada'],
    shippingCountry: 'CA',
    shippingSubdivisions: ['British Columbia'],
    shippingSubdivision: 'British Columbia',
    shippingOptions: mockShippingOptions,
    shippingOption: 'ship_QG375vbex5rMOg',
    setShippingCountry: () => jest.fn(),
    setShippingSubdivision: () => jest.fn(),
    setShippingOption: () => jest.fn(),
    paymentEmail: 'stephenasuncion01@gmail.com',
    setPaymentEmail: () => jest.fn(),
    paymentDiscount: 'EAC8FC3FF2',
    setPaymentDiscount: () => jest.fn(),
}