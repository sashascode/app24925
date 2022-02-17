import iphoneimg from './img/iphone-13-pro-max-graphite-select.png'
import macimg from './img/macairrenovada(1).png'
import ipadimg from './img/ipad(1).png'
import airpodsimg from './img/airpodspro.png'

const products = [
    {id: 1, name: "iPhone 13 Pro Max 128GB", price: 1500, description: 'El mayor avance en el sistema de cámaras Pro hasta ahora. Pantalla Super Retina XDR con ProMotion que brinda una respuesta más rápida y fluida. Chip A15 Bionic para un rendimiento fuera de serie. Diseño resistente y la mayor duración de batería jamás vista en un iPhone.', img: iphoneimg, category: 'iphone', stock: 10 },
    {id: 2, name: "iPad Air 10.9\" Wi-Fi 64GB", price: 1000, description: 'El chip A14 Bionic con Neural Engine tiene potencia de sobra y capacidades avanzadas de aprendizaje automático para que puedas editar videos 4K, crear presentaciones inolvidables y diseñar modelos 3D con mucha facilidad.', img: ipadimg, category: 'ipad', stock: 14 },
    {id: 3, name: "MacBook Air 13\" M1", price: 2600, description: 'La notebook más delgada y ligera de Apple viene con los superpoderes del chip M1. Termina todos tus proyectos mucho más rápido con el CPU de 8 núcleos y disfruta como nunca antes de apps y juegos con gráficos avanzados gracias al GPU de hasta 8 núcleos.', img: macimg, category: 'mac', stock: 5 },
    {id: 4, name: "Airpods Pro (3era Generacion)", price: 800, description: 'Presentamos los nuevos AirPods. Con audio espacial para disfrutar de un sonido envolvente, Ecualización Adaptativa que ajusta la música según la forma de tus oídos, mayor duración de la batería y resistencia al agua y al sudor. Prepárate para una experiencia llena de magia.', img: airpodsimg, category: 'accesorios', stock: 20}
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



