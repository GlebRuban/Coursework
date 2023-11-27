import './css/Home.css'

import Home from './page/Home';

import {Route,Link,Routes} from 'react-router-dom'
import Poster from './page/Poster';
import Contact from './page/Contact';
import BuyFormTickets from './page/BuyFormTickets';
import Gallery from './page/Gallery';
function App() {
  return (
    <>
      {/* header */}
      <section>
        <header className='header'>
        <Link className='logo_name' to="/">Сайт концертно <li>экскурсионных программ</li></Link>
        <nav className='nav_menu'>
          <Link className="a" to="Poster">Афиша</Link>
          <li>
            <Link className='a' to='Buy'>Заказ билетов</Link>
          </li>
          <li>
            <Link className="a"  to='Contact'>Контакты</Link>
          </li>
          <a href='#' className='a'>История дворца</a>
          <Link className='a' to='Gallery'>Галерея</Link>
          <a href='#' className='a'>Планы залов</a>
        </nav>
      </header>
      </section>
      <Routes>
        <Route path='/Poster' element={<Poster/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Buy' element={<BuyFormTickets/>}/>
        <Route path='/Gallery' element={<Gallery/>}/>
      </Routes>
    </>);
}

export default App;
