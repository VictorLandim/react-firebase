import React from 'react';
import { auth, googleAuthProvider } from './firebase';
import { Container, Button } from 'semantic-ui-react';

const SignIn = () => {
  const onSignIn = () => auth.signInWithPopup(googleAuthProvider);

  return (
    <Container textAlign="center">
      <p>It appears that you're not signed in.</p>
      <Button onClick={onSignIn} size="large" primary>
        Sign in
      </Button>
    </Container>
  );
};

export default SignIn;
