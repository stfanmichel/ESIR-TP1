# ESIR-TP1 - Prise en main

Objectifs :
  - Prise en main des outils, savoir initier un projet node, le lancer, le debugger. 
  - Savoir chercher puis ajouter des modules à un projet. 
  - Savoir gérer ses sources avec GIT

Sujets abordés :
 - initialisation d'un projet (npm, git)
 - manipulation et configuration de modules  
     - debug, winston
     - http
 - premier service avec module http
 - test de perf avec ab : mise en évidence importance de l'asynchronisme avec node.js
 
Lien utiles :

  - Outillage (npm, node, git, ab, postman etc.) : https://slides.com/stephmichel/deck-4#/
  
  - Ecmascript : https://slides.com/stephmichel/ecmascript#/
  
  - Node.js : https://slides.com/stephmichel/node-js#/
  
 
 # Initialisation d'un projet
   - initialisation d'un projet node avec npm
   
    npm init
    
   - Initialisation GIT
   
    git init
    
   Paramétrer son .gitignore à la racine du projet avec le site http://gitignore.io
   
   Commiter son premier projet (pour pouvoir éventuellement revenir dessus)
   
     git add .
     git commit -m "Initialisation"
    
# Ajout de modules au projet

    npm i --save mon-module
   
   ou, pour un module de dev (tests unitaires, outillage en mode développement comme nodemon)
   
    npm i --save-dev mon-module

   Pour la suite, on ajoutera les modules suivants : nodemon, winston, debug, eslint et mocka 

# WS Hello World
   Nous allons créer notre premier service web REST. L'idée est de se familiariser avec l'outillage de debug.
   
    
 
