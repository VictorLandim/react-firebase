import React, { useEffect, useState, useRef } from 'react';
import { Grid, Container, Divider, Header, Segment } from 'semantic-ui-react';
import { auth, database } from './firebase';
import SignIn from './SignIn';
import CurrentUser from './CurrentUser';
import NewItem from './NewItem';
import ItemList from './ItemList';

const App = () => {
  const [user, setUser] = useState(null);
  const [items, setItems] = useState([]);
  const databaseRef = useRef(null);

  useEffect(() => {
    databaseRef.current = database.ref('/items');
    auth.onAuthStateChanged(currentUser => {
      setUser(currentUser);

      databaseRef.current.on('value', snapshot => {
        if (snapshot.val()) {
          const items = Object.entries(snapshot.val()).map(e => {
            const id = e[0];
            let { name, votes } = e[1];

            const votesArray = votes
              ? Object.entries(votes).map(v => ({ id: v[0], name: v[1] }))
              : [];

            return { id, name, votes: votesArray };
          });

          setItems(items);
        }
      });
    });
  }, []);

  return (
    <Grid centered columns={2}>
      <Grid.Column>
        <Container>
          <Divider hidden />

          <Header as="h1" dividing>
            React + Firebase pool app
          </Header>

          {user ? (
            <>
              <NewItem />

              <Divider />

              <ItemList items={items} />

              <Divider />

              <CurrentUser user={user} />
            </>
          ) : (
            <SignIn />
          )}
        </Container>
      </Grid.Column>
    </Grid>
  );
};

export default App;
