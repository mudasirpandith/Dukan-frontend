import React, { useState } from 'react';
import {
  Box,
  Text,
  SimpleGrid,
  VStack,
  Image,
  Button,
  HStack,
} from '@chakra-ui/react';

export const HomeSpecialDeal = props => {
  const products = props.home ? props.products.slice(0, 4) : props.products;
  const [days, setDays] = useState(50);
  const [hours, setHours] = useState(1);
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(6);
  function changeDate() {
    setSeconds(seconds - 1);
    if (seconds === 0) {
      setSeconds(59);
      setMinutes(minutes - 1);
      if (minutes === 0) {
        setMinutes(59);
        setHours(hours - 1);
        if (hours === 0) {
          setHours(23);
          setDays(days - 1);
        }
      }
    }
  }
  setTimeout(changeDate, 1000);

  return (
    <Box
      border={props.home && 'solid 2px red'}
      maxW={'96%'}
      m={'auto'}
      my={'20px'}
      borderRadius={'4px'}
    >
      <Text
        display={props.home ? 'flex' : 'none'}
        textAlign={'center'}
        py={'10px'}
        color={'red.300'}
        fontWeight={500}
      >
        {' '}
        SPECIAL DEALS{' '}
      </Text>
      <SimpleGrid columns={{ md: 4, base: 1 }} py={'20px'} spacing={'20px'}>
        {products.map((product, index) => {
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
                    <span style={{ color: 'red' }}>
                      ${Math.floor(product.price + 10.0)}
                    </span>
                  </Text>
                </a>
                {product.in_stock > 0 ? (
                  <Button
                    w={'full'}
                    border={'1px solid black'}
                    bg={'white'}
                    rounded={'none'}
                    loadingText="Adding to cart"
                    onClick={() => {
                      window.location.replace(url);
                    }}
                  >
                    View Product
                  </Button>
                ) : (
                  <Button
                    w={'full'}
                    border={'1px solid red'}
                    bg={'white'}
                    color={'red'}
                    isDisabled={product.in_stock < 1}
                    rounded={'none'}
                    loadingText="Adding to cart"
                  >
                    Out of Stock
                  </Button>
                )}
                <HStack
                  w={'full'}
                  textAlign={'center'}
                  display={props.home ? 'flex' : 'none'}
                  h={'40px'}
                  bg={'blackAlpha.200'}
                  fontSize={'22px'}
                  color={'blackAlpha.600'}
                  justifyContent={'space-evenly'}
                >
                  <Text>{days} </Text>
                  <Text>:</Text>
                  <Text>{hours} </Text>
                  <Text>:</Text>
                  <Text>{minutes} </Text>
                  <Text>:</Text>
                  <Text>{seconds} </Text>
                </HStack>
                <HStack
                  display={props.home ? 'flex' : 'none'}
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
