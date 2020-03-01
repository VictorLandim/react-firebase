import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react';
import { auth } from './firebase';

const CurrentUser = ({ user }) => {
  const onSignOut = () => auth.signOut();

  return (
    <Card>
      <Card.Content>
        <Image rounded floated="left" size="tiny" src={user.photoURL} />
        <Card.Header>{user.displayName}</Card.Header>
        <Card.Meta>{user.email}</Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <Button fluid color="red" onClick={onSignOut}>
          Sign out
        </Button>
      </Card.Content>
    </Card>
  );
};
export default CurrentUser;
