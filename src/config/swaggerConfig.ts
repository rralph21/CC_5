import swaggerJsdoc from "swagger-jsdoc";

const swaggerOptions: swaggerJsdoc.Options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Resource Management API Documentation",
            version: "1.0.0",
            description:
                "This is the API documentation for the Resource Management application.",
        },
        servers: [
            {
                url: "http://localhost:3000/api/v1",
                description: "Local server",
            },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                },
            },
            schemas: {
                Resource: {
                    type: "object",
                    properties: {
                        id: { type: "integer", example: 1 },
                        title: { type: "string", example: "Express.js Guide" },
                        type: { type: "string", example: "documentation" },
                        url: { type: "string", format: "uri", example: "https://expressjs.com/en/guide" },
                        description: { type: "string", example: "Official Express.js documentation" },
                        createdAt: { type: "string", format: "date-time", example: "2025-12-30T12:34:56.789Z" },
                    },
                    required: ["id", "title", "type", "url", "description", "createdAt"],
                },
                NewResource: {
                    type: "object",
                    properties: {
                        title: { type: "string", example: "Jest Testing Tutorial" },
                        type: { type: "string", example: "tutorial" },
                        url: { type: "string", format: "uri", example: "https://example.com/jest-tutorial" },
                        description: { type: "string", example: "Complete guide to testing with Jest" },
                    },
                    required: ["title", "type", "url", "description"],
                },
            },
        },
        security: [
            {
                bearerAuth: [],
            },
        ],
    },
    apis: ["./src/api/v1/router/*.ts"], 
};

// Generate the Swagger spec
export const generateSwaggerSpec = (): object => {
    return swaggerJsdoc(swaggerOptions);
};