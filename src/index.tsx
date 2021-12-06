import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from 'scss/theme';
import store from './store/store';
import App from './App';
import 'modern-normalize/modern-normalize.css';
import './scss/main.scss';

ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Provider store={store.store}>
          <PersistGate loading={null} persistor={store.persistor}>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </PersistGate>
        </Provider>
      </CssBaseline>
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root'),
);
