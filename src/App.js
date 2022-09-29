//fonts imports

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React, { useEffect } from 'react';

//css files

import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Background from "./components/Main/Background";
import Header from "./components/Header/Header";
import PhotograhyPage from "./Pages/PhotograhyPage";
import WebDevelopment from "./Pages/WebDevelopment";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GraphicDesignPage from "./Pages/GraphicDesignPage";
import FoodServicesPage from "./Pages/FoodServicesPage";
import WritingAndTranslationPage from "./Pages/WritingAndTranslationPage";

import FooterMain from "./components/Footer/FooterMain";
import Dashboard from "./Pages/Dashboard";
import AboutUS from "./Pages/AboutUS";
const user = JSON.parse(localStorage.getItem("profile"));


function App() {
  return (
    <div>
      <Router>        
        <div>
          <Header />
          <Switch>
            <Route exact path='/'>
              <Background />

            </Route>
            <Route exact path='/photography'>
              <PhotograhyPage />
            </Route>
            <Route exact path="/webdevelopment">
              <WebDevelopment />
            </Route>
            <Route exact path="/graphic-design">
              <GraphicDesignPage />
            </Route>
            <Route exact path='/food-services'>
              <FoodServicesPage />
            </Route>
            <Route exact path='/writing&translation'>
              <WritingAndTranslationPage />
            </Route>

            <Route exact path="/about-us">
              <AboutUS />
            </Route>
            <Route exact path='/forgetpassword'></Route>
          </Switch>
         <FooterMain/>
        </div>
      </Router>
    </div>
  );
}

export default App;
