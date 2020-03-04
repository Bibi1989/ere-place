import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { Div } from "./SideBarStyle";

export const SideComponent1 = () => {
  return (
    <Menu pointing vertical>
      <Div>
        <Menu.Item as='h3' name='Browse Categories' style={style} />
      </Div>
      <Div>
        <Link to='/men' className='links'>
          <Menu.Item name='Men wears' />
        </Link>
      </Div>
      <Div>
        <Link className='links' to='/women'>
          <Menu.Item name='women wear' />
        </Link>
      </Div>
      <Div>
        <Link className='links' to='/'>
          <Menu.Item name='Children wear' />
        </Link>
      </Div>
      <Div>
        <Link className='links' to='/'>
          <Menu.Item name='Shoes' />
        </Link>
      </Div>
      <Div>
        <Link className='links' to='/'>
          <Menu.Item name='Bags' />
        </Link>
      </Div>
    </Menu>
  );
};

export const SideComponent2 = () => {
  return (
    <Menu pointing vertical>
      <Div>
        <Menu.Item as='h3' name='Type Of Wear' style={style} />
      </Div>
      <Div>
        <Link to='/men' className='links'>
          <Menu.Item name='Ankara Native' />
        </Link>
      </Div>
      <Div>
        <Link to='/men' className='links'>
          <Menu.Item name='Native' />
        </Link>
      </Div>
      <Div>
        <Link className='links' to='/women'>
          <Menu.Item name='Orlando Native' />
        </Link>
      </Div>
      <Div>
        <Link className='links' to='/women'>
          <Menu.Item name='English Wear' />
        </Link>
      </Div>
    </Menu>
  );
};

export const SideComponent3 = () => {
  return (
    <Menu pointing vertical>
      <Menu.Item as='h5' name='Browse Categories' />
      <Div>
        <Link className='links' to='/show'>
          <Menu.Item name='English Wear' />
        </Link>
      </Div>
      <Menu.Item name='men wear' />
      <Menu.Item name='shoes' />
      <Menu.Item name='bags' />
    </Menu>
  );
};

const style = {
  color: "orangered"
};
