<h1 align="center">Proyecto final React Ecommerce creado por Tomas Ezequiel Gil Aguiar para el curso de Coderhouse comision 43190 </h1>

📝
### Descripción del proyecto 
  ● Un usuario puede ingresar, navegar por los productos e ir a sus detalles. \
  ● Desde el detalle puede ver la foto y precio e ingresarlo al
carrito.\
  ● Una vez que el carrito podra visualizar un
listado compacto de la orden con el precio total.\
  ● Al ingresar su nombre, telefono y e-mail, se activa el botón de ‘generar orden’.\
  ● Al clickear ‘generar orden’ se guarda en la base de datos una orden y da un feedback del número de orden.


## Funcionalidades del proyecto:

- `Funcionalidad 1`: Poder comprar productos
- `Funcionalidad 2`: Navegar por los productos y ver detalles
- `Funcionalidad 3`: Generar una orden de compra de 1 o mas productos
- `Funcionalidad 4`: Ecommerce creado con Diseño responsive
 

### Información para entender la organización del Código del Proyecto:

#### Aspecto generales de la carpeta src
- 'index.js': El archivo index.js es donde ocurre la inicialización y el montaje del componente raíz de la aplicación en el DOM (Document Object Model). Este archivo es el primero en ser ejecutado cuando se carga la aplicación en un navegador web.

- 'App.jsx': El archivo App.jsx es responsable de definir y organizar los componentes de nivel superior de la aplicación. Este componente puede contiene otros componentes de presentacion, de funcion y manejar su estado, datos y eventos.

- 'Style.css': Es el archivo de estilos destinado a la optimizacion de la visualizacion de la pagina que provienen desde Sass y tambien algunas prediseñadas de bootstrap.

- carpeta components:
    - componentes contenedores:
        - ItemListCont: es el que contiene el hook que llama a la base de datos de firestore. envia mediante prop items los productos provenientes de firestore para ser utilizados por la funcion map de 'ItemList' que a su vez contiene a 'item' que renderiza la card
        - ItemDetailCont: Componente contenedor que contiene los hooks y la promesa que retorna los productos desde firebase, tambien contiene a ItemDetail la logica del contador y el componente itemCount con su respectiva ruta al carrito.
        - NavBar: contiene el NavBar de presentacion de la barra de navegacion con sus rutas correspondientes a react-router-dom provenientes del archivo App.jsx
- carpeta context: contiene el componente CartContext que maneja la logica de la tabla de productos, limpieza de los productos eliminados 
- services: contiene los archivos y logica de la base de datos firebase
#### Aspecto generales de la carpeta public
- contiene el archivo index.html y el root de index.js con el llamado mediante id

### Tecnologías utilizadas

⭐ Bootstrap\
⭐ React\
⭐ Sass\
⭐ Firebase


