const {productsModel} = require("../../models/Productos/productos");
const {matchedData} = require("express-validator");
const { body } = require("express-validator");


/* este es el controlador encargado de mostrar la lista de productos
 */
const getProducts = async (req, res) =>{
    try{
        const products = await productsModel.findAllaData({});
        res.send({products});
    }catch(e){
         //handleHttpError(res,"ERROR_GET_Products")
    };
};

/* este es el controlador encargado de mostrar el detalle de un producto
 */
 const getProduct = async (req, res) =>{
    try{
        req = matchedData(req);
        const {id} = req;
        const products = await productsModel.finOneData(id)
        res.send({products});
    }catch(e){
         //handleHttpError(res,"ERROR_GET_Product")
    };
};

/* este es el controlador encargado de insertar un producto
 */
 const insertProducts = async (req, res) =>{
   try{
    const body = matchedData(req);
    const products = await productsModel.create(body);
    res.send({products});
   }catch(e){
     //handleHttpError(res,'ERROR_CREATE_Products') 
   };
};

/* este es el controlador encargado de modificar/actualizar un producto
 */
 const updateProducts = async (req, res) =>{
    try{
        const {id, ...body} = matchedData(req);
        const products = await productsModel.findOneAndUpdate(id,body);
        res.send({products});
    }catch(e){
        //handleHttpError(res,'ERROR_UPDATE_Products')
    };
};

/**
 * este es el controlador encargado de eliminar un producto
 */
 const deleteProducts = async (req, res) =>{
    try{
        req = matchedData(req)
        const{id} = req;
        const deleteResponse = await productsModel.delete({id});
        const products = {deleted: deleteResponse.matchedCount};
        res.send({products});

    }catch(e){
        //handleHttpError(res,'ERROR_DELETE_Products')  
    };
};

module.exports={getProducts, getProduct, insertProducts, updateProducts,deleteProducts}