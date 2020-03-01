import React, { useState, useEffect, useRef } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { database } from './firebase';

const NewItem = () => {
  const [item, setItem] = useState('');
  const databaseRef = useRef(null);

  const onSubmit = e => {
    e.preventDefault();

    if (item) {
      databaseRef.current.push({ name: item });
      setItem('');
    }
  };

  const onChange = e => setItem(e.target.value);

  useEffect(() => {
    databaseRef.current = database.ref('/items');
  }, []);

  return (
    <Form onSubmit={onSubmit}>
      <Form.Field>
        <label>Insert new item:</label>
        <input type="text" placeholder="Item..." value={item} onChange={onChange} />
      </Form.Field>
      <Button type="submit" color="blue">
        Submit
      </Button>
    </Form>
  );
};

export default NewItem;
