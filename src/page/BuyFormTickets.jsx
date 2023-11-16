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
      <table className="App">
        <tbody>
        <div className="selected-info">
        {selectedSeat && (
          <p>
            Выбрано место: Ряд 
            <span>
              {selectedSeat.split('-')[0]}
            </span>
            Место
            <span>
              {selectedSeat.split('-')[1]}
            </span>
          </p>
        )}
        </div>
        </tbody>
        <div className="seat-container">{renderSeats()}</div>
      </table>
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