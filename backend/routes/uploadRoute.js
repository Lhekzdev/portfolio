import express from "express";
import multer from "multer";
import cloudinary from "../config/cloudinary.js";  // 👈 Add the .js extension

const router = express.Router();
const upload = multer({ dest: "uploads/" }); // Temporary folder for files

// 📤 Upload CV Route
router.post("/upload-cv", upload.single("file"), async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path, {
      resource_type: "raw", // Important for PDF/DOCX files
      folder: "cvs",        // Optional: saves inside a "cvs" folder in Cloudinary
    });

    res.json({ url: result.secure_url });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
