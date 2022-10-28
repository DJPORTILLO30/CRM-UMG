const request = require("supertest");
const app = require("../../app");
const tokenSign = require ("../../utils/handlers/handleJWT");
const {callsModel} = require("../../models/llamadas/llamadas");
const {testCallsRegister} = require("./helper/helperData");
let JWT_TOKEN = "";

beforeAll(async () => {
    const call = await callsModel.create(testCallsRegister);
  });

test("register a calls", async () => {

    const dataCallsNew = { 
        ...testCallsRegister, 
        };
    const res = await request(app)
        .post("/api/llamadas")
        .send(dataCallsNew);

    const { body } = res;
    expect(res.statusCode).toEqual(200);
    expect(body).toHaveProperty("data");
    expect(body).toHaveProperty("data.contactName");
    expect(body).toHaveProperty("data.description");
    expect(body).toHaveProperty("data.comunicationDate");
           
});

test("returns the list of calls", async () => {
    const res = await request(app)
        .get("/api/llamadas")
      

    const { body } = res;
    expect (res.statusCode).toEqual(200);
    const { data } = body;
    expect (body).toHaveProperty("data")
})

test("return the detail of a callss", async () => {
    const { _id } = await callsModel.findOne({});
    id = _id;
    const res = await request(app)
        .get(`/api/llamadas/${id}`)
        
    const { body } = res;
    expect(res.statusCode).toEqual(200);
    expect(body).toHaveProperty("data");
});

test("removes the calls", async () => {
    const { _id } = await callsModel.findOne({});
    id = _id;
    const res = await request(app)
      .delete(`/api/llamadas/${id}`)
    const { body } = res;
    expect(res.statusCode).toEqual(200);
    expect(body).toHaveProperty("data");
  });

 test("removes the calls", async () => {
    
    const { _id } = await callsModel.findOne({});
    id = _id;
    const res = await request(app)
    .delete(`/api/llamadas/${id}`)
     const { body } = res;
     expect(res.statusCode).toEqual(200);
     expect(body).toHaveProperty("data");   
 });