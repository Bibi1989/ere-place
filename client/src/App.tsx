import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import ShowProducts from "./components/products/ShowProducts";
import NavBar from "./components/home/NavBar/NavBar";
import SideBar from "./components/home/SideBar/SideBar";
import ProductSection from "./components/home/ProductsComponent/ProductSection";
import SingleProduct from "./components/home/ProductsComponent/SingleProduct/SingleProduct";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/'>
            <div className='App'>
              <>
                <SideBar />
                <ProductSection />
              </>
            </div>
          </Route>
          <Route exact path='/single/:singleId'>
            <SingleProduct />
          </Route>
          <Route exact path='/show'>
            <ShowProducts />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
