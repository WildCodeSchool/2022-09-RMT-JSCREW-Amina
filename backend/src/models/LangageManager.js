const AbstractManager = require("./AbstractManager");

class LangageManager extends AbstractManager {
  constructor() {
    super({ table: "language" });
  }

  findAll() {
    return this.connection.query(`select * from  ${this.table}`);
  }
}

module.exports = LangageManager;
