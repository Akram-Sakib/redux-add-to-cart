import { useState } from "react";
import { Provider } from "react-redux";
import "./App.css";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import store from "./redux/store";

function App() {
  const [route, setRoute] = useState("/home");

  return (
    <Provider store={store}>
      <Navbar setRoute={setRoute} />
      {route === "/home" ? <Home /> : <Cart />}
    </Provider>
  );
}

export default App;
