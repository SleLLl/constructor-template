import 'react-toastify/dist/ReactToastify.css';

import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import In18Provider from '../context/Intl';
import ApplicationRouter from '../router';
import Themed from '../theme/Themed';
const queryClient = new QueryClient();

const App = (): JSX.Element => (
  <In18Provider>
    <Themed>
      <Router>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <ApplicationRouter />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </QueryClientProvider>
      </Router>
    </Themed>
  </In18Provider>
);

export default App;
