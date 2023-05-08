import 'bootstrap/dist/css/bootstrap.min.css';
import MainButton from './components/Button';
import Navigation from './components/Navigation';
import Products from './screens/Products';

const App = () => {
  return (
    <section>
      <Navigation/>
      <Home/>
      <Products/>
      <MainButton/>
    </section>    
  )
}

export default App;