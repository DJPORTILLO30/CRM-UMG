const swaggerJsdoc = require("swagger-jsdoc");

/**
 * API Config Info
 */

const swaggerDefinition ={
    openapi: "3.0.0",
    info:{
        title:"Documentacion Backend CRM",
        version:"1.0.0"
    },
    servers:[
        {
            url:"http://localhost:3001/api"
        }
    ],
   components:{
    schemas:{

    },
    securitySchemes:{
        bearerAuth:{
            type:"http",
            scheme:"bearer",
        }
    },
   },
};

/**
 * Opciones
 */
const options = {
    
    swaggerDefinition,
    apis:[
        "./routes/*.js"
    ]
}

const openApiConfiguration = swaggerJsdoc(options);

module.exports = openApiConfiguration