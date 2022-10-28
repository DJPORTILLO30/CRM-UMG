const request = require("supertest");
const app = require("../../app");
const tokenSign = require("../../utils/handlers/handleJWT")
const { permissionsModel } = require("../../models/permisos/permisos")
const { testPermissionRegister } = require("./helper/helperData");
let JWT_TOKEN = "";


test("register a permission", async () => {

    const res = await request(app)
        .post("/api/permisos")
        .set("Authorization", `Bearer ${JWT_TOKEN}`)
        .send(testPermissionRegister);

    const { body } = res;
    expect(res.statusCode).toEqual(200);
    expect(body).toHaveProperty("data")
});

test("returns the list of permissions", async () => {
    const res = await request(app)
        .get("/api/permisos")
        .set("Authorization", `Bearer ${JWT_TOKEN}`);

    const { body } = res;
    expect (res.statusCode).toEqual(200);
    const { data } = body;
    expect (body).toHaveProperty("data")
})

test("return the detail of a permission", async () => {
    const { id } = await permissionsModel.findOne({});
    const res = await request(app)
        .get(`/api/permisos/${id}`)
        .set("Authorization", `Bearer ${JWT_TOKEN}`);
    const { body } = res;
    expect(res.statusCode).toEqual(200);
    expect(body).toHaveProperty("data");
})

test("removes the permission", async () => {
    const {id} = await permissionsModel.findOne({});
    const res = await request(app)
    .delete(`/api/permisos/${id}`)
    .set("Authorization", `Bearer ${JWT_TOKEN}`);
    expect(res.statusCode).toEqual(200);
})

