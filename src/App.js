//fonts imports
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import React from "react";
//css files
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Background from "./components/Main/Background";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import PhotograhyPage from "./Pages/PhotograhyPage";
import WebDevelopment from "./Pages/WebDevelopment";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import GraphicDesignPage from "./Pages/GraphicDesignPage";
import FoodServicesPage from "./Pages/FoodServicesPage";
import WritingAndTranslationPage from "./Pages/WritingAndTranslationPage";
import Dashboard from "./Pages/Dashboard";
import { Redirect } from "react-router-dom";
const user = JSON.parse(localStorage.getItem("profile"));
// import { useDispatch } from "react-redux";
// import { getPosts } from "./action/posts";

function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getPosts);
  // }, [dispatch]);

  return (
    <div>
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/">
              <Background />   
              <Main />
            </Route>
            <Route exact path="/photography">
              <PhotograhyPage />
            </Route>
            <Route exact path="/webdevelopment">
              <WebDevelopment />
            </Route>
            <Route exact path="/graphic-design">
              <GraphicDesignPage />
            </Route>
            <Route exact path="/food-services">
              <FoodServicesPage />
            </Route>
            <Route exact path="/writing&translation">
              <WritingAndTranslationPage />
            </Route>
            <Route
              path="/profile"
              exact
              component={() => (user ? <Dashboard /> : <Redirect to="/" />)}
            />
          </Switch>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
