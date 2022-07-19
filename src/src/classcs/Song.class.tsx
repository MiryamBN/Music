import { eGener } from "./eGener.enum";

export default class Song{
    id?:string;
    title:string|undefined;
    artist?:string;
    gener?:eGener;
    length?:Number;
    price?:Number;

   
    
    constructor(title?:string,artist?:string,gener?:eGener,length?:number,price?:number){
        this.title=title;
        this.artist=artist;
        this.gener=gener;
        this.length=length;
        this.price=price;
        

    }
    
    
}