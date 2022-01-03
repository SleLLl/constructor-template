import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import MainPage from '../components/pages';

const ApplicationRouter = (): JSX.Element => (
  <Suspense fallback={<div>...loading</div>}>
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  </Suspense>
);

export default ApplicationRouter;
