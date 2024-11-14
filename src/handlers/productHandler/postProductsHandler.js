const postProducts = require("../../controllers/productControllers/postProductsController");

const postProductsHandler = async (req, res) => {
	try {
		console.log("hollaaa");
		const product = await postProducts(req.body);
		res.status(201).json(product);
	} catch (error) {
		if (error.message === "El producto ya existe.") {
			console.log("chau");
			res.status(409).send(error.message);
		} else {
			console.log("re");
			res.status(500).send("Hubo un error al crear el producto.");
		}
	}
};

module.exports = postProductsHandler;
