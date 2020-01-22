let logo = document.getElementById("logo");
logo.addEventListener("click",()=>{
  console.log("sirve");
  let next=document.getElementById("root");
  next.innerHTML= `
  <header class="header-position">
  <div class="marca-header">
    <div class="encabezado"><img src="logo-weservice.png" style="cursor: pointer;" alt="logo">
    </div>
  </div>
  <div class="op-header">
    <a class="opcion-header" href=""><img class="img-header"  src="./logo/love.png" alt="Publicaciones"></a>  
    <a class="opcion-header" href=""><img class="img-header"  src="./logo/profiles (1).png" alt="Noticias"></a>  
    <a class="opcion-header" href=""><img class="img-header"  src="./logo/user (1).png" alt="Perfil"></a> 
    <a class="opcion-header" id="cerrar-sesion" href=""><img class="img-header" src="./logo/cancel.png" alt="cerrar-sesión"></a>
  </div>
</header>
<main>
  <div id="ingreso-post">
    <form class="formulario-post">
      <div class="imagen-post">
        <div class="fondo-avatar">
            <img class="imagen-tamaño" src="" alt="avatar">
        </div>
        <textarea  class="textarea" name="post" id="post" cols="30" rows="3" placeholder="¡Publica tus novedades!"></textarea>
      </div>
      <div class="imagen-post">
          <select class="botones-post" name="" id="privacidad">
              <option value="amigas">Amigas</option>
              <option value="publico">Público</option>
          </select>
          <button class="botones-post" id="publicar">Publicar</button>
      </div>
    </form>
  </div>
  <section id="lista-publicaciones"></section>
</main>
<footer class="footer-color">
  <div class="texto-footer">
    <div class="opciones-footer">
        <a class="link-footer" href=""><p>INFORMACIÓN</p></a> 
        <a class="link-footer" href=""><p>AYUDA</p></a> 
        <a class="link-footer" href=""><p>IDIOMA</p></a> 
    </div>
    <div class="divisor"></div>
    <div class="footer">
        <img  class="footer-img" src="./logo/Sin título-1.png" alt="logo">
        <p class="footer-texto-color"><span class="barra-navegacion">Mommy’s Love</span> Copyright © All rights reserved. </p>
    </div>  
  </div>
</footer>`;
  
});


let account = document.getElementById("access")
account.addEventListener("click",()=>{
  console.log("si");
  let next=document.getElementById("root");
  next.innerHTML= 
  `
 <form class= 'formulario'>
 <input type='name' id='name' placeholder='Ingresa tu Nombre'>
 <input type='lastName' id='lastName' placeholder='Ingresa tu Apellido'>
 <input type='email' id='email' placeholder='Ingresa email'>
 <input type='password' id='password' placeholder='Ingresa contraseña'>
 <button id='send'>Enviar</button>
 </form>
 
 <input type='email' id='email' placeholder='Ingresa email'>
 <input type='password' id='password' placeholder='Ingresa contraseña'>
 <button id='send'>registrate</button>
 <input type='email' id='email2' placeholder='Ingresa email'>
 <input type='password' id='password2' placeholder='Ingresa contraseña'>
 <button id='access'>Ingresar</button>
 <button id='btnlogout' style='display:none;'>Cerrar Sesion</button>
 `
});

