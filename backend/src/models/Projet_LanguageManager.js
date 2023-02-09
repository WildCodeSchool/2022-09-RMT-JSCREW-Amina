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

  insert(idProjet, languages) {
    let query = `insert into ${this.table} (language_idLanguage, projet_idprojet) values`;
    const values = [];

    languages.forEach((lang, index) => {
      if (index > 0) query += ",";
      query += " (?, ?)";
      values.push(lang.idLanguage, idProjet);
    });
    return this.connection.query(query, values);
  }
}

module.exports = ProjectManager;
