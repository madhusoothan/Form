export class Profession {
    public keyword:string="";
    public value:string="";

    constructor(public keywordData:string,public valueDate:string){
        this.keyword=keywordData,
        this.value=valueDate;
    }
}
