import React, {useState} from 'react'; //Вызываем хук useState чтобы использовать состояния
import './App.css';
import Header from './components/Header';
import Main from './views/Main';
import Footer from './components/Footer';
import Basket from './views/Basket';
import ModalBox from './components/ModalBox';
import Login from './components/Login';
import Registration from './components/Registration';

function App() {

  const[page, setPage] = useState('Main') 
  const[modalBox, setModalBox] = useState('none')//в переменную page кладем функцию вызова состояния
  
  const pages = {
     Main:  <Main/>, 
     Basket: <Basket/>,
    
  }
  const modalBoxes = {
   none: null,
   Login: <ModalBox setModalBox= {setModalBox}><Login/></ModalBox>, //Переносим сюда логин, как компонент
   Registration:  <ModalBox  setModalBox= {setModalBox}><Registration/></ModalBox> //Переносим регистрацию, как компонент
   
 }

//вместо мэйна вызываем объект со страницами
//создаем пропс в хеде, передаем в этот КОМПОНЕНТ функцию смены страницы
  return (
  
    <div className="App">
      <Header setPage={setPage} setModalBox= {setModalBox}/>
      {pages[page]} 
      {modalBoxes[modalBox]} 
      <Footer/>
    </div>
  );
}

export default App;

