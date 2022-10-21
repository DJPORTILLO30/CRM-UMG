const request = require("supertest")
const app = require("../app");
const ContactModel = require("../models/contactos/contactos");
const {
    testDataContact
} = require("./helper/helperData");

beforeAll(async () => {
  const contact = await ContactModel.create(testDataContact);
});

test("Register a contact", async () => {
  const dataContactNew = { 
    ...testDataContact, 
    };

  const res = await request(app)
    .post("/api/contacts")
    .send(dataContactNew);
  const { body } = res;
  expect(res.statusCode).toEqual(200);
  expect(body).toHaveProperty("data");
  expect(body).toHaveProperty("data.ownerContact");
  expect(body).toHaveProperty("data.email");
  expect(body).toHaveProperty("data.phone");
});

test("Returns the list of contacts", async () => {
  const res = await request(app)
    .get("/api/contacts")
  const { body } = res;
  expect(res.statusCode).toEqual(200);
  const { data } = body;
  expect(body).toHaveProperty("data");
});

test("Return the detail of a contact", async () => {
  const { _id } = await ContactModel.findOne({});
  id = _id;
  const res = await request(app)
    .get(`/api/contacts/${id}`)
  const { body } = res;
  expect(res.statusCode).toEqual(200);
  expect(body).toHaveProperty("data");
});

test("Removes the contact", async () => {
  const { _id } = await ContactModel.findOne({});
  id = _id;
  const res = await request(app)
    .delete(`/api/contacts/${id}`)
  const { body } = res;
  expect(res.statusCode).toEqual(200);
  expect(body).toHaveProperty("data");
});