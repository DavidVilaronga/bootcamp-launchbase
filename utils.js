module.exports = {
    age: function(timestamp) {
        const today = new Date()
        const birthDate = new Date(timestamp)

        let age = today.getFullYear() - birthDate.getFullYear()
        const month = today.getMonth()- birthDate.getMonth()

        if (month<0 || month==0 && today.getDate()<birthDate.getDate()) {
            age = age - 1
        }
        return age
    },

    graduation: function(educational_level) {
        const education = educational_level
        if (education=="valor1") return ("Ensino Médio Completo")
        if (education=="valor2") return ("Ensino Superior Completo")
        if (education=="valor3") return ("Mestrado")
        if (education=="valor4") return ("Doutorado")
    },
    
    date: function(timestamp) {
        const date = new Date(timestamp)
        const year = date.getUTCFullYear()
        const month = `0${date.getUTCMonth() + 1}`.slice(-2)
        const day = `0${date.getUTCDate()}`.slice(-2)
        return `${day}/${month}/${year}`
    },

    date2: function(timestamp) {
        const date = new Date(timestamp)
        const year = date.getUTCFullYear()
        const month = `0${date.getUTCMonth() + 1}`.slice(-2)
        const day = `0${date.getUTCDate()}`.slice(-2)
        return `${year}-${month}-${day}`
    }
}