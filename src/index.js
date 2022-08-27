//import {StrictMode} from 'react';
import React from "react";
import {createRoot} from 'react-dom/client';
import App from './App';
import { AuthContextProvider } from "./context/AuthContext";

//// ✅ correct ID passed
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>,
);

