import { Response } from 'express'
type AppResponse = Response<{ success : boolean, data : any, message : string }>

export { AppResponse }