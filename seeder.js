import mongoose from "mongoose";
import ChapterModel from "./models/Chapter.js";
import dotenv from "dotenv";

dotenv.config();

// ✅ Updated Subject IDs
const subjects = {
  // ----- Class 9 -----
  "9-English": "6908ca404672a27e6e707efc",
  "9-Urdu": "6908ca404672a27e6e707efd",
  "9-Islamiyat": "6908ca404672a27e6e707efe",
  "9-Pakistan Studies": "6908ca404672a27e6e707eff",
  "9-Mathematics": "6908ca404672a27e6e707f00",
  "9-Physics": "6908ca404672a27e6e707f01",
  "9-Chemistry": "6908ca404672a27e6e707f02",
  "9-Biology": "6908ca404672a27e6e707f03",
  "9-Computer Science": "6908ca404672a27e6e707f04",

  // ----- Class 10 -----
  "10-English": "6908ca404672a27e6e707f05",
  "10-Urdu": "6908ca404672a27e6e707f06",
  "10-Islamiyat": "6908ca404672a27e6e707f07",
  "10-Pakistan Studies": "6908ca404672a27e6e707f08",
  "10-Mathematics": "6908ca404672a27e6e707f09",
  "10-Physics": "6908ca404672a27e6e707f0a",
  "10-Chemistry": "6908ca404672a27e6e707f0b",
  "10-Biology": "6908ca404672a27e6e707f0c",
  "10-Computer Science": "6908ca404672a27e6e707f0d",

  // ----- Class 11 -----
  "11-English": "6908ca404672a27e6e707f25",
  "11-Urdu": "6908ca404672a27e6e707f26",
  "11-Islamiyat": "6908ca404672a27e6e707f10",
  "11-Pakistan Studies": "6908ca404672a27e6e707f11",
  "11-Mathematics": "6908ca404672a27e6e707f12",
  "11-Physics": "6908ca404672a27e6e707f13",
  "11-Chemistry": "6908ca404672a27e6e707f14",
  "11-Biology": "6908ca404672a27e6e707f15",
  "11-Computer Science": "6908ca404672a27e6e707f16",
  "11-Economics": "6908ca404672a27e6e707f17",
  "11-Accounting": "6908ca404672a27e6e707f18",
  "11-Psychology": "6908ca404672a27e6e707f19",
  "11-Statistics": "6908ca404672a27e6e707f1a",

  // ----- Class 12 -----
  "12-English": "6908ca404672a27e6e707f1b",
  "12-Urdu": "6908ca404672a27e6e707f1c",
  "12-Islamiyat": "6908ca404672a27e6e707f1d",
  "12-Pakistan Studies": "6908ca404672a27e6e707f1e",
  "12-Mathematics": "6908ca404672a27e6e707f1f",
  "12-Physics": "6908ca404672a27e6e707f20",
  "12-Chemistry": "6908ca404672a27e6e707f21",
  "12-Biology": "6908ca404672a27e6e707f22",
  "12-Computer Science": "6908ca404672a27e6e707f23",
  "12-Economics": "6908ca404672a27e6e707f24",
  "12-Accounting": "6908ca404672a27e6e707f25",
  "12-Psychology": "6908ca404672a27e6e707f26",
  "12-Statistics": "6908ca404672a27e6e707f27",
};

