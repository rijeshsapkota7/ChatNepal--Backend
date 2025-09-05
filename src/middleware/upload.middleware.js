import multer from "multer";
import path from "path";

// Set storage destination and filename
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // make sure this folder exists
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

// File filter (optional)
const fileFilter = (req, file, cb) => {
  // Accept all files for now, can filter by mime type
  cb(null, true);
};

export const upload = multer({ storage, fileFilter });
