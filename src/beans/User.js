class User {
    private _id = null;
    private _username = null;
    private _nickname = null;
    private _password = null;

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get username() {
        return this._username;
    }

    set username(value) {
        this._username = value;
    }

    get nickname() {
        return this._nickname;
    }

    set nickname(value) {
        this._nickname = value;
    }

    get password() {
        return this._password;
    }

    set password(value) {
        this._password = value;
    }
}