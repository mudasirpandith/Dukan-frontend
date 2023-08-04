import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
const initialState = {
  Allproducts: [],
  loading: false,
  singleProduct: [],
  error: '',
  message: '',
  success: false,
  contentLoader: true,
  productInCartSuccess: true,
  productsInCart: [],
  orders: [],
  reviews: [],
  reviewStatus: '',
};
//https://dukandar-api.onrender.com/product

const fetch2 = async (api, method, body) => {
  const res = await fetch('https://dukandar-api.onrender.com/product' + api, {
    method: method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: localStorage.getItem('token'),
    },
    body: JSON.stringify(body),
  });
  return await res.json();
};
export const getAllProducts = createAsyncThunk('getAllProducts', async body => {
  const result = await fetch2('/get-all-products', 'get', body);
  return result;
});
export const getSingleProduct = createAsyncThunk(
  'getsingleproduct',
  async body => {
    const result = await fetch2('/get-single-product', 'post', body);
    return result;
  }
);
export const addProductToCart = createAsyncThunk(
  'addproducttocart',
  async body => {
    const result = await fetch2('/add-to-cart', 'post', body);
    return result;
  }
);
export const getProductsInCart = createAsyncThunk(
  'addproducttocart',
  async body => {
    const result = await fetch2('/get-products-in-cart', 'get', body);
    return result;
  }
);
export const deleteProductFromCart = createAsyncThunk(
  'deleteproductfromcart',
  async body => {
    const result = await fetch2('/delete-product-from-cart', 'post', body);
    return result;
  }
);
export const addOrder = createAsyncThunk('addorder', async body => {
  const result = await fetch2('/add-order', 'post', body);
  return result;
});

export const getOrders = createAsyncThunk('getordes', async body => {
  const result = await fetch2('/get-orders', 'get', body);
  return result;
});

export const addReview = createAsyncThunk('addreview', async body => {
  const result = await fetch2('/add-review', 'post', body);
  return result;
});

const productReducer = createSlice({
  name: 'getproducts',
  initialState,
  extraReducers: {
    [getAllProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.Allproducts = action.payload.products;
      state.success = true;
      state.contentLoader = false;
      state.message = action.payload.message;
    },
    [getAllProducts.pending]: (state, action) => {
      state.loading = true;
    },
    [getSingleProduct.fulfilled]: (
      state,
      { payload: { singleProduct, reviews } }
    ) => {
      state.loading = false;
      state.contentLoader = false;
      state.singleProduct = singleProduct;
      state.reviews = reviews;
    },
    [getSingleProduct.pending]: (state, action) => {
      state.loading = true;
    },
    [addProductToCart.fulfilled]: (state, { payload: { message } }) => {
      state.productInCartSuccess = true;
      state.loading = false;
      state.message = message;
    },
    [addProductToCart.pending]: (state, action) => {
      state.loading = true;
    },
    [getProductsInCart.fulfilled]: (
      state,
      { payload: { productsInCart, message } }
    ) => {
      state.loading = false;
      state.success = true;
      state.message = message;
      state.contentLoader = false;
      state.productsInCart = productsInCart;
    },
    [getProductsInCart.pending]: (state, action) => {
      state.loading = true;
    },
    [deleteProductFromCart.fulfilled]: (
      state,
      { payload: { message, productsInCart } }
    ) => {
      state.loading = false;
      state.success = true;
      state.message = message;
      state.productsInCart = productsInCart;
    },
    [deleteProductFromCart.pending]: (state, action) => {
      state.loading = true;
    },
    [addOrder.fulfilled]: (state, { payload: { productsInCart, message } }) => {
      state.loading = false;
      state.success = true;
      state.message = message;
      state.productsInCart = productsInCart;
    },
    [addOrder.pending]: (state, action) => {
      state.loading = true;
    },
    [getOrders.fulfilled]: (state, { payload: { orders } }) => {
      state.loading = false;
      state.success = true;
      state.orders = orders;
      state.contentLoader = false;
    },
    [getOrders.pending]: (state, action) => {
      state.loading = true;
    },
    [addReview.fulfilled]: (state, { payload: { message, reviews } }) => {
      state.loading = false;
      state.success = true;
      state.reviewStatus = message;
      state.reviews = reviews;
    },
    [addReview.pending]: (state, action) => {
      state.loading = true;
    },
  },
});
export default productReducer.reducer;
