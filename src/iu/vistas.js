
import { loginGoogle, loginFacebook, } from '../lib/controllerAuth.js';
import { register, passIn, observer, closeSession } from '../lib/view-controller.js';
import { sendingPost } from '../lib/initPost.js';
import { localization } from '../map.js';
//template inicio
export const templateLanding = () => {
  window.location.hash = '#/inicio';
  const containerLanding = document.getElementById('root');
  const contentLanding = `

<header >
  <img src="./img/time-service1.jpg" style="width: 100%; opacity: 70%;">
</header>
<div id="home"> 
  <div class="logo">
    <a href="#muro" id="logo" alt=""> <img src="./img/logo-weservice.png" style="cursor: pointer;"> </a>
    <h1 class="text">¿Andas buscando un servicio?</h1>
  </div>
  <div id= "buttonsHome">
    <button class='btns' id="btnSignUp">Regístrate</button>
    <button class='btns' id="btnSignIn">ya tengo una cuenta</button>
  </div>
</div>    

  `;
  containerLanding.innerHTML = contentLanding;

  const btnSignUp = document.getElementById("btnSignUp");
  const btnSignIn = document.getElementById("btnSignIn");

  btnSignUp.addEventListener('click', () => {

    location.hash = '#/registro'
  });

  btnSignIn.addEventListener('click', () => {

    location.hash = '#/ingreso'
  });
  return containerLanding;
};

// template registro
export const templateRegisterUser = () => {
  window.location.hash = '#/registro';
  const containerRegisterUser = document.getElementById('root');
  const contentRegisterUser = 
`
<div>
<header class="header-position">
  <div class="marca-header">
    <div class="encabezado" style="margin-left:35%">
      <img src="./img/logo-weservice.png" style="cursor: pointer; width:50%" alt="logo">
    </div>
  </div>
</header>
<div id="home">
  <form class= 'formulario'>
      <h1 class='leter-form'>Registro</h1>
    <main>
      <p class='leter-form'>Nombre:<input type='name' class='forms'id='name' placeholder='  Ingresa tu Nombre'></p>
      <p class='leter-form'>Apellido:<input type='lastName' class='forms' id='lastName' placeholder='  Ingresa tu Apellido'></p>
      <p class='leter-form'>Email:<input type='email' id='email'class='forms' placeholder='  Ingresa email'></p>
      <p class='leter-form'>Contraseña:<input type='password'class='forms' id='password' placeholder='  Ingresa contraseña'></p>
      <button  class='btn-send' id='btnSignUpUser'>Enviar</button>
     <div id="buttonsHome">
      <button class='redes' id='btnLoginGoogle'> <img class='red-img' src="./img/google.png" >ingresa con Google</button>
      <button class='redes' id='btnLoginFacebook'> <img class='red-img' src="./img/ll.png" >ingresa con Facebook</button> 
     </div>    
    </main>
  </form>
</div>
</div> 
  `;
  containerRegisterUser.innerHTML = contentRegisterUser;

  const btnSignUpUser = document.getElementById('btnSignUpUser');
  btnSignUpUser.addEventListener('click', () => {
    const name = document.getElementById('name').value
    const lastName = document.getElementById('lastName').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    register(name, lastName, email, password);
  });

  const btnLoginGoogle = document.getElementById('btnLoginGoogle');
  btnLoginGoogle.addEventListener('click', () => {
    loginGoogle();

  });
  const btnLoginFacebook = document.getElementById('btnLoginFacebook');

  btnLoginFacebook.addEventListener('click', () => {
    loginFacebook();
  });
  return containerRegisterUser;
}
observer();
//template acceso usuario
export const templateAccessUser = () => {
  window.location.hash = '#/ingreso';
  const containerAccessUser = document.getElementById('root');
  const contenAccessUser = `
<header >
  <img src="./img/time-service1.jpg" style="width: 100%; opacity: 70%;">
</header>
<div id="home"> 
  <div class="logo">
    <a href="#muro" id="logo" alt=""> <img src="./img/logo-weservice.png" style="cursor: pointer;"> </a>
  </div>
  <div class="mostrar">
    <div class="containerEnter">
     <p class="leter">Email: </p><input type="email" class="inputForm" id="email2" placeholder="Ingresa email">
     <p class="leter">Contraseña: </p><input type="password" class="inputForm"  id="password2" placeholder="Ingresa contraseña">
    </div>
  <div id="btnSignInUser">
    <button class="btns" >Ingresar</button>
  </div>
 </div> 
`;

  containerAccessUser.innerHTML = contenAccessUser;
  const btnSignInUser = document.getElementById("btnSignInUser");

  btnSignInUser.addEventListener('click', () => {
    const email2 = document.getElementById('email2').value;
    const password2 = document.getElementById('password2').value;

    passIn(email2, password2);
  });

  return containerAccessUser;
}

//template muro

