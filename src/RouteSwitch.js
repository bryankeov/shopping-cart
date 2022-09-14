import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from "./App";
import Cart from "./components/Cart";
import Shop from "./Shop";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/shop" element={<Shop/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch;