# Animaux Attraper Duel Lite

## Informations générales

### Données de connexion

Afin de testé l'application, vous pouvez utiliser le compte suivant, qui dispose déjà de quelques animaux capturés :

- username : `SalamiSlayers69`
- password : `1234567890`

Vous pouvez également en créer un nouveau sur la page `/register`.

### Fonctionnement des combats

Pour combattre un adversaire, il suffit de se connecter avec un compte ayant déjà capturé un animal, puis de se rendre sur la page `/fight` (ou cliquer sur le bouton "COMBATTRE").

Réitérer la même procédure depuis un autre navigateur, ou un autre ordinateur, avec **un autre compte**, possédant également un animal.

Malheureusement, il n'est actuellement possible de réaliser un seul combat (voir `Bugs & erreurs connus > websocket`).

## Fonctionnalités

- Connexion et création de compte (`/register` & `/login`)
- Suppression de son propre compte (`/profile` > Bouton `Supprimer mon compte`)
- Création de nouvelles instances `AnimalUser`, via la route `/capture`
- Modification du nom d'un de ses animaux, et suppression d'un animal : `/profile/animals/:id`
- Fonctionnalité mobile d'enregistrement d'image : `/capture`
- Filtres : il était prévu de pouvoir filter les animaux de l'utilisateur par type, mais cette fonctionnalité n'est pas aboutie (voir `Bugs & erreurs connus > Filtres`)

## Bugs & erreurs connus

### Commit de données confidentielles

Nous avons remarqué (trop tard) que nous avions publié dans un des `commit` notre fichier `src/environments/environment.ts`, qui contenait notamment la clé d'accès à l'API QImg. Nous avons directement ajouté ce fichier au `.gitignore`, mais le mal était fait. 

En situation réelle, nous aurions donc remplacé la clé rendue publique par une nouvelle, mais par soucis de practicité, nous ne l'avons pas fait. Nous sommes par contre conscients de l'erreur, et avons été plus prudents par la suite.

### websocket

Après de nombreuses heures de recherches, de tests et d'arrachages de cheveux, nous n'avons pas réussi à résoudre nos problèmes de websocket dans l'interface de combat.

Nous pouvons initialiser la connexion avec le `ws`, faire un premier combat, et fermer la connexion à la fin du premier combat, mais il est ensuite impossible d'en relancer un nouveau, la connexion avec le `ws` n'est plus possible.

La seule alternative que nous avons trouvé est la suivante :

- Après la fin du premier combat, se déconnecter ;
- Recharger la page de `/login` ;
- Se connecter à nouveau ;
- Faire la même chose avec le compte de l'adversaire ;
- Lancer un nouveau combat.

### Filtres

Nous avons prévu sur la page `/profile/animals` une fonction de filtres, mais avec les différents problèmes rencontrés avec les websockets, nous n'avons pas eu le temps de résoudre ce bug.

En effet, à la validation de ses choix, l'événement `ionSelect` n'est pas détecté, et la fonction de filtrage n'est pas exécutée.