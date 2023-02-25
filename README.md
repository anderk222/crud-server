## Pasos
#### 1.
---
Cambia el nombre del archivo `.example.env` a `.env` y pon la url de tu base de datos correctamente

#### 2. 
Ejecuta los siguiente comandos
```
npx prisma migrate dev --name init
npm install 
npm run dev
```
Y listo 

---

## Rutas
Traer todos los usuarios:
``` 
GET http://localhost:3333/api/user/
```


Traer usuario por id:
``` 
GET http://localhost:3333/api/post/<id>
```

Crear:
```
POST http://localhost:3333/api/post/
```

```json
{
    "name" : "somename",
    "email" : "some@mai.com"
}
```

Editar
```
PUT  http://localhost:3333/api/post/
```
```json
{
    "id" : <id>   
    "name" : "somename",
    "email" : "some@mai.com"
}
```

Eliminar
``` 
DELETE http://localhost:3333/api/post/<id>
```


---