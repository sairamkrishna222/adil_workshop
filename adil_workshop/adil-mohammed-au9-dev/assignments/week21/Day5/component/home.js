import React from "react";

import Home1 from "./Home/home1";
import CardExampleCard from "./About/about"
import PageNotFound from "./404page/pageNotFound"
import PrivacyPolicy from "./Privacypolicies/privacypolicies"
import Footer from "./Home/footer"



import { Route, Switch } from "react-router-dom";
const Home = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home1} />
      <Route path="/about" exact component={CardExampleCard} />
      <Route path="/privacypolicy" exact component={PrivacyPolicy} />
      <Route path="/footer" exact component={Footer} />
      <Route path="*" exact component={PageNotFound} />
    </Switch>
  );
};

export default Home;
