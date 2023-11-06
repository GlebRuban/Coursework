import "../css/Form.css"

export default function BuyFormTickets() {
  return<>
  {/* Form Content */}
  <div className="login-box">
    <h2>Заказ билета</h2>
    <form>
      <div className="user-box">
        <input type="text" name="firstname"  pattern="^[A-Za-zА-Яа-яЁё\s]+$"/>
        <label>Имя</label>
      </div>
      <div className="user-box">
        <input type="text" name="surname" pattern="^[A-Za-zА-Яа-яЁё\s]+$"/>
        <label>Фамилия</label>
      </div>
      <div className="user-box">
        <input type="tel" name="tel" pattern="[+789][0-9]{11}" />
        <label>Телефон</label>
      </div>
      <div className="user-box">
        <input type="text" name="number" pattern="^[0-50]+$"/>
        <label>Место в зале</label>
      </div>
      <a href="#">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Заказать
      </a>
    </form>
  </div>
</>    
}