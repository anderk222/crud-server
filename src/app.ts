import express, { Express } from 'express';
import cors from 'cors';
import { EmployeeRouter } from './routes/employee.routes';
import morgan from 'morgan';

class App {

    protected server: Express;

    constructor() {
        this.server = express();
        this.setup();
    };

    private setup() {

        this.vars();
        this.middlawares();
        this.routes();

    }

    private routes() {

        this.server.use('/api/employee', EmployeeRouter.mount());

    }

    private vars() {
        this.server.set('PORT', 3333);
    }

    private middlawares() {


        this.server.use(express.json());

        this.server.use(cors({ origin: '*' }));
        this.server.use(morgan('dev'));

    }

}
export { App };