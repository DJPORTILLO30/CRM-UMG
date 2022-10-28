const request = require("supertest");
const app = require("../../app");
const { testRegisterUser, testLoginUser } = require("./helper/helperData");
const { usersModel } = require("../../models/usuarios/usuarios")

test("user doesn't exist, login error", async () =>{
    const response = await request(app)
    .post("/api/usuarios/login")
    .send(testLoginUser);

    expect(response.statusCode).toEqual(404)
});


test("register user", async () => {
    const response = await request (app)
    .post("/api/usuarios/register")
    .send(testRegisterUser);

    expect(response.statusCode).toEqual(201);
    expect(response.body).toHaveProperty("data");
    expect(response.body).toHaveProperty("data.token");
    expect(response.body).toHaveProperty("data.user");
});

test("return list of users", async()=>{
    const response =await request(app)
    .get("/api/usuarios")

    const {body} = response;
    expect (response.statusCode).toEqual(200);
    expect (body).toHaveProperty("data")
});

test("return detail of a user", async () =>{
    const { id } = await usersModel.findOne({});
    const response = await request(app)
    .get(`/api/usuarios/${id}`)

    const { body } = response;
    expect(response.statusCode).toEqual(200);
    expect(body).toHaveProperty("data")
})

test("invalid password", async () => {
    const newTestLoginUser = {...testLoginUser, password:"111111"}
    const response = await request(app)
      .post("/api/usuarios/login")
      .send(newTestLoginUser);
  
    expect(response.statusCode).toEqual(401);
  });

  test("Successful login", async () => {
    const response = await request(app)
      .post("/api/usuarios/login")
      .send(testLoginUser);
  
    expect(response.statusCode).toEqual(200);
  });