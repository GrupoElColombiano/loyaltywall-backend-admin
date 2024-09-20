// Esperar a que el documento esté listo para interactuar con él
document.addEventListener("DOMContentLoaded", function () {

    const scriptElement = document.createElement('script');
    scriptElement.src = 'https://cdn.jsdelivr.net/npm/keycloak-js@22.0.5/dist/keycloak.min.js';
    scriptElement.onload = function() {
        const _kc = new Keycloak({
            url: 'https://auth.loyaltywall.com/',
            realm: 'loyaltywall-client-test',
            clientId: 'paywall-login',
        });
        // Accediendo al JSON-LD por su ID
        var jsonLdScript = document.getElementById("jsonLd");
       
        if (jsonLdScript) {

            // Obteniendo el contenido del script como texto
            var jsonLdContent = jsonLdScript.textContent || jsonLdScript.innerText;
            // Analiza el contenido JSON-LD para convertirlo en un objeto JavaScript
            var jsonLdObject = JSON.parse(jsonLdContent);
            var site;

            if(!jsonLdObject['hasPart'].length) {
               if(jsonLdObject['hasPart']["@type"].includes("Product")){
                    var item = jsonLdObject['hasPart'];
                    site = item.name;
               }
            }else{
                jsonLdObject.hasPart.forEach(item => {
                  // Verifica si el elemento tiene "@type" y es un "Product"
                  if (Array.isArray(item["@type"]) && item["@type"].includes("Product")) {
                    // Accede a las propiedades específicas del "Product"
                    site = item.name; 
                  }
                });
            }

            console.log(" SITIO ACTUAL::::>>>> ", site)
            initKeyCloak(_kc, jsonLdScript, site);
            createFloatingElements(_kc);
           
        }
    };

    document.head.appendChild(scriptElement);   
    
});

const url_base_loyaltiwall = "PAyWa-Publi-1GMWK0UNJVHDO-1657815370.us-east-1.elb.amazonaws.com:3002/";
const registrado = "Registrado";
const anonimo = "Anónimo";
// const url_base_loyaltiwall = "http://localhost:3000/";

function initKeyCloak(_kc, jsonLdScript, site){

    _kc.init({
        onload: 'login-required',
        checkLoginIframe: false,
      }).then((authenticated) => {

        if (authenticated) {
            const token = _kc.token;
            localStorage.setItem(site+'_token', token);
            const userData = _kc.tokenParsed;
            localStorage.setItem(site+'_user_data', JSON.stringify(userData));
            validateStatusButton(site);
            paywallExecute(_kc, jsonLdScript, site)
        }else{
            paywallExecute(_kc, jsonLdScript, site)
        }

    }).catch((onrejected) => console.error(onrejected));

}

function createFloatingElements(_kc) {

    const styleElement = document.createElement('style');
    styleElement.type = 'text/css';
    styleElement.appendChild(document.createTextNode(styleButtonAuth));
    document.head.appendChild(styleElement);

    const container = document.createElement('div');
    container.classList.add('floating-element');
    document.body.appendChild(container);

    const button1 = document.createElement('button');
    button1.textContent = 'LogIn';
    button1.classList.add('floating-button');
    button1.id = 'paywall-login-button'; // Asignando el ID 'login-button' al botón
    button1.addEventListener('click', function() {
        _kc.login()
    });
    container.appendChild(button1);

    const button2 = document.createElement('button');
    button2.textContent = 'LogOut';
    button2.classList.add('floating-button');
    button2.id = 'paywall-logout-button'; // Asignando el ID 'login-button' al botón
    button2.addEventListener('click', function() {
         window.localStorage.clear();
        _kc.logout();
    });
    container.appendChild(button2);

}

