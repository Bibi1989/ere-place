import React from "react";
import { Menu } from "semantic-ui-react";

export const SideComponent1 = ({ men }: any) => {
  return (
    <Menu pointing vertical>
      <Menu.Item as='h5' name='Browse Categories' />
      <Menu.Item name='men wear' />
      <Menu.Item name='women wear' />
      <Menu.Item name='children wear male' />
      <Menu.Item name='children wear female' />
      <Menu.Item name='shoes' />
      <Menu.Item name='bags' />
    </Menu>
  );
};

export const SideComponent2 = () => {
  return (
    <Menu pointing vertical>
      <Menu.Item as='h5' name='Browse Categories' />
      <Menu.Item name='men wear' />
      <Menu.Item name='women wear' />
      <Menu.Item name='children wear male' />
      <Menu.Item name='children wear female' />
      <Menu.Item name='shoes' />
      <Menu.Item name='bags' />
    </Menu>
  );
};

export const SideComponent3 = () => {
  return (
    <Menu pointing vertical>
      <Menu.Item as='h5' name='Browse Categories' />
      <Menu.Item name='men wear' />
      <Menu.Item name='shoes' />
      <Menu.Item name='bags' />
    </Menu>
  );
};
