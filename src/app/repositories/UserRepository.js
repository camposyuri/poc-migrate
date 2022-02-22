//* Import function to connect DB.
const db = require("../../database");

class UserRepository {
  //TODO: Find all user.
  async findAll(orderBy = "ASC") {
    const orderUser = orderBy.toLocaleUpperCase() === "DESC" ? "DESC" : "ASC";
    const rows = await db.query(
      `SELECT 
        codUser, 
        userName, 
        lastName 
      FROM users 
      ORDER BY userName ${orderUser};`
    );
    return rows;
  }

  //TODO: Find by id.
  async findById(id) {
    const [row] = await db.query(
      `SELECT
        codUser,
        userName,
        lastName
      FROM users
      WHERE codUser = $1;
      `,
      [id]
    );
    return row;
  }

  //TODO: Create user.
  async create({ username, lastname }) {
    const [row] = await db.query(
      `
      INSERT INTO 
        users(userName, lastName)
      VALUES ($1, $2)
      RETURNING codUser;
      `,
      [username, lastname]
    );

    return row;
  }
}

module.exports = new UserRepository();
