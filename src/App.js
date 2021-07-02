import React, { Suspense } from "react";
import "./App.scss";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

import { Menu } from "./data/MenuData";

import { BrowserRouter as Rounter, Route, Switch } from "react-router-dom";

const Homepage = React.lazy(() => import("./pages/Homepage"));
const Hakkimizda = React.lazy(() => import("./pages/Hakkimizda"));
const Iletisim = React.lazy(() => import("./pages/Iletisim"));
const NewsDetail = React.lazy(() => import("./pages/NewsDetail"));

function App() {
  return (
    <div className="App">
      <Rounter>
        <Header>
          {Menu.map((menu) => (
            <Navigation id={menu.id} name={menu.menuItem} url={menu.URL} />
          ))}
        </Header>

        <Suspense fallback={<div>Yüklenirken...</div>}>
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/about" component={Hakkimizda} />
            <Route path="/contact" component={Iletisim} />
            <Route path="/detail/:id/" component={NewsDetail} />
          </Switch>
        </Suspense>

        <Footer />
      </Rounter>
    </div>
  );
}

export default App;
