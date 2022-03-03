const products = [
    {id: 1, name: "iPhone 13 Pro Max 128GB", price: 1500, description: 'El mayor avance en el sistema de cámaras Pro hasta ahora. Pantalla Super Retina XDR con ProMotion que brinda una respuesta más rápida y fluida. Chip A15 Bionic para un rendimiento fuera de serie. Diseño resistente y la mayor duración de batería jamás vista en un iPhone.', img: './img/iphone-13-pro-max-graphite-select.png', img2: './img/iphone132.png', category: 'iphone', stock: 10 },
    {id: 2, name: "iPad Air 10.9\" Wi-Fi 64GB", price: 1000, description: 'El chip A14 Bionic con Neural Engine tiene potencia de sobra y capacidades avanzadas de aprendizaje automático para que puedas editar videos 4K, crear presentaciones inolvidables y diseñar modelos 3D con mucha facilidad.', img: './img/ipad(1).png', img2: './img/ipadair2.png', category: 'ipad', stock: 14 },
    {id: 3, name: "MacBook Air 13\" M1", price: 2600, description: 'La notebook más delgada y ligera de Apple viene con los superpoderes del chip M1. Termina todos tus proyectos mucho más rápido con el CPU de 8 núcleos y disfruta como nunca antes de apps y juegos con gráficos avanzados gracias al GPU de hasta 8 núcleos.', img: './img/macairrenovada(1).png', img2: './img/macair2.png', category: 'mac', stock: 5 },
    {id: 4, name: "Airpods Pro (3era Generacion)", price: 800, description: 'Presentamos los nuevos AirPods. Con audio espacial para disfrutar de un sonido envolvente, Ecualización Adaptativa que ajusta la música según la forma de tus oídos, mayor duración de la batería y resistencia al agua y al sudor. Prepárate para una experiencia llena de magia.', img: './img/airpodspro.png', img2: './img/airpods2.png', category: 'accesorios', stock: 20},
    {id: 5, name: "Apple Magic Keyboard con Touch ID", price: 450, description: 'Por primera vez, el Magic Keyboard viene con Touch ID para iniciar sesión y hacer compras de forma segura mediante una autenticación fácil y rápida.', img: './img/magic-keyboard.png', img2: './img/magickeyboard2.png', category: 'accesorios', stock: 8},
    {id: 6, name: "Parlante Bluetooth Bose SoundLink Revolve", price: 600, description: 'El parlante Bose SoundLink Revolve es uno de nuestros altavoces Bluetooth portátiles de mejor rendimiento hasta ahora. Ofrece un verdadero sonido en 360° para una cobertura uniforme y constante.', img: './img/parlante.png', img2: './img/parlante2.png', category: 'accesorios', stock: 2},
    {id: 7, name: "iPhone 12 mini 128 GB", price: 1380, description: 'El chip A14 Bionic, el más rápido en un smartphone. Una pantalla OLED de borde a borde. Un nuevo frente de Ceramic Shield, cuatro veces más resistente a las caídas. Además, ahora el modo Noche viene en todas las cámaras. El iPhone 12 mini lo tiene todo.', img: './img/iphone12.png', img2: './img/iphone122.png', category: 'iphone', stock: 11},
    {id: 8, name: "iPad Pro 11\"Chip M1 Wi-Fi + Cellular - 2TB (3era Gen)", price: 1460, description: 'El iPad en su máxima expresión. Un rendimiento fuera de serie con el chip M1, una espectacular pantalla XDR y conexión inalámbrica ultrarrápida. El iPad Pro está listo para todo.', img: './img/ipadpro.png', img2: './img/ipadpro2.png', category: 'ipad', stock: 7}
]

const categories = [
    {id: 'iphone', description: 'iPhone', text: 'Un salto al siguiente nivel.', img: './img/categories/iphone-category.png'},
    {id: 'mac', description: 'MacBook', text: 'Velocidad para llevar a todas partes.', img: './img/categories/mac-category.png'},
    {id: 'ipad', description: 'iPad', text: 'Un mundo a todo color.', img: './img/categories/ipad-category.png'},
    {id: 'accesorios', description: 'Accesorios', text: 'Completá tu experiencia.', img: './img/categories/accessories-category.png'}
]

const sliderData = [
    {image: './img/banners/0.jpg', alt: 'airpods banner' },
    {image: './img/banners/1.jpg', alt: 'banner'},
    {image: './img/banners/2.jpg', alt: 'banner'},
    {image: './img/banners/3.jpg', alt: 'banner'}
]

export const getProducts = (category) => {
    return new Promise((res) => {
        const prod = products.filter(p => p.category === category);
        setTimeout(() => {
            res(prod.length ? prod : products);
        }, 2000);      
    });
}

export const getProduct = (id) => {
    return new Promise((res) => {
        const prod = products.find(p => p.id === parseInt(id) );
        setTimeout(() => {
            res(prod);
        }, 2000);      
    });
}

export const getCategories = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res(categories);
        }, 2000)
    })
}

export const getSliderData = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res(sliderData);
        }, 2000)
    })
}


