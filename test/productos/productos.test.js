const request = require("supertest");
const app = require("../../app");
const productsModel = require("../../models/Productos/productos");
const {testDataProduct} = require("./helper/helperData");

test("register products", async () => {
  const response = await request (app)
  .post("/api/productos")
  .send(testDataProduct);

  expect(response.statusCode).toEqual(200);
  expect(response.body).toHaveProperty("products");
  expect(response.body).toHaveProperty("products.name");
  expect(response.body).toHaveProperty("products.description");
  expect(response.body).toHaveProperty("products.Category");
  expect(response.body).toHaveProperty("products.Price");
  expect(response.body).toHaveProperty("products.Feature");
});

test("return list of products", async()=>{
  const response =await request(app)
  .get("/api/productos")

  const {body} = response;
  expect (response.statusCode).toEqual(200);
  expect (body).toHaveProperty("products")
});

test("return detail of a products", async () =>{
  const { id } = await productsModel.findOne({});
  const response = await request(app)
  .get(`/api/productos/${id}`)

  const { body } = response;
  expect(response.statusCode).toEqual(200);
  expect(body).toHaveProperty("products")
});

test("removes the item", async () => {
  const {id} = await productsModel.findOne({});
  const response = await request(app)
  .delete(`/api/productos/${id}`)
  const { body } = response;
  expect(response.statusCode).toEqual(200);
  expect(body).toHaveProperty("products")
})