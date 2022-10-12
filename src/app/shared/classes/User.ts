export class User {
    username: string;
    fullname: string;
    password: string;

    constructor(username: string, fullname: string, password: string) {
        this.username = username;
        this.fullname = fullname;
        this.password = password;
    }

    static emptyUser() { return new User('', '', ''); }

    get hashCode() {
        let h = 0;

        for (let i = 0; i < this.fullname.length; i++)
            h = Math.imul(31, h) + this.fullname.charCodeAt(i) | 0;

        return h;
    }
}