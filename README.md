# E-Commerce - iMarket

Tienda de productos de Apple con una interfaz sencilla y moderna.

![Demo](https://media.giphy.com/media/BUQid1924r8lrZEwTF/giphy.gif)

## Construido con
* [ReactJS](https://reactjs.org/)
* [Firebase](https://firebase.google.com)
* [SASS](https://sass-lang.com/)

## Dependencias

* [React Router](https://reactrouter.com/docs/en/v6)
Utilizo esta librería para crear rutas que rendericen diferentes componentes. Facilita la navegabilidad y le concede un enrutamiento dinámico a la aplicación.

* [React Icons](https://react-icons.github.io/react-icons/)
Todos los íconos de la aplicación son componentes importados de esta librería.

* [react-copy-to-clipboard](https://www.npmjs.com/package/react-copy-to-clipboard)
Esta librería provee a la aplicación un componente que recibe una cadena de texto como prop que el usuario va a poder copiar al portapapeles con mayor facilidad.

* [react-fade-in](https://www.npmjs.com/package/react-fade-in)
Esta librería permite agregarle una animación de Fade In a cualquier elemento. Es utilizada en éste proyecto para una mejor experiencia de usuario.

## Ejecución local
Siga las instrucciones para ver el sitio de manera local.

1. Abrir una nueva terminal y clonar el repositorio con el siguiente comando:
```
    git clone https://github.com/sxshita/app24925.git
```

2. Desde la terminal nos ubicamos en la carpeta raíz del proyecto e instalamos todas las dependencias con el comando:
```
    npm install
```

3. Por último corremos nuestro proyecto con el comando:
```
    npm start
```

## Información sobre desarrollo
### Rutas
* **Main** *("/")*: Renderiza un slider de imágenes (banners), un container para acceder a las distintas categorías de productos y un container con todos los productos existentes en la base de datos.
* **Category** *("/category/:categoryId")*: Renderiza productos filtrados en base a su categoría.
* **Search** *("/search/:searchId)*: Renderiza aquellos productos que su propiedad 'name' coincida con la búsqueda (searchId). Si ningún producto coincide con la búsqueda se renderiza el componente NotFound donde avisa que el producto no fue encontrado y un botón para volver a la página de inicio (Main).
* **Search Error** *("/search")*: Renderiza el componente NotFound en caso de que el usuario haya enviado una búsqueda vacía.
* **Item** *("/detail/:productId")*: Renderiza una card con los detalles del producto seleccionado (nombre, descripción, imágen, stock). También tiene disponible un botón que es el encargado de agregar cierta cantidad del producto al carrito, una vez agregado el producto, se renderiza otro botón que redirecciona al usuario a su carrito de compras.
* **Cart** *("/cart")*: Renderiza el carrito de compras con los productos agregados por el usuario. Si no se agregó ningún producto renderiza el componente CartEmpty que retorna un aviso de "No hay productos".
* **Order** *("/order")*: Renderiza un formulario para generar una orden en la base de datos, al enviar el formulario si todos los campos están bien renderiza un cartel con el ID de la orden generada. 

