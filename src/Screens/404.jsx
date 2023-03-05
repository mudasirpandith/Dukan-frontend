import { Center, Heading, VStack } from '@chakra-ui/react';
import React from 'react';

export const Page404 = () => {
  return (
    <Center>
      <VStack pt={40} pb={40}>
        <Heading fontSize={'9xl'}>404</Heading>
        <Heading>Page Not Found!</Heading>
      </VStack>
    </Center>
  );
};
