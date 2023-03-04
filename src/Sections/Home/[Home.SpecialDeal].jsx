import React from 'react';
import {
  Box,
  Text,
  SimpleGrid,
  VStack,
  Image,
  Button,
  HStack,
  useToast,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { addProductToCart } from '../../Reducers/prodReducer';

export const HomeSpecialDeal = props => {
  const dispatch = useDispatch();
  const { productInCartSuccess} = useSelector(
    state => state.products
  );
  return (
    <Box
      border={'solid 2px red'}
      maxW={'96%'}
      m={'auto'}
      my={'20px'}
      borderRadius={'4px'}
    >
      <Text textAlign={'center'} py={'10px'} color={'red.300'} fontWeight={500}>
        {' '}
        SPECIAL DEALS{' '}
      </Text>
      <SimpleGrid columns={{ md: 4, base: 1 }} py={'20px'} spacing={'20px'}>
        {props.products.map((product, index) => {
          const url =
            '/product?productId=' + product._id + '&name=' + product.name;
          return (
            <VStack key={index} px={'15px'} py={'10px'}>
              <a href={url}>
                <Image w={'200px'} h={'200px'} src={product.images[0].url} />
              </a>
              <VStack w={'full'} textAlign={'center'}>
                <a href={url}>
                  {' '}
                  <Text fontWeight={'semibold'} color={'blackAlpha.700'}>
                    {product.name}
                  </Text>
                  <Text fontWeight={500} color={'gray.500'}>
                    ${product.price}{' '}
                    <span style={{ color: 'red' }}>${product.price + 10}</span>
                  </Text>
                </a>
                <Button
                  w={'full'}
                  border={'1px solid black'}
                  bg={'white'}
                  rounded={'none'}
                  loadingText="Adding to cart"
                  onClick={() => {
                    dispatch(
                      addProductToCart({
                        productId: product._id,
                        productSize: 'M',
                        productsInCart: 1,
                      })
                    );
                    {
                      productInCartSuccess && window.location.replace('/cart');
                    }
                  }}
                >
                  Add to cart
                </Button>

                <HStack
                  w={'full'}
                  textAlign={'center'}
                  h={'40px'}
                  bg={'blackAlpha.200'}
                  fontSize={'22px'}
                  color={'blackAlpha.600'}
                  justifyContent={'space-evenly'}
                >
                  <Text>36 </Text>
                  <Text>:</Text>
                  <Text>23 </Text>
                  <Text>:</Text>
                  <Text>36 </Text>
                  <Text>:</Text>
                  <Text>12 </Text>
                </HStack>
                <HStack
                  w={'full'}
                  textAlign={'center'}
                  bg={'white'}
                  fontSize={'10px'}
                  color={'gray.500'}
                  justifyContent={'space-evenly'}
                >
                  <Text>Days</Text>
                  <Text>Hours </Text>
                  <Text>Min </Text>
                  <Text>Secs</Text>
                </HStack>
              </VStack>
            </VStack>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};
