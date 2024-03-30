const db = require('./db')

async function asyncFunction(){
    try {

        conn = await db.pool.getConnection()
        var rows = await conn.query("SELECT * from demo.contacts")
        
        for (let i = 0; i < rows.length; i++) {
            console.log(`(id=${rows[i].id}) ${rows[i].first_name} ${rows[i].last_name} <${rows[i].email}>`)
            
        }
    } catch (error) {
        console.log(error)
    } finally{
        if (conn) await conn.release();
        db.pool.end()
    }
}

asyncFunction()
