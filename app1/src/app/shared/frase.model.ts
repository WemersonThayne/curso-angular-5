export class Frase{
    
    private fraseEng: string;
    private frasePtBr: string;

    constructor(fraseEng : string, frasePtBr : string){
        this.fraseEng = fraseEng;
        this.frasePtBr = frasePtBr;
    }

    public getFraEng(): string{
        return this.fraseEng;
    }

    public getFraPtBr(): string{
        return this.frasePtBr;
    }

}