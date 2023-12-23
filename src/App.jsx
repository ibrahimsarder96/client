import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import SingleProduct from "./pages/SingleProduct/SingleProduct"
import AppContext from "./utils/context"
import Header from "./pages/Header/Header"
import Footer from "./pages/Footer/Footer"
import "../index.scss"
function App() {

  return (
    <div>
    <BrowserRouter>
    <AppContext>
    {/* <Header/> */}
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/product/:id" element={<SingleProduct/>}/>
    </Routes>
    <Footer/>
    </AppContext>
    </BrowserRouter>
    </div>
  )
}

export default App
