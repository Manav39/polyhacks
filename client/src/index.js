import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Navbar from "./components/Navbar";
import { FirebaseProvider } from "./context/Firebase";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
     <BrowserRouter>
    <FirebaseProvider>
    <Navbar/>
        <App />
    </FirebaseProvider>
    </BrowserRouter>
  </React.StrictMode>
);
