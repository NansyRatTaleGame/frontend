import React, {useState, useEffect} from 'react';
import './Main.css';
import Product from '../components/Product';
import image from '../images/lemonade.jpg'; //Импортируем картинку

function Main() {

  const [products, setProducts] = useState([]) //это переменная состояние

 useEffect(()=> {
 
  
  const api = 'http://localhost:9001/products'

  fetch(api)
  .then(result => result.json())
  .then((result) => {
    console.log(result) //можно на фронтенде выводить результат
    setProducts (result.data)//меняем состояние
  })

 }, [])





  return (
    //Передаем пропс с картинкой
    <div className="Main">
    {products.map((item) => <Product header={item.header} image={item.image} price={item.price}/>)}
    </div>
  );
}

export default Main;