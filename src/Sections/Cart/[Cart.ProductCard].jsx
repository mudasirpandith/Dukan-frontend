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
      <Image w={'100px'} h={'100px'} flex={2} src={props.productImage} />
      <Box w={'full'} flex={6} flexDirection={'column'}>
        <Flex flexDirection={isSmallerThan800 ? 'column' : 'row'}>
          <Text fontSize={'20px'}>{props.productName}</Text>
          <Spacer />
          <Text fontSize={'20px'}>${props.productPrice}</Text>
        </Flex>
        <Box>
          <Text fontSize={'14px'} color={'blackAlpha.700'} fontWeight={400}>
            Size Selected: {props.productSize}
          </Text>
          <Text fontSize={'14px'} color={'blackAlpha.700'} fontWeight={400}>
            Quantity:{props.productsInCart} pieces
          </Text>
          <Text fontSize={'14px'} color={'blackAlpha.700'} fontWeight={400}>
            Unit Price: ${props.productPrice}
          </Text>
          <Text fontSize={'14px'} color={'blackAlpha.700'} fontWeight={400}>
            Total Price: ${props.productsInCart * props.productPrice}
          </Text>
          <Button
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
