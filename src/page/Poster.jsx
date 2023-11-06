import '../css/Home.css';


import content from "../images/slider__main-image.png"
import content2 from "../images/poster__image.png"
import music from "../images/Music.png"
import time from "../images/Time.png"
import age from "../images/age.png"
import { Link } from 'react-router-dom';

export default function Tickets (){
  return <>
    {/* Content */}
    <section className="Tickets">
      <h1>Афиша</h1>
      {/* Первый афиша */}
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
      {/* Вторая афиша */}
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
      {/* Третья афиша */}
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
      {/* Четвертая афиша */}
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
    {/* footer */}
    <section className="footer_section">
      <div className='footer_div'>
        <h3 className='logo_footer'>Сайт концертно <li>экскурсионных программ</li></h3>
        <div className='meropriatia'>
          <h1 className='h1_mer'>Мероприятия</h1>
          <div className='kinds'>
            <p>Экскурсии</p>
            <p>Концерты</p>
            <p>Афиши</p>
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