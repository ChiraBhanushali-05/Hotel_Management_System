const express = require("express");
const { verifyToken, restrictToRole } = require("../middleware/authMiddleware");
const validateSuperAdmin = require("../middleware/validateSuperAdmin");
const {createSuperAdmin,getAllSuperAdmins,getSuperAdminById,updateSuperAdmin,deleteSuperAdmin,generateTokenForAdmin} = require("../controllers/adminController");

const router = express.Router();


router.post("/createSuperAdmin", validateSuperAdmin, createSuperAdmin);

router.post("/login", generateTokenForAdmin);

router.get("/", getAllSuperAdmins);

router.get("/superAdmin/:id", getSuperAdminById);

router.put("/superAdmin/:id", validateSuperAdmin, updateSuperAdmin);

router.delete("/superAdmin/:id",  deleteSuperAdmin);

module.exports = router;
