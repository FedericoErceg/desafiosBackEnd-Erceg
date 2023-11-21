class ProductManager {
    constructor(){
        this.products = [];
    }

    
    addProduct(title, descripcion, price, thumbnail, code, stock){
        ProductManager.id++;
        const producto = {
            id: ProductManager.id,
            title,
            descripcion,
            price,
            thumbnail,
            stock,
            code
        }
        this.products.push(producto);
    }
    
    getProducts(prodId){
        return this.products.find(prod => prod.id === prodId);
    }

    getProductById(prodId){
        const productoPorId = this.getProducts(prodId);
        if(productoPorId){
            return productoPorId;
        } else{
            console.error("Not found");
            return null;
        }
    }
}

const miProductManager = new ProductManager();

miProductManager.addProduct('Coca cola', 'lata de cola sabor a coca cola bien fresca', 600, './img/cocacola.png', 200, 1)

const productId = 1;
const mostrarProducto = miProductManager.getProductById(productId);

console.log(mostrarProducto);
