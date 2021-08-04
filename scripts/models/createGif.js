class FormData {
    constructor(api_key , username , file , tags) {
        this._api_key = api_key;
        this._username = username;
        this._file = file;
        this._tags = tags
    }

    get api_key(){
        return this._api_key
    }

    get username(){
        return this._username
    }

    get file(){
        return this._file
    }


    get tags(){
        return this._tags
    }
}

class MyGif {
    constructor(gifId) {
        this._gifId = gifId;
    }

    get gifId(){
        return this._gifId
    }

}


export {FormData , MyGif} ;