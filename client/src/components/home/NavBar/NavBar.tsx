import React, { useEffect } from "react";
import { Nav } from "./NavBarStyle";
import { Link } from "react-router-dom";
import { Menu, Icon, Label } from "semantic-ui-react";
import { getOrders } from "../../productReducer/actions";
import { useDispatch, useSelector } from "react-redux";

const NavBar = () => {
  const dispatch = useDispatch();
  const order = useSelector(({ productReducer }: any) => productReducer.order);
  const NoOfCarts = useSelector(
    ({ productReducer }: any) => productReducer.NoOfCarts
  );
  const orders: any = localStorage.getItem("fashion");

  useEffect(() => {
    getOrders(dispatch);
  }, [order, dispatch]);
  return (
    <Nav>
      <div className='nav-logo'>
        <Link to='/'>
          <h2>Ere Place</h2>
        </Link>
      </div>
      <div className='nav-list'>
        <ul>
          <li>
            <input type='text' placeholder='Search for a clothing...' />
          </li>
        </ul>
      </div>
      <div className='nav-cart'>
        <p>
          <i className='fas fa-heart'></i>
        </p>
        <Menu compact>
          <Menu.Item>
            <Link className='links' to='/cart'>
              <Icon name='cart' size='large' color='orange' />
              <Label color='orange' floating>
                {JSON.parse(orders) === null ? 0 : JSON.parse(orders).length}
              </Label>
            </Link>
          </Menu.Item>
        </Menu>
        {/* </p> */}
        <p>Login</p>
        <p>Register</p>
      </div>
    </Nav>
  );
};

export default NavBar;
