import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import MainButton from './components/Button';
import Navigation from './components/Navigation';
import Products from './screens/Products';

const App = () => {
  return (
    <section>
      <Container>
        <Navigation/>
        <Products/>
        <MainButton/>
      </Container>
    </section>    
  )
}

export default App;