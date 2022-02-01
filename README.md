# Frontend Proyecto Final Integrador Diplomado Full Stack UNC

para ver la solución en el navegador haga [click aquí](https://grupo1-frontend.herokuapp.com/).

### Colaboradores
* [Vladimir Varela](https://github.com/VladimirVarelaH)
* [Jose Fuentes](https://github.com/JoanFuentes1981)
* [Gisela Ruiz](https://github.com/franbur)
* [Agustin Peralta](https://github.com/aguperalta23)

## Pautas para la elaboración Integrador
One page en ReactJs tomando como referencia el diseño trabajado a lo largo del programa. Debe respetar el diseño y funcionalidad:

* Bloque de navegación principal con comportamiento smooth scroll (al hacer clic animar hasta el destino).
* Bloque de slider con tres imágenes.
* Bloque de texto fullwidth.
* Bloque de slider centrado con dos pasadas y fondo a dos colores.
* Bloque con acordeón e imagen de fondo ubicada a la  derecha.
* Bloque de formulario con validación al enviar (puede ser validado con JavaScript detallado del cliente, o bien del lado del servidor mediante Laravel),
 mostrar resultados de validación de forma clara.
* Conectar con API REST creada en Laravel para el envío de formulario vía mail y guardar los datos del envío en una base de datos.
* Ambos desarrollos deben estar en modo online (expuesto en URLs accesibles vía web)
* Se evaluará resolución Desktop y mobile.


## Descripción :bookmark:

* Se realizo trabajo coolaborativo : a traves de división de tareas por equipos.

## Front-end.

* Se crea One-Page en ReactJs.
* Se migran y ordenan los archivos.
* Se aplican estilos y se costumiza Framework.

## Tecnologías utilizadas

* HTML.
* Css.
* Sass.
* Bootstrap.

## Sección 5 :mailbox_with_mail:
La Sección 5 se desarrolló con Axios, un sistema de alertas con Bootstrap y un sistema de validación de datos.  
La solicitud es procesada por axios y enviada a la aplicación de servidor con método post y la información del correo electrónico como payload.

### El sistema de alertas
Ya que React funciona como una _single page aplication_ el botón `send` tiene un `event.preventDefault()`. Por eso, a pesar de que los `inputs` del formulario de contacto tienen la propiedad `required`, no despliega los mensajes necesarios para informar al usuario si solicitud es inválida.  
Para resolver esto se desarrolló un sistema que muestra diferentes mensajes dependiendo de el estado de la solicitud, estos pueden ser:
* None: en el estado por defecto no despliega ningún mensaje.
* Datos inválidos: JavaScript encontró que algun campo estaba vacío o que el correo era inválido.
* Error del servidor: Indica que la aplicación de servidor es responsable por la falla.
* Datos inválidos 2: Indica que PHP encontró que algún campo estaba vacío o el correo no era válido.
* Registro creado exitosamente: INdica que el registro se creó y el correo fue enviado.

### Validación de datos
Para la validación del correo elctrónico se programó una función que confirma que el formato sea *texto@dominio.extension*. Los criterios son:
* Que el texto exista antes del arroba.
* Que el dominio exista entre el arroba y el punto.
* Que el dominio tenga al menos dos letras.
* Para los dominios como .com.ar sólo se valida la primera extensión.

Esta validación se repite en el servidor con la misma fucnión, adaptada a PHP.  
_Nota: Para leer la documentación del servidor haga [click aquí](https://github.com/VladimirVarelaH/BackendPin)_ 

## Build
La carpeta build contiene los archivos minificados del proyecto, esta es la carpeta que se ejecuta en el servidor, por lo que se recomienda también ejecutar desde esta carpeta cuando se esté en desarrollo.  

## Deploy :computer:
Para el deploy se integró express en el proyecto, desarrollando una ruta que sirve la aplicación desde la ruta raíz del proyecto.   
De esta forma cuando se hace una solicitud a la URL del proyecto responde Express que envía la build del proyecto para producción.

<!-- ## Ejecución del programa
Para facilitar el Deploy de la palicación se instaló Express en el proyecto, dejando como archivo de arranque a `app.js` de la carpeta raíz del proyecto.  
Para poder ejecutar la app en este nuevo entorno se debe acceder a la consola en la carpeta raíz del proyecto y ejecutar:
```cmd
node app.js
```
O, en su lugar:
```cmd
npm start
```
De esta forma, si el prorama se ejecuta correctamente, se verá el mensaje `App is live on port 3000`. Esto abrirá la plicación ejecutándola desde su build para producción.  
Si se quisiera ejecutar el servidor de desarrollo de React se debería hacer a través del comando:
```cmd
npm start-dev
```
De esta forma se ejecutará el programa como de constumbre.  
Una vez se termine el desarrollo se debe volver a hacer la build de producción con:
```npm
npm run build
``` -->

