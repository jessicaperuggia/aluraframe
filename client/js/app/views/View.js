class View {

    constructor(elemnto) {

        this._elemento = elemento;
    }

    update(model) {

        this._elemento.innerHTML = this._template(model);
    }
}