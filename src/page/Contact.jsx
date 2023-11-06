import { Link } from 'react-router-dom'
import '../css/contacts.css'

export default function Contact () {
  return <>
    {/* Contact */}
    <section className="Tickets">
      <h1 className='kontakt'>Контакты</h1>
      <div className="div_contacts">
      <div className="first_contact">
        <h1 className='adress_h1'>Адресс: </h1>
        <p className='adress'>Россия, 191025, г. Санкт-Петербург, Невский пр., д. 1</p>
        <div className='rejim'>
          <h1 className='rejim_h1'>Режим работы кассы Дворца:</h1>
          <p className="websday">
            понедельник: выходной
            <span>вторник-суббота: с 11.00 до 19.00 час.</span>
            <span>воскресенье: с 11.00 до 17.00 час.</span>
            <span>перерыв: с 14.00 до 14.30 час.</span>
          </p>
        </div>
      </div>
      <div className="second_contacts">
        <h1 className='tickets'>Билетная касса, заказ экскурсий:
          <span className="span_tel">(812) 123-45-67</span>
        </h1>
        <h1 className='arenda'>Аренда концертного/конференц зала:
          <span className="span_tel">(812) 123-45-67</span>
        </h1>
        <h1 className='vk'>ВКонтакте:
          <span className="span_tel">vk.com/nevskiy1</span>
        </h1>
      </div>
      </div>
    </section>
    {/* Map  */}
    <section className='map_section'>
      <div className='Map'>
        <div className='div_map'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7751.258891656965!2d20.48665672274994!3d54.719069367178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e33dfbbd168d1b%3A0xd7f80d4df4d6df32!2z0JfQsNGA0Y8!5e0!3m2!1sru!2sru!4v1698945213962!5m2!1sru!2sru" 
                className='googleMap'
                allowfullscreen="" 
                referrerpolicy="no-referrer-when-downgrade">
        </iframe>
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
           <Link className='pos' to='/Poster' >Афиши</Link> 
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