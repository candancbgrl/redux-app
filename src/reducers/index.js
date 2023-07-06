import { combineReducers } from "redux";
import {
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
  DELETE_CATEGORY,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  DETAIL_PRODUCTS_SUCCESS,
  DETAIL_PRODUCTS_FAILURE,
  DELETE_PRODUCTS,
} from "../actions/actionTypes";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };

    case FETCH_CATEGORIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_CATEGORY:
      return {
        ...state,
        data: state.data.filter((item) => item !== action.payload),
      };

    default:
      return state;
  }
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };

    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case DELETE_PRODUCTS:
      console.log("Datalar:", state.data.products);
      console.log("payload:", action.payload);
      return {
        ...state,
        data: state.data.products.filter(
          (item) => item.title !== action.payload
        ),
      };

    default:
      return state;
  }
};

const detailProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case DETAIL_PRODUCTS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };

    case DETAIL_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    /*case "DELETE_PRODUCTS":
          console.log("Datalar:", state.data.products);
          console.log("payload:", action.payload);
          return {
            ...state,
            data: state.data.products.filter((item) => item.id !== action.payload),
          };*/

    default:
      return state;
  }
};

export const reducer = combineReducers({
  categories: categoriesReducer,
  products: productReducer,
  detail: detailProductReducer,
});
