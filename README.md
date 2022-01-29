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