import { Box, Center, Image, Spinner } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../Reducers/prodReducer';
import { OrderCard } from '../Sections/Order/[order.card]';

export const OrderPage = () => {
  const { orders, contentLoader } = useSelector(state => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    !localStorage.getItem('token') && window.location.replace('/signin');
    dispatch(getOrders());
  }, [dispatch]);
  return !contentLoader ? (
    <>
      {orders.length === 0 ? (
        <Center>
          <Image src="https://grocerycart.wawbizstores.com/assets/images/no_order1.png" />
        </Center>
      ) : (
        <Box>
          {orders
            .slice()
            .reverse()
            .map((order, index) => {
              return <OrderCard key={index} order={order} />;
            })}
        </Box>
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
