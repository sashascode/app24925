import iphone13 from './img/iphone-13-pro-max-graphite-select.png'
import iphone132 from './img/iphone132.png'
import macair from './img/macairrenovada(1).png'
import macair2 from './img/macair2.png'
import ipadair from './img/ipad(1).png'
import ipadair2 from './img/ipadair2.png'
import airpods from './img/airpodspro.png'
import airpods2 from './img/airpods2.png'
import magickeyboard from './img/magic-keyboard.png'
import magickeyboard2 from './img/magickeyboard2.png'
import parlante from './img/parlante.png'
import parlante2 from './img/parlante2.png'
import iphone12 from './img/iphone12.png'
import iphone122 from './img/iphone122.png'
import ipadpro from './img/ipadpro.png'
import ipadpro2 from './img/ipadpro2.png'

const products = [
    {id: 1, name: "iPhone 13 Pro Max 128GB", price: 1500, description: 'El mayor avance en el sistema de cámaras Pro hasta ahora. Pantalla Super Retina XDR con ProMotion que brinda una respuesta más rápida y fluida. Chip A15 Bionic para un rendimiento fuera de serie. Diseño resistente y la mayor duración de batería jamás vista en un iPhone.', img: iphone13, img2: iphone132, category: 'iphone', stock: 10 },
    {id: 2, name: "iPad Air 10.9\" Wi-Fi 64GB", price: 1000, description: 'El chip A14 Bionic con Neural Engine tiene potencia de sobra y capacidades avanzadas de aprendizaje automático para que puedas editar videos 4K, crear presentaciones inolvidables y diseñar modelos 3D con mucha facilidad.', img: ipadair, img2: ipadair2, category: 'ipad', stock: 14 },
    {id: 3, name: "MacBook Air 13\" M1", price: 2600, description: 'La notebook más delgada y ligera de Apple viene con los superpoderes del chip M1. Termina todos tus proyectos mucho más rápido con el CPU de 8 núcleos y disfruta como nunca antes de apps y juegos con gráficos avanzados gracias al GPU de hasta 8 núcleos.', img: macair, img2: macair2, category: 'mac', stock: 5 },
    {id: 4, name: "Airpods Pro (3era Generacion)", price: 800, description: 'Presentamos los nuevos AirPods. Con audio espacial para disfrutar de un sonido envolvente, Ecualización Adaptativa que ajusta la música según la forma de tus oídos, mayor duración de la batería y resistencia al agua y al sudor. Prepárate para una experiencia llena de magia.', img: airpods, img2: airpods2, category: 'accesorios', stock: 20},
    {id: 5, name: "Apple Magic Keyboard con Touch ID", price: 450, description: 'Por primera vez, el Magic Keyboard viene con Touch ID para iniciar sesión y hacer compras de forma segura mediante una autenticación fácil y rápida.', img: magickeyboard, img2: magickeyboard2, category: 'accesorios', stock: 8},
    {id: 6, name: "Parlante Bluetooth Bose SoundLink Revolve", price: 600, description: 'El parlante Bose SoundLink Revolve es uno de nuestros altavoces Bluetooth portátiles de mejor rendimiento hasta ahora. Ofrece un verdadero sonido en 360° para una cobertura uniforme y constante.', img: parlante, img2: parlante2, category: 'accesorios', stock: 2},
    {id: 7, name: "iPhone 12 mini 128 GB", price: 1380, description: 'El chip A14 Bionic, el más rápido en un smartphone. Una pantalla OLED de borde a borde. Un nuevo frente de Ceramic Shield, cuatro veces más resistente a las caídas. Además, ahora el modo Noche viene en todas las cámaras. El iPhone 12 mini lo tiene todo.', img: iphone12, img2: iphone122, category: 'iphone', stock: 11},
    {id: 8, name: "iPad Pro 11\"Chip M1 Wi-Fi + Cellular - 2TB (3era Gen)", price: 1460, description: 'El iPad en su máxima expresión. Un rendimiento fuera de serie con el chip M1, una espectacular pantalla XDR y conexión inalámbrica ultrarrápida. El iPad Pro está listo para todo.', img: ipadpro, img2: ipadpro2, category: 'ipad', stock: 7}
]

const categories = [
    {id: 'mac', description: 'Mac'},
    {id: 'iphone', description: 'iPhone'},
    {id: 'ipad', description: 'iPad'},
    {id: 'accesorios', description: 'Accesorios'}
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
        }, 1000)
    })
}



