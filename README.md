# Ionic api rest

Conectando una aplicación en ionic con un servicio rest


Dentro del directorio en consola agregaremos los comandos.

### Directory

```bash
cd categoryapp
```

### Update dependencies

```bash
npm install
```

### Platform 

```bash
ionic cordova platform add android
```

### Running 

```bash
ionic cordova run android --device
```


# Blog API Category

Usando nodejs para crear un api rest

Dentro del directorio en consola agregaremos los comandos.

### Directory

```bash
cd categoryapi
```

### Update dependencies

```bash
npm install
```

### Running server

```bash
npm start
```

## Endpoints

### Categories
 - `GET    /categories`   - obtener todas las categorías
 - `POST   /category`     - crear nueva categoría
 - `GET    /category/:id` - obtener categoría con id
 - `PUT    /category/:id` - actualizar categoría
 - `DELETE /category/:id` - eliminar categoría

### Tools
- Express
- Body parser
- Bookshelf
- Consign
- Dotenv
- Knex
- Lodash
- Mysql
- Babel


## License

MIT Licensed
Copyright (c) 2017 Mario Moreno

