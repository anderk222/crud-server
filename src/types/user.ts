type User = {
    id? : number
    name? : string,
    email : string
}

type UserUpdate = {
    id : number
    name? : string,
    email : string
}

export { User, UserUpdate };