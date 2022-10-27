const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 9000;


app.listen(PORT, () => {
  console.log(`server running on port ${PORT}!`);
});