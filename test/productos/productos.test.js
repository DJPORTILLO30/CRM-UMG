const request = require("supertest")
const app = require("../app");
const productsModel = require("../../models/Productos/productos");
const {
    testDataProduct
} = require("./helper/helperData");

beforeAll(async () => {
    const product = await productsModel.create(testDataProduct);
});

test("Register a product", async () => {
    const dataProductNew = { 
      ...testDataProduct, 
      };
  
    const res = await request(app)
      .post("/api/productos")
      .send(dataProductNew);
    const { body } = res;
    expect(res.statusCode).toEqual(200);
    expect(body).toHaveProperty("data");
    expect(body).toHaveProperty("data.name");
    expect(body).toHaveProperty("data.description");
    expect(body).toHaveProperty("data.Category");
    expect(body).toHaveProperty("data.Price");
    expect(body).toHaveProperty("data.Feature");
  });
  
  test("should create a return all", async () => {
    const res = await request(app)
      .get("/api/productos")
    const { body } = res;
    expect(res.statusCode).toEqual(200);
    const { data } = body;
    expect(body).toHaveProperty("data");
  });
  
  test("debe retornar todo el detalle del item", async () => {
    const { _id } = await campaignsModel.findOne({});
    id = _id;
    const res = await request(app)
      .get(`/api/productos/${id}`)
    const { body } = res;
    expect(res.statusCode).toEqual(200);
    expect(body).toHaveProperty("data");
  });
  
  test("debe eliminar el item", async () => {
    const { _id } = await productsModel.findOne({});
    id = _id;
    const res = await request(app)
      .delete(`/api/productos/${id}`)
    const { body } = res;
    expect(res.statusCode).toEqual(200);
    expect(body).toHaveProperty("data");
  });

      
