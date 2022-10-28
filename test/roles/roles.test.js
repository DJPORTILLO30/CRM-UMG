const request = require("supertest");
const app = require("../../app");
const tokenSign = require("../../utils/handlers/handleJWT")
const rolesModel = require("../../models/roles/roles")
const { testRolRegister } = require("./helper/helperData");
let JWT_TOKEN = "";


test("Register a rol", async () => {

    const res = await request(app)
        .post("/api/roles")
        .set("Authorization", `Bearer ${JWT_TOKEN}`)
        .send(testRolRegister);

    const { body } = res;
    expect(res.statusCode).toEqual(200);
    expect(body).toHaveProperty("data")
});

test("Returns the list of roles", async () => {
    const res = await request(app)
        .get("/api/roles")
        .set("Authorization", `Bearer ${JWT_TOKEN}`);

    const { body } = res;
    expect (res.statusCode).toEqual(200);
    const { data } = body;
    expect (body).toHaveProperty("data")
})
 
test("Return the detail of a rol", async () => {
    
    const { id } = await rolesModel.findOne();
    const res = await request(app)
        .get(`/api/roles/${id}`)
        .set("Authorization", `Bearer ${JWT_TOKEN}`);
    const { body } = res;
    expect(res.statusCode).toEqual(200);
    expect(body).toHaveProperty("data");
})

test("Removes the rol", async () => {
    const {id} = await rolesModel.findOne({});
    const res = await request(app)
    .delete(`/api/roles/${id}`)
    .set("Authorization", `Bearer ${JWT_TOKEN}`);
    expect(res.statusCode).toEqual(200);
})