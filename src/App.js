import React from "react";
import { IconContext } from "react-icons";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import VideosWrapper from "./components/VideosWrapper";
import { AppContext } from "./context/contextApi";


const App = () => {
  return (
    <IconContext.Provider
      value={{ color: "black", className: "global-class-name" }}
    >
      <AppContext>
        <BrowserRouter>
          <div className="flex flex-col h-full">
            <Header />
            <Routes>
              <Route path="/" exact element={<VideosWrapper />} />
              <Route
                path="/searchResult/:searchQuery"
              />
              <Route path="/video/:id"  />
            </Routes>
          </div>
        </BrowserRouter>
      </AppContext>
    </IconContext.Provider>
  );
};

export default App;
