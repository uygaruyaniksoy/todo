import { LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { cleanup, render as reactRender, waitFor } from '@testing-library/react';
import axios from 'axios';
import React  from 'react';
import { Provider } from 'react-redux';
import App from './app';
import { store } from './state/store';

const render = (component: JSX.Element) => reactRender(<LocalizationProvider dateAdapter={AdapterDateFns}>
  <Provider store={store}>{component}</Provider>
</LocalizationProvider>);

describe('App', () => {

  afterEach(() => {
    cleanup();
  });

  jest.mock('axios');

  it('should render title successfully', async () => {
    const screen = render(<App/>);

    expect(screen.getByText('todos'))
      .toBeTruthy();
  });

  it('should not render any todo initially', async () => {
    const screen = render(<App/>);

    expect(screen.container.getElementsByClassName('todo-text').length)
      .toEqual(0);
  });

  it('should render successfully', async () => {
    axios.get = jest.fn()
      .mockImplementation(() => Promise.resolve({data: [{_id: '1', text: 'yo'}]}));

    const screen = render(<App/>);
    await waitFor(() => screen.getByText('yo'));

    expect(screen.getByText('yo'))
      .toBeTruthy();
    expect(screen.container.getElementsByClassName('todo-text').length)
      .toEqual(1);
  });
});
