import React, { useEffect, useState } from "react";
import { Table, Header, Button, Icon } from "semantic-ui-react";
import { Div } from "./CartComponentStyle";
import { getOrders, deleteOrder } from "../productReducer/actions";
import { useDispatch, useSelector } from "react-redux";

const CartComponent = () => {
  const dispatch = useDispatch();
  const [state, setstate] = useState(1);
  //   const orders = useSelector(
  //     ({ productReducer }: any) => productReducer.orders
  //   );
  const order: any = localStorage.getItem("fashion");
  let orders = JSON.parse(order);
  const delete_msg = useSelector(
    ({ productReducer }: any) => productReducer.order
  );
  const total_price = orders.reduce(
    (a: number, v: any) => (a += parseInt(v.price) * parseInt(v.quantity)),
    0
  );
  //   console.log(total_price);
  useEffect(() => {
    // eslint-disable-next-line
  }, [state]);
  console.log("Delete msg", delete_msg);
  const removeCart = (id: string) => {
    setstate(c => c + 1);
    orders = orders.filter((order: any) => order.id !== id);
    localStorage.setItem("fashion", JSON.stringify(orders));
    deleteOrder(dispatch, id);
  };
  return (
    <Div>
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
          {orders.map((order: any) => {
            let b: any = [];
            JSON.parse(order.image_url).map((a: any) => {
              b.push(a);
            });
            return (
              <Table.Row key={order.id}>
                <Table.Cell
                  style={{ padding: "0 !important", margin: "0 !important" }}
                >
                  <Header as='h2' textAlign='center' style={{ width: "80px" }}>
                    <img src={b[0]} alt={order.title} style={{width: '100px', height: '100px', borderRadius: '10%'}} />
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
                  <Button color='red' icon onClick={() => removeCart(order.id)}>
                    <Icon name='minus' />
                  </Button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>

      <h1>
        <span>Total Amount: </span> <span>&#8358;</span>{" "}
        <span>{total_price}</span>
      </h1>
    </Div>
  );
};

export default CartComponent;
