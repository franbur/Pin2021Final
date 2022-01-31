# Frontend Proyecto Final Integrador Diplomado Full Stack UNC

## Colaboradores
* [Vladimir Varela](https://github.com/VladimirVarelaH)
* [Jose Fuentes](https://github.com/JoanFuentes1981)
* [Gisela Ruiz](https://github.com/franbur)

## Validación de datos
Para la validación del correo elctrónico se programó una función que confirma que el formato sea *texto@dominio.extension*. Los criterios son:
* Que el texto exista antes del arroba.
* Que el dominio exista entre el arroba y el punto.
* Que el dominio tenga al menos dos letras.
* Para los dominios como .com.ar sólo se valida la primera extensión.

Esta validación se repite en el servidor con la misma fucnión, adaptada a PHP.

## Build
La carpeta build contiene los archivos minificados del proyecto, esta es la carpeta que se ejecuta tanto en el servidor, por lo que se recomienda también ejecutar desde esta carpeta cuando se esté en desarrollo.  

## Ejecución del programa
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

