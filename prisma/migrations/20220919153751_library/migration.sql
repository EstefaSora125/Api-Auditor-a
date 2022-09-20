-- CreateTable
CREATE TABLE `authors` (
    `id_author` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `email` VARCHAR(50) NULL DEFAULT '0',
    `phone_number` BIGINT NULL,
    `state` CHAR(2) NOT NULL DEFAULT 'AC',

    PRIMARY KEY (`id_author`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `books` (
    `id_book` INTEGER NOT NULL AUTO_INCREMENT,
    `isbn` VARCHAR(14) NOT NULL DEFAULT '0',
    `name` VARCHAR(50) NOT NULL,
    `description` VARCHAR(200) NOT NULL,
    `year` YEAR NOT NULL,
    `editorial` VARCHAR(30) NOT NULL DEFAULT '',
    `state` CHAR(2) NULL DEFAULT 'AC',
    `id_author` INTEGER NOT NULL DEFAULT 0,
    `edition` VARCHAR(20) NOT NULL DEFAULT '0',
    `page_number` INTEGER NOT NULL DEFAULT 0,
    `colombian_pesos` INTEGER NOT NULL DEFAULT 0,

    INDEX `FK_books_authors`(`id_author`),
    PRIMARY KEY (`id_book`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id_user` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(20) NOT NULL,
    `password` VARCHAR(20) NOT NULL,

    PRIMARY KEY (`id_user`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `books` ADD CONSTRAINT `FK_books_authors` FOREIGN KEY (`id_author`) REFERENCES `authors`(`id_author`) ON DELETE CASCADE ON UPDATE NO ACTION;
