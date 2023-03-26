import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Alert,
  AlertIcon,
  Box,
  Button,
  Center,
  Divider,
  Flex,
  HStack,
  Image,
  Input,
  Spacer,
  Spinner,
  Text,
} from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addOrder, getProductsInCart } from '../Reducers/prodReducer';
import { CartProductCard } from '../Sections/Cart/[Cart.ProductCard]';

export const CartPage = () => {
  const [isSmallerThan800] = useMediaQuery('(max-width: 800px)');
  const [addressForm, setForm] = useState({
    address: '',
    village: '',
    landmark: '',
    phoneNumber: '',
    email: '',
    district: '',
    state: '',
    pin: '',
  });
  function handleChange(e) {
    const { name, value } = e.target;
    return setForm(prev => {
      return { ...prev, [name]: value };
    });
  }
  const dispatch = useDispatch();
  var amount = 0;
  const { productsInCart, loading, success, contentLoader, message } =
    useSelector(state => state.products);
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addOrder({ address: addressForm, timeOrder: String(new Date()) }));
  };
  useEffect(() => {
    !localStorage.getItem('token') && window.location.replace('/signin');
    dispatch(getProductsInCart());
  }, []);

  return !contentLoader ? (
    <>
      {' '}
      {productsInCart && productsInCart.length === 0 ? (
        <Center>
          <Image src="https://shop.millenniumbooksource.com/static/images/cart1.png" />
        </Center>
      ) : (
        <>
          <Box w={'full'} p={'20px'}>
            <Flex
              w={'full'}
              flexDirection={isSmallerThan800 ? 'column' : 'row'}
              flexWrap={'wrap'}
              gap={'20px'}
            >
              <Flex
                justifyContent={'flex-start'}
                flex={4}
                flexDirection={'column'}
                gap={'10px'}
              >
                {message && (
                  <Alert status="success">
                    <AlertIcon />
                    <HStack w={'full'}>
                      <Text>{message}</Text>
                    </HStack>
                  </Alert>
                )}
                {contentLoader && window.location.reload()}
                {productsInCart &&
                  productsInCart
                    .slice()
                    .reverse()
                    .map((prod, index) => {
                      amount += prod.productsInCart * prod.productPrice;
                      return (
                        <React.Fragment key={index}>
                          <CartProductCard
                            productName={prod.productName}
                            productPrice={prod.productPrice}
                            productsInCart={prod.productsInCart}
                            productImage={prod.productImage}
                            productSize={prod.productSize}
                            productId={prod._id}
                            success={success}
                          />
                          <Divider />
                        </React.Fragment>
                      );
                    })}
              </Flex>
              <Flex flex={4} flexDirection={'column'}>
                <Box
                  as={'form'}
                  mx={'auto'}
                  onSubmit={handleSubmit}
                  p={'10px'}
                  border={'1px solid gray'}
                >
                  <Accordion defaultIndex={[1]} allowMultiple>
                    <AccordionItem>
                      <h2>
                        <AccordionButton>
                          <Box as="span" flex="1" textAlign="left">
                            Use Coupon Code
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <Input
                          placeholder="Enter your coupon here"
                          rounded={'none'}
                          border={'1px solid gray'}
                        />
                        <Button
                          rounded={'none'}
                          w={'130px'}
                          color={'inherit'}
                          my={'5px'}
                          border={'1px solid gray'}
                        >
                          Apply Coupon
                        </Button>
                      </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                      <h2>
                        <AccordionButton>
                          <Box as="span" flex="1" textAlign="left">
                            Shipping And Taxes
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <Input
                          rounded={'none'}
                          border={'none'}
                          borderBottom={'1px solid gray'}
                          my={'2px'}
                          w={'300px'}
                          display={'flex'}
                          mx={'auto'}
                          placeholder="Adress"
                          type="text"
                          name="address"
                          onChange={handleChange}
                          isRequired
                          value={addressForm.address}
                        />
                        <Input
                          rounded={'none'}
                          border={'none'}
                          borderBottom={'1px solid gray'}
                          my={'2px'}
                          w={'300px'}
                          display={'flex'}
                          mx={'auto'}
                          placeholder="Phone Number"
                          type="text"
                          name="phoneNumber"
                          onChange={handleChange}
                          isRequired
                          value={addressForm.phoneNumber}
                        />
                        <Input
                          rounded={'none'}
                          border={'none'}
                          borderBottom={'1px solid gray'}
                          my={'2px'}
                          w={'300px'}
                          display={'flex'}
                          mx={'auto'}
                          placeholder="Email"
                          type="text"
                          name="email"
                          onChange={handleChange}
                          isRequired
                          value={addressForm.email}
                        />
                        <Input
                          rounded={'none'}
                          border={'none'}
                          borderBottom={'1px solid gray'}
                          my={'2px'}
                          w={'300px'}
                          display={'flex'}
                          mx={'auto'}
                          placeholder="Village/Town"
                          type="text"
                          name="village"
                          onChange={handleChange}
                          isRequired
                          value={addressForm.village}
                        />
                        <Input
                          rounded={'none'}
                          border={'none'}
                          borderBottom={'1px solid gray'}
                          my={'2px'}
                          w={'300px'}
                          display={'flex'}
                          mx={'auto'}
                          placeholder="Street/Landmark"
                          type="text"
                          name="landmark"
                          onChange={handleChange}
                          isRequired
                          value={addressForm.landmark}
                        />
                        <Input
                          rounded={'none'}
                          border={'none'}
                          borderBottom={'1px solid gray'}
                          my={'2px'}
                          w={'300px'}
                          display={'flex'}
                          mx={'auto'}
                          placeholder="District"
                          type="text"
                          name="district"
                          onChange={handleChange}
                          isRequired
                          value={addressForm.district}
                        />
                        <Input
                          rounded={'none'}
                          border={'none'}
                          borderBottom={'1px solid gray'}
                          my={'2px'}
                          w={'300px'}
                          display={'flex'}
                          mx={'auto'}
                          placeholder="State"
                          type="text"
                          name="state"
                          onChange={handleChange}
                          isRequired
                          value={addressForm.state}
                        />
                        <Input
                          rounded={'none'}
                          border={'none'}
                          borderBottom={'1px solid gray'}
                          my={'2px'}
                          w={'300px'}
                          display={'flex'}
                          mx={'auto'}
                          placeholder="PIN"
                          type="text"
                          name="pin"
                          onChange={handleChange}
                          isRequired
                          value={addressForm.pin}
                        />
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <h2>
                        <AccordionButton>
                          <Box as="span" flex="1" textAlign="left">
                            Use Gift Card
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}></AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                  <HStack bg={'blackAlpha.300'}>
                    <Text p={'10px'}>Sub Total:</Text>
                    <Spacer />
                    <Text p={'10px'}>${amount} </Text>
                  </HStack>
                  <HStack bg={'blackAlpha.300'}>
                    <Text p={'10px'}>Total:</Text>
                    <Spacer />
                    <Text p={'10px'}>${Math.floor(amount)} </Text>
                  </HStack>
                  <Button
                    my={'10px'}
                    bg={'blackAlpha.800'}
                    rounded={'none'}
                    color={'white'}
                    isLoading={loading}
                    w={'full'}
                    type="submit"
                  >
                    Checkout
                  </Button>
                </Box>
              </Flex>
            </Flex>
          </Box>
        </>
      )}
    </>
  ) : (
    <>
      <Center>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="black"
          size="xl"
        />
      </Center>
    </>
  );
};
