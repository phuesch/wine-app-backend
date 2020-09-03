import express from "express";
import wine from "./wine";

const app = express();
app.get("/wine", (request, response) => {
  response.send(wine);
});
app.get("/wine/:id", (request, response) => {
  const foundWine = wine.find((possibleMatchingWine) => {
    return possibleMatchingWine.id === request.params.id;
  });

  if (foundWine) {
    response.send(foundWine);
  } else {
    response.send(404);
  }
});
app.listen(4000);
