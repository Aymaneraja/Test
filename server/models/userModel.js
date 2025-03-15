import pool from '../db/BaseD.js'

class User {

    static async getAll(){
        const[rows] = await pool.query('SELECT * FROM users') ; 
        return rows ; 
    }
    static async getById(id){
        const[rows] = await pool.query('SELECT * FROM users WHERE id=?', [id]) ;
        return rows[0] ; 
    }
    static async create(name , email){
        const [result] = await pool.query('INSERT INTO users (name , email) VALUES (? , ?) ' , [name , email]) ; 
        return result ; 
    }
    static async update(id , name , email ){
        await pool.query('UPDATE users SET name = ? , email = ?  WHERE id = ? ', [name,email,id] ) ; 
    }
    static async delete (id){
        await pool.query('DELETE FROM users WHERE id = ?' , [id])
    }
}
export default User ; 
