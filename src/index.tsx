import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Three } from './Three';

const App = () => (
  <div>
    <h1>This is Three and React</h1>
  </div>
);

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <App />
    <Three />
  </StrictMode>,
);
