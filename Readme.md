# DevSocial

> Social network for developers

It is a small social network app that includes authentication, profiles and forum posts.

```bash
git rm --cached config/default.json
```

# Quick Start 🚀

### Add a default.json file in config folder with the following

```
{
  "mongoURI": "<your_mongoDB_Atlas_uri_with_credentials>",
  "jwtSecret": "secret",
  "githubToken": "<yoursecrectaccesstoken>"
}
```

### Install server dependencies

```bash
npm install
```

### Install client dependencies

```bash
cd client
npm install
```

### Run both Express & React from root

```bash
npm run dev
```

### Build for production

```bash
cd client
npm run build
```

### Test production before deploy

After running a build in the client 👆, cd into the root of the project.  
And run...

```bash
NODE_ENV=production node server.js
```

Check in browser on [http://localhost:5000/](http://localhost:5000/)

## App Info

### Author

Brad Traversy
[Ishan Madan](https://github.com/ishanmadan1996)

### Version

1.0.0

### License

This project is licensed under the MIT License
