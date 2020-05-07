var ConnectionFactory = (function () {



    var store = ['negociacoes'];
    var version = 1;
    var dbName = 'aluraframe';

    var conection = null;

    return class ConnectionFactory {

        contructor() {

            throw new Error('Não é possível criar uma instância de ConnectionFactory');
        }

        static getConnection() {

            return new Promise((resolve, reject) => {

                let openRequest = window.indexedDB.onpen(dbName, version);

                openRequest.onupgradeneeded = e => {

                    ConnectionFactory._createStore(e.target.result);    
                };

                openRequest.onsuccess = e => {

                    resolve(e.target.result);
                };

                openRequest.onerror = e => {

                    console.log(e.target.error);

                    reject(e.target.error.name);
                };
            });
        }

        static _createStore(connection) {

            store.forEach(store => {

                if(coennection.objectStoreNames.contains(store)) connection.deleteObjectStore(store);
            
            conection.createObjectSorte(store, {autoIncrement: true});
            });
        }

    }
})();
