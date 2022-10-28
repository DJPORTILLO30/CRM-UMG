const request = require("supertest");
const app = require("../../app");
const tokenSign = require ("../../utils/handlers/handleJWT");
const {busisModel} = require("../../models/negocio/negocio");
const {testBusisRegister} = require("./helper/helperData");
let JWT_TOKEN = "";

beforeAll(async () => {
    const busi = await busisModel.create(testBusisRegister);
  });

test("register a busis", async () => {

    const dataBusisNew = { 
        ...testBusisRegister, 
        };
    const res = await request(app)
        .post("/api/negocio")
        .send(dataBusisNew);

    const { body } = res;
    expect(res.statusCode).toEqual(200);
    expect(body).toHaveProperty("data")
    expect(body).toHaveProperty("data.name");
    expect(body).toHaveProperty("data.contactName");
    expect(body).toHaveProperty("data.amount");
    expect(body).toHaveProperty("data.income");
    expect(body).toHaveProperty("data.closingDate");
    expect(body).toHaveProperty("data.campaingSource");
    expect(body).toHaveProperty("data.description");

   
        
});

test("returns the list of busis", async () => {
    const res = await request(app)
        .get("/api/negocio")
      

    const { body } = res;
    expect (res.statusCode).toEqual(200);
    const { data } = body;
    expect (body).toHaveProperty("data")
})

test("return the detail of a busis", async () => {
    const { _id } = await busisModel.findOne({});
    id = _id;
    const res = await request(app)
        .get(`/api/negocio/${id}`)
        
    const { body } = res;
    expect(res.statusCode).toEqual(200);
    expect(body).toHaveProperty("data");
});

test("removes the busis", async () => {
    const { _id } = await busisModel.findOne({});
    id = _id;
    const res = await request(app)
      .delete(`/api/negocio/${id}`)
    const { body } = res;
    expect(res.statusCode).toEqual(200);
    expect(body).toHaveProperty("data");
  });

// test("removes the busis", async () => {
    
//     const { _id } = await busisModel.findOne({});
//     id = _id;
//     const res = await request(app)
//     .delete(`/api/negocio/${id}`)
//     const { body } = res;
//         expect(res.statusCode).toEqual(200);
//     expect(body).toHaveProperty("data");   
// });

