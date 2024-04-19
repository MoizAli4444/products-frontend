import logo from './logo.svg';
import './App.css';
import ProductList from './Components/ProductList';
import AddProduct from './Components/AddProduct';
import { BrowserRouter as Router, Route, Switch, Routes, BrowserRouter } from 'react-router-dom';
import ProductDetails from './Components/ProductDetails';
import EditProduct from './Components/EditProduct';

function App() {
  return (

    <>
      {/* <ProductList /> */}
      {/* <AddProduct /> */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<ProductList />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/view-product/:id" element={<ProductDetails />} />
          <Route path="/edit-product/:id" element={<EditProduct />} />
        </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;
