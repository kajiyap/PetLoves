import Servico from "../../modelo/servico";
import Listagem from "../listagem";

export default class ListagemServicos extends Listagem{
    private servicos: Array<Servico>
    constructor(servicos: Array<Servico>){
        super()
        this.servicos = servicos
    }

    public listar(): void {
        if(this.servicos.length === 0){
            console.log('Não há servicos cadastrados, cadestre primeiro')
        }
        else{
            console.log('\nLista de todos os servicos:')
            this.servicos.forEach(servico => {
            console.log('Nome: '+servico.nome)
            console.log('Preço: '+servico.preco)
            console.log('Codigo: '+servico.codigo)
            console.log('------------------------------------')
            }
            )
        }
    }
}