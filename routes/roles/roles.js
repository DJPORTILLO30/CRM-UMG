const { getRoles, insertRol, updateRol, deleteRol, getRol } = require("../../controllers/roles/roles");


/* ruta para mostrar la lista de roles
 */
router.get("/", getRoles);

/* ruta para mostrar el detalle de un rol
 */
router.get("/:id", getRol);

/* ruta para insertar un rol
 */
router.post("/", insertRol);

/* ruta para modificar un rol
 */
router.put("/:id", updateRol);

/**
 * ruta para eliminar un rol
 */
 router.delete("/:id", deleteRol);