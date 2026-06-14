const mongoose = require("mongoose");
const Project = require("./models/Project");
require("dotenv").config();

const projects = [
  {
    title: "KDU Blog",
    tag: "Full-Stack",
    year: "2026",
    desc: "The blog for KDU, a student-led initiative to share knowledge and projects. Built with React, Node.js, and MongoDB.",
    link: "https://kdublog.vercel.app/",
    featured: false,
  },
  {
    title: "KDU Blog Admin Page",
    tag: "Frontend",
    year: "2026",
    desc: "The behind the scenes of the KDU blog where I can create, edit and delete posts.",
    link: "#",
    featured: false,
  },
  {
    title: "UI Component Kit",
    tag: "Design",
    year: "2025",
    desc: "Reusable React component library with themeable design tokens and Storybook docs.",
    link: "#",
    featured: false,
  },
  {
    title: "My Portfolio",
    tag: "Frontend",
    year: "2025",
    desc: "My first website with dynamic content and fast delivery.",
    link: "#",
    featured: false,
  },
];

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB connected");
    await Project.deleteMany({});
    await Project.insertMany(projects);
    console.log("Projects seeded successfully!");
    process.exit(0);
  })
  .catch((err) => {
    console.error("Error:", err);
    process.exit(1);
  });
