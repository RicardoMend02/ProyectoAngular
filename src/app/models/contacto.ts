export class Contacto{
    _id?: string;
    correo: string;
    nombre: string;
    direccion: string;
    ciudad: string;
    edad: number;

    constructor(correo:string, nombre:string, direccion:string, ciudad:string, edad:number){
        this.correo = correo
        this.nombre = nombre
        this.direccion = direccion
        this.ciudad = ciudad
        this.edad = edad
    }
}