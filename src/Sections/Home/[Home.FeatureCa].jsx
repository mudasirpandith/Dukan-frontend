import {
  Box,
  Text,
  useBreakpointValue,
  SimpleGrid,
  VStack,
  Image,
  Divider,
} from '@chakra-ui/react';
export const HomeFeatureCat = () => {
  return (
    <Box
      border={'solid 2px #eeeeee'}
      maxW={'96%'}
      m={'auto'}
      borderRadius={'4px'}
      p={'10px'}
      my={'20px'}
    >
      <Text color={'gray.500'} fontWeight={'bold'} textAlign={'center'}>
        FEATURED CATEGORIES
      </Text>
      <SimpleGrid columns={{ md: 5, base: 2 }} spacing={'10px'}>
        <VStack p={'10px'}>
          <Image src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg" />
          <Text
            fontSize={'14px'}
            color={'blackAlpha.600'}
            fontWeight={'medium'}
          >
            Tousers
          </Text>
          <Divider />
          <Text
            fontSize={'12px'}
            color={'blackAlpha.600'}
            fontWeight={'medium'}
          >
            Lorem ipsum dolor
          </Text>
        </VStack>{' '}
        <VStack p={'10px'}>
          <Image src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg" />
          <Text
            fontSize={'14px'}
            color={'blackAlpha.600'}
            fontWeight={'medium'}
          >
            Shirts
          </Text>
          <Divider />
          <Text
            fontSize={'12px'}
            color={'blackAlpha.600'}
            fontWeight={'medium'}
          >
            Lorem ipsum dolor
          </Text>
        </VStack>{' '}
        <VStack p={'10px'}>
          <Image src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg" />
          <Text
            fontSize={'14px'}
            color={'blackAlpha.600'}
            fontWeight={'medium'}
          >
            Jeans
          </Text>
          <Divider />
          <Text
            fontSize={'12px'}
            color={'blackAlpha.600'}
            fontWeight={'medium'}
          >
            Lorem ipsum dolor
          </Text>
        </VStack>{' '}
        <VStack p={'10px'}>
          <Image src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg" />
          <Text
            fontSize={'14px'}
            color={'blackAlpha.600'}
            fontWeight={'medium'}
          >
            Shoes
          </Text>
          <Divider />
          <Text
            fontSize={'12px'}
            color={'blackAlpha.600'}
            fontWeight={'medium'}
          >
            Lorem ipsum dolor
          </Text>
        </VStack>{' '}
        <VStack
          p={'10px'}
          display={useBreakpointValue({ base: 'none', md: 'flex' })}
        >
          <Image src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg" />
          <Text
            fontSize={'14px'}
            color={'blackAlpha.600'}
            fontWeight={'medium'}
          >
            T-Shirts
          </Text>
          <Divider />
          <Text
            fontSize={'12px'}
            color={'blackAlpha.600'}
            fontWeight={'medium'}
          >
            Lorem ipsum dolor
          </Text>
        </VStack>
      </SimpleGrid>
    </Box>
  );
};
