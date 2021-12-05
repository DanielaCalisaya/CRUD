const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const writeJson = dataBase => fs.writeFileSync(productsFilePath, JSON.stringify(dataBase), 'utf-8'); //Esta función solo escribe en el JSON

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {
		res.render('products', { //Acá le estoy mandando todos los productos
			products,
			toThousand
		})
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		let productId = +req.params.id; //Acá tengo el id que viene por parámetro, y le paso el + para pasarlo a numero
        let product = products.find(product => product.id === productId) //Captura el producto según el id y despues de todo pasarlo a la vista

		res.render('detail', {
            product,
			toThousand
		})
	},

	// Create - Form to create
	create: (req, res) => { //Solo necesitamos pasarle la vista renderizada para que la rellene, es por get
		res.render('product-create-form')
	},
	
	// Create -  Method to store
	store: (req, res) => {
		//Al hacer un res.send me llegan los datos como en el json, diferente a res.render
		//res.send(req.body)En el body es donde viajan los datos del formulario en el objeto req
		const { name, price, discount, category, description } = req.body//Destructuramos el body y accedeemos a cada una de sus propiedades

		let lastId = 1;

		products.forEach(products => {
			if(products.id > lastId){
				lastId = products.id
			}
		});

		let newProduct = { //Este objeto creará el nuevo objeto
			id: lastId + 1,
			name,
			price,
			discount,
			category,
			description,
			image: "default-image.png"
		}

		products.push(newProduct)//Push, esto se empujaria al json

		writeJson(products)
		res.redirect('/products')
    //Este método store recibe información, la procesa, la guarda en la base de datos y por ultimo redirecciona a otro lado
	},

	// Update - Form to edit
	edit: (req, res) => {
		let productId = +req.params.id;
		let productToEdit = products.find(product => product.id === product.id);

		res.render('product-edit-form', {
			product: productToEdit
		})
	},
	// Update - Method to update
	update: (req, res) => {
		// Do the magic
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		// Do the magic
	}
};

module.exports = controller;