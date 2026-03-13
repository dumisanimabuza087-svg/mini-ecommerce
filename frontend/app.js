import {BrowserRouter,Routes,Route} from "react-router-dom";
import Products from "./Products";
import Categories from "./Categories";

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products/>}/>
        <Route path="/categories" element={<Categories/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App;