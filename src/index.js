const messages = [
    "Ana",
    "Juan",
    "Diego",
    "Sebas",
    "Alex",
    "Fernanda",
    "Lisbeth"
]

const randomMsg = () => {
    const message = messages[Math.floor(Math.random()*messages.length)]
    console.log(message)
}

module.exports = { randomMsg }