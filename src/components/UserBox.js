import React from 'react';
import './UserBox.css';

function UserBox({setModalBox}) { //поймали пропс и вызываем в онклике
  return (
  
    <div className="UserBox">
     <button onClick={()=> setModalBox('Login')}>Вход</button> 
     <button onClick={()=> setModalBox('Registration')}>Регистрация</button>
    </div>
  );
}

export default UserBox;