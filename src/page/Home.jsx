import '../css/Home.css'
import content from "../images/slider__main-image.png"
import thumb from "../images/thumb-slider__image1.png"
import thumb2 from "../images/thumb-slider__image.png"
import heading from "../images/heading.png"
import content2 from "../images/poster__image.png"
import music from "../images/Music.png"
import time from "../images/Time.png"
import age from "../images/age.png"
import news1 from "../images/news1.png"
import news2 from "../images/news2.png"
import poster from "../images/calendar.png"  
import calendar from "../images/heading.png"
import { Link } from 'react-router-dom';
import {Carousel} from '../components/carousel/Carousel'; 


export default function Home (){
  return <>
    {/* content */}
    <section className="section_content">
      <Carousel>
      <div className="div_img">
        <img  src = {content} className="img"/>
        <img  src = {content} className="img"/> 
        <img  src = {content} className="img"/> 
        <img  src = {content} className="img"/>     
      </div>
      </Carousel>
      <div className="thumb_div">
        <div className="thumb_one">
          <img src={thumb} alt="thumb"/>
          <p>Опера VS Оперетта</p>
        </div>
        <div className="thumb_second">
          <img src={thumb2} alt="thumb"/>
          <p>Антонио Вивальди.Времена года</p>
        </div> 
      </div>
    </section>
    {/* poster */}
    <section className="conteiner">
      <div className="poster_div">
        <h1>Афиша</h1>
        <div className="events">
          <img src={calendar} alt="calendar" />
        <a href="">Все мероприятия</a>
        </div>
      </div>
      <div className="style">
        <div className="first_div">
          <h1 className="h1">3 <span className="span_h1">ОКТЯБРЬ</span></h1>
          <img src={content} alt="" className="content_img"/>
        </div>
        <div className="name_content">
          <h1>Антонио Вивальди.Времена <span>года</span></h1>
          <p>Посвящение Фрэнку Синатре</p>
          <div className="attribute">
            <p className="music">
              <img src={music} alt="music" />
              Джаз
            </p>
            <p className="time">
              <img src={time} alt="time" />
              19:00
            </p>
            <p className="age">
              <img src={age} alt="age" />
              6+
            </p>
          </div>
        </div>
        <div className="div_btn">
          <Link type="button" className="btn_order" to="/Buy">
            <span className="order">Заказать билет</span>
          </Link>
        </div>
      </div>
      {/* Второй контент */}
      <div className="style_second" >
        <div className="first_div">
          <h1 className="h1">30 <span className="span_h1">ОКТЯБРЬ</span></h1>
          <img src={content2} alt="" className="content_img"/>
        </div>
        <div className="name_content_second">
          <h1>Опера VS Оперетта</h1>
          <p>Санкт-Петербургский камерный оркестр Olympic <span>Orchestra</span></p>
          <div className="attribute_second">
            <p className="music">
              <img src={music} alt="music" />
              Классика
            </p>
            <p className="time_second">
              <img src={time} alt="time" />
              21:00
            </p>
            <p className="age_second">
              <img src={age} alt="age" />
              13+
            </p>
          </div>
        </div>
        <div className="div_btn">
          <Link type="button" className="btn_order" to="/Buy">
            <span className="order">Заказать билет</span>
          </Link>
        </div>
      </div>
    </section>
    {/* news_section */}
    <section className="news_section">
      <div className="div_news">
        <h1 className="text_news">Новости</h1>
        <div className="main_div_news">
          <div className="news_main">
            <img src={news2} alt="News" className="news_one"/>
            <h3>Переносы / Отмена <span>мероприятия</span></h3>
            <p className="transfer">11.04.2023 г. в 19.10 час. — концерт 
              <span>«Опера vs. Оперетта» - ПЕРЕНОС на</span> 05.06.2023 г. в 19.00 час.
            </p>
          </div>
          <div className="div_news_second">
            <img src={news1} alt="News" className="news_second"/>
            <h3>Переносы / Отмена <span>мероприятия</span></h3>
            <p className="news_p">11.04.2023 г. в 21.10 час. — концерт 
              <span>«Антонио Вивальди.Времена года» - ПЕРЕНОС на</span> 05.06.2023 г. в 21.10 час.
            </p>
          </div>
        </div>
      </div>
      <div className="excursions">
        <img src={poster} alt="" className="excurs_img" />
        <h2 className="h2-excurs">Обзорные экскурсии</h2>
        <div className="sightseeing_tours">
          <div className="tours_div">
            <h1>Июнь</h1>
            <div className="div__btn">
            <button><span>ᐊ</span></button>
            <button><span>ᐅ</span></button>
            </div>
          </div>
        </div>
        <div className='divTable'>
        <table>
        <tbody className='tbody'>
          <tr className='tr'>
            <td className='td'>1</td>
            <td className='td'>1</td>
            <td className='td'>1</td>
            <td className='td'>1</td>
            <td className='td'>1</td>
          </tr>
          <tr className='tr2'>
            <td className='td2'>2</td>
            <td className='td2'>2</td>
            <td className='td2'>2</td>
            <td className='td2'>2</td>
            <td className='td2'>2</td>
          </tr>
          <tr className='tr'>
            <td className='td'>1</td>
            <td className='td'>1</td>
            <td className='td'>1</td>
            <td className='td'>1</td>
            <td className='td'>1</td>
          </tr>
          <tr className='tr2'>
            <td className='td2'>2</td>
            <td className='td2'>2</td>
            <td className='td2'>2</td>
            <td className='td2'>2</td>
            <td className='td2'>2</td>
          </tr>
          <tr className='tr'>
            <td className='td'>1</td>
            <td className='td'>1</td>
            <td className='td'>1</td>
            <td className='td'>1</td>
            <td className='td'>1</td>
          </tr>
          <tr className='tr2'>
            <td className='td2'>2</td>
            <td className='td2'>2</td>
            <td className='td2'>2</td>
            <td className='td2'>2</td>
            <td className='td2'>2</td>
          </tr>
        </tbody>
        </table>
        </div>
      </div>
    </section>
    {/* annonce_section */}
    <section className="annonce_section">
    <div className="announce_div">
      <h1>Краткие анонсы</h1>
      <div className="events_annonce">
        <img src={heading} alt="heading" />
      <a href="">Все мероприятия</a>
      </div>
    </div>
    <div className="glav_month_div">
      <div className="day_div">
        <div className="month_div">
          <p className="month_day">30 <span className="month_span">ОКТЯБРЬ</span> </p>
        </div>
        <h3 className="name_annonce">"Век имени Синатры"</h3>
      </div>
      <div className="day_div">
        <div className="month_div_second">
          <p className="month_day_second">3 <span className="month_span_second">Октября</span> </p>
        </div>
        <h3 className="name_annonce_second">"Идиот по роману Достоевского"</h3>
      </div>
      <div className="day_div">
        <div className="month_div_three">
          <p className="month_day_three">14 <span className="month_span_three">Декабря</span> </p>
        </div>
        <h3 className="name_annonce_three">"Новогодний концерт"</h3>
      </div>
      <div className="day_div">
        <div className="month_div_four">
          <p className="month_day_four">10 <span className="month_span_four">Января</span> </p>
        </div>
        <h3 className="name_annonce_four">"Век желаний и надежд"</h3>
      </div>
    </div> 
    </section>
    {/* footer */}
    <section className="footer_section">
          <div className='footer_div'>
            <h3 className='logo_footer'>Сайт концертно <li>экскурсионных программ</li></h3>
            <div className='meropriatia'>
              <h1 className='h1_mer'>Мероприятия</h1>
              <div className='kinds'>
                <p>Экскурсии</p>
                <p>Концерты</p>
                <Link to='/Poster' className='pos' >Афиши</Link>
              </div>
            </div>
            <div className='contact'>
              <h1 className='h1_contact'>Контакты</h1>
              <div className='p_contact'>
                <p>г. Санкт-Петербург, Невский пр., д. 41</p>
                <p>a_excurse@mail. ru</p>
                <p>(812) 315-52-36</p>
              </div>
            </div>
          </div>
          <div className='div_line'>
            <div className='line_div'>
            </div>
          </div>
          <div className='name_saite'>
            <Link className='link_saite_name' to='/'>Сайт концертно <li>экскурсионных программ</li></Link>
          </div>
    </section>
  </>
}