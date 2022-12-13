# Tipeee - Test technique front

## Setup

Récupérez le code puis installez le projet :

```bash
# Installation
$ npm install

# Serveur avec rechargement auto sur localhost:3000
$ npm run dev
```

L'application sera disponible à cette url : http://localhost:3000

## Consigne

Cette application se compose d'un court formulaire et d'une liste statique de pages. Le but de l'exercice est d'utiliser **Vuex** pour rendre cette liste dynamique, puis d'ajouter le nombre total de pages inscrites dans un header global. 

### Comportement attendu
- Remplir et envoyer le formulaire ajoute une page à la liste des pages.
- La liste des pages n'est plus une liste statique. 
- Un compteur, implémenté dans le header de l'application, affiche dynamiquement le nombre de pages inscrites. 

## Informations annexes
- [Documentation de Nuxt 2](https://nuxtjs.org/docs/get-started/installation)
- [Documentation de Vuex](https://vuex.vuejs.org/)
- [Documentation de Vue.js 2](https://v2.vuejs.org/v2/guide/)
