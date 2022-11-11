// import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner/Banner';
import Navbar from './components/NavBar/Navbar';
import Rowpost from './components/Rowpost/Rowpost';
import {action,originals} from './components/urls'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Rowpost url={originals} title='Netflix Originals' />
      <Rowpost url={action} title='Action' isSmall />
      <Rowpost url={action} title='Drama' isSmall />
    </div>
  );
}

export default App;
