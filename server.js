import Express from 'express';
import Cors from 'cors';
import dotenv from 'dotenv';
import { conectarBD } from './db/db.js';
import rutasProducto from './views/products/rutas.js';
import rutasUsuario from './views/users/rutas.js';
import rutasVenta from './views/sales/rutas.js';

dotenv.config({ path: './.env' });

const app = Express();

app.use(Express.json());
app.use(Cors());
app.use(rutasProducto);
app.use(rutasUsuario);
app.use(rutasVenta);

const main = () => {
  return app.listen(process.env.PORT, () => {
    console.log(`escuchando puerto ${process.env.PORT}`);
  });
};

conectarBD(main);
