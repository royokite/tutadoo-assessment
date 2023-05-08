import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navigation from './components/Navigation';
import Products from './screens/Products';
import Cart from './screens/Cart'
import EachProduct from './screens/EachProduct';

const App = () => {
  return (
    <BrowserRouter>
      <section>
        <Container>
          <Navigation/>
          <Routes>
            <Route exact path="/" element={<Products />} />
            <Route exact path="/products" element={<Products />} />
            <Route exact path="/products/:id" element={<EachProduct />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route path="*" element={<h1 className="text-green-600/100 text-5xl">404 Not Found!</h1>} />
          </Routes>
        </Container>
      </section>
    </BrowserRouter>
  )
}

export default App;