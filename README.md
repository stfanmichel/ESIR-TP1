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
   
   - Initialisation ESLINT
   
    npm i --save-dev eslint
    eslint --init
   
    How would you like to configure ESLint? Answer questions about your style
    Which version of ECMAScript do you use? ES5
    Where will your code run? Node
    Do you use JSX? No
    What style of indentation do you use? Spaces
    What quotes do you use for strings? Single
    What line endings do you use? Unix
    Do you require semicolons? No
    What format do you want your config file to be in? JSON
   
   - Commiter son premier projet (pour pouvoir éventuellement revenir dessus)
   
    git add .
    git commit -m "Initialisation"
    
   - Lancer l'IDE (Visual Studio Code)
        
    code .
    
# Ajout de modules au projet

    npm i --save mon-module
   
   ou, pour un module de dev (tests unitaires, outillage en mode développement comme nodemon)
   
    npm i --save-dev mon-module

   Pour la suite, on ajoutera les modules suivants : nodemon, winston, debug, eslint et mocka 

# WS Hello World
  - Version classique
  
    Créer le fichier "main" à la racine (par défaut il se nomme "index.js", il se peut que vous l'ayez renommé lors du "npm init". Pour être certain de son nom voir section "main" dans package.json).
    
        console.log("Hello ESIR")
    
    Tester l'appli avec la commande :
    
        node index.js

  - Version Web
 
   Nous allons créer notre premier service web REST. L'idée est de se familiariser avec l'outillage de debug.
   
    
 