function validateStatusButton(siteCurrent){

    const loginButton = document.getElementById("paywall-login-button");
    const logoutButton = document.getElementById("paywall-logout-button");

   if(localStorage.getItem(siteCurrent+"_token")){
        if (logoutButton) {
            logoutButton.style.display = 'block'; // Esto ocultará el botón
        }

        if (loginButton) {
            loginButton.style.display = 'none'; // Esto ocultará el botón
        }
    }else{

        if (logoutButton) {
            logoutButton.style.display = 'none'; // Esto ocultará el botón
        }

        if (loginButton) {
            loginButton.style.display = 'block'; // Esto ocultará el botón
        }

    }

}
function paywallExecute(_kc, jsonLdScript, siteCurrent){

    validateStatusButton(siteCurrent);
    // Accediendo al header directamente
    var type = "";
    var site = "";
    var identifier = "";
    var category = ""
    var articleSection = ""
    var currentDateArticle = 0;
    var isAccessibleForFree = false;
    const currentDate = new Date();
    var userType = ""
    var userIdCurrent = getOrSetUniqueId();


    if(localStorage.getItem(siteCurrent+"_token")){
        userType = registrado;
        userIdCurrent = JSON.parse(localStorage.getItem(siteCurrent+"_user_data")).sid;// "8196eafb-ddc8-4da0-afa1-8034d6dffb17"
    }else{
        userType = anonimo;
    }

    // Obtener la fecha actual
    const today = new Date();

    // Obtener el año actual
    const year = today.getFullYear();

    // Crear una nueva fecha para el 1 de enero del mismo año
    const startOfYear = new Date(year, 0, 1);

    // Calcular la diferencia en milisegundos entre la fecha actual y el 1 de enero
    const timeDifference = today - startOfYear;

    // Calcular el número de semanas redondeando hacia abajo
    const weekNumber = Math.floor(timeDifference / (7 * 24 * 60 * 60 * 1000)) + 1;
    

    // Obteniendo el contenido del script como texto
    var jsonLdContent = jsonLdScript.textContent || jsonLdScript.innerText;
    // Analiza el contenido JSON-LD para convertirlo en un objeto JavaScript
    var jsonLdObject = JSON.parse(jsonLdContent);

    // Accediendo a las propiedades del objeto JSON-LD
    type = jsonLdObject["@type"];
    site = siteCurrent; // EL NOMBRE DEL SITIO SE DEBE TRAER DEL NAME PILAS
    identifier = jsonLdObject.identifier;
    articleSection = jsonLdObject.articleSection
    currentDateArticle = jsonLdObject.currentDateArticle;

    if(type == "WebPage"){

        var params = {
            usertype: userType,
            site: site
        };

        if(userType == registrado){

            requestGetPlanSuscrite(site, userIdCurrent, function(status, res){

                if(!status){

                    // Para que quede en true se debe validar la fecha de expiracion del plan OK
                    if (isPlanExpired(res.plan.userPlans[0])) {
                      console.log('El plan ha expirado.');
                      userIdCurrent = registrado
                      setCookie(userIdCurrent, false, 365);
                    } else {
                      console.log('El plan está activo.');
                      setCookie(userIdCurrent, true, 365);
                    }
                    
                    var paramsPlanMongo = {
                        nameSite: site,
                        usertype: userIdCurrent,
                        plan: res.plan
                    };
                    console.log("Plan activo de usuario suscrito::: ",paramsPlanMongo)
                    requestPlanMongoPost(paramsPlanMongo, function(status, res){})

                }else{

                    setCookie(userIdCurrent, false, 365);
                    console.log(" Plan activo de usuario registrado::: ", params)
                    requestGetPlanSite(params, function(status, res){

                        if(!status){

                            var paramsPlanMongo = {
                                nameSite: site,
                                usertype: userType,
                                plan: res.plan
                            };
                            console.log("paramsPlanMongo ",paramsPlanMongo)
                            requestPlanMongoPost(paramsPlanMongo, function(status, res){})
                        }

                    });
                }
            });

        }else{

            console.log(" Plan activo de usuario Anonimo::: ", params)
            requestGetPlanSite(params, function(status, res){

                if(!status){

                    var paramsPlanMongo = {
                        nameSite: site,
                        usertype: userType,
                        plan: res.plan
                    };
                    console.log("paramsPlanMongo ",paramsPlanMongo)
                    requestPlanMongoPost(paramsPlanMongo, function(status, res){})
                }
            });
        }
        
    }


    if(type == "NewsArticle"){

        if(!jsonLdObject['hasPart'].length) {
           if(jsonLdObject['hasPart']["@type"].includes("Product")){

                var item = jsonLdObject['hasPart'];
                console.log("item ", item)
                category = item.category
                isAccessibleForFree = item.isAccessibleForFree;
                site = item.name;
           }
        }else{

            jsonLdObject.hasPart.forEach(item => {
              // Verifica si el elemento tiene "@type" y es un "Product"
              if (Array.isArray(item["@type"]) && item["@type"].includes("Product")) {
                // Accede a las propiedades específicas del "Product"
                console.log("item ", item)
                category = item.category
                isAccessibleForFree = item.isAccessibleForFree;
                site = item.name;
              }
            });

        }

        console.log(" userIdCurrent ", userIdCurrent)
        console.log(" VALIDANDO SI ES SUSCRITO OK ", getCookie(userIdCurrent))

        if(userType == registrado){
            // Para que quede en true se debe validar la fecha de expiracion del plan OK
            // if(localStorage.getItem(siteCurrent+"_token") == 'true'){
            if(getCookie(userIdCurrent) == 'true'){
                userType = userIdCurrent
            }else{
                userType = registrado
            }
        }
        
        requestPlanMongoPost({nameSite: site, usertype:  userType}, function(status, res){

            if(!status){
                const productFind = res.plan.plansProductsCategory.find((element) => element.product.all_product == true);

                 if(productFind){

                    if(productFind.categorysAccess.length > 0){

                        const categoryIsAccesible = productFind.categorysAccess.find((element) => element.category.name.toLowerCase() == category.toLowerCase());

                        validateMetadata({
                            categoryIsAccesible: categoryIsAccesible, 
                            userType: userType, 
                            site: site, 
                            identifier: identifier, 
                            currentDateArticle: currentDateArticle, 
                            weekNumber: weekNumber, 
                            year: year, 
                            category: category, 
                            isAccessibleForFree: isAccessibleForFree
                        },
                        userIdCurrent)
                       
                            
                    }

                }else{

                    const productFind = res.plan.plansProductsCategory.find((element) => element.product.name.toLowerCase() == articleSection.toLowerCase());

                    if(productFind){

                        if(productFind.categorysAccess.length > 0){

                            const categoryIsAccesible = productFind.categorysAccess.find((element) => element.category.name.toLowerCase() == category.toLowerCase());

                            validateMetadata(
                                {
                                    categoryIsAccesible: categoryIsAccesible, 
                                    userType: userType, 
                                    site: site, 
                                    identifier: identifier, 
                                    currentDateArticle: currentDateArticle, 
                                    weekNumber: weekNumber, 
                                    year: year, 
                                    category: category, 
                                    isAccessibleForFree: isAccessibleForFree
                                },
                                userIdCurrent
                            )

                        }

                    }else{

                        pintarModa()
                    }
                }
            }

        })
    }
    
}

