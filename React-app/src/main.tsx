import React from "react";
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Test} from "./components/Test";
import App from "./App"
import './App.css'

const rootElement = document.getElementById("root")
if (!rootElement) throw new Error('Failed to find the root element');
const root = createRoot(rootElement);

root.render(<Router>
  <Routes>
    <Route path="/test" element={<Test/>} />
    <Route path="/" element={<App/>} />
  </Routes>
</Router>,)