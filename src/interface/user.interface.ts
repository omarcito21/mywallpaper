export interface Iuser{
    uid: string;
    name: string;
    lastName: string;
    email: string;
    password: string;
}
export interface IAuth extends Pick <Iuser, "email" | "password">{}

export interface IUserCreate extends Omit <Iuser, "uid">{}
