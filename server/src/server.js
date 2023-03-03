const http = require("http");

const { loadPlanetsData } = require("./models/planets.model");

const app = require("./app");

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

// to ensure thath planets have been loaded before the first request
async function startServer() {
  await loadPlanetsData();
  server.listen(PORT, () => {
    console.log(PORT);
  });
}

startServer();
