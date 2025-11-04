export interface dbConnection{
    supabaseUrl:string|undefined,
    supabaseKey:string|undefined,
}

export interface userTypes{
    firstname:string,
    lastname:string,
    username:string,
    password:string,
    email:string,
    phoneNumber:string,
}