import express from "express";
import serverRender from "./render";

const server = express();

server.use(express.static("client/dist"));

server.get("*", async (_req, res) => {
  const { initialMarkup } = await serverRender();

  res.send(
    `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Post Sharing</title>
    </head>
    <body>
        <div id="app">${initialMarkup}</div>
        <script src="/bundle.js"></script>
    </body>
    </html>
    `
  );
});

server.listen(3000, () => {
  console.log("Server is runing");
});
