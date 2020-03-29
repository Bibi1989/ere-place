import React, { useEffect, useState } from "react";
import { Table, Header, Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { Div } from "../orders/CartComponentStyle";
import { deleteWishList } from "../productReducer/actions";
import { useDispatch, useSelector } from "react-redux";

const WishList = () => {
  const dispatch = useDispatch();
  const delete_wishlist = useSelector(
    ({ productReducer }: any) => productReducer.delete_wishlist
  );
  const wish: any = localStorage.getItem("wishlist");
  let wishlists = JSON.parse(wish) || [];
  useEffect(() => {
    // eslint-disable-next-line
  }, [delete_wishlist]);
  const removeCart = (id: string) => {
    wishlists = wishlists.filter((wishlist: any) => wishlist.id !== id);
    localStorage.setItem("wishlist", JSON.stringify(wishlists));
    deleteWishList(dispatch, id, wishlists.length);
  };
  return (
    <Div data-aos='fade-left'>
      <h1>Your WishList</h1>
      <Table celled padded>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell singleLine>Product Image</Table.HeaderCell>
            <Table.HeaderCell>Product Category</Table.HeaderCell>
            <Table.HeaderCell>
              Product Description / Category_type
            </Table.HeaderCell>
            <Table.HeaderCell>Category</Table.HeaderCell>
            <Table.HeaderCell>Price</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {wishlists.map((wishlist: any) => {
            let b: any = [];
            JSON.parse(wishlist.image_url).map((a: any) => {
              b.push(a);
            });
            return (
              <Table.Row key={wishlist.id} data-aos='zoom-in-up'>
                <Table.Cell
                  style={{ padding: "0 !important", margin: "0 !important" }}
                >
                  <Header as='h2' textAlign='center' style={{ width: "80px" }}>
                    <Link to={`/single/${wishlist.id}`}>
                      <img
                        src={b[0]}
                        alt={wishlist.title}
                        style={{
                          width: "100px",
                          height: "100px",
                          borderRadius: "10%"
                        }}
                      />
                    </Link>
                  </Header>
                </Table.Cell>
                <Table.Cell singleLine>{wishlist.title}</Table.Cell>
                <Table.Cell textAlign='right'>
                  {wishlist.description} <br />
                  <a href='!#'>{wishlist.category_type}</a>
                </Table.Cell>
                <Table.Cell>{wishlist.category}</Table.Cell>
                {/* <Table.Cell>{wishlist.quantity}</Table.Cell> */}
                <Table.Cell style={{ width: "100px" }}>
                  <span>&#8358;</span> {wishlist.price}
                  <br />
                  <br />
                  <Button
                    style={{ background: "white" }}
                    onClick={() => removeCart(wishlist.id)}
                  >
                    <Icon size='large' color='red' name='trash' />
                  </Button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </Div>
  );
};

export default WishList;
