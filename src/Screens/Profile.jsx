import { Box, Button, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../Reducers/authReducer';

export const Profile = () => {
  const dispatch = useDispatch();
  const { credential } = useSelector(state => state.user);

  useEffect(() => {
    dispatch(getUser());
  }, []);
  const previousPageUrl = document.referrer;

  return (
    <Box
      p={'20px'}
      h={window.innerHeight - 200}
      maxW={'9xl'}
      border={'1px solid #eeeeee'}
    >
      {credential.username && (
        <SimpleGrid columns={{ md: 2, base: 1 }} spacing={'20px'}>
          <Box>
            <Heading py={'10px'} fontSize={'20px'}>
              My Account Details
            </Heading>
            <Text fontSize={'16px'} py={'4px'} fontWeight={600}>
              Name :{' '}
              <Box fontSize={'14px'} color={'blackAlpha.700'} as="span">
                {' '}
                {credential.username}
              </Box>{' '}
            </Text>
            <Text fontSize={'16px'} py={'4px'} fontWeight={600}>
              Email :{' '}
              <Box fontSize={'14px'} color={'blackAlpha.700'} as="span">
                {' '}
                {credential.email}
              </Box>{' '}
            </Text>
            <Text fontSize={'16px'} py={'4px'} fontWeight={600}>
              Phone Number :{' '}
              <Box fontSize={'14px'} color={'blackAlpha.700'} as="span">
                {' '}
                {credential.phoneNumber}
              </Box>{' '}
            </Text>
            <Button
              justifyContent={'right'}
              onClick={() => {
                localStorage.removeItem('token');
                window.location.replace(previousPageUrl);
              }}
              bg={'white'}
              border={'1px solid black'}
              rounded={'none'}
              my={'20px'}
            >
              Logout
            </Button>
          </Box>
          <Box>
            <Heading fontSize={'20px'}>Links</Heading>

            <a href="/orders">
              <Text fontWeight={500} py={'8px'} color={'blue.300'}>
                My Orders
              </Text>{' '}
            </a>
            <a href="/cart">
              <Text fontWeight={500} py={'8px'} color={'blue.300'}>
                Cart
              </Text>{' '}
            </a>
            <a href="/">
              <Text fontWeight={500} py={'8px'} color={'blue.300'}>
                Products
              </Text>{' '}
            </a>
          </Box>
        </SimpleGrid>
      )}
    </Box>
  );
};