// ✅ Chapters Array (with all classes & subjects)
const chapters = [
  // ===== CLASS 9 =====
  // PHYSICS
  { title: "Physical Quantities and Measurement", chapterNumber: 1, subjectId: subjects["9-Physics"] },
  { title: "Kinematics", chapterNumber: 2, subjectId: subjects["9-Physics"] },
  { title: "Dynamics", chapterNumber: 3, subjectId: subjects["9-Physics"] },
  { title: "Turning Effect of Forces", chapterNumber: 4, subjectId: subjects["9-Physics"] },
  { title: "Gravitation", chapterNumber: 5, subjectId: subjects["9-Physics"] },
  { title: "Work and Energy", chapterNumber: 6, subjectId: subjects["9-Physics"] },
  { title: "Properties of Matter", chapterNumber: 7, subjectId: subjects["9-Physics"] },
  { title: "Thermal Properties of Matter", chapterNumber: 8, subjectId: subjects["9-Physics"] },
  { title: "Transfer of Heat", chapterNumber: 9, subjectId: subjects["9-Physics"] },

  // CHEMISTRY
  { title: "Fundamentals of Chemistry", chapterNumber: 1, subjectId: subjects["9-Chemistry"] },
  { title: "Structure of Atoms", chapterNumber: 2, subjectId: subjects["9-Chemistry"] },
  { title: "Periodic Table", chapterNumber: 3, subjectId: subjects["9-Chemistry"] },
  { title: "Structure of Molecules", chapterNumber: 4, subjectId: subjects["9-Chemistry"] },
  { title: "Physical States of Matter", chapterNumber: 5, subjectId: subjects["9-Chemistry"] },
  { title: "Solutions", chapterNumber: 6, subjectId: subjects["9-Chemistry"] },
  { title: "Electrochemistry", chapterNumber: 7, subjectId: subjects["9-Chemistry"] },
  { title: "Chemical Reactivity", chapterNumber: 8, subjectId: subjects["9-Chemistry"] },

  // BIOLOGY
  { title: "Introduction to Biology", chapterNumber: 1, subjectId: subjects["9-Biology"] },
  { title: "Solving a Biological Problem", chapterNumber: 2, subjectId: subjects["9-Biology"] },
  { title: "Biodiversity", chapterNumber: 3, subjectId: subjects["9-Biology"] },
  { title: "Cells and Tissues", chapterNumber: 4, subjectId: subjects["9-Biology"] },
  { title: "Cell Cycle", chapterNumber: 5, subjectId: subjects["9-Biology"] },
  { title: "Enzymes", chapterNumber: 6, subjectId: subjects["9-Biology"] },
  { title: "Bioenergetics", chapterNumber: 7, subjectId: subjects["9-Biology"] },
  { title: "Nutrition", chapterNumber: 8, subjectId: subjects["9-Biology"] },

  // MATHEMATICS
  { title: "Matrices and Determinants", chapterNumber: 1, subjectId: subjects["9-Mathematics"] },
  { title: "Real and Complex Numbers", chapterNumber: 2, subjectId: subjects["9-Mathematics"] },
  { title: "Logarithms", chapterNumber: 3, subjectId: subjects["9-Mathematics"] },
  { title: "Factorization", chapterNumber: 4, subjectId: subjects["9-Mathematics"] },

  // COMPUTER SCIENCE
  { title: "Introduction to Computer", chapterNumber: 1, subjectId: subjects["9-Computer Science"] },
  { title: "Hardware Components", chapterNumber: 2, subjectId: subjects["9-Computer Science"] },
  { title: "Software Concepts", chapterNumber: 3, subjectId: subjects["9-Computer Science"] },

  // ISLAMIYAT
  { title: "Faith and Beliefs", chapterNumber: 1, subjectId: subjects["9-Islamiyat"] },
  { title: "Life of the Holy Prophet (PBUH)", chapterNumber: 2, subjectId: subjects["9-Islamiyat"] },
  { title: "Islamic Teachings", chapterNumber: 3, subjectId: subjects["9-Islamiyat"] },

  // PAKISTAN STUDIES
  { title: "Ideological Basis of Pakistan", chapterNumber: 1, subjectId: subjects["9-Pakistan Studies"] },
  { title: "Making of Pakistan", chapterNumber: 2, subjectId: subjects["9-Pakistan Studies"] },
  { title: "Land and Environment", chapterNumber: 3, subjectId: subjects["9-Pakistan Studies"] },

  // ENGLISH
  { title: "The Saviour of Mankind", chapterNumber: 1, subjectId: subjects["9-English"] },
  { title: "Patriotism", chapterNumber: 2, subjectId: subjects["9-English"] },
  { title: "Media and Its Impact", chapterNumber: 3, subjectId: subjects["9-English"] },

  // URDU
  { title: "Hamd", chapterNumber: 1, subjectId: subjects["9-Urdu"] },
  { title: "Naat", chapterNumber: 2, subjectId: subjects["9-Urdu"] },
  { title: "Mazameen", chapterNumber: 3, subjectId: subjects["9-Urdu"] },

  // ===== CLASS 10 =====
  // PHYSICS
  { title: "Simple Harmonic Motion", chapterNumber: 1, subjectId: subjects["10-Physics"] },
  { title: "Sound", chapterNumber: 2, subjectId: subjects["10-Physics"] },
  { title: "Geometrical Optics", chapterNumber: 3, subjectId: subjects["10-Physics"] },
  { title: "Electrostatics", chapterNumber: 4, subjectId: subjects["10-Physics"] },
  { title: "Electromagnetism", chapterNumber: 5, subjectId: subjects["10-Physics"] },

  // CHEMISTRY
  { title: "Chemical Equilibrium", chapterNumber: 1, subjectId: subjects["10-Chemistry"] },
  { title: "Acids, Bases and Salts", chapterNumber: 2, subjectId: subjects["10-Chemistry"] },
  { title: "Organic Chemistry", chapterNumber: 3, subjectId: subjects["10-Chemistry"] },
  { title: "Environmental Chemistry", chapterNumber: 4, subjectId: subjects["10-Chemistry"] },

  // BIOLOGY
  { title: "Gaseous Exchange", chapterNumber: 1, subjectId: subjects["10-Biology"] },
  { title: "Homeostasis", chapterNumber: 2, subjectId: subjects["10-Biology"] },
  { title: "Reproduction", chapterNumber: 3, subjectId: subjects["10-Biology"] },
  { title: "Inheritance", chapterNumber: 4, subjectId: subjects["10-Biology"] },

  // COMPUTER SCIENCE
  { title: "Programming Concepts", chapterNumber: 1, subjectId: subjects["10-Computer Science"] },
  { title: "Data Storage", chapterNumber: 2, subjectId: subjects["10-Computer Science"] },
  { title: "Logic Gates", chapterNumber: 3, subjectId: subjects["10-Computer Science"] },

  // ENGLISH
  { title: "The Rain", chapterNumber: 1, subjectId: subjects["10-English"] },
  { title: "Try Again", chapterNumber: 2, subjectId: subjects["10-English"] },
  { title: "Peace", chapterNumber: 3, subjectId: subjects["10-English"] },

  // URDU
  { title: "Naat", chapterNumber: 1, subjectId: subjects["10-Urdu"] },
  { title: "Ghazal", chapterNumber: 2, subjectId: subjects["10-Urdu"] },
  { title: "Nazam", chapterNumber: 3, subjectId: subjects["10-Urdu"] },
];

// ✅ Seeder Execution
const seedChapters = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB");

    await ChapterModel.deleteMany({});
    await ChapterModel.insertMany(chapters);

    console.log(`✅ ${chapters.length} Chapters Seeded Successfully`);
    process.exit(0);
  } catch (err) {
    console.error("❌ Seeding Error:", err);
    process.exit(1);
  }
};

seedChapters();