function isPlanExpired(plan) {
  // Obtén la fecha actual
  const currentDate = new Date();

  // Obtén la fecha de expiración del plan desde la cadena proporcionada
  const expirationDate = new Date(plan.dateExpiredPlan);

  // Compara las fechas
  return currentDate > expirationDate;
}

function validateMetadata(obj, userIdCurrent){

    if(obj.categoryIsAccesible){
                            
        if(obj.categoryIsAccesible.unlimited == true || obj.categoryIsAccesible.amount >0){

           var params = {
                uniqueId: userIdCurrent,
                userType: obj.userType,
                site: obj.site,
                metadata: {
                    identifier: obj.identifier,
                    isAccessibleForFree: obj.categoryIsAccesible.category.is_accessible_for_free,
                    createDate: obj.currentDateArticle,// currentDate.getTime(), Se debe volver a reemplazar
                    week: obj.weekNumber + "-" + obj.year,
                    category: obj.category
                }
            };

            getMetadata({
                uniqueId: userIdCurrent,
                userType: obj.userType,
                site: obj.site,
                isAccessibleForFree: obj.isAccessibleForFree,
                amount: obj.categoryIsAccesible.amount,
                category: obj.category,
                duration: obj.categoryIsAccesible.duration,
                unlimited: obj.categoryIsAccesible.unlimited
            }, function(status, listMeta){

                console.log(" res ", listMeta.avalaible)
                console.log(" productFind ", obj.categoryIsAccesible)

                if(obj.categoryIsAccesible.unlimited == false && listMeta.avalaible == 0){
                        
                    pintarModa()
                    console.log("ENTRO 2)))) ", obj.categoryIsAccesible)

                }

                if(obj.categoryIsAccesible.unlimited == true || listMeta.avalaible > 0){

                    requestPost(params, function(status, res){
                        if(!status){
                            console.log(" Almacenando nueva vista hoy ", res)
                        }
                    });

                }

            });
        }

    }else{
        console.log("ENTRO 3)))) ", obj.categoryIsAccesible)
        pintarModa()
    }
}

