import React, { useEffect } from "react";
import { Nav } from "./NavBarStyle";
import { Link } from "react-router-dom";
import { Menu, Icon, Label } from "semantic-ui-react";
import { getOrders } from "../../productReducer/actions";
import { useDispatch, useSelector } from "react-redux";

const NavBar = ({ state }: any) => {
  const dispatch = useDispatch();
  const orderCount = useSelector(
    ({ productReducer }: any) => productReducer.orders
  );
  const NoOfCarts = useSelector(
    ({ productReducer }: any) => productReducer.order
  );
  const deleteCart = useSelector(
    ({ productReducer }: any) => productReducer.delete_msg
  );
  const deleteWishList = useSelector(
    ({ productReducer }: any) => productReducer.delete_wishlist
  );
  const wishlist: any = localStorage.getItem("wishlist");

  useEffect(() => {
    getOrders(dispatch);
  }, [NoOfCarts, deleteCart, deleteWishList]);
  return (
    <Nav style={state ? { position: "sticky" } : {}} data-aos='zoom-in'>
      <div className='nav-logo'>
        <Link to='/'>
          <h2>Ere Place</h2>
        </Link>
      </div>
      <div className='nav-list'>
        <input type='text' placeholder='Search for a clothing...' />
      </div>
      <div className='nav-cart'>
        {/* <p>
          <i className='fas fa-heart'></i>
          {JSON.parse(wishlist) === null ? 0 : JSON.parse(wishlist).length}
        </p> */}
        <Menu compact style={{ marginRight: "1em !important" }}>
          <Menu.Item>
            <Link className='links' to='/wishlist'>
              <Icon name='heart' size='large' color='teal' />
              <Label color='orange' floating>
                {JSON.parse(wishlist) === null
                  ? 0
                  : JSON.parse(wishlist).length}
              </Label>
            </Link>
          </Menu.Item>
        </Menu>
        <Menu compact>
          <Menu.Item>
            <Link className='links' to='/cart'>
              <Icon name='shopping bag' size='large' color='orange' />
              <Label color='orange' floating>
                {/* {JSON.parse(orders) === null ? 0 : JSON.parse(orders).length} */}
                {orderCount}
              </Label>
            </Link>
          </Menu.Item>
        </Menu>
        {/* </p> */}
        <p className='login'>Login</p>
        <p className='register'>Register</p>
      </div>
    </Nav>
  );
};

export default NavBar;
