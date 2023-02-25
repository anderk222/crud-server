import express, { Response, Request } from 'express';
import { UserControllers } from '../controllers/user.controllers';


class UserRouter {
   
    private static router = express.Router();

    static mount(){

        this.router.get('/', UserControllers.getAll);
        this.router.post('/', UserControllers.save);
        this.router.get('/:id', UserControllers.get);
        this.router.put('/', UserControllers.update);
        this.router.delete('/:id', UserControllers.delete);

        return this.router;

    }

}

export { UserRouter };