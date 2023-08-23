import db from '../database/db.js'

const get = async (id) => {
    return await db.query('SELECT * FROM users WHERE id = ?;', [id])
}

const list = async () => {
    return await db.query('SELECT * FROM users')
    // select -> pega o resultado como row por ser uma lista
}

const create = async (user) => {
    const {name, email, pass} = user
    return await db.query('INSERT INTO users (name, email, pass) VALUES (?, ?, ?);', [name, email, pass])
    // insert, delete, update  -> pega o resultado como result
}

const update = async (user) => {
    const {id, name, email, pass} = user
    return await db.query('UPDATE users SET name = ?, email = ?, pass = ? WHERE id = ?;', [name, email, pass, id])
    // insert, delete, update  -> pega o resultado como result
}

const remove = async (id) => {
    return await db.query('DELETE FROM users WHERE id = ?;', [id])
}

export default {get, list, create, update, remove}