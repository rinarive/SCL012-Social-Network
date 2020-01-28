import {register, passIn, closeSession, loginGoogle, loginFacebook } from './lib/index.js';

//PAGINA DE INICIO

const loadLanding = ()=> {
const landing = document.getElementById ('root');
window.location.hash = '/inicio';
landing.innerHTML = `
<header>
  <div class="time-service"
      <img src='./img/time-service.jpg' id="time"  style="opacity: 70%;">
  </div>
</header>
  <div class="logo">
    <a id="logo" alt=""><img src="./img/logo-weservice.png" style="cursor: pointer;"> </a>
    <h1 class='text'>¿Andas buscando un servicio?</h1>
    <br>
    <button class='btns' id='btnSignUp'>Regístrate</button>
    <button class='btns' id='btnSignIn'>ya tengo una cuenta</button>
  </div>
  `;
const btnSignUp= landing.querySelector('#btnSignUp');
const btnSignIn= landing.querySelector('#btnSignIn');


btnSignUp.addEventListener ('click', () => {
  landing.innerHTML = '';
  loadRegisterUser();
});

const btnSignIn = document.createElement('button');
btnSignIn.innerHTML = 'Ya tengo cuenta';
btnSignIn.addEventListener ('click', () => {
  landing.innerHTML = '';
  loadAccessUser();
});

const btnLoginGoogle = document.createElement('button');
btnLoginGoogle.innerHTML = 'Ingresa con Google';
btnLoginGoogle.addEventListener ('click', () => {
  loginGoogle();
});

const btnLoginFacebook = document.createElement('button');
btnLoginFacebook.innerHTML = 'Ingresa con Facebook';
btnLoginFacebook.addEventListener ('click', () => {
  loginFacebook();
});

landing.innerHTML = `
  <div class="time-service">
      <img src="time-service1.jpg" style="width: 100%; opacity: 70%;">
  </div>
  <div class="logo">
      <a id="logo" alt=""><img src="logo-weservice.png" style="cursor: pointer;"> </a>
  </div>
   <h1 class='text'>¿Andas buscando un servicio?</h1>
  `;

landing.appendChild(btnSignUp);
landing.appendChild(btnSignIn);
landing.appendChild(btnLoginGoogle);
landing.appendChild(btnLoginFacebook);
};

loadLanding();


//PAGINA PARA CREAR CUENTA

const registerUser = document.getElementById ('registerUser');

const loadRegisterUser = ()=> {
window.location.hash = '/registro';

const btnSignUpUser = document.createElement('button');
btnSignUpUser.innerHTML = 'Enviar';
btnSignUpUser.addEventListener ('click', () => {
const name = document.getElementById('name').value
const lastName = document.getElementById('lastName').value
const email = document.getElementById('email').value
const password = document.getElementById('password').value

  register(name, lastName, email, password);
});

registerUser.innerHTML = `
<div class="logo">
      <a id="logo" alt=""><img src="logo-weservice.png" style="cursor: pointer;"> </a>
</div>
<form>
    <h1>Registro</h1>
    <input type='text' id='name' placeholder='Nombre'>
    <input type='text' id='lastName' placeholder='Apellido'>
    <input type='text' id='email' placeholder='Email'>
    <input type='text' id='password' placeholder='Contraseña'>

`;

registerUser.appendChild(btnSignUpUser);
}

// MANEJANDO LAS RUTAS
window.addEventListener('hashchange', () => {

if(window.location.hash === '#/registro'){ 
  loadRegisterUser();
}

});

// PAGINA PARA INICIAR SESION

const accessUser = document.getElementById ('accessUser');

const loadAccessUser = ()=> {
window.location.hash = '/ingreso';
wallPublications.innerHTML = '';
const btnSignInUser = document.createElement('button');
btnSignInUser.innerHTML = 'Entrar';
btnSignInUser.addEventListener ('click', () => {
  const email2 = document.getElementById('email2').value
  const password2 = document.getElementById('password2').value
  
  passIn(email2, password2);
});

btnSignIn.addEventListener ('click', () => {
  landing.innerHTML = '';
  loadAccessUser();
});


};

loadLanding();


//PAGINA PARA CREAR CUENTA


const loadRegisterUser = ()=> {
  const registerUser = document.getElementById ('root');
  window.location.hash = '/registro';
  registerUser.innerHTML =   `
    <div class="logo">
      <a href="#muro" id="logo" alt=""> <img src="logo-weservice.png" style="cursor: pointer;"> </a>
    </div>
    <form class= 'formulario'>
      <p class='leter-form'>Registro</p>
      <p class='leter-form'>Nombre:<input type='name' class='forms'id='name' placeholder='Ingresa tu Nombre'></p>
      <p class='leter-form'>Apellido:<input type='lastName' class='forms' id='lastName' placeholder='Ingresa tu Apellido'></p>
      <p class='leter-form'>Email:<input type='email' id='email'class='forms' placeholder='Ingresa email'></p>
      <p class='leter-form'>Contraseña:<input type='password'class='forms' id='password' placeholder='Ingresa contraseña'></p>
      <button  class='btn-send' id='btnSignUpUser'>Enviar</button>
      <button class='redes' id='btnLoginGoogle'> <img class='red-img' src="google.png" >ingresa con Google</button>
      <button class='redes' id='btnLoginFacebook'> <img class='red-img' src="ll.png" >ingresa con Facebook</button>   
      </form>`;



const btnSignUpUser=registerUser.querySelector('#btnSignUpUser');
btnSignUpUser.addEventListener ('click', () => {
const name = document.getElementById('name').value
const lastName = document.getElementById('lastName').value
const email = document.getElementById('email').value
const password = document.getElementById('password').value
  register(name, lastName, email, password);
});

const btnLoginGoogle = registerUser.querySelector('btnLoginGoogle');

btnLoginGoogle.addEventListener ('click', () => {
  loginGoogle();
});

const btnLoginFacebook =registerUser.querySelector('btnLoginFacebook');

btnLoginFacebook.addEventListener ('click', () => {
  loginFacebook();
});

}

