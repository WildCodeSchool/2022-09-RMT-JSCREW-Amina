const AbstractManager = require("./AbstractManager");

class ProjectManager extends AbstractManager {
  constructor() {
    super({ table: "projet" });
  }

  find(id) {
    return this.connection.query(
      `select * from  ${this.table} where idprojet= ?`,
      [id]
    );
  }

  insert(projet) {
    return this.connection.query(
      `insert into ${this.table} (titre_projet, description_projet, date_debut, date_fin, url_image, url_github, url_site, Librairiecs_idLibrairiecs, archive, user_iduser) values (?, ?, ?, ?, ?, ?, ?, ?,?, ?)`,
      [
        projet.titre_projet,
        projet.description_projet,
        projet.date_debut,
        projet.date_fin,
        projet.url_image,
        projet.url_github,
        projet.url_site,
        projet.Librairiecs_idLibrairiecs,
        projet.archive,
        projet.user_iduser,
      ]
    );
  }

  delete(id) {
    return this.connection.query(
      `delete from ${this.table} where idprojet = ?`,
      [id]
    );
  }
}

module.exports = ProjectManager;
