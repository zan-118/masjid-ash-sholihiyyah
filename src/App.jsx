import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Activities from "./pages/Activities";
import Information from "./pages/Information";
import Organization from "./pages/Organization";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/activities" Component={Activities} />
            <Route path="/information" Component={Information} />
            <Route path="/organization" Component={Organization} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
