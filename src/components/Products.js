import React, { useState } from "react";
import {
  Typography,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
  Stack,
  Box,
} from "@mui/material";

import LoupeIcon from "@mui/icons-material/Loupe";
import IconButton from "@mui/material/IconButton";

import { detailProducts } from "../actions";
import { connect } from "react-redux";

const Products = (props) => {
  const [isActive, setIsActive] = useState(-1);
  return (
    <Grid item xs={6} style={{ padding: "10rem" }}>
      <Paper style={{ padding: "5rem" }}>
        <Typography sx={{ fontSize: "28px", marginBottom: 2 }}>
          Ürünler
        </Typography>
        {props.productsData.products &&
          props.productsData.products.map((item, index) => (
            <>
              <List>
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <LoupeIcon
                        onClick={() => {
                          setIsActive(index);
                          props.detailProducts(item.id);
                        }}
                        onDoubleClick={() => setIsActive(-1)}
                      />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar style={{ backgroundColor: "#0F5672" }}>
                      {item.id}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={item.title} />
                </ListItem>
              </List>
              <Divider />

              {isActive === index && props.productsDetailData.images && (
                <Stack direction="column">
                  <Box
                    width={450} 
                    height={200} 
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <img
                      src={item.images[0]}
                      alt="Kare Görsel"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </Box>
                  <Stack style={{ marginTop: 15, marginLeft: 20 }}>
                    <Typography
                      style={{ fontSize: "18px", fontWeight: "bold" }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="contained"
                      style={{
                        backgroundColor: "#ED6353",
                        fontSize: "14px",
                        fontWeight: "bold",
                        color: "#fff",
                        borderRadius: 5,
                        width: 70,
                        textAlign: "center",
                        padding: 1,
                      }}
                    >
                      {item.stock} item
                    </Typography>

                    <Typography>$ {item.price}</Typography>

                    <Typography style={{ fontSize: "14px", marginTop: 10 }}>
                      {item.description}
                    </Typography>
                  </Stack>
                </Stack>
              )}
            </>
          ))}
      </Paper>
    </Grid>
  );
};
const mapStateToProps = (state) => {
  return {
    productsData: state.products.data,
    productsLoading: state.products.loading,
    productsError: state.products.error,

    productsDetailData: state.detail.data,
    productsDetailLoading: state.detail.loading,
    productsDetailError: state.detail.error,
  };
};

export default connect(mapStateToProps, {
  detailProducts,
})(Products);
