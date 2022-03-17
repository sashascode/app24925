# E-Commerce - iMarket

Tienda de productos de Apple con una interfaz sencilla y moderna.

## Construido con
* [ReactJS](https://reactjs.org/)
* [Firebase](https://firebase.google.com)
* [SASS](https://sass-lang.com/)

## Dependencias

* [React Router](https://reactrouter.com/docs/en/v6)
Utilizo esta libreria para crear rutas que rendericen diferentes componentes. Facilita la navegabilidad y le concede un enrutamiento dinamico a la aplicacion.

* [React Icons](https://react-icons.github.io/react-icons/)
Todos los iconos de la aplicacion son componentes importados de esta libreria.

* [react-copy-to-clipboard](https://www.npmjs.com/package/react-copy-to-clipboard)
Esta libreria provee a la aplicacion un componente que recibe una cadena de texto como prop que el usuario va a poder copiar al portapapeles con mayor facilidad.

* [react-fade-in](https://www.npmjs.com/package/react-fade-in)
Esta libreria permite agregarle una animacion de Fade In a cualquier elemento. Es utilizada en este proyecto para una mejor experiencia de usuario.

## Ejecucion local
Siga las instrucciones para ver el sitio de manera local.

1. Abrir una nueva terminal y clonar el repositorio con el siguiente comando:
```
    git clone https://github.com/sxshita/app24925.git
```

2. Desde la terminal nos ubicamos en la carpeta raiz del proyecto e instalamos todas las dependencias con el comando:
```
    npm install
```

3. Por ultimo corremos nuestro proyecto con el comando:
```
    npm start
```

## Informacion sobre desarrollo
### Rutas
* Main ("/"): Renderiza un slider de imagenes (banners), un container para acceder a las distintas categorias de productos y un container con todos los productos existentes en la base de datos.
* Category ("/category/:categoryId"): Renderiza productos filtrados en base a su categoria.
* Search ("/search/:searchId): Renderiza aquellos productos que su propiedad 'name' coincida con la busqueda (searchId). Si ningun producto coincide con la busqueda se renderiza el componente NotFound donde avisa que el producto no fue encontrado y un boton para volver a la pagina de inicio (Main).
* Search Error ("/search"): Renderiza el componente NotFound en caso de que el usuario haya enviado una busqueda vacia.
* Item ("/detail/:productId"): Renderiza una card con los detalles de el producto seleccionado (nombre, descripcion, imagen, stock). Tambien tiene disponible un boton que es el encargado de agregar el producto al carrito, una vez agregado el producto, se renderiza otro boton que redirecciona al usuario a su carrito de compras.
* Cart ("/cart"): Renderiza el carrito de compras con los productos agregados por el usuario. Si no se agrego ningun producto renderiza el componente CartEmpty que renderiza un aviso de "No hay productos".
* Order ("/order"): Renderiza un formulario para generar una orden en la base de datos, al enviar el formulario si todos los campos estan bien renderiza un cartel con el ID de la orden generada. 

