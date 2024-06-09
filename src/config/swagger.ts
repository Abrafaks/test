import { SwaggerDefinition } from 'swagger-jsdoc';
import { SwaggerOptions } from 'swagger-ui-express';

const swaggerDefinition: SwaggerDefinition = {
  openapi: '3.0.3',
  info: {
    title: 'Summary API',
    description: 'Article summarization API',
    version: '1.0.0',
    contact: {
      name: 'Marcin Matoga',
      email: 'marcin.matoga.poznan@gmail.com',
    },
  },
  servers: [
    {
      url: 'https://llm-apgrew6o2a-lm.a.run.app',
    },
  ],
};

export const swaggerOptions: SwaggerOptions = {
  swaggerDefinition,
  apis: ['../**/*routes.ts'],
};
