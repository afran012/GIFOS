export default class Gifphy {
    constructor(builder) {
        this._id = builder.id
        this._urlOrig = builder.urlOrig;
        this._urlFix = builder.urlFix;
        this._urlSmall = builder.urlSmall;
    }

    get id() {
        return this._id;
    }

    get urlOrig() {
        return this._urlOrig;
    }

    get urlFix() {
        return this._urlFix;
    }

    get urlSmall() {
        return this._urlSmall;
    }

    set id(id) {
        this._id = id;
    }

    set urlOrig(urlOrig) {
        this._urlOrig = urlOrig;
    }

    set urlFix(urlFix) {
        this._urlFix = urlFix;
    }

    set urlSmall(urlSmall) {
        this._urlSmall = urlSmall
    }
}