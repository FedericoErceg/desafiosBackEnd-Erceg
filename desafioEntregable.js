const fs = require("fs");

class ProductManager {
  constructor(path) {
    this.products = [];
    this.path = path;
    this.readProductsFromFile();
  }

  static id = 0;

  async readProductsFromFile() {
    try {
      const data = await fs.promises.readFile(this.path, "utf-8");
      this.products = JSON.parse(data);
    } catch (error) {
      this.products = [];
    }
  }

  async writeProductsToFile() {
    await fs.promises.writeFile(
      this.path,
      JSON.stringify(this.products),
      "utf-8"
    );
  }

  async addProduct(title, descripcion, price, thumbnail, code, stock) {
    if (this.products.some((product) => product.code === code)) {
      console.error("El producto ya existe");
      return;
    }

    ProductManager.id++;
    const producto = await {
      id: ProductManager.id,
      title,
      descripcion,
      price,
      thumbnail,
      stock,
      code,
    };
    this.products.push(producto);
    await this.writeProductsToFile();
  }

  getProducts() {
    return this.products;
  }

  getProductById(prodId) {
    const productoPorId = this.products.find((prod) => prod.id === prodId);
    if (productoPorId) {
      return productoPorId;
    } else {
      console.error("Not found");
      return null;
    }
  }

  async updateProduct(prodId, updatedFields) {
    const data = this.products.findIndex((prod) => prod.id === prodId);
    if (data !== -1) {
      this.products[index] = { ...this.products[index], ...updatedFields };
      await this.writeProductsToFile();
    } else {
      console.error("Producto not found");
    }
  }
  async deleteProduct(prodId) {
    this.products = this.products.filter((prod) => prod.id !== prodId);
    await this.writeProductsToFile();
  }
}

const path = "productos.json";

const miProductManager = new ProductManager(path);


miProductManager.addProduct(
  "Coca cola",
  "lata de cola sabor a coca cola bien fresca",
  600,
  "./img/cocacola.png",
  200,
  1
);
miProductManager.addProduct(
  "7UP",
  "Lata de 7up con sabor a lima limon",
  600,
  "./img/7UP.png",
  300,
  1
);

console.log(miProductManager.getProducts());

const productoConId2 = miProductManager.getProductById(2);
const productoConId3 = miProductManager.getProductById(3);

console.log(productoConId2);
console.log(productoConId3);

miProductManager.updateProduct(1, { price: 700, stock: 10 });
miProductManager.deleteProduct(2);

console.log(miProductManager.getProducts());
