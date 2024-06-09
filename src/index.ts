import dotenv from 'dotenv';
import express from 'express';
import routes from './routes/routes';

const app = express();

app.use(express.json());
app.use(routes);

dotenv.config();

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
  console.log(`Server is up on port ${app.get('port')}`);
});

export default app;
