import React from 'react';
import LargestProxy from './Sections/LargestProxy';
import Designed from './Sections/Designed';
import UseCases from './Sections/UseCases';

const HomePage = () => {
  return (
    <div className="HomePage">
      <LargestProxy />
      <Designed />
      <UseCases />
    </div>
  )
}

export default HomePage;
