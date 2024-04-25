const express = require('express');
const router = express.Router({ mergeParams: true }); // Create a router instance

// Import the controller for handling khachhang-related requests
const DichVuController = require("../controller/dichvu.controller");


// Define a route for handling GET requests to the root path "/"
router.get("/", DichVuController.getAllCustomers);
router.post("/",DichVuController.createCustomer);
router.put("/",DichVuController.updateCustomer);
router.delete('/',DichVuController.deleteCustomer);
// Export the router so it can be used in other files
module.exports = router;
