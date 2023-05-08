import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './screens/Home';
import MainButton from './components/Button';
import Navigation from './components/Navigation';

export default function App() {
  return (
    <section>
      <Navigation/>
      <Home/>
      <MainButton/>
    </section>    
  )
}