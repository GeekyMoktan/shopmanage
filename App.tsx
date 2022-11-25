import * as React from 'react';
import './style.css';
import Ticket from './components/TicketManagement';

//context
import { UserAuthProvider } from './context/userAuth';

import { RideAuthProvider } from './context/rideAuth';

export default function App() {
  return (
    <div>
      <UserAuthProvider>
        <RideAuthProvider>
          <Ticket />
        </RideAuthProvider>
      </UserAuthProvider>
    </div>
  );
}
