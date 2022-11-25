import * as React from 'react';
import Rides from './Rides'
import Navbar from './Navbar'
import Hero from './Hero'
import Footer from './Footer'
function Ticket() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Rides />
      <Footer />
    </div>
  );
}

export default Ticket;
