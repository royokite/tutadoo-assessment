import 'bootstrap/dist/css/bootstrap.min.css';
// import MainButton from './components/Button';
import Navigation from './components/Navigation';
import Products from './screens/Products';
import { Container } from 'react-bootstrap';

const App = () => {
  return (
    <section>
      <Container>
        <Navigation/>
        <Products/>
      </Container>
    </section>    
  )
}

export default App;