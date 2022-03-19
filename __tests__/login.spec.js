import { render, screen, fireEvent, getByTestId, getByLabelText, getByText, waitFor } from '@testing-library/react'
import { toBeInTheDocument, toBe } from '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { shallow } from 'enzyme'
import Index from '../pages/index'
import Login from '../pages/login'
import LoginContents from '@/components/pages/login'
import { UserProvider, useUser, UserContext } from '@/providers/UserProvider'
import { Button, usePointerEvent } from '@chakra-ui/react'
import theme from '@/utils/theme'
import '@/utils/setupTests'

describe('Login page', () => {
    it('Login button renders properly', async () => {
        render(<Login />)

        const LoginButton = screen.getByText('Login as guest');
    
        expect(LoginButton).toBeInTheDocument();
    })
})

describe('Theme', () => {
    it('Theme must be dark', async () => {
        expect(theme.config.initialColorMode).toBe('dark');
    })
})

describe('Login function', () => {
    it('Login function should be called when login as guest button is clicked', async () => {
        const LoginAsGuest = jest.fn();
        const { getByText } = render(
            <UserContext.Provider value={{ LoginAsGuest }}>
              <Login />
            </UserContext.Provider>
          );

        const LoginButton = getByText('Login as guest');
        fireEvent.click(LoginButton);

        expect(LoginAsGuest).toHaveBeenCalledTimes(1)
    })
})