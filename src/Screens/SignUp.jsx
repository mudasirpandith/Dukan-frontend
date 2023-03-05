import {
  Heading,
  Image,
  Input,
  Text,
  Box,
  Center,
  useBreakpointValue,
  Button,
  HStack,
} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link,  useNavigate } from 'react-router-dom';
import { signupUser } from '../Reducers/authReducer';
export const SignUp = () => {
  const [passMatch, setPassMatch] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, success } = useSelector(
    state => state.user
  );
  const [form, setForm] = useState({
    username: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });
  function handleChange(e) {
    const { name, value } = e.target;
    console.log(form);
    if (name === 'confirmPassword') {
      if (form.password === value) {
        setPassMatch(0);
      } else {
        setPassMatch(1);
      }
    }
    return setForm(prev => {
      return { ...prev, [name]: value };
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(signupUser(form));
  }

  useEffect(() => {
    {
      localStorage.getItem('token') && navigate('/');
    }
  });
  const previousPageUrl = document.referrer;
  return (
    <>
      <Box
        align={'center'}
        maxW={'full'}
        py={10}
        border={'solid 1px white'}
        bg={'#ebecf0'}
      >
        {success && window.location.replace(previousPageUrl)}
        <Heading fontSize={'25px'} color={'black)'} py={2}>
          CREATE AN ACCOUNT
        </Heading>
        <Center
          bg={'white'}
          flexDirection={'column'}
          w={useBreakpointValue({ md: '400px', base: '350px' })}
          borderRadius={15}
          gap={3}
          p={5}
          as="form"
        >
          <>
            <Text fontWeight={'bold'} color={'red'}>
              {error}
            </Text>
            <Input
              isRequired={true}
              value={form.username}
              variant="flushed"
              placeholder="Name"
              name="username"
              p={3}
              onChange={handleChange}
            />
            <Input
              isRequired={true}
              value={form.email}
              variant="flushed"
              placeholder="Email Address"
              p={3}
              name="email"
              onChange={handleChange}
            />
            <Input
              isRequired={true}
              value={form.phoneNumber}
              variant="flushed"
              placeholder="Phone Number"
              p={3}
              name="phoneNumber"
              onChange={handleChange}
            />
            <Input
              isRequired={true}
              value={form.password}
              variant="flushed"
              placeholder="Password"
              type="text"
              p={3}
              name="password"
              onChange={handleChange}
            />
            <Input
              value={form.confirmPassword}
              variant="flushed"
              placeholder="Confirm Password"
              type="text"
              name="confirmPassword"
              p={3}
              onChange={handleChange}
            />
            <Box display={passMatch ? 'flex' : 'none'} color={'red'}>
              Does not match
            </Box>

            <Button
              onClick={handleSubmit}
              type="submit"
              isLoading={loading}
              isDisabled={!(form.password === form.confirmPassword)}
              loadingText="please wait..."
              bg={'black'}
              color={'white'}
              isActive={false}
            >
              Sign Up
            </Button>
          </>
          <Text>OR</Text>
          <HStack display={'flex'} spacing={10}>
            <Image
              h={10}
              src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
            />
            <Image
              h={8}
              src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"
            />
            <Image
              h={6}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png"
            />
          </HStack>
          <Text>Already Have An Account?</Text>
          <Link to="/signin">
            <Button color={'rgba(89, 41, 105, 1)'}>SIGN IN</Button>
          </Link>
        </Center>
      </Box>
    </>
  );
};
