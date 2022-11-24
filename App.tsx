import * as React from 'react';
import './style.css';
import Ticket from './components/TicketManagement'

//context
import {UserAuthProvider} from './context/userAuth'

export default function App() {
  return (
    <div>
      <UserAuthProvider>
          <Ticket />
      </UserAuthProvider>
    </div>
  );
}
