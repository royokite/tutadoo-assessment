import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navigation from './components/Navigation';
import Products from './screens/Products';
import Cart from './screens/Cart'
import EachProduct from './screens/EachProduct';
import { ProductList } from "./ProductList";

const App = () => {
  return (
    <BrowserRouter>
      <section>
        <Container>
          <Navigation/>
          <Routes>
            <Route exact path="/" element={<Products ProductList={ProductList} />} />
            <Route exact path="/products" element={<Products ProductList={ProductList} />} />
            <Route exact path="/products/:id" element={<EachProduct ProductList={ProductList} />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route path="*" element={<h1 className="text-green-600/100 text-5xl">404 Not Found!</h1>} />
          </Routes>
        </Container>
      </section>
    </BrowserRouter>
  )
}

export default App;