
const express = require("express");

const router = express.Router();

const {
   getCollageByCode,getCollageByName,getCollageData,getCollages
} = require("../controllers/collageController");

const { isAuthenticatedAdmin,isAuthenticatedUser } = require("../middleware/auth");

router.route("/getAllColleges").get(getCollages);
router.route("/getCollageData/:id").get(getCollageData);
router.route("/getCollageDataByCode").get(getCollageByCode);
router.route("/getCollageDataByName").get(getCollageByName);
// router.route("/addCollageData").post(addCollageData);

// router.route("/addCollage").post(addCollageData);
// router.route("/deletecollage/:id").delete(deleteCollageData);
// router.route("/updatecollage/:id").put(updateCollageData);

module.exports = router;
