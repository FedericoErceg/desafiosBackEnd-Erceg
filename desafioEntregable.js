class ProductManager {
    constructor(){
        this.products = [];
    }

    static id = 0;
    
    addProduct(title, descripcion, price, thumbnail, code, stock){
        if(this.products.some((product) => product.code === code)){
            console.error("El producto ya existe");
            return;
        }

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
        return this.products;
    }

    getProductById(prodId){
        const productoPorId = this.products.find((prod) => prod.id === prodId);
        if(productoPorId){
            return productoPorId;
        } else{
            console.error("Not found");
            return null;
        }
    }
}

const miProductManager = new ProductManager();

miProductManager.addProduct('Coca cola', 'lata de cola sabor a coca cola bien fresca', 600, './img/cocacola.png', 200, 1);
miProductManager.addProduct('7UP', 'Lata de 7up con sabor a lima limon', 600, './img/7UP.png', 300, 1);

console.log(miProductManager.getProducts());

const productoConId2 = miProductManager.getProductById(2);
const productoConId3 = miProductManager.getProductById(3);

console.log(productoConId2);
console.log(productoConId3);

