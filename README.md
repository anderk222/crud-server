## Pasos
#### 1.
Crea el archivo `.env`, copia y pega el contenido de `.example.env`, cambia la url de la base de datos

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
GET http://localhost:3333/api/employee/
```


Traer usuario por id:
``` 
GET http://localhost:3333/api/employee/<id>
```

Crear:
```
POST http://localhost:3333/api/employee/
```

```json
{
    "name" : "somename",
    "email" : "some@mai.com"
}
```

Editar
```
PUT  http://localhost:3333/api/employee/
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
DELETE http://localhost:3333/api/employee/<id>
```


---