function VentanaModal(mensaje) {
    // Obtener el elemento modal
    var modal = document.getElementById("myModal");

    // Obtener el elemento donde se muestra el mensaje
    var modalMessage = document.getElementById("modalMessage");

    // Establecer el mensaje en el elemento modal
    modalMessage.innerHTML = mensaje;

    // Mostrar la ventana modal
    modal.style.display = "block";

    // Agregar un evento para cerrar la ventana modal cuando se hace clic fuera de ella
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
}

function cerrarModal() {
    document.body.classList.remove('modal-open');
      // Oculta el modal
    document.getElementById('miModal').style.display = 'none';
    var modal = document.getElementById("miModal");
    modal.style.display = "none";
}

function abrirModal() {
    document.body.classList.add('modal-open');
    document.getElementById('miModal').style.display = 'block';
    // Obtener la referencia a la modal
    var modal = document.getElementById("miModal");
     modal.style.display = 'flex';
    // Mostrar la modal (puedes aplicar estilos CSS para mostrarla como un modal)
    modal.style.display = "block";
    // Asignar la función de cierre al botón de cerrar
   // var closeButton = modal.querySelector(".close");
   // closeButton.addEventListener("click", cerrarModal);
}

function pintarModa(){
    var styleElement = document.createElement("style");
        // Asigna los estilos de la variable styles al contenido del elemento <style>
        styleElement.innerHTML = styles;
        // Agrega el elemento <style> al head de la página
        document.head.appendChild(styleElement);
        var modalContainer = document.createElement("div");
        modalContainer.innerHTML = template;
        document.body.appendChild(modalContainer);
        var modalContent = document.querySelector(".modal-content");
            abrirModal();
}

var requestGetPlanSite = function(params, callback){

    console.log("params ", params)
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url_base_loyaltiwall+"plans/paywall/plans/"+encodeURIComponent(params.usertype), true);// 81 // 80
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var users = JSON.parse(xhr.responseText);
                callback(false,users)
                // Iterar sobre los usuarios y agregarlos a la lista ul
            } else {
                console.error("Error en la solicitud:", xhr.status);
                callback(true)
            }
        }
    };
    xhr.send();
};

var requestGetPlanSuscrite = function(planName, userId, callback){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url_base_loyaltiwall+"plans/planuser/"+planName+"/"+userId, true);// 81 // 80
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var users = JSON.parse(xhr.responseText);
                callback(false,users)
                // Iterar sobre los usuarios y agregarlos a la lista ul
            } 
             if (xhr.status === 404) {
                console.error("El usuario no se encuentra suscrito:", xhr.status);
                callback(true)
             }

            if (xhr.status === 500){
                console.error("Error en la solicitud:", xhr.status);
                callback(true)
            }
        }
    };
    xhr.send();
};

