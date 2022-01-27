# animaux-attraper-duel-lite-app
DevMobile Application

## Launching the app

`ionic serve`

## Commands

- create new element : `ionic generate elementType NameOfElement` 

## Todolist

- [ ] Edit/delete des AnimalUser
- [ ] Edit/delete de son propre profile (NF)
- [ ] Edit/delete des Animal (admin), mais optionnel car seulement 2 ressources modifiables requises

- [ ] Gestion du register
- [x] Gestion du login
- [ ] Structures des pages
    - [ ] Alex
- [ ] Gestion des combats
- [ ] Communication avec l'API
- [x] Importation des composantes custom sur les pages enfants

**API**

- [ ] Création des modèles
    - [ ] User MR
    - [x] Animal MR
    - [ ] AnimalUser MR

### Questions

- Pourquoi routerLink ne marche pas dans les Custom Components ?
- 


### Websocket

https://mediacomem.github.io/comem-devmobil/latest/subjects/websocket/#11

Le joueur clique sur Combattre > a choisi un animal

`app` : envoi le type de requête (`start`), le pseudo et l'id de l'animal.
`ws` : 