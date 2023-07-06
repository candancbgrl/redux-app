import React, { useState } from "react";
import { fetchProducts, deleteCategory } from "../actions";
import { connect } from "react-redux";
import {
  Typography,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  Button,
  ListItemText,
  Divider,
  Pagination,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";

const Categories = (props) => {
  const onHandleClick = (item) => {
    props.fetchProducts(item);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * 5;
  const endIndex = startIndex + 5;
  const displayedData = props.categoriesData.slice(startIndex, endIndex);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };
  return (
    <Grid item xs={6} style={{ padding: "10rem" }}>
      <Paper style={{ padding: "5rem" }}>
        <Typography sx={{ fontSize: "28px", marginBottom: 2 }}>
          Kategoriler / {props.categoriesData.length}{" "}
        </Typography>
        <Grid style={{ minHeight: 470 }}>
          {displayedData.map((item, index) => (
            <>
              <List>
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete" color="error">
                      <DeleteIcon
                        onClick={() => {
                          props.deleteCategory(item);
                        }}
                      />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Button>
                      <Avatar style={{ backgroundColor: "#ED6353" }}>
                        <ProductionQuantityLimitsIcon
                          onClick={() => {
                            onHandleClick(item);
                          }}
                        />
                      </Avatar>
                    </Button>
                  </ListItemAvatar>
                  <ListItemText primary={item} />
                </ListItem>
              </List>
              <Divider />
            </>
          ))}
        </Grid>

        <Grid>
          <Pagination
            count={Math.ceil(props.categoriesData.length / 5)}
            page={currentPage}
            onChange={handlePageChange}
          />
        </Grid>
      </Paper>
    </Grid>
  );
};
const mapStateToProps = (state) => {
  return {
    categoriesData: state.categories.data,
    categoriesLoading: state.categories.loading,
    categoriesError: state.categories.error,
  };
};

export default connect(mapStateToProps, {
  fetchProducts,
  deleteCategory,
})(Categories);
