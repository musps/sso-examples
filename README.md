# Single Sign On Authentication examples

Cette application montre comment implémenter une connexion SSO.
Un utilisateur peut accéder à la partie privée via un compte externe suivant :
- Google `oauth2`
- Facebook `oauth`
- Github `oauth`

Cette application utilise :
  - `NextJS` pour la partie interface / api
  - `PassportJS` pour la partie authentification externe

### Données utilisateur

Les données de l'utilisateur sont stockés au format objet. 
Il contient les informations suivantes :
```js
{
  // Source de la connexion
  // github | facebook | google
  "provider": "github",
  // Identifiant du compte distant
  "providerId: "",
  // Token d'accès distant
  "providerAccessToken": "",
  // Nom complet de l'utilisateur
  "displayName": "Toto",
  // Email de l'utilisateur
  "email": "toto@localhost"
  // Url de la photo de profil de l'utilisateur
  "photo": "http://localhost/toto.jpg"
}
```

### Installation

- Récupérer le projet
- Exécuter la commande `yarn install``
- Remplir les variables d'environnement du fichier `.env`

```.env
# OAUTH GITHUB
# Pour créer un accès : https://github.com/settings/applications/new
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=

# OAUTH FACEBOOK
# Pour créer un accès : https://developers.facebook.com/
FACEBOOK_CLIENT_ID=
FACEBOOK_CLIENT_SECRET=

# OAUTH GOOGLE
# Pour créer un accès : https://console.developers.google.com/
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

# Chaîne de caractères pour l'encodage du token dans la session
TOKEN_SECRET=this-is-a-secret-value-with-at-least-32-characters
# Base URL de l'application
BASE_URL=http://localhost:3000
```

- Exécuter la commande `yarn dev`` pour lancer l'app en mode développement

### Build

- Exécuter la commande `yarn build`` pour compiler l'app en mode production
- Exécuter la commande `yarn staart`` pour lancer l'app 


### Fonctionnement

L'utilisateur arrive sur le site et clique sur une des options pour s'authentifier.
- Il est redirigé vers la route `/api/login?type={provider_name}` qui va le rediriger vers la page de demande d'accès du service tier.
- S'il accepte l'app à accéder à ses informations, un token temporaire est généré. 

L'utilisateur est redirigé vers la route `/api/login-callback?type={provider_name}` qui va effectuer une requête au près du service tier pour récupérer une token d'accès avec le compte code temporaire obtenu précédemment.

Une fois le token d'accès récupéré, une requête est effectuée pour récupérer les informations de l'utilisateur (nom, prénom, email, photo de profile, etc...)
Les données sont transformée pour créer un jeu de données type.

Les données de l'utilisateur sont ensuite enregistrées en session temporaire côté client.


### Crédits
Base du projet
[https://github.com/vercel/next.js/tree/canary/examples/with-passport](https://github.com/vercel/next.js/tree/canary/examples/with-passport)
