import express from 'express';
import { EmployeeControllers } from '../controllers/employee.controllers';


class EmployeeRouter {
   
    private static router = express.Router();

    static mount(){

        this.router.get('/', EmployeeControllers.getAll);
        this.router.post('/', EmployeeControllers.save);
        this.router.get('/:id', EmployeeControllers.get);
        this.router.put('/', EmployeeControllers.update);
        this.router.delete('/:id', EmployeeControllers.delete);

        return this.router;

    }

}

export { EmployeeRouter };