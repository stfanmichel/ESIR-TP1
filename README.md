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
   
   - Installation du module nodemon
     
    npm i --save-dev nodemon
    
   - Installation et initialisation du module ESLINT
   
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
    
    Dans package.json, ajouter le script (element scripts) :
    
        "start": "nodemon index.js",
    
    Tester l'appli avec la commande :
    
        npm start
  

  - Version Web
 
   Nous allons créer un serveur Web node qui retourne une page "Hello World". L'idée est de se familiariser avec l'outillage de debug.
   
   Pour cela nous allons utiliser le module http (module présent par défaut, pas besoin de l'installer). Voir la doc du module http ici : https://nodejs.org/dist/latest-v10.x/docs/api/
   
   - Instantiation d'un serveur : Instancier un serveur sur le modèle ci-dessous et coder un retour au format JSON à l'aide du paramètre "res" (voir https://nodejs.org/dist/latest-v10.x/docs/api/http.html#http_class_http_serverresponse pour la doc). 
   
    const http = require('http') 
    const server = http.createServer((req, res) => {
    // TODO
    })
    server.listen(8000) // Port d'écoute
 
 On prendra soit de positionner le content-type du header de la réponse à "application/json" afin de que le navigateur interprète la réponse comme du JSON. La méthode JSON.stringify() pourra également être utile...
 
   - Debug avec Visual Studio
   
   Placer un point d'arrêt dans le source.
   Dans le menu debug (Ctrl+Shift+D) lancer le debug en ayant pris soin de créer une configuration de lancement (si elle n'existe pas par défaut).
   Effectuez des appels à votre serveur depuis un navigateur et familiarisez-vous avec le debugger.
   
   
    
 
