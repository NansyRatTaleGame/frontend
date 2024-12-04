import React from 'react';


function Registration() {


  function Reg(){
    const login = document.getElementById('login').value
    const password = document.getElementById('password').value
    const email = document.getElementById('email').value //получаем данные с полей
    const data = {
        login: login,
        email: email,
        password: password
    }

    console.log(data)

    const api = 'http://localhost:9001/registration'

    fetch(api, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(result => result.json())
    .then((result) => {
      console.log(result) //можно на фронтенде выводить результат
      
    })
}


  return (
  
    <>
    <h1>Регистрация</h1>
   
    <input id='login' placeholder='Логин'/>
    <input id='password' placeholder='Пароль'/>
    <input id='email' type='email' placeholder='Почта'/>
    <button onClick={Reg}>Регистрация</button>
    </>
  );
}

export default Registration;