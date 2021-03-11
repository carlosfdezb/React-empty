import React, { Suspense } from 'react';
import { Router } from '@reach/router';
import GlobalStyles from './styles/GlobalStyles';

const App = () => {
  return (
    <Suspense fallback={<div />}>
      <GlobalStyles />
      <Router />
    </Suspense>
  );
};

export default App;
