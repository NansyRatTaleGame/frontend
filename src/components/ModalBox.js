import React from 'react';
import './ModalBox.css';

function ModalBox({setModalBox, children}) { //числдрен это Логин, за ним зарезервирован такой пропс
  return (
   <>
    <div className='echo' onClick={()=> setModalBox('none')}></div>
    <div className="ModalBox">
     {children} 
    </div>
   
     </>
    //отправили на форму {children}
  );
}

export default ModalBox;