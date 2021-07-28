const express = require('express')
const mysql = require('mysql2/promise')

const app = express()
const port = 3000
const dbConfig = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
}
const connection = mysql.createPool(dbConfig)

boot()

function boot () {
    initDbData()
}

function initDbData () {
    const sql = `INSERT INTO people (name) values ('Jose da Silva'), ('Joana da Silva'), ('Kaique')`
    connection.query(sql)
}

async function findAllPeople () {
    const sql = `SELECT * FROM people`
    const [ results ] = await connection.query(sql)
    return results
}

async function getPeopleHtmlResponse () {
    const people = await findAllPeople()
    let htmlList = ''

    people.forEach( person => {
        htmlList += `<li>${person.name}</li>`
    })

    return `
        <h1>Full Cycle Rocks!</h1>
        <h2>List of People:</h2>
        <ul>${htmlList}</ul>
    `
}

app.get('/', async (req, res) => {
    const response = await getPeopleHtmlResponse()
    res.send(response)
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})