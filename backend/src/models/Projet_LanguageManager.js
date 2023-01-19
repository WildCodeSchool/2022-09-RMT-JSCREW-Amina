const AbstractManager = require("./AbstractManager");

class ProjectManager extends AbstractManager {
  constructor() {
    super({ table: "projet_language" });
  }

  findAllByID(id) {
    return this.connection.query(
      `select l.name, l.url_icone, l.idLanguage from  ${this.table} as pl INNER JOIN language as l ON l.idLanguage = pl.language_idLanguage WHERE pl.projet_idprojet = ?`,
      [id]
    );
  }
}

module.exports = ProjectManager;
