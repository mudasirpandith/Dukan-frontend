import React from 'react';
import {
  ChakraProvider,
  Divider,
  HStack,
  Spacer,
  Text,
} from '@chakra-ui/react';
import { Home } from './Screens/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Page404 } from './Screens/404';
import { Login } from './Screens/SignIn';
import { SignUp } from './Screens/SignUp';
import NavBar from './Components/Navigation/NavBar';
import { ProductPage } from './Screens/ProductPage';
import { Footer } from './Components/Navigation/Footer';
import { Profile } from './Screens/Profile';
import { CartPage } from './Screens/cartPage';

function App() {
  return (
    <ChakraProvider>
      <div>
        <HStack py={'5px'} px={'10px'}>
          <Text fontWeight={600}>
            Region :{' '}
            <span style={{ color: 'gray', fontWeight: 400 }}>India</span>{' '}
          </Text>
          <Spacer />
          <Text fontWeight={600}>
            Currency :{' '}
            <span style={{ color: 'gray', fontWeight: 400 }}>$dollar</span>{' '}
          </Text>
        </HStack>
        <Divider />

        <NavBar />
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route path="/" element={<Home />} />
              <Route path="signin" element={<Login />} />
              <Route path="signup" element={<SignUp />} />
              <Route path="account" element={<Profile />} />
              <Route path="cart" element={<CartPage />} />
              <Route path="product" element={<ProductPage />} />

              <Route path="*" element={<Page404 />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default App;
