import { Response, Request } from "express";
import { prisma } from "../database/prisma";
import { User, UserUpdate } from "../types/user";


class UserControllers {


    static async getAll(req : Request ,res : Response<{ success : boolean, data : any, message : string }>){


        const users = await prisma.user.findMany();

        return res.json({
            data : users,
            message : 'ok',
            success : true
        });



    };


    static async get(req : Request ,res : Response<{ success : boolean, data : any, message : string }>){


        const id  =parseInt( req.params.id) 

        const user = await prisma.user.findUnique({
           where : {
            id : id 
           }
        })

        return res.json({
            data : user,
            message : 'ok',
            success : true
        })



    };

    static async save(req : Request ,res : Response<{ success : boolean, data : any, message : string }>){

        const user = req.body as UserUpdate;

        const new_user = await prisma.user.create(
            {
                data : user
            }
        )


        return res.json({
            data : new_user,
            message : 'ok',
            success : true
        });



    };


    static async update(req : Request ,res : Response<{ success : boolean, data : any, message : string }>){

        const user = req.body as User;

        const user_updated = await prisma.user.update(
            {
               where : {
                 id : user.id
               },
               data : user
            }
        );



        return res.json({
            data : user_updated,
            message : 'ok',
            success : true
        })



    };

    static async delete(req : Request ,res : Response<{ success : boolean, data : any, message : string }>){

        const id  =parseInt( req.params.id) 

        const user = await prisma.user.delete({
           where : {
            id : id 
           }
        })

        return res.json({
            data : '',
            message : 'el usuario fue eliminado',
            success : true
        })



    };


}

export { UserControllers };