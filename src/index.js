import React from "react";

import { createRoot } from "react-dom/client";

import GlobalStyle from './styles/global';

import App from './components/App';

const container = document.getElementById('root');

const root = createRoot(container);

root.render(
    <>
        <GlobalStyle />
        <App />
    </>
);