import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// Fade the app in once the web fonts have loaded, so visitors never see a
// flash of fallback-font text. Capped at 1s so a slow font can't block the page.
const showApp = () => document.documentElement.classList.add('app-ready');
if (document.fonts?.ready) {
  Promise.race([document.fonts.ready, new Promise((resolve) => setTimeout(resolve, 1000))]).then(
    showApp,
  );
} else {
  showApp();
}
