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
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { signupUser } from '../Reducers/authReducer';
export const SignUp = () => {
  const [passMatch, setPassMatch] = useState(0);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, success } = useSelector(state => state.user);
  const [form, setForm] = useState({
    username: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const regexPatterns = {
    username: /.{2,}/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phoneNumber: /^\d{10}$/,
    password:
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
    confirmPassword:
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
  };
  const errorList = {
    username: '* Cannot be empty',
    email: '* Invalid Format',
    phoneNumber: '* Must be a 10-digit number',
    password:
      '* Must be at least 6 characters long and contain at one uppercase, one lowercase,one speacial char and one number',
    confirmPassword: '',
  };

  const validateField = (fieldName, value) => {
    let error = '';
    if (fieldName === 'confirmPassword' && value !== form.password) {
      error = 'Passwords do not match';
    } else if (!regexPatterns[fieldName].test(value)) {
      error = `${errorList[fieldName]}`;
    }
    return error;
  };

  const validateForm = () => {
    const errors = {};
    for (const field in form) {
      errors[field] = validateField(field, form[field]);
    }
    setFormErrors(errors);
    return !Object.values(errors).some(error => error !== '');
  };

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'confirmPassword') {
      if (form.password === value) {
        setPassMatch(0);
      } else {
        setPassMatch(1);
      }
    }
    setForm(prev => ({ ...prev, [name]: value }));
    setFormErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (validateForm()) {
      dispatch(signupUser(form));
    }
  };

  useEffect(() => {
    localStorage.getItem('token') && navigate('/');
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
        <Text fontWeight={'bold'} color={'red'}>
          {error}
        </Text>
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
            <Input
              isRequired={true}
              value={form.username}
              variant="flushed"
              placeholder="Name"
              name="username"
              p={3}
              onChange={handleChange}
            />{' '}
            {formErrors.username && (
              <Text fontSize={'10px'} color={'red'}>
                {formErrors.username}
              </Text>
            )}
            <Input
              isRequired={true}
              value={form.email}
              variant="flushed"
              placeholder="Email Address"
              p={3}
              name="email"
              onChange={handleChange}
            />{' '}
            {formErrors.email && (
              <Text fontSize={'10px'} color={'red'}>
                {formErrors.email}
              </Text>
            )}
            <Input
              isRequired={true}
              value={form.phoneNumber}
              variant="flushed"
              placeholder="Phone Number"
              p={3}
              name="phoneNumber"
              onChange={handleChange}
            />{' '}
            {formErrors.phoneNumber && (
              <Text fontSize={'10px'} color={'red'}>
                {formErrors.phoneNumber}
              </Text>
            )}
            <InputGroup size="md">
              <Input
                isRequired={true}
                value={form.password}
                variant="flushed"
                placeholder="Password"
                type={show ? 'text' : 'password'}
                p={3}
                name="password"
                minLength={6}
                onChange={handleChange}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? <FaEyeSlash /> : <FaEye />}
                </Button>
              </InputRightElement>
            </InputGroup>
            {formErrors.password && (
              <Text fontSize={'10px'} color={'red'}>
                {formErrors.password}
              </Text>
            )}
            <Input
              value={form.confirmPassword}
              variant="flushed"
              isRequired
              placeholder="Confirm Password"
              type="passsword"
              name="confirmPassword"
              p={3}
              minLength={6}
              onChange={handleChange}
            />
            <Box
              display={passMatch ? 'flex' : 'none'}
              fontSize={'10px'}
              color={'red'}
            >
              Passwords do not match
            </Box>
            <Button
              onClick={handleSubmit}
              type="submit"
              isLoading={loading}
              isDisabled={
                !(form.password === form.confirmPassword) &&
                form.password.length < 6 &&
                form.username.length < 0 &&
                form.email.length < 0
              }
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
