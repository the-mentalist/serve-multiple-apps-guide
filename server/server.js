const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 9000;
const customerBuildPath = path.join(__dirname, '../customer/build')
const adminBuildPath = path.join(__dirname, '../admin/build')

// serve static content of customer
app.use(express.static(customerBuildPath))

app.get('/*', function(req,res) {
  res.sendFile(customerBuildPath)
})

app.use('/admin', express.static(adminBuildPath))

app.get('/admin/*', function(req,res) {
  res.sendFile(adminBuildPath)
})

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}!`);
});