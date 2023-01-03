const AbstractManager = require("./AbstractManager");

class ProjectManager extends AbstractManager {
    constructor() {
      super({ table: "projet" });
    }
    find(id) {
      return this.connection.query(`select * from  ${this.table} where idprojet= ?`, [
        id,
      ]);
    }


}

module.exports = ProjectManager;