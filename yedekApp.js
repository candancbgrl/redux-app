import "./App.css";
import {
  fetchCategories,
  fetchProducts,
  deleteCategory,
  deleteProducts,
  detailProducts,
} from "./actions";

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

const App = (props) => {
  const [isActive, setIsActive] = useState(-1);

  useEffect(() => {
    props.fetchCategories();
  }, []);

  const onHandleClick = (item) => {
    props.fetchProducts(item);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ marginRight: "20rem" }}>
        <div class="text-3xl font-bold underline">Kategoriler</div>
        <div>Total : {props.categoriesData.length}</div>
        {props.categoriesData.map((item, index) => (
          <>
            <div>{item}</div>
            <button
              onClick={() => {
                onHandleClick(item);
              }}
            >
              Ürünler
            </button>
            <button
              onClick={() => {
                props.deleteCategory(item);
              }}
            >
              Sil
            </button>
            <br />
          </>
        ))}
      </div>
      <div>
        <div>Ürünler</div>
        {props.productsData.products &&
          props.productsData.products.map((item, index) => (
            <>
              <div>
                <p>
                  {item.title} - {item.id}
                </p>
              </div>
              <button
                onClick={() => {
                  setIsActive(index);
                  props.detailProducts(item.id);
                }}
                onDoubleClick={() => setIsActive(-1)}
              >
                Ürün Detay
              </button>

              {isActive === index && props.productsDetailData.images && (
                <ul style={{ maxWidth: 100 }}>
                  <li>{props.productsDetailData.id}</li>
                  <li>{props.productsDetailData.title}</li>
                  <li>{props.productsDetailData.description}</li>
                  <li>{props.productsDetailData.price}</li>
                  <li>{props.productsDetailData.stock}</li>
                  <li>{props.productsDetailData.category}</li>
                  <li>{props.productsDetailData.brand}</li>
                  <li>{props.productsDetailData.images[0]}</li>
                </ul>
              )}
            </>
          ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    categoriesData: state.categories.data,
    categoriesLoading: state.categories.loading,
    categoriesError: state.categories.error,

    productsData: state.products.data,
    productsLoading: state.products.loading,
    productsError: state.products.error,

    productsDetailData: state.detail.data,
    productsDetailLoading: state.detail.loading,
    productsDetailError: state.detail.error,
  };
};

export default connect(mapStateToProps, {
  fetchCategories,
  fetchProducts,
  deleteCategory,
  deleteProducts,
  detailProducts,
})(App);
