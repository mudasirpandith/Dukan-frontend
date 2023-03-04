import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  HStack,
  Input,
  Spacer,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsInCart } from '../Reducers/prodReducer';
import { CartProductCard } from '../Sections/Cart/[Cart.ProductCard]';

export const CartPage = () => {
  const [isSmallerThan800] = useMediaQuery('(max-width: 800px)');
  var amount = 0;
  const dispatch = useDispatch();
  const { productsInCart, success } = useSelector(state => state.products);
  useEffect(() => {
    !localStorage.getItem('token') && window.location.replace('/signin');
    dispatch(getProductsInCart());
  }, []);

  return productsInCart.length === 0 ? (
    <Center>
      <VStack pt={40} pb={40}>
        <Heading>Nothing in Cart</Heading>
      </VStack>
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
            {productsInCart &&
              productsInCart.map((prod, index) => {
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
            <Box mx={'auto'} p={'10px'} border={'1px solid gray'}>
              <Accordion defaultIndex={[0]} allowMultiple>
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
                      border={'1px solid black'}
                      my={'2px'}
                      w={'300px'}
                      display={'flex'}
                      mx={'auto'}
                      placeholder="Adress"
                      type="text"
                    />
                    <Input
                      rounded={'none'}
                      border={'1px solid black'}
                      my={'2px'}
                      w={'300px'}
                      display={'flex'}
                      mx={'auto'}
                      placeholder="Village/Town"
                      type="text"
                    />
                    <Input
                      rounded={'none'}
                      border={'1px solid black'}
                      my={'2px'}
                      w={'300px'}
                      display={'flex'}
                      mx={'auto'}
                      placeholder="Street/Landmark"
                      type="text"
                    />
                    <Input
                      rounded={'none'}
                      border={'1px solid black'}
                      my={'2px'}
                      w={'300px'}
                      display={'flex'}
                      mx={'auto'}
                      placeholder="District"
                      type="text"
                    />
                    <Input
                      rounded={'none'}
                      border={'1px solid black'}
                      my={'2px'}
                      w={'300px'}
                      display={'flex'}
                      mx={'auto'}
                      placeholder="State"
                      type="text"
                    />
                    <Input
                      rounded={'none'}
                      border={'1px solid black'}
                      my={'2px'}
                      w={'300px'}
                      display={'flex'}
                      mx={'auto'}
                      placeholder="PIN"
                      type="text"
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
                w={'full'}
              >
                Checkout
              </Button>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
