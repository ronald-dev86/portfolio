export interface IUserSystem {
    uid: string,
    type: UsersTypes,
    menu: any[]
}

export enum UsersTypes {
    ADMIN   ='admin',
    USER    ='user', 
    READING ='reading'
}