// PAGINA PARA INICIAR SESION


const loadAccessUser = ()=> {
  const accessUser = document.getElementById ('root');
  window.location.hash = '/ingreso';
  accessUser.innerHTML =  `
  <div class="img-header">
    <img src="./img/time-service1.jpg" style="width: 100%; opacity: 70%;">
  </div>
  <div class="logo">
    <a href="#muro" id="logo" alt=""> <img src="./img/logo-weservice.png" style="cursor: pointer;"> </a>
  </div>
  <div class='mostrar'>
    <div class='containerEnter'>
     <p class='leter'>Email: <input type='email' class='email2' id='email2' placeholder='Ingresa email'></p>
      <p class='leter'>Contraseña: <input type='password' class='password2'  id='password2' placeholder='Ingresa contraseña'></p>
   </div>
  <div >
  <button class='btnes' id='btnSignInUser'>Ingresar</button>`;
  


const btnSignInUser = accessUser.querySelector('#btnSignInUser');

btnSignInUser.addEventListener ('click', () => {
  const email2 = document.getElementById('email2').value
  const password2 = document.getElementById('password2').value
  
  passIn(email2, password2);
});

accessUser.innerHTML = `
<div class="logo">
      <a id="logo" alt=""><img src="logo-weservice.png" style="cursor: pointer;"> </a>
</div>
<form>
    <input type='text' id='email2' placeholder='Email'>
    <input type='text' id='password2' placeholder='Contraseña'>
`;

accessUser.appendChild(btnSignInUser);
}

// OBSERVADOR PARA IDENTIFICAR SI EL USUARIO ESTA LOGUEADO

export function observer(){ 
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) { 
        console.log('Existe usuario activo');
        loadWallPublications();
        landing.innerHTML = '';
        //loadRegisterUser.innerHTML = '';
        accessUser.innerHTML= '';
        
        // User is signed in.
        let displayName = user.displayName;
        let email = user.email;
        let emailVerified = user.emailVerified;
        let photoURL = user.photoURL;
        let isAnonymous = user.isAnonymous;
        let uid = user.uid;
        let providerData = user.providerData;
        // ...
      } else {
        console.log('No existe usuario activo');
        //alert('inicia sesion');
        //wallPublications.innerHTML = '';
        loadLanding();

        // User is signed out.
      }
    });
  }

observer();

//PAGINA DEL MURO


const loadWallPublications = ()=> {
  const wallPublications = document.getElementById ('root');
  window.location.hash = '/muro';
  wallPublications.innerHTML = `
<header class="header-position">
  <div class="marca-header">

    <div class="encabezado" style="margin-left:35%"><img src="./img/logo-weservice.png" style="cursor: pointer; width:50%" alt="logo">
    <a class="" id="btnCloseSession" href=""><img class="img-header" src="./img/close.png" alt="cerrar-sesión"></a>

    </div>
  </div>

  <div class="barra">
    <input type="search" class="search" placeholder="Search...">
  </div>

</header>
<main>

<br>

  <div id="ingreso-post">
    <form class="formulario-post">
      <div class="imagen-post">
        <div class="fondo-avatar">

            <img class="imagen-tamaño" src="./img/user.png" alt="avatar">
        </div>
        <textarea  class="textarea" name="post" id="post"placeholder="¡Publica tus novedades!"></textarea>
      </div>
      <div class="imagen-post">
          <button class="botones-post" id="publicar">Publicar</button>
          <section class="lista-publicaciones"></section>
      </div>
    </form>
  </div>
<br>

</main>
<footer>
  <footer class="footer-color">
    <div class = "footer-opciones">

      <a class="nav" href=""><img class="img-header"  src="./img/like.png" alt="Publicaciones"></a>  
      <a class="nav" href=""><img class="img-header"  src="./img/chat-bubble.png" alt="Noticias"></a>  
      <a class="nav" href=""><img class="img-header"  src="./img/user.png" alt="Perfil"></a> 
    </div>
  </footer>
</footer>

    `;


const btnCloseSession = wallPublications.querySelector('#btnCloseSession');

btnCloseSession.addEventListener ('click', () => {
  closeSession();
});


 

};

// MANEJANDO LAS RUTAS
window.addEventListener('hashchange', () => {

  if(window.location.hash === '#/inicio'){ 
    loadLanding ();
  }else if(window.location.hash === '#/registro'){ 
    loadRegisterUser();
  }else if(window.location.hash === '#/ingreso'){
    loadAccessUser();
  }else if(window.location.hash==='#/muro'){
    loadWallPublications();
  }
});
  

const switchTemp = (hash) => {
  if (hash === '/#inicio' || hash === '/#registro' || hash ==='#/ingreso' || hash === '/#muro') {
    return hashshowTemp();
  }
  return showTemp('/#inicio');
};
  

  window.addEventListener('load',  loadLanding ());
  window.addEventListener('hashchange', () => switchTemp(window.location.hash));