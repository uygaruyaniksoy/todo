import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './app/app';
import { store } from './app/state/store';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { LocalizationProvider } from '@mui/lab';

ReactDOM.render(
  <LocalizationProvider dateAdapter={AdapterDateFns}>
    <Provider store={store}>
      <StrictMode>
        <App />
      </StrictMode>
    </Provider>
  </LocalizationProvider>
  ,
  document.getElementById('root')
);
