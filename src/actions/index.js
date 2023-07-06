import axios from "axios";
import {
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
  DELETE_CATEGORY,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  DETAIL_PRODUCTS_SUCCESS,
  DETAIL_PRODUCTS_FAILURE,
  DELETE_PRODUCTS,
} from "./actionTypes";

// Category
export const fetchCategories = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://dummyjson.com/products/categories"
      );
      dispatch({ type: FETCH_CATEGORIES_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: FETCH_CATEGORIES_FAILURE, payload: error.message });
    }
  };
};

export const deleteCategory = (item) => {
  return { type: DELETE_CATEGORY, payload: item };
};

// Products
export const fetchProducts = (item) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/category/${item}`
      );
      dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: FETCH_PRODUCTS_FAILURE, payload: error.message });
    }
  };
};
export const detailProducts = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`https://dummyjson.com/products/${id}`);
      dispatch({ type: DETAIL_PRODUCTS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: DETAIL_PRODUCTS_FAILURE, payload: error.message });
    }
  };
};
//not using
export const deleteProducts = (item) => {
  return { type: DELETE_PRODUCTS, payload: item };
};
