import React from 'react';
import './Header.css';
import UserBox from './UserBox';



function Header({setPage, setModalBox}) { //поймали пропс
  //Просто вызываем этот пропс и меняем состояние (по сложному)
  // function changePage(){
  //     setPage('Basket')
  // По простому, сделать стрелочную функцию. Ставим скобку и через стрелку пишем ее функционал
  
  
  return (
   
    <div className="Header">
      <ul>
        <li onClick={()=> setPage('Main')}>Главная</li>
        <li onClick={()=> setPage('Basket')}>Корзина</li>
        
      </ul>
     <UserBox setModalBox={setModalBox} />
    </div>
  );
}

export default Header;

