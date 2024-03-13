import swaggerJSDoc, {OAS3Definition, OAS3Options} from "swagger-jsdoc";

const swaggerDefinition: OAS3Definition = {
    openapi: "3.0.3",
    info: {
        title: "Documentacion de la API",
        version: "1.0.0",
    },
    servers: [
        {
            url:"http://localhost:3002",
        },
    ],
    components: {
            /*securitySchemes: {
            },*/
        schemas:{
            plato: {
                type: "object",
                required: ["nombre", "descripcion", "precio", "categoria"],
                properties: {
                    nombre: { 
                        type: "string", 
                    },
                    descripcion: { 
                        type: "string",
                    },
                    precio: { 
                        type: "integer",
                    },
                    categoria: { 
                        type: "integer",
                    },
                },
            },
            categoria: {
                type: "object",
                required: ["nombre"],
                properties: {
                    nombre: {
                        type: "string"
                    }
                }
            },
            //orden: {},
            //user: {},
        }
    }
};

const swaggerOptions: OAS3Options = {
    swaggerDefinition,
    apis: ["./src/infrastructure/http/routes/*.ts"],
};

export default swaggerJSDoc(swaggerOptions);