import { DeleteIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  Image,
  Spacer,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { deleteProductFromCart } from '../../Reducers/prodReducer';

export const CartProductCard = props => {
  const dispatch = useDispatch();
  const [isSmallerThan800] = useMediaQuery('(max-width: 800px)');
  return (
    <Flex flex={1} gap={'20px'}>
      <Image w={'100px'} h={'100px'} src={props.productImage} />

      <Box w={'full'} flex={6} flexDirection={'column'}>
        <Flex flexDirection={isSmallerThan800 ? 'column' : 'row'}>
          <Text fontSize={'20px'}>{props.productName}</Text>
          <Spacer />
          <Text color={'green'} fontWeight={'bold'} fontSize={'20px'}>
            ${props.productPrice}
          </Text>
        </Flex>
        <Box>
          <Text fontSize={'14px'} color={'blackAlpha.700'} fontWeight={500}>
            Size Selected: {props.productSize}
          </Text>
          <Text fontSize={'14px'} color={'blackAlpha.700'} fontWeight={500}>
            Quantity:{props.productsInCart} piece/s
          </Text>
          <Text fontSize={'14px'} color={'blackAlpha.700'} fontWeight={500}>
            Unit Price: ${props.productPrice}
          </Text>
          <Text fontSize={'14px'} color={'blackAlpha.700'} fontWeight={500}>
            Total Price: ${props.productsInCart * props.productPrice}
          </Text>
          <Button
            rightIcon={<DeleteIcon />}
            bg={'white'}
            size={'sm'}
            color={'black'}
            border={'1px solid gray'}
            onClick={() => {
              dispatch(deleteProductFromCart({ id: props.productId }));
            }}
          >
            Remove
          </Button>
        </Box>
      </Box>
    </Flex>
  );
};
