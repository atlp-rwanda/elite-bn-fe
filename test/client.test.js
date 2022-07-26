import React from 'react';
import { render } from '@testing-library/react';

import App from '../src/components/app';

test('Initial render, Welcome to BareFoot Nomad frontEnd Tests', () => {
  render(
       <App/>
  );
});
