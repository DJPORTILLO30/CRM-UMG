const { mostrarRoles, insertarRol, modificarRol, eliminarRol, mostrarRol } = require("../../controllers/roles/roles");


/* ruta para mostrar la lista de roles
 */
router.get("/", mostrarRoles);

/* ruta para mostrar el detalle de un rol
 */
router.get("/:id", mostrarRol);

/* ruta para insertar un rol
 */
router.post("/", insertarRol);

/* ruta para modificar un rol
 */
router.put("/:id", modificarRol);

/**
 * ruta para eliminar un rol
 */
 router.delete("/:id", eliminarRol);