export const templateWallPublications = () => {
  window.location.hash = '#/muro';
  const containerWallPublications = document.getElementById('root');
  const contenWallPublications = `
<div class="muro">
<header class="header-position">
<div class="marca-header">
  <div class="encabezado" style="margin-left:35%">
    <img src="./img/logo-weservice.png" style="cursor: pointer; width:50%" alt="logo">
    <a class="btnCloseSession" id="btnCloseSession" href="">
      <img class="img-header" src="./img/close.png" alt="cerrar-sesión">
    </a>
  </div>
</div>
<div class="barra">
  <input type="search" class="search" placeholder="Search...">
</div>
</header>
<main>
<div id="ingreso-post">
  <form class="formulario-post" action="javascript:void(0)">
    <div class="imagen-post"></div>
      <div class="fondo-avatar">
        <img class="imagen-tamaño" src="./img/user.png" alt="avatar">
      
      </div>
      <textarea  class="textarea" name="post" id="post"placeholder="¡Publica tus novedades!">
      </textarea>
    
    <div class="imagen-post">
        <button class="botones-post" id="publicar">Publicar</button>
    </div>
    </form>
  </div>
</main>
    <section class="lista-publicaciones" id="lista-publicaciones"></section>
<footer>
<footer class="footer-color">
  <div class = "footer-opciones">
    <a class="nav" href=""><img class="img-header"  src="./img/like.png" alt="Publicaciones"></a>  
    <a class="nav" href=""><img class="img-header"  src="./img/chat-bubble.png" alt="Noticias"></a>  
    <a class="nav" id="perfil" href="/#localizacion"><img class="img-header"  src="./img/user.png" alt="localizacion"></a> 
  </div>
</footer>
</footer>
</div>
  `;

  containerWallPublications.innerHTML = contenWallPublications;

  const btnCloseSession = document.getElementById('btnCloseSession');
  const textAreaPost = document.getElementById('post').value;
  const btnPublicar = document.getElementById('publicar');
  const perfil = document.getElementById('perfil');
 perfil.addEventListener('click', ()=>{
    localization ();
  })
  

  btnPublicar.addEventListener('click', () => {
    const textToPosted = textAreaPost.value;
    sendingPost(textToPosted);

  });

  btnCloseSession.addEventListener('click', () => {
    closeSession();
  });
  return containerWallPublications;
};



export const templateEditPerfil = () =>{
  window.location.hash = '#/perfil';
const editPerfil= document.getElementById('root');
const contenEditPerfil = `

<div class="muro">
<header class="header-position">
<div class="marca-header">
  <div class="encabezado" style="margin-left:35%">
    <img src="./img/logo-weservice.png" style="cursor: pointer; width:50%" alt="logo">
    <a class="btnCloseSession" id="btnCloseSession" href="">
      <img class="img-header" src="./img/close.png" alt="cerrar-sesión">
    </a>
  </div>
</div>
</header>
<form id='editPerfil'>
<div class="mostrar">
    <div class="containerEnter">
     <p class="leter">Nombre: </p><input type="text" class="inputForm" id="nombre" placeholder="Ingresa email">
     <p class="leter">Apellido: </p><input type="text" class="inputForm"  id="apellido" placeholder="Ingresa contraseña">
     <p class="leter">Username: </p><input type="text" class="inputForm" id="username" placeholder="Ingresa email">
     <p class="leter">Telefono: </p><input type="text" class="inputForm"  id="telefono" placeholder="Ingresa contraseña">
     </div>
<div class= "forms">

  <p class="leter">Categoria de servicios</p>
    <select id='categorias'>
      <li>Belleza</li>
      <li>Hogar</li>
      <li>Albañileria</li>
      <li>automotriz<li>
    </select>
    <div id="cajaDescrip">
      <p class = "leter">Descripcion del servicio</p>
      <input type="text" class="imputForm" id="descripcion" placeholder"Escribe aca el servicio que ofreces">
    </div>

</div>
  <div id="catalogo">
    <img src="" id="cargarFotos">
  </div>
  <div>
    <button class="botones-post" id="guardar">Guardar</button>
  </div>
</form>

<footer>
<footer class="footer-color">
  <div class = "footer-opciones">
    <a class="nav" href=""><img class="img-header"  src="./img/like.png" alt="Publicaciones"></a>
    <a class="nav" href=""><img class="img-header"  src="./img/chat-bubble.png" alt="Noticias"></a>
    <a class="nav" href=""><img class="img-header"  src="./img/user.png" alt="Perfil"></a>
  </div>
</footer>
</footer>
`
editPerfil.innerHTML=contenEditPerfil;
const nombre=document.getElementById("nombre").value;
const apellido=document.getElementById("apellido").value;
const username=document.getElementById("username").value;
const telefono=document.getElementById("telefono").value;
const descripcion=document.getElementById("descripcion").value;
const guardar= document.getElementById("#guardar");

guardar.addEventListener("click",()=>{
  console/log('sirve');
  //saveCollectionPerfil(nombre, apellido, username, telefono, descripcion);
  //window.location.hash="/#muro";


});
return templateEditPerfil;
}