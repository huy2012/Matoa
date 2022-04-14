import NavMenu from './Components/header/nav/nav_menu';
import Banner from './Components/header/Banner/banner';
import Introduce from './Components/body/Introduce/Introduce';
import MonthlyDeals from './Components/body/MonthlyDeals/MonthlyDeals';
import './App.css';
import './App.scss'

function App() {
  return (
    <div className='app'>
      <NavMenu />

      <Banner />

      <Introduce />

      <MonthlyDeals />
    </div>
  );
}

export default App;
