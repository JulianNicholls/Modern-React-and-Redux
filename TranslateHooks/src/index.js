import React from 'react';
import { render } from 'react-dom';

import { SettingsProvider } from './context';
import App from './components/App';

render(
  <SettingsProvider>
    <App />
  </SettingsProvider>,
  document.getElementById('root')
);
