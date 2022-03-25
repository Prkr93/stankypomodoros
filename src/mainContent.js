import React from 'react';
import Dashboard from './dashboard';

const MainContent = ({ movieRepo }) => {

  return (
    <main>
      <Dashboard movieRepo={movieRepo} />
    </main>
  )
}

export default MainContent;
