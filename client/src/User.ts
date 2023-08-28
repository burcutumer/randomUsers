export interface User {
    id:number;
    username:string;
    picture: {
        medium:string;
    };
    email: string;
location: {
    city: string;
    state:string;
}
}