class User {
    constructor(fullname,email,password) {
        this.fullname = fullname
        this.email = email
        this.password = password
    }

    login(email,password) {
        if(this.email === email && this.password === password) {
            console.log(`${this.fullname}: Login sucess!`)
        } else {
            console.log(`${this.fullname}: Login failed!`)
        }
    }
}

const daniel = new User('Carlos', 'carlosdaniel.sx@gmail.com', 'daniel123')

daniel.login('carlosdaniel.sx@gmail.com', 'daniel123')
