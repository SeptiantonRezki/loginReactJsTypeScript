interface UserInterface {
    name: string,
    username: string,
    password: string,
    age?: number | null
}

class User {
    name: string;
    username: string;
    password: string;
    age?: number | null;
    constructor(value: UserInterface) {
        this.name = value.name;
        this.username = value.username;
        this.password = value.password;
        this.age = value.age;
    }
}

// new User({name: 'anton', username: 'anton', password: 'anton'})

export default User;