import { Request } from "express";
import { prisma } from "../database/prisma";
import { AppResponse } from "../types/AppResponse";
import { Employee, EmployeeUpdate } from "../types/employee";


class EmployeeControllers {


    static async getAll(req: Request, res: AppResponse) {

        try{


        const employers = await prisma.employee.findMany();

        return res.json({
            data: employers,
            message: 'ok',
            success: true
        });
    } catch (err) {
        return res.status(500).json({
            data: null,
            message: (err as Error).message,
            success: false
        });
    }


    };


    static async get(req: Request, res: AppResponse) {
        try{


        const id = parseInt(req.params.id)

        const employee = await prisma.employee.findUnique({
            where: {
                id: id
            }
        })

        return res.json({
            data: employee,
            message: 'ok',
            success: true
        })
        

    } catch (err) {
        return res.status(500).json({
            data: null,
            message: (err as Error).message,
            success: false
        });
    }

    };

    static async save(req: Request, res: AppResponse) {

        const user = req.body as EmployeeUpdate;

        try{

        const new_user = await prisma.employee.create(
            {
                data: user
            }
        )


        return res.json({
            data: new_user,
            message: 'ok',
            success: true
        });

    } catch (err) {
        return res.status(500).json({
            data: null,
            message: (err as Error).message,
            success: false
        });
    }



    };


    static async update(req: Request, res: AppResponse) {

        const user = req.body as Employee;

        try{

        const user_updated = await prisma.employee.update(
            {
                where: {
                    id: user.id
                },
                data: user
            }
        );



        return res.json({
            data: user_updated,
            message: 'ok',
            success: true
        })

    } catch (err) {
        return res.status(500).json({
            data: null,
            message: (err as Error).message,
            success: false
        });
    }



    };

    static async delete(req: Request, res: AppResponse) {
        try {

            const id = parseInt(req.params.id)

            const user = await prisma.employee.delete({
                where: {
                    id: id
                }
            })

            return res.json({
                data: '',
                message: 'el empleado fue eliminado',
                success: true
            })
        } catch (err) {
            return res.status(500).json({
                data: null,
                message: (err as Error).message,
                success: false
            });
        }



    };


}

export { EmployeeControllers };