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
          <Image
            loading="lazy"
            src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dHJvdXNlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
          />
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
            Under $10
          </Text>
        </VStack>{' '}
        <VStack p={'10px'}>
          <Image
            loading="lazy"
            src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2hpcnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
          />
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
            Under $11
          </Text>
        </VStack>{' '}
        <VStack p={'10px'}>
          <Image
            loading="lazy"
            src="https://images.unsplash.com/photo-1624378441864-6eda7eac51cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGplYW5zJTIwbWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
          />
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
            Under $9
          </Text>
        </VStack>{' '}
        <VStack p={'10px'}>
          <Image
            loading="lazy"
            src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
          />
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
            Under $12
          </Text>
        </VStack>{' '}
        <VStack
          p={'10px'}
          display={useBreakpointValue({ base: 'none', md: 'flex' })}
        >
          <Image
            loading="lazy"
            src="https://images.unsplash.com/photo-1627225793904-a2f900a6e4cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHQlMjBzaGlydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
          />
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
            Under $10
          </Text>
        </VStack>
      </SimpleGrid>
    </Box>
  );
};
