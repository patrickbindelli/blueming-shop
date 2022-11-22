const express = require("express");
const cors = require("cors");
const { google } = require("googleapis");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cors());

const authWithGoogleApi = async (req, res, next) => {
  const auth = new google.auth.GoogleAuth({
    keyFile: "keys.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  const authClientObject = await auth.getClient();

  const googleSheetsInstance = google.sheets({
    version: "v4",
    auth: authClientObject,
  });

  const spreadsheetId = "1I_KWMToP7vPuG97etTElzULH-bOFAxontLgX59dzHMg";

  const sheetInfo = await googleSheetsInstance.spreadsheets.get({
    auth,
    spreadsheetId,
  });

  req.auth = auth;
  req.spreadsheetId = spreadsheetId;
  req.googleSheetsInstance = googleSheetsInstance;

  next();
};

app.use(authWithGoogleApi);

app.get("/", async (req, res) => {
  const { request, name } = req.body;
  const { auth, spreadsheetId, googleSheetsInstance } = req;

  const readData = await googleSheetsInstance.spreadsheets.values.get({
    auth, //auth object
    spreadsheetId, // spreadsheet id
    range: "Sheet1!A2:B11", //range of cells to read from.
  });

  res.json(readData.data);
});

const port = 3000;
app.listen(port, () => {
  console.log(`server started on ${port}`);
});
