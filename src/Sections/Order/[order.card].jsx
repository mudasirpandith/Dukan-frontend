import { Box, Button, HStack, Image, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';

export const OrderCard = props => {
  const order = props.order;
  var amount = 0;
  return (
    <Box
      justifyContent={'center'}
      p={'10px'}
      border={'1px solid gray'}
      my={'10px'}
      mx={'20px'}
    >
      <SimpleGrid columns={{ md: 4, base: 1 }}>
        <Box>
          <Text fontSize={'16px'} fontWeight={500}>
            Products
          </Text>
          {order.products.map((prod, index) => {
            amount += prod.productPrice * prod.productsInCart;
            return (
              <HStack key={index} p={'10px'}>
                <Image w={'60px'} src={prod.productImage} />
                <Box>
                  <Text
                    fontSize={'14px'}
                    fontWeight={400}
                    color={'blackAlpha.700'}
                  >
                    {prod.productName}
                  </Text>
                  <Text
                    fontSize={'14px'}
                    fontWeight={400}
                    color={'blackAlpha.700'}
                  >
                    Size:{prod.productSize}
                  </Text>
                  <Text
                    fontSize={'14px'}
                    fontWeight={400}
                    color={'blackAlpha.700'}
                  >
                    Unit Price:{prod.productPrice}
                  </Text>
                  <Text
                    fontSize={'14px'}
                    fontWeight={400}
                    color={'blackAlpha.700'}
                  >
                    Quantity:{prod.productsInCart}
                  </Text>
                </Box>
              </HStack>
            );
          })}
        </Box>
        <Box>
          <Text fontSize={'16px'} fontWeight={500}>
            Shipping Details
          </Text>
          <Text fontSize={'14px'} fontWeight={400} color={'blackAlpha.700'}>
            {order.address.address}{' '}
          </Text>
          <Text fontSize={'14px'} fontWeight={400} color={'blackAlpha.700'}>
            {order.address.landmark}{' '}
          </Text>
          <Text fontSize={'14px'} fontWeight={400} color={'blackAlpha.700'}>
            {order.address.village}{' '}
          </Text>
          <Text fontSize={'14px'} fontWeight={400} color={'blackAlpha.700'}>
            {order.address.district}{' '}
          </Text>
          <Text fontSize={'14px'} fontWeight={400} color={'blackAlpha.700'}>
            {order.address.pin}{' '}
          </Text>
          <Text fontSize={'14px'} fontWeight={400} color={'blackAlpha.700'}>
            {order.address.state}{' '}
          </Text>
          <Text fontSize={'14px'} fontWeight={400} color={'blackAlpha.700'}>
            {order.address.phoneNumber}{' '}
          </Text>
          <Text fontSize={'14px'} fontWeight={400} color={'blackAlpha.700'}>
            {order.address.email}{' '}
          </Text>
        </Box>
        <Box>
          <Text fontSize={'16px'} fontWeight={500}>
            Time And Date
          </Text>
          <Text fontSize={'14px'} fontWeight={400} color={'blackAlpha.700'}>
            {order.timeAndDate}
          </Text>
          <Text fontSize={'16px'} fontWeight={500}>
            Total Amount Paid
          </Text>
          <Text fontSize={'18px'} fontWeight={400} color={'blackAlpha.700'}>
            ${amount}
          </Text>
        </Box>
        <Box>
          <Text fontSize={'16px'} fontWeight={500}>
            Status
          </Text>
          <Button
            rounded={'none'}
            color={'white'}
            w={'200px'}
            display={'inline-flex'}
            bg={order.status.color}
          >
            {order.status.text}
          </Button>
        </Box>
      </SimpleGrid>
    </Box>
  );
};