var requestGet = function(CromaId){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url_base_loyaltiwall+"paywall/metadata_paywall", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var users = JSON.parse(xhr.responseText);
                // Iterar sobre los usuarios y agregarlos a la lista ul
            } else {
                console.error("Error en la solicitud:", xhr.status);
                localStorage.removeItem(CromaId);
            }
        }
    };
    xhr.send();
};

var requestPost = function(data, callback){
    // Convertir los datos a una cadena en formato JSON
    var jsonData = JSON.stringify(data);

    // Crear una nueva solicitud XMLHttpRequest
    var xhr = new XMLHttpRequest();

    // Configurar la solicitud POST
    xhr.open("POST", url_base_loyaltiwall+"paywall/metadata_paywall", true);

    // Establecer el encabezado Content-Type a application/json
    xhr.setRequestHeader("Content-Type", "application/json");
    //VentanaModal("Debes adquirir un plan para poder continuar");
    // abrirModal();
    // Configurar la función de devolución de llamada cuando la solicitud esté lista
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 201) {
                var response = JSON.parse(xhr.responseText);
                var pagesList = JSON.parse(response.pages);
                console.log(" pagesList ", pagesList)
                callback(false,response.avalaible)
            } else {
                callback(true)
                console.error("Error en la solicitud:", xhr.status);
                // Manejar errores aquí
            }
        }
    };
    // Enviar los datos en el cuerpo de la solicitud
    xhr.send(jsonData);
};

var getMetadata = function(data, callback){
    var xhr = new XMLHttpRequest();
    // Configurar la solicitud GET
    var url = url_base_loyaltiwall+"paywall/metadata_paywall" 
    + "?uniqueId=" + encodeURIComponent(data.uniqueId) 
    + "&userType=" + encodeURIComponent(data.userType)
    + "&site=" + encodeURIComponent(data.site)
    + "&isAccessibleForFree=" + encodeURIComponent(data.isAccessibleForFree)
    + "&amount=" + encodeURIComponent(data.amount)
    + "&category=" + encodeURIComponent(data.category)
    + "&duration=" + encodeURIComponent(data.duration)
    + "&unlimited=" + encodeURIComponent(data.unlimited)


    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
               var response = JSON.parse(xhr.responseText);
                callback(false,response)
                // Iterar sobre los usuarios y agregarlos a la lista ul
            } else {
                console.error("Error en la solicitud:", xhr.status);
                callback(true)
            }
        }
    };
    xhr.send();
};

var requestPlanMongoPost = function(data, callback){

    var jsonData = JSON.stringify(data);

    var xhr = new XMLHttpRequest();

    xhr.open("POST", url_base_loyaltiwall+"paywall/plan_paywall", true);

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {

        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 201) {
               var plan = JSON.parse(xhr.responseText);

                var response = JSON.parse(xhr.responseText);
                console.log("Respuesta >>>>> :", response);
                callback(false,plan)
                // Procesar la respuesta aquí
            } else {
                console.error("Error en la solicitud:", xhr.status);
                callback(true)
                // Manejar errores aquí
            }
        }
    };
    // Enviar los datos en el cuerpo de la solicitud
    xhr.send(jsonData);
};

// Función para generar un identificador único
function generateUniqueId() {
    return "ID_" + Math.random().toString(36).substring(2, 15);
}
  
// Función para obtener o crear un identificador único y almacenarlo en una cookie
function getOrSetUniqueId() {
    let uniqueId = getCookie("uniqueId");
    if (!uniqueId) {
        uniqueId = generateUniqueId();
        setCookie("uniqueId", uniqueId, 365); // Almacena la cookie durante 365 días
    }
    return uniqueId;
}

// Función para establecer una cookie
function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}
  
// Función para obtener el valor de una cookie
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
}

