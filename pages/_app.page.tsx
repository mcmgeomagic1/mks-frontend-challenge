import '../styles/globals.css'
import {ThemeProvider} from "styled-components"
import Theme from "../Theme/Theme"
import type { AppProps } from 'next/app'
import { AppProvider } from '../context/AppContext'
import { CartProvider } from '../context/CartContext'

import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return  (
    <ThemeProvider theme={Theme}>
       <QueryClientProvider client={queryClient}>
          <AppProvider>
            <CartProvider>
              <Component {...pageProps} />
            </CartProvider>
          </AppProvider>
       </QueryClientProvider>
    </ThemeProvider>
  )
}

export default MyApp
