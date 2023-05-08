import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navigation from './components/Navigation';
import Products from './screens/Products';
import Cart from './screens/Cart';

const App = () => {
  return (
    <section>
      <Container>
        <Navigation/>
        <Products/>
        <Cart/>
      </Container>
    </section>    
  )
}

export default App;