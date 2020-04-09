class ListaNecociacoes {

    constructor() {
        
        this._necociacoes = []
    }

    adiciona(negociacao) {
        
        this._negociacoes.push(negociacao);
    }

    get negociacoes() {

        return this._negociacoes;
    }
}