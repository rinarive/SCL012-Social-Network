import { templateLanding, templateRegisterUser, templateAccessUser, templateWallPublications, /*templateEditPerfil */} from '../iu/vistas.js';
//import{ localization } from './map.js'
window.addEventListener('load', templateLanding());

//MANEJANDO LAS RUTAS
window.addEventListener('hashchange',function(){

  if(window.location.hash === '#/inicio'){ 
    templateLanding();
  }else if(window.location.hash === '#/registro'){ 
    templateRegisterUser();
  }else if(window.location.hash === '#/ingreso'){
    templateAccessUser();
  }else if(window.location.hash==='#/muro'){
    templateWallPublications();
  }

});
/*else if(window.location.hash==='#/perfil'){
  templateEditPerfil();
}*/