import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
    Allproducts: [],
    loading: false,
    singleProduct: [],
    error: "",
    message: "",
    success: false,
    productInCartSuccess: false,
    productsInCart: []

};

const fetch2 = async (api, method, body) => {
    console.log(body)
    const res = await fetch(api, {
        method: method,
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json",
            authorization: localStorage.getItem("token"),
        },

        body: JSON.stringify(body),
    });
    return await res.json();
};
export const getAllProducts = createAsyncThunk("getAllProducts", async (body) => {
    const result = await fetch2("https://dukandar-api.onrender.com/product/get-all-products", "get", body);
    return result;
});
export const getSingleProduct = createAsyncThunk("getsingleproduct", async (body) => {
    const result = await fetch2("https://dukandar-api.onrender.com/product/get-single-product", "post", body)
    return result
});
export const addProductToCart = createAsyncThunk("addproducttocart", async (body) => {
    const result = await fetch2("https://dukandar-api.onrender.com/product/add-to-cart", "post", body)
    return result
});
export const getProductsInCart = createAsyncThunk("addproducttocart", async (body) => {
    const result = await fetch2("https://dukandar-api.onrender.com/product/get-products-in-cart", "get", body)
    return result
});
export const deleteProductFromCart = createAsyncThunk("deleteproductfromcart", async (body) => {
    const result = await fetch2("https://dukandar-api.onrender.com/product/delete-product-from-cart", "post", body)
    return result
});

const productReducer = createSlice({
    name: "getproducts",
    initialState,
    extraReducers: {
        [getAllProducts.fulfilled]: (state, action) => {
            state.loading = false;
            state.Allproducts = action.payload.products
            state.success = true;
            state.message = action.payload.message
        },
        [getAllProducts.pending]: (state, action) => {
            state.loading = true;
        },
        [getSingleProduct.fulfilled]: (state, { payload: { singleProduct } }) => {
            state.loading = false;
            // state.success = true;
            state.singleProduct = singleProduct
        },
        [getSingleProduct.pending]: (state, action) => {
            state.loading = true;
        },
        [addProductToCart.fulfilled]: (state, { payload: { message } }) => {
            state.productInCartSuccess = true;
            state.loading = false;
            state.message = message

        },
        [addProductToCart.pending]: (state, action) => {
            state.loading = true;
        },
        [getProductsInCart.fulfilled]: (state, { payload: { productsInCart, message } }) => {
            state.loading = false;
            state.success = true;
            state.message = message
            state.productsInCart = productsInCart

        },
        [getProductsInCart.pending]: (state, action) => {
            state.loading = true;
        },
        [deleteProductFromCart.fulfilled]: (state, { payload: { message } }) => {
            state.loading = false;
            state.success = true;
            state.message = message


        },
        [deleteProductFromCart.pending]: (state, action) => {
            state.loading = true;
        },



    },
});
export default productReducer.reducer;