// Función para validar una cookie por su nombre
function validarCookie(nombreCookie) {
  // Obtener todas las cookies presentes en el documento
  const cookies = document.cookie.split(';');

  // Buscar la cookie por su nombre
  const cookieEncontrada = cookies.find(cookie => {
    const [cookieName, cookieValue] = cookie.split('=').map(c => c.trim());
    return cookieName === nombreCookie;
  });

  // Validar si se encontró la cookie
  if (cookieEncontrada) {
    console.log(`La cookie ${nombreCookie} está presente.`);
    return true;
  } else {
    console.log(`La cookie ${nombreCookie} no está presente.`);
    return false;
  }
}

const template =
  "<div id='miModal' class='modal'>" +
  "<div class='modal-content'>" +
  //"<span class='close' onclick='cerrarModal()'>&times;</span>" +
  "<div class='plan-message'>Debe adquirir un plan para el sitio</div>" +
  "<div class='color-box red'><span class='plan-title'>Plan Premiun</span><img style='width:100px; height:100px' src='../public/premium.png' class='icon' /><hr/><span class='plan-text'>Plan con 20 articulos gratuitos</span><button onclick='comprarPlan(1)'>Comprar</button></div>" +
  "<div class='color-box green'><span class='plan-title'>Plan Gold</span><img style='width:100px; height:100px' src='../public/oferta.png' class='icon' /><hr/><span class='plan-text'>Plan con 50 articulos gratuitos</span><button onclick='comprarPlan(2)'>Comprar</button></div>" +
  "<div class='color-box blue'><span class='plan-title'>Plan Silver</span><img style='width:100px; height:100px' src='../public/oferta.png' class='icon' /><hr/><span class='plan-text'>Plan con 10 articulos gratuitos</span><button onclick='comprarPlan(3)'>Comprar</button></div>" +
  '</div>' +
  '</div>';

var styles = `
    .color-box {
      width: calc(33.33% - 10px);
      height: 300px;
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-right: 10px;
      box-sizing: border-box;
      text-align: center;
      border: 1px solid #888; /* Borde de 2px */
      margin-bottom: 10px; /* Espacio entre los divs de plan */
      position: relative; /* Para que la posición absoluta del icono sea relativa a este div */
    }

    .plan-title {
      font-size: 20px;
      font-weight: bold;

    }

    .plan-text {
      font-size: 14px;
    }

    .icon {
      position: absolute;
      top: 10px;
      right: 10px;
      width: 24px; /* Ajusta el tamaño del icono según sea necesario */
      height: 24px;
    }

    hr {
      width: 80%;
      margin: 10px 0;
      border: 1px solid white;
    }

    button {
      margin-top: 10px;
      padding: 10px;
      background-color: #4caf50;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    .red {
      background-color: #717466;
    }

    .green {
      background-color: #0f400f;
    }

    .blue {
      background-color: #253866;
    }

    .plan-message {
      text-align: center;
      font-size: 18px;
      margin-bottom: 20px;
      font-family: sans-serif;
      font-style: inherit;
      font-weight: bold;
      background-color:whitesmoke;
    }

    .color-box span {
      color: white; /* Ajusta el color del texto según el fondo del div */
    }

    .modal {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.7);
    }

    .modal-content {
      background-color: #fefefe;
      margin: 10% auto;
      padding: 20px;
      border: 1px solid #888;
      width: 80%;
      height: 350px; 
      position: relative;
    }

    .close {
      position: absolute;
      top: 0;
      right: 0;
      padding: 10px;
      cursor: pointer;
    }

    .modal-open {
      overflow: hidden;
    }
`;

const styleButtonAuth = `
    .floating-element {
      position: fixed;
      bottom: 20px;
      right: 20px;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }

    .floating-element button,
    .floating-element div {
      margin-bottom: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .floating-button {
      padding: 10px;
      background-color: #3498db;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    .floating-button:hover {
      background-color: #2980b9;
    }

    .floating-div {
      width: 100px;
      height: 100px;
      background-color: #e74c3c;
      border-radius: 5px;
    }
`;

// Función para simular la compra (puedes ajustar esta función según tus necesidades)
function comprarPlan(plan) {
  alert('¡Plan ' + plan + ' comprado!');
}