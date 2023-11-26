import { toast } from "react-toastify";
import "../css/Form.css";

import React, { useState } from 'react';

export default function BuyFormTickets() {

  const [selectedSeat, setSelectedSeat] = useState(null);
  const handleSeatClick = (seat) => {
    setSelectedSeat(seat);
  };
  const renderSeats = () => {
    const seatsPerRow = 10;
    const numRows = 3;
    const seats = [];
    for (let row = 1; row <= numRows; row++) {
      for (let seatNum = 1; seatNum <= seatsPerRow; seatNum++) {
        const seatId = `${row}-${seatNum}`;
        const isSeatSelected = seatId === selectedSeat;
        seats.push(
          <div
            key={seatId}
            className={`seat ${isSeatSelected ? 'selected' : ''}`}
            onClick={() => handleSeatClick(seatId)}
          >
            {seatNum}
          </div>
        );
      }
    }
    return seats;
  };

  const [ id, setId] = useState("");
  const [ firstname, setFName] = useState("");
  const [ lastname, setLName] = useState(""); 
  const [ phone, setPhone] = useState("");
  const [ row, setRow] = useState(""); 
  const [ place, setPlace] = useState(""); 


  const handleSubmit = (event) => {
    event.preventDefault();
    let regobj = {id,firstname,lastname,phone,row,place}
    console.log(regobj);
    fetch("http://localhost:3000/User",{
      method:"POST", 
      headers:{'content-type':'application/json'}, 
      body:JSON.stringify(regobj)
    }).then(res =>{
      toast.success('Ok')
    }).catch((err)=> {
      toast.error('Not ok :' + err)
    });
  }



  return<>
  {/* Form Content */}
  <div className="login-box">
    <h2>Заказ билета</h2>
    <form className="form_tickets" onSubmit={handleSubmit}>
      <div className="class">
      <input type="hidden"   value={id} onChange={event => setId(event.target.value)} />
        <div className="user-box">
          <input type="text" value={firstname} onChange={event => setFName(event.target.value)}   pattern="^[A-Za-zА-Яа-яЁё\s]+$"  />
          <label>Имя</label>
        </div>
        <div className="user-box">
          <input type="text"  pattern="^[A-Za-zА-Яа-яЁё\s]+$" value={lastname} onChange={event => setLName(event.target.value)} />
          <label>Фамилия</label>
        </div>
        <div className="user-box">
          <input type="tel" pattern="[+789][0-9]{11}" value={phone} onChange={event => setPhone(event.target.value)}/>
          <label>Телефон</label>
        </div>
      </div>
      <table className="App" >
        <tbody>
        <div className="selected-info" >
        {selectedSeat && (
          <p className="Row">
            Выбрано место: Ряд 
            <span className="Row_span" value={row} onChange={event => setRow(event.target.value)} >
              {selectedSeat.split('-')[0]}
            </span>
            Место
            <span value={place} onChange={event => setPlace(event.target.value)}>
              {selectedSeat.split('-')[1]}
            </span>
          </p>
        )}
        </div>
        </tbody>
        <div className="seat-container">{renderSeats()}</div>
      </table>
      <button type="submit">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Заказать
      </button>
    </form>
  </div>
</>    
}