class FormData {
    constructor(api_key , username , file , fileName, tags) {
        this._api_key = api_key;
        this._username = username;
        this._file = file;
        this._fileName = fileName
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

    get fileName(){
        return this._fileName
    }

    get tags(){
        return this._tags
    }
}

export {FormData} ;