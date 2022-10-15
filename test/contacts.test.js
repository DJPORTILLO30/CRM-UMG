const request = require("supertest")
const app = require("../app");
const ContactModel = require("../models/contactos/contactos");
const {
    testDataContact
} = require("./helper/helperData");

beforeAll(async () => {
  const contact = await ContactModel.create(testDataContact);
});

test("deberia registra un item", async () => {
  const dataContactNew = { 
    ...testDataContact, 
    };

  const res = await request(app)
    .post("/api/contacts")
    .send(dataContactNew);
  const { body } = res;
  expect(res.statusCode).toEqual(200);
  expect(body).toHaveProperty("data");
  expect(body).toHaveProperty("data.propietarioContacto");
  expect(body).toHaveProperty("data.email");
  expect(body).toHaveProperty("data.phone");
});

test("should create a return all", async () => {
  const res = await request(app)
    .get("/api/contacts")
  const { body } = res;
  expect(res.statusCode).toEqual(200);
  const { data } = body;
  expect(body).toHaveProperty("data");
});

test("debe retornar todo el detalle del item", async () => {
  const { _id } = await ContactModel.findOne({});
  id = _id;
  const res = await request(app)
    .get(`/api/contacts/${id}`)
  const { body } = res;
  expect(res.statusCode).toEqual(200);
  expect(body).toHaveProperty("data");
});

test("debe eliminar el item", async () => {
  const { _id } = await ContactModel.findOne({});
  id = _id;
  const res = await request(app)
    .delete(`/api/contacts/${id}`)
  const { body } = res;
  expect(res.statusCode).toEqual(200);
  expect(body).toHaveProperty("data");
});