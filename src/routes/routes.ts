import express, { Request, Response, Router } from 'express';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import { swaggerOptions } from '../config/swagger';

const router: Router = express.Router();
const swaggerSpec = swaggerJSDoc(swaggerOptions);

/**
 * @swagger
 * /summarize/:
 *   post:
 *     tags:
 *       - summary
 *     description: Create a summary of an article
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               url:
 *                 type: string
 *                 description: |
 *                   Url of an article
 *                 example: https://www.bbc.com/news/articles/cl7744p258yo
 *               min_length:
 *                 type: integer
 *                 description: |
 *                   The minimum length of the sequence to be generated. Range: 10-200. Has to be lower than max_length.
 *                 example: 20
 *               max_length:
 *                 type: integer
 *                 description: |
 *                   The maximum length the generated tokens can have. Range: 10-200. Has to be higher than min_length.
 *                 example: 60
 *             required:
 *               - url
 *               - min_length
 *               - max_length
 *             example:
 *               url: https://www.bbc.com/news/articles/cl7744p258yo
 *               min_length: 20
 *               max_length: 60
 *     responses:
 *       '200':
 *         description: Summary created successfully
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: "Iga Swiatek has won three French Open titles in four of the past five years. The Pole won 6-2 6-1 over Italian 12th seed Jasmine Paolini"
 *       '400':
 *         description: Bad Request
 *       '500':
 *         description: Internal Server Error
 */

router.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
router.use('*', (req: Request, res: Response) => {
  res.status(404).send('Page not found.');
});

export default router;
