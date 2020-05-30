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
```json
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

