 class HttpService {

    _handleErros(res) {

        if(!res.ok) throw new Error(res.status.Text);
        return res;
    }
    
    get(url) {

        return fetch(url)
        .then(res => this._handleErros(res))
        .then(res => res.json());
    }

    post(url, dado) {

        return fetch(url, {
            headers: {'Content-type' : 'application/json'},
            method: 'post',
            body: JSON.stringify(dado)
        })
        .then(res => this._handleErros(res));
    }
}