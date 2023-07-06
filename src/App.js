import { fetchCategories } from "./actions";

import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Navbar } from "./components/Navbar";

import { Grid } from "@mui/material";

import Categories from "./components/Categories";
import Products from "./components/Products";

const App = (props) => {
  useEffect(() => {
    props.fetchCategories();
  }, []);

  return (
    <>
      <Navbar />
      <Grid
        container
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#F8F8F8",
        }}
      >
        <Categories />
        <Products />
      </Grid>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    state
  };
};

export default connect(mapStateToProps, {
  fetchCategories,
})(App);
