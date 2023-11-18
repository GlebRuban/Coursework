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
  const [formData, setFormData] = useState({});
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const jsonString = JSON.stringify(formData);
    saveJsonToFile(jsonString, 'data.json');
  };

  const saveJsonToFile = (jsonString, filename) => {
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');

    link.href = url;
    link.download = filename;
    link.click();

    URL.revokeObjectURL(url);
  };

  return<>
  {/* Form Content */}
  <div className="login-box">
    <h2>Заказ билета</h2>
    <form className="form_tickets" onSubmit={handleSubmit}>
      <div className="class">
        <div className="user-box">
          <input type="text" name="firstname"  pattern="^[A-Za-zА-Яа-яЁё\s]+$" onChange={handleChange} />
          <label>Имя</label>
        </div>
        <div className="user-box">
          <input type="text" name="surname" pattern="^[A-Za-zА-Яа-яЁё\s]+$" onChange={handleChange} />
          <label>Фамилия</label>
        </div>
        <div className="user-box">
          <input type="tel" name="tel" pattern="[+789][0-9]{11}" onChange={handleChange}/>
          <label>Телефон</label>
        </div>
      </div>
      <table className="App">
        <tbody>
        <div className="selected-info" name="row and place" onChange={handleChange}>
        {selectedSeat && (
          <p className="Row">
            Выбрано место: Ряд 
            <span className="Row_span" >
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