class ListaNecociacoes {

    constructor() {
        
        this._necociacoes = []
    }

    adiciona(negociacao) {
        
        this._negociacoes.push(negociacao);
    }

    get negociacoes() {

        return [].concat(this._negociacoes);
    }

}