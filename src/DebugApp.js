import React, { useState, useEffect, useRef } from 'react';
import { Segment, Container, Header, Divider, Button, Form, Grid } from 'semantic-ui-react';
import { database } from './firebase';

const App = () => {
  const [data, setData] = useState(null);
  const [formData, setFormData] = useState('');

  const dataRef = useRef(null);

  useEffect(() => {
    dataRef.current = database.ref('/test');

    dataRef.current.on('value', snapshot => {
      setData(snapshot.val());
    });
  }, []);

  const onFormChange = e => {
    const { value } = e.target;

    setFormData(value);
  };

  const onFormSubmit = async e => {
    e.preventDefault();

    dataRef.current.child('new_data').push(formData);
  };

  return (
    <div className="App">
      <Grid centered columns={2}>
        <Grid.Column>
          <Container>
            <Divider hidden />

            <Header as="h1" dividing>
              React + Firebase demo
            </Header>

            <h4>Data:</h4>
            <Segment secondary>
              <pre>{JSON.stringify(data, null, 4)}</pre>
            </Segment>

            <Form onSubmit={onFormSubmit}>
              <Form.Field>
                <label>Update value:</label>
                <input
                  type="text"
                  placeholder="Value..."
                  value={formData}
                  onChange={onFormChange}
                />
              </Form.Field>
              <Button type="submit" fluid color="blue">
                Submit
              </Button>
            </Form>
          </Container>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default App;
