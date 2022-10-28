
const request = require("supertest")
const app = require("../app");
const campaignsModel = require("../models/campañas/campañas");
const {
    testDataCampaign
} = require("./helper/helperData");

beforeAll(async () => {
  const campaign = await campaignsModel.create(testDataCampaign);
});

test("deberia registra un item", async () => {
  const dataCampaignNew = { 
    ...testDataCampaign, 
    };

  const res = await request(app)
    .post("/api/campaigns")
    .send(dataCampaignNew);
  const { body } = res;
  expect(res.statusCode).toEqual(200);
  expect(body).toHaveProperty("data");
  expect(body).toHaveProperty("data.propietarioCampania");
  expect(body).toHaveProperty("data.nombreCampania");
  expect(body).toHaveProperty("data.idTipoCampania");
  expect(body).toHaveProperty("data.fechaInicio");
  expect(body).toHaveProperty("data.fechaFin");
  expect(body).toHaveProperty("data.estado");
});

test("should create a return all", async () => {
  const res = await request(app)
    .get("/api/campaigns")
  const { body } = res;
  expect(res.statusCode).toEqual(200);
  const { data } = body;
  expect(body).toHaveProperty("data");
});

test("debe retornar todo el detalle del item", async () => {
  const { _id } = await campaignsModel.findOne({});
  id = _id;
  const res = await request(app)
    .get(`/api/campaigns/${id}`)
  const { body } = res;
  expect(res.statusCode).toEqual(200);
  expect(body).toHaveProperty("data");
});

test("debe eliminar el item", async () => {
  const { _id } = await campaignsModel.findOne({});
  id = _id;
  const res = await request(app)
    .delete(`/api/campaigns/${id}`)
  const { body } = res;
  expect(res.statusCode).toEqual(200);
  expect(body).toHaveProperty("data");
});

