# Instagram Helper

## English

### Installation

No installation required. Just copy paste `instagram.js` file in the console.

### Usage

1. First, create an instance of the InstagramHelper class:

```javascript
const instagram = new InstagramHelper('YOUR_APP_ID', 'YOUR_USER_ID');
```

2. To get a list of users who don't follow you back:

```javascript
instagram.getUnfollowers().then((unfollowers) => {
  console.log('Unfollowers:', unfollowers);
});
```

### Methods

- `getUnfollowers()`: Returns a list of users who you follow but don't follow you back
- `#getFollowersList()`: Private method to fetch your followers list
- `#getFollowingList()`: Private method to fetch the list of users you follow
- `#fetchFollowData(path, params)`: Private method to make API requests

### Requirements

- You need an Instagram App ID
- You need your Instagram User ID
- The script requires a modern browser with fetch API support

### Notes

- The class uses Instagram's private API
- Rate limiting may apply
- Make sure to handle errors appropriately in your implementation

---

## Español

### Instalación

No se requiere instalación. Solo copia y pega el archivo `instagram.js` en tu consola.

### Uso

1. Primero, crea una instancia de la clase InstagramHelper:

```javascript
const instagram = new InstagramHelper('TU_APP_ID', 'TU_USER_ID');
```

2. Para obtener una lista de usuarios que no te siguen de vuelta:

```javascript
instagram.getUnfollowers().then((unfollowers) => {
  console.log('No seguidores:', unfollowers);
});
```

### Métodos

- `getUnfollowers()`: Devuelve una lista de usuarios a los que sigues pero que no te siguen
- `#getFollowersList()`: Método privado para obtener tu lista de seguidores
- `#getFollowingList()`: Método privado para obtener la lista de usuarios que sigues
- `#fetchFollowData(path, params)`: Método privado para realizar peticiones a la API

### Requisitos

- Necesitas un ID de aplicación de Instagram
- Necesitas tu ID de usuario de Instagram
- El script requiere un navegador moderno con soporte para la API fetch

### Notas

- La clase utiliza la API privada de Instagram
- Pueden aplicarse límites de tasa de solicitudes
- Asegúrate de manejar los errores apropiadamente en tu implementación
