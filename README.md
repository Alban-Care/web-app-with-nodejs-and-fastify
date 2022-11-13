# Apprentissage de la configuration d'une application web avec Nodejs et Fastify

Tutoriel suivi sur la chaine YT de grafikart [Apprendre le Javascript : Découvert de fastify](https://www.youtube.com/watch?v=YnWjki-M-7A)

- Configuration serveur
- Communication avec une base de donnée SQL
- Soumission et traitement formulaire
- Gestionnaire de template
- Création d'une session utilisateur

[https://www.fastify.io/Nodejs](https://nodejs.org/)
[Fastify](https://www.fastify.io/)

## Liste des outils qui seront utilisés dans le projet (convenance personnelle)

- [nvm](https://github.com/nvm-sh/nvm)
- node 18.12.1
- [sqlite](https://www.sqlite.org/)

## Commandes bash avant de se lancer !

```bash
echo "18.12.1" >> .nvmrc  # pour la création du fichier de configuration nvm
nvm install # pour installer la version de node définie
touch base.db # pour la création de la base de donnée sqlite3 (`sqlite3 --version` pour vérifier si sqlite est installé)
npm init -y # pour initialiser le projet (en mode muet)
npm i fastify # pour installer fastify et ses dépendances
echo "/node_modules/" >> .gitignore # pour empêcher git de suivre les fichiers dans le dossier /node_modules/
```

## Choix des dépendances

[@fastify/view](https://github.com/fastify/point-of-view) est un module fastify qui permet d'utilise plusiers moteurs de template.
Parmi eux on retrouve [Twig](https://twig.symfony.com/) déjà utilisé dans le framework symfony

`npm i @fastify/view twig`

## Commandes utiles !

- `npm run watch` Ajout de la commande au package.json pour démarrer le serveur de développement avec le mode watch

## Tips & tricks

- node possède depuis la version 18.11 un "watch mode" experimental `node --watch` qui permet d'observer les changements et réactualiser automatiquement (à défaut il est toujours possible d'utiliser le paquet `nodemon`)
