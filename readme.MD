# CRUD - Create Read Update Delete

![logo](public/images/logo-mercado-liebre.svg)
![banner](public/images/img-home-banner.jpg)

# Episodio 1

## Objetivo
Todo eMarket que se respete necesita que sea posible agregar, borrar y modificar
productos y que los mismos se persistan en una base de datos. Adicionalmente, también
debe permitir leer los productos presentes en dicha base de datos de una manera rápida
y sencilla.

A este sistema, en el mundo del desarrollo, se le conoce como ABM (Alta, Baja,
Modificación) o CRUD (Create, Read, Update, Delete).

Así que nuestro enfoque en esta oportunidad será desarrollar dicha funcionalidad, pues
nuestros inversores quieren salir con la web al aire lo antes posible.
¡Buena suerte!😎👍✨

## Desafío:
Utilizando de base el siguiente proyecto creado con express generator (no te olvides de
correr npm install 😉 ) debemos agregarle el manejo de rutas, para poder atender los
diferentes pedidos de un CRUD para nuestro proyecto.

Es decir, para la construcción de esta versión del sitio web, el cliente espera que
incorporemos el acceso a las siguientes URLs:

- /    ... Se deberán mostrar los productos separados en dos secciones. Los últimos
visitados y los productos en oferta.
- /products    ... Se deberán listar todos los productos presentes en la base de datos JSON.
- /products/:id    ... Detalle de producto. Cada producto deberá contar con dos botones de
acción: BORRAR y MODIFICAR.
- /products/create    ... Mostrará el formulario de creación para un producto.
- /products/    ... Deberá recibir los datos del formulario de creación.
- /products/edit/:id    ... Botón MODIFICAR: modificará al producto correspondiente en la base de
datos JSON.
- /products/    ... Deberá recibir los datos del formulario de edición.
- /products/:id    ... Botón BORRAR: eliminará al producto de la base de datos JSON.

Importante: Como vemos, muchas de las rutas se repiten. Será nuestra responsabilidad
determinar los métodos a utilizar en cada caso y el orden en el cual deberán ir dentro del
archivo de rutas. 😉

A continuación se detalla lo que deberá mostrar cada ruta:

1- Cada producto en la Home de nuestro sitio (/), deberá llevar a la sección de
detalle (/products/:id) del producto correspondiente al hacer click con el
mouse sobre el mismo. Donde id es el Id del producto que seleccionamos.

2- En la sección Detalle de producto se deberá mostrar:
- Pestaña del navegador con el nombre del producto.
- Nombre del producto.
- Imagen del producto.
- Descripción del producto.
- Precio real, descuento y precio final.
- Si el producto no tiene descuento, mostrar solo el precio real.
- Los precios deberán mostrarse con separador de miles.

3- En la sección de Detalle de producto se deberá incluir los dos botones de
acción para cada producto: MODIFICAR y BORRAR.

4- La aplicación deberá contar con las 7 rutas de un ABM:

- Listado de productos.
- Formulario de carga.
- Recepción del formulario de carga.
- Formulario de edición.
- Recepción del formulario de edición.
- Eliminación de productos.

5- Para las rutas de recepción de formularios y borrado, nos solicitan que
simplemente mostremos, por ahora, un mensaje de la acción.

## Conclusión
Entender los métodos HTTP es fundamental para comprender la forma en que funcionan
las peticiones al servidor, y como este nos responde según el tipo de petición que
hagamos. Como vimos, no es lo mismo un GET que un POST. Además, es importante que
entendamos que una misma URL puede ser tratada de forma diferente por el servidor,
según la petición se haga, por ejemplo: por POST, GET, etc.
¡Hasta la próxima!

# Episodio 2

## Objetivo
En la ejercitación anterior practicamos cómo debemos preparar el sistema de ruteo de
una aplicación para poder codificar un CRUD (Create, Read, Update, Delete) o ABM (Alta,
Baja, Modificación).

En esta ejercitación estaremos trabajando con nuestra fuente de datos JSON para hacer
que los cambios queden almacenados utilizando cada una de las rutas que
implementamos en la clase anterior. Además, estaremos trabajando en la subida de
imágenes de los productos.
¡Buena suerte!😎👍✨

## Micro desafío - Paso 1:
Tomando como referencia la ejercitación de la clase anterior*, debemos codificar el
formulario de carga de un producto, el cual deberá actualizar el archivo JSON con los
datos del nuevo producto ingresado. Dicho formulario será accedido desde la ruta:
/products/create y una vez que se procese dicho formulario deberemos redirigir a
/products/, donde debemos mostrar todos los productos de nuestro JSON. Tengamos en
cuenta que debemos incluir la posibilidad de subir una imagen del producto.

## Micro desafío - Paso 2:
Además de la creación, debemos añadir a nuestra aplicación la opción de editar un
producto ya agregado en nuestro JSON. Para ello deberemos utilizar la siguiente ruta
para enviar los datos modificados al servidor: /products/edit/:id

Recordemos que para poder acceder a la opción de editar teníamos, en la vista del
detalle del producto, el botón MODIFICAR.

## Micro desafío - Paso 3:
El siguiente paso es poder eliminar un determinado producto de nuestro JSON, para lo
cual usaremos la siguiente ruta /products/:id, donde id es el identificador que permite
reconocer unívocamente a un determinado producto.

Recordemos que para poder acceder a la opción de eliminar teníamos en la vista del
detalle del producto el botón BORRAR.

* En caso de no tener completada la ejercitación anterior, dejamos estos archivos base en
donde se encuentran el HTML y CSS resueltos junto con rutas necesarias para trabajar el
CRUD.

## Conclusión
Es importante que comprendamos que, según la acción que necesitemos realizar con el
servidor, cambia el método HTTP que vamos a utilizar.
¡Hasta la próxima!

## Clase 57, 58 y 59

### Ubicación -> Programación/TRABAJOS PRACTICOS/CRUD-Mercado Liebre