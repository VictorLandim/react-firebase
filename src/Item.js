import React from 'react';
import { Card, Button } from 'semantic-ui-react';
import { auth, database } from './firebase';

const Item = ({ name, id, votes }) => {
  const onClick = () => {
    const { uid, displayName } = auth.currentUser;
    console.log('votes', votes);
    const databaseRef = database.ref(`/items/${id}/votes/${uid}`);

    databaseRef.once('value', value => {
      if (value.val() === null) {
        databaseRef.set(displayName);
      } else {
        databaseRef.remove();
      }
    });
  };

  return (
    <Card>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        {/* <Card.Meta>Co-Worker</Card.Meta> */}
        <Card.Meta>
          {votes.map(vote => (
            <p key={vote.id}>{vote.name}</p>
          ))}
        </Card.Meta>
        <Card.Description>
          <Button fluid basic color="blue" onClick={onClick}>
            {votes.map(e => e.id).includes(auth.currentUser.uid) ? 'Remove vote' : 'Vote!'}
          </Button>
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

export default Item;
