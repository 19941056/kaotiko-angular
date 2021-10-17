export interface KaotikoData {
    nav:Nav;
   /* gallery:Gallery[];*/
    hero:Hero;
}
export interface Nav{
    logo:Img;
    hombre:string;
    mujer:string;
    ninho:string;
}
export interface Hero{
    title:string;
    parrafo:string;
    boton:string;
}

    

export interface Img{
    src:string;
    alt:string;
}