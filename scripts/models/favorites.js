class Favorite {
    constructor(gifId, urlOrig , _urlSmall) {
        this._gifId = gifId;
        this._urlOrig = urlOrig;
        this._urlSmall = _urlSmall;
        this._addedToFavorites = false
    }

    get urlOrig(){
        return this._urlOrig
    }

    get urlSmall(){
        return this._urlSmall
    }

    get gifId(){
        return this._gifId
    }

    get addedToFavorites(){
        return this._addedToFavorites
    }

    set addedToFavorites(addedToFavorites){
        this._addedToFavorites = addedToFavorites
    }
}

export {Favorite} ;



