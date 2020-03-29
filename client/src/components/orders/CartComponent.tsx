import React, { useEffect, useState } from "react";
import { Table, Header, Button, Icon } from "semantic-ui-react";
import { Div } from "./CartComponentStyle";
import { getOrders, deleteOrder } from "../productReducer/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartComponent = () => {
  const dispatch = useDispatch();
  const order: any = localStorage.getItem("fashion");
  let orders: any = JSON.parse(order) || [];
  console.log(orders);
  const delete_msg = useSelector(
    ({ productReducer }: any) => productReducer.delete_msg
  );
  const total_price: number | null = orders.reduce(
    (a: number, v: any) => (a += parseInt(v.price) * parseInt(v.quantity)),
    0
  );
  useEffect(() => {
    // eslint-disable-next-line
  }, [delete_msg]);
  const removeCart = (id: string) => {
    orders = orders.filter((order: any) => order.id !== id);
    localStorage.setItem("fashion", JSON.stringify(orders));
    deleteOrder(dispatch, id, orders.length);
  };
  return (
    <Div data-aos='fade-left'>
      <h1>Your Cart</h1>
      <Table celled padded>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell singleLine>Product Image</Table.HeaderCell>
            <Table.HeaderCell>Product Category</Table.HeaderCell>
            <Table.HeaderCell>
              Product Description / Category_type
            </Table.HeaderCell>
            <Table.HeaderCell>Category</Table.HeaderCell>
            <Table.HeaderCell>Quantity</Table.HeaderCell>
            <Table.HeaderCell>Price</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {orders.map((order: any, i: number) => {
            let b: any = [];
            JSON.parse(order.image_url).forEach((a: any) => {
              b.push(a);
            });
            return (
              <Table.Row
                key={order.id}
                data-aos='zoom-in-up'
                data-aos-delay={(i + 1) * 100}
              >
                <Table.Cell
                  style={{ padding: "0 !important", margin: "0 !important" }}
                >
                  <Header as='h2' textAlign='center' style={{ width: "80px" }}>
                    <Link to={`/single/${order.id}`}>
                      <img
                        src={b[0]}
                        alt={order.title}
                        style={{
                          width: "100px",
                          height: "100px",
                          borderRadius: "10%"
                        }}
                      />
                    </Link>
                  </Header>
                </Table.Cell>
                <Table.Cell singleLine>{order.title}</Table.Cell>
                <Table.Cell textAlign='right'>
                  {order.description} <br />
                  <a href='!#'>{order.category_type}</a>
                </Table.Cell>
                <Table.Cell>{order.category}</Table.Cell>
                <Table.Cell>{order.quantity}</Table.Cell>
                <Table.Cell style={{ width: "100px" }}>
                  <span>&#8358;</span> {order.price}
                  <br />
                  <br />
                  <Button
                    style={{ background: "white" }}
                    onClick={() => removeCart(order.id)}
                  >
                    <Icon size='large' name='trash' color='red' />
                  </Button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>

      <h1 data-aos='zoom-in-up'>
        <span>Total Amount: </span> <span>&#8358;</span>{" "}
        <span>{total_price !== null && total_price}</span>
      </h1>
    </Div>
  );
};

export default CartComponent;
