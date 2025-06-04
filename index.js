class Product{
    constructor(title, price, category, id = null){
    this.title = title;
    this.price = price;
    this.category = category;
    this.id = id;
    }

    getDetail(){
        return `Product: ${this.title}, Id: ${this.id} , price $${this.price}, category: ${this.category}`;
    }
}

const product1 = new Product("prod1",450, "vegetable");
const product2 = new Product("prod2",550, "vegetable");
const product3 = new Product("prod3",650, "vegetable");
const product4 = new Product("prod4",750, "vegetable");
const product5 = new Product("prod5",850, "fruit");

function addProduct(list, product){
    if(list.length < 1){
        product.id = 1;
    }else{
        product.id = list[list.length-1].id + 1;
    }
    list.push(product);
}

function getList(){
    products.forEach((product) =>
        console.log(product.getDetail())
    )
}

let products = [];

addProduct(products,product1);
addProduct(products,product2);
addProduct(products,product3);
addProduct(products,product4);
addProduct(products,product5);


const args = process.argv.slice(2);

if(args[0] === 'GET'){
    if(args[1] === 'products'){
        getList();
    } else if(args[1] && args[1].includes('/')){
        const route = args[1].split("/");

        if(route[0] !== 'products'){
            throw new Error('Ruta invalida. Para buscar un producto debe utilizar products/<id>')
        }

        const id = parseInt(route[1]);
        if(isNaN(id)){
            throw new Error('El valor ingresado no es numerico, por favor ingresar el numero de un id valido');
        }else if(id < 0){
            throw new Error('El numero ingresado es un numero negativo, por favor ingresar un id valido');
        }

    }
}else if(args[0] === 'POST'){
    if(args[1] === 'products'){

    }
} else if (args[0] === 'DELETE'){
    console.log(`El item cn el id: ${args[1]} se eliminó con exito`);
}