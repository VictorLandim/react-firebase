import React from 'react';
import { Card } from 'semantic-ui-react';
import Item from './Item';

const ItemList = ({ items }) => (
  <Card.Group itemsPerRow={3}>
    {items.map(item => (
      <Item key={item.id} {...item} />
    ))}
  </Card.Group>
);
export default ItemList;
