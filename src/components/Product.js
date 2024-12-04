import React from 'react';
import './Product.css';

function Product({header, image, price}) { //отправляем картинку сюда
  return (
   //передаем как пропс в ссылку
    <div className="Product">
     <img src = {image}/>  
     <h1>{header}</h1>
     <p>{`${price} руб`}</p>
     <button>В корзину</button>
    </div>
  );
}

export default Product;