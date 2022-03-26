import React from 'react';
import Dashboard from './dashboard';

const MainContent = ({ movieRepo, filterOption }) => {

  return (
    <main>
      <Dashboard movieRepo={movieRepo} filterOption={filterOption} />
    </main>
  )
}

export default MainContent;
