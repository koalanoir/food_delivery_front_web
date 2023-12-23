export class Article{
    private id:any
    private nom: string =""
    private prix: number=0
    private ingredients:string=""
    private imageUrl:string=""
    constructor(id:any,nom:string,prix:number,ingredients:string,imageurl:string){
        this.id=id
        this.nom=nom
        this.prix=prix
        this.ingredients=ingredients
        this.imageUrl=imageurl
    }
    getId(){
        return this.id
    }
    getNom():string{
        return this.nom
    }
    getPrix():number{
        return this.prix
    }
    getIngredients():string{
        return this.ingredients
    }
    getImageUrl():string{
        return this.imageUrl
    }
}