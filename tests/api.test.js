const request = require("supertest");
const app = require("../src/app");

describe("API", () => {
  test("GET /api/health retourne OK", async () => {
    const response = await request(app).get("/api/health");
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ status: "OK",
                                    version: "1.0"
     });
  });

  test("GET /api/calcul/ttc calcule le TTC", async () => {
    const response = await request(app)
      .get("/api/calcul/ttc")
      .query({ prix: 100, tva: 20 });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ prixHT: 100, tva: 20, prixTTC: 120 });
  });

  test("GET /api/calcul/ttc refuse les paramètres invalides", async () => {
    const response = await request(app)
      .get("/api/calcul/ttc")
      .query({ prix: "abc", tva: 20 });

    expect(response.statusCode).toBe(400);
  });
});
