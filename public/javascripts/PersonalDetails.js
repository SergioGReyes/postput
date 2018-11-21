class PersonalDetails {
    constructor(name, surname1, surname2, gender) {
        for (var i = 0; i < 4; i++) {
            if (typeof arguments[i] === "undefined" || arguments[i].length === 0) throw new Error("All params are mandatory")
        }

        this.name = name
        this.surname1 = surname1
        this.surname2 = surname2
        this.gender = gender
    }

    serialize() {
        return {
            n: this.name,
            s: this.surname1 + " " +  this.surname2,
            g: this.gender
        }
    }
}
