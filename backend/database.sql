
-- -----------------------------------------------------
-- Table ``.`librairie-css`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `amina_db`.`librairie_css` ;

CREATE TABLE IF NOT EXISTS `amina`.`librairie_css` (
  `idLibrairiecs` INT AUTO_INCREMENT NOT NULL,
  `nom` VARCHAR(45) NOT NULL,
  `url_icone` VARCHAR(250) NULL,
  PRIMARY KEY (`idLibrairiecs`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `amina`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `amina`.`user` ;

CREATE TABLE IF NOT EXISTS `amina`.`user` (
  `iduser` INT AUTO_INCREMENT NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `password_hache` VARCHAR(150) NOT NULL,
  PRIMARY KEY (`iduser`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `amina`.`projet`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `amina`.`projet` ;

CREATE TABLE IF NOT EXISTS `amina`.`projet` (
  `idprojet` INT AUTO_INCREMENT NOT NULL,
  `titre_projet` VARCHAR(150) NOT NULL,
  `description_projet` VARCHAR(200) NOT NULL,
  `date_debut` DATE NOT NULL,
  `date_fin` DATE NOT NULL,
  `url_image` VARCHAR(155) NOT NULL,
  `url_github` VARCHAR(155) NULL,
  `url_site` VARCHAR(155) NULL,
  `Librairiecs_idLibrairiecs` INT NOT NULL,
  `archive` TINYINT(1) NOT NULL DEFAULT 0,
  `user_iduser` INT NOT NULL,
  PRIMARY KEY (`idprojet`),
  CONSTRAINT `fk_projet_Librairiecs1`
    FOREIGN KEY (`Librairiecs_idLibrairiecs`)
    REFERENCES `amina_db`.`librairie_css` (`idLibrairiecs`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_projet_user1`
    FOREIGN KEY (`user_iduser`)
    REFERENCES `amina_db`.`user` (`iduser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `amina`.`language`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `amina`.`language` ;

CREATE TABLE IF NOT EXISTS `amina`.`language` (
  `idLanguage` INT AUTO_INCREMENT NOT NULL,
  `name` VARCHAR(500) NOT NULL,
  `url_icone` VARCHAR(250) NULL,
  PRIMARY KEY (`idLanguage`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `amina`.`projet_language`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `amina`.`projet_language` ;

CREATE TABLE IF NOT EXISTS `amina`.`projet_language` (
  `language_idLanguage` INT NOT NULL,
  `projet_idprojet` INT NOT NULL,
  PRIMARY KEY (`language_idLanguage`, `projet_idprojet`),
  CONSTRAINT `fk_table1_Language1`
    FOREIGN KEY (`language_idLanguage`)
    REFERENCES `amina_db`.`language` (`idLanguage`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_table1_projet1`
    FOREIGN KEY (`projet_idprojet`)
    REFERENCES `amina_db`.`projet` (`idprojet`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

INSERT INTO language (name, url_icone)
VALUES("JavaScript", "https://www.flaticon.com/free-icon/javascript_919828?term=javascript&page=1&position=6&page=1&position=6&related_id=919828&origin=search"),
("React", "https://www.flaticon.com/free-icon/physics_753244?term=react&page=1&position=6&page=1&position=6&related_id=753244&origin=search"),
("PHP", "https://www.flaticon.com/free-icon/php-programming-language_1975?term=php&page=1&position=8&page=1&position=8&related_id=1975&origin=search");

INSERT INTO librairie_css (nom, url_icone)
VALUES("CSS", "https://www.flaticon.com/free-icon/css_919826?term=css&page=1&position=4&page=1&position=4&related_id=919826&origin=search"),
("Bootstrap", "https://www.flaticon.com/free-icon/bootstrap_5968672?term=bootstrap&page=1&position=1&page=1&position=1&related_id=5968672&origin=search"),
("Tailwindcss", "https://www.svgrepo.com/show/354431/tailwindcss-icon.svg"),
("Sass", "https://www.flaticon.com/free-icon/sass_5968403?term=sass&page=1&position=7&page=1&position=7&related_id=5968403&origin=search");
INSERT INTO user (email, password_hache)
VALUES("amina.hakimi86@gmail.com", "matgAog3r6t@"),
("amina.hakimi2022@gmail.com", "lkdht98Hk@%");
INSERT INTO projet (titre_projet, description_projet, date_debut, date_fin, url_image, url_github, url_site, Librairiecs_idLibrairiecs, archive, user_iduser)
VALUES("Site web en HTML et CSS", "Site web destiné à promouvoir les paysages japonais", "2022-09-26", "2022-10-07", "assets/images/image-projet-1.png", "https://github.com/WildCodeSchool/2022-09-JS-RMT-JSCREW-TEAM-B", "https://wildcodeschool.github.io/2022-09-JS-RMT-JSCREW-TEAM-B/index.html", 1, 0, 1),
("Site web en React", "Plateforme de streaming de films", "2022-10-17", "2022-11-23", "assets/images/image-projet-2.png", "https://github.com/WildCodeSchool/2022-09-JS-RMT-JSCREW-projet2-team3", "https://github.com/WildCodeSchool/2022-09-JS-RMT-JSCREW-projet2-team3", 2, 0, 1);
INSERT INTO projet_language (language_idLanguage, projet_idprojet)
VALUES(1, 1),
(2, 2);