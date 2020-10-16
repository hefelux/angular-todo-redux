export class Todo {
    public id: number;
    public text: string;
    public complete: boolean;

    constructor(text: string){
        this.id = new Date().getTime();
        this.text = text;
        this.complete = false;
    }
}
