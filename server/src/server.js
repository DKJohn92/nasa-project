const http = require("http");
const { mongoConnect } = require("./services/mongo");

const { loadPlanetsData } = require("./models/planets.model");
const { loadLaunchData } = require("./models/launches.model");

const app = require("./app");

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

// to ensure thath planets have been loaded before the first request
async function startServer() {
  await mongoConnect();
  await loadPlanetsData();
  await loadLaunchData();
  server.listen(PORT, () => {
    console.log(PORT);
  });
}

startServer();
