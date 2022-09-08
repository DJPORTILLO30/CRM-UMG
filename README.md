# CRM UMG

### Backend-Instalacion
Este proyecto de backend esta desarrollando en **JavaScript mediante el modulo de node-express**  por lo tanto para su uso e instalacion es necesario
contar con las siguientes dependecias:


- Nodemon
- Express
- Express-Validator
- BcryptJs
- Multer
- sequelize
- Cors
- Dotenv
- JsonWebToken
- Swagge
- Swagger-UI
- Jest
- SuperTest

Asi como promiamente dicho tener instaldo Node.js (https://nodejs.org/es/download/)

Para ello ejecute los siguientes comandos en la terminal

```
$npm i nodemon -S
$npm i express --save
$npm i express-validator -S
$npm i bcryptjs -S
$npm i mysql2 -S
$npm i cors multer dotenv --save
$npm install sequelize -S
$npm i jsonwebtoken -S
$npm i swagger-jsdoc -S 
$npm i swagger-ui-express -S
$npm i jest supertest -D
```
Para ejecutar la aplicacion debemos ejecutar el comando ``` $npm rundev```

### Git
Ya que el siguiente proyecto esta siendo realizado por varios equipos trabajaremos con diferentes ramas para cada caracteristica. 

- Equipo 1:
  - CodeReview
  - Establecer Version estable

- Equipo 2:
  - feature-Contactos
  - feature-Campañas
  
- Equipo 3:
  - feature-Productos
  
- Equipo 4:
  - feature-Negocios
  - feature-Llamadas
 
- Equipo 5:
  - feature-Usuarios
  - feature-Permisos
  - feature-Roles
  
- Equipo 6:
  - CodeReviewTest
  - CleanCode
  - Utilidades
  - Estado De modulos
  
Deben de traer los cambios hechos en la rama antes de enviar los suyos como recomendacion para evitar conflictos.

La distribbucion de trabajo y branchs adicionales derivados de los ya asignados queda a discrecion de cada equipo siempre y cuando se respete un flujo de trabajo
claro.

Los commits deben de ser lo mas descriptivos posibles, mencionando funcionalidad, o motivo de cambio del codigo. Abstenerse a comentarios vacios o comentarios del
estilo : *xd*, *jaja*, *commit hecho*, *algo hace*, etc.

**NO REALZIAR PULL REQUEST DIRECTAMENTE DESDE SU RAMA HACIA LA RAMA MAIN**

Realizar un pull request hacia la rama ``` test-branch``` cuando tengan una caracteristica lista para ser probada e integrada al proyecto, estos pull request
deben de llevar como reviewer a los integrantes del Equipo 6 ( @SFMZ21 @HJOC15 @DJPORTILLO30 ) 
**QUEDA PROHIBIDO ACEPTAR UN PULL REQUEST HACIA ESTA RAMA POR SU CUENTA** alguien del equipo #6 luego de ser aprobado en la totalidad sus cambios o correciones
el cambio sera integrado, esto es para mantener bajo un flujo de control de caldiad el Software, por favor atenerse a las indicaciones. Por lo tanto estar pendientes
de las conversaciones abiertas al solicitar un pull request por posibles cambios o mejoras.

En caso de haber un Merge-error sera contacda la personas involucradas y un intregrante del equipo #1 para solventarlo de manera eficaz.
