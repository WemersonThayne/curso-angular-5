export class Coracao{

    private cheio: boolean;
    private urlCoracaoCheio : string = './assets/coracao_cheio.png';
    private urlCoracaoVazio : string = './assets/coracao_vazio.png';
    
    constructor( cheio : boolean){
        this.cheio = cheio;
    }

    public exibirCoracao() : string {
        if(this.cheio){
            return this.getUrlCoracaoCheio();
        }else{
            return this.getUrlCoracaoVazio();
        }
    }

    public setCheio(cheio: boolean) : void{
         this.cheio = cheio;
    }

    public getCheio() : boolean{
        return this.cheio;
    }

    public getUrlCoracaoCheio() : string {
        return this.urlCoracaoCheio;
    }

    public getUrlCoracaoVazio() : string {
        return this.urlCoracaoVazio;
    }

}