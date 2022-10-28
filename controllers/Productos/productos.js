const productsModel = require("../../models/Productos/productos");
const {matchedData} = require("express-validator");
const {handleHttpError} = require("../../utils/handlers/handleError")


/* este es el controlador encargado de mostrar la lista de productos
 */
const getProducts = async (req, res) =>{
    try{
        const products = await productsModel.find({});
        res.send({products});
    }catch(e){
        handleHttpError(res,"ERROR_GET_Products")

    };
};

/* este es el controlador encargado de mostrar el detalle de un producto
 */
 const getProduct = async (req, res) =>{
    try{
        const {id} = req.params
        const products = await productsModel.findOne({where: {id}});
        res.send({ products });

    }catch(e){
        console.log(e);
         handleHttpError(res,"ERROR_GET_Product")
    };
};

/* este es el controlador encargado de insertar un producto
 */
 const insertProducts = async (req, res) =>{
   try{
    const products = await productsModel.create(req.body);
    res.send({products});
   }catch(e){
     handleHttpError(res,'ERROR_CREATE_Products') 
   };
};

/* este es el controlador encargado de modificar/actualizar un producto
 */
 const updateProducts = async (req, res) =>{
    try{
        const id = req.params.id
        const products = await productsModel.update(req.body, {where:{id}});
        res.send({ products })
    }catch(e){
        console.log(e)
        handleHttpError(res,'ERROR_UPDATE_Products')
    };
};

/**
 * este es el controlador encargado de eliminar un producto
 */
 const deleteProducts = async (req, res) =>{
    try{

        const {id} = req.params;
        const products = await productsModel.destroy({where:{id}});
        res.send({ products });
    
    }catch(e)
    {
        console.log(e)
        handleHttpError(res,'ERROR_DELETE_Products')  
    }
};

module.exports={getProducts, getProduct, insertProducts, updateProducts,deleteProducts}