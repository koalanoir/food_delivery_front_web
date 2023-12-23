import { Article } from "./Article.model";

export class Commande{
    private id:any
    private articles:Article[]
    constructor(id:any){
        this.id=id
        this.articles=[]
    }
    getArticles():Article[]{
        return this.articles
    }

    addArticle(article:Article):void{
        this.articles.push(article)
    }

    getCout():number{
        let total=0
        for (const article of this.articles){
            total+=article.getPrix()
        }
        return total
    }
}