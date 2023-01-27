const AbstractManager = require("./AbstractManager");

class LibrairieManager extends AbstractManager {
  constructor() {
    super({ table: "librairie_css" });
  }

  findAll() {
    return this.connection.query(`select * from  ${this.table}`);
  }
}

module.exports = LibrairieManager;
