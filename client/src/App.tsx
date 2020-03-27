import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import NavBar from "./components/home/NavBar/NavBar";
import SideBar from "./components/home/SideBar/SideBar";
import ProductSection from "./components/home/ProductsComponent/ProductSection";
import SingleProduct from "./components/home/ProductsComponent/SingleProduct/SingleProduct";
import AddProducts from "./components/home/AddProducts/AddProducts";
import TrySomething from "./components/home/TrySomething";
import AllMen from "./components/home/ProductsComponent/CategoryComponents/AllProducts/AllMen/AllMen";
import AllWomen from "./components/home/ProductsComponent/CategoryComponents/AllProducts/AllWomen/AllWomen";
import CartComponent from "./components/orders/CartComponent";
import WishList from "./components/wishlist/WishList";

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
            <TrySomething />
          </Route>
          <Route exact path='/men'>
            <AllMen />
          </Route>
          <Route exact path='/women'>
            <AllWomen />
          </Route>
          <Route exact path='/cart'>
            <CartComponent />
          </Route>
          <Route exact path='/wishlist'>
            <WishList />
          </Route>
          <Route exact path='/single/:singleId'>
            <SingleProduct />
          </Route>
          <Route exact path='/show'>
            <AddProducts />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
