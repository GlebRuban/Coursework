import { Link } from 'react-router-dom'
import '../css/gallery.css'
import poster from '../images/poster__image.png'
export default function Gallery () {
  return<>
    {/* First Content */}
    <section className="gallery_section">
      <h1 className='h1_gallery'>Антонио Вивальди. Времена года</h1>
      <div className='div_img_gallery'>
        <img className='img_gallery' src={poster} alt="Poster" />
      </div>
      <div className='div_second-gallery'>
      <h1 className='h1_second_gallery'>Санкт-Петербургский камерный оркестр Olympic Orchestra</h1>
        <p className='p_gallery'>
          <span>Солистка – Надежда Троицкая (скрипка)</span> 
          <span>Дирижёр – Илья Филькенштейн </span>
          <span>Художественный руководитель - Алексей Степанов</span>
        </p>
        <p className='P_second'>Музыка Вивальди на века!!! Изысканная роскошь, пышность и причудливая 
          <span>эстетика эпохи барокко в полной мере нашли воплощение в творчестве</span> 
          <span>знаменитого венецианца Антонио Вивальди. Его называют «итальянским Бахом», и </span>
          <span>неспроста: за 63 года жизни музыкант написал около 800 произведений, включая</span> 
          <span>оперы, хоровые произведения, более 500 концертов для различных инструментов</span> 
          <span>и оркестра. Талантливый композитор-новатор, виртуозный скрипач, блестящий</span> 
          <span>дирижер и педагог, он оставил после себя богатейшее творческое наследие.</span>
          <br /> 
          <span>В первом отделении прозвучит знаменитый цикл «Времена года» Антонио</span> 
          <span>Вивальди, второе же отделение будет посвящено мелодичным серенадам для</span> 
          <span>струнного оркестра Эдуарда Элгара и Петра Ильича Чайковского.</span>
        </p>
        <h1 className='h1_three'>Программа концерта</h1>
        <p className='p_three'>1 отделение А. Вивальди «Времена года»: 
          <span>Концерт № 1 ми мажор «Весна»</span> 
          <span>Концерт № 2 соль минор «Лето»</span> 
          <span>Концерт № 3 фа мажор «Осень»</span> 
          <span>Концерт № 4 фа минор «Зима»</span> 
          <span>2 отделение Э. Элгар «Серенада для струнного оркестра»</span> 
          П. Чайковский «Серенада для струнного оркестра»
        </p>
        <h1 className='tick'>
          Стоимость билетов
          <span>700-1900 руб.</span>
          <Link className='btn_buy_tick' to='/Buy'><span>Заказть билет</span></Link>
        </h1>
        <div className='div_three'>
          <img src={poster} alt="poster" className='img_three' />
          <img src={poster} alt="poster" className='img_three' />
        </div>
      </div>
    </section>
    {/* Second Content */}
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