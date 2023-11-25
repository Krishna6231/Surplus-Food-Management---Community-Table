import { Amplify } from 'aws-amplify';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import './comp.css'
import awsExports from '../aws-exports';
import Cartall from '../Cartall';
Amplify.configure(awsExports);

export default function Auth() {
  return (
    <div className='auth'>
<Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user.username}</h1>
          <Cartall />
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
    </div>
    
  );
}
