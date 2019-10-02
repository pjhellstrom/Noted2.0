const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");

const Note = require("../../models/Note");

// Create note
router.post(
  "/",
  [
    auth,
    [
      check("title", "Please give your note a title!")
        .not()
        .isEmpty(),
      check("body", "Please enter some text!")
        .not()
        .isEmpty(),
      check("body", "Please select a category!")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const newNote = new Note({
        title: req.body.title,
        body: req.body.body,
        category: req.body.category,
        user: req.user.id
      });

      const note = await newNote.save();

      res.json(note);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error.");
    }
  }
);

// Get all notes by userId
router.get("/:userid", auth, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.params.userid }).sort({
      date: -1
    });
    res.json(notes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error.");
  }
});

// @TODO add route for get all by category

// Delete note
router.delete("/:id", auth, async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);

    if (!note) {
      return res.status(404).json({ msg: "Note not found" });
    }

    // Check user
    if (note.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized" });
    }

    await note.remove();

    res.json({ msg: "Note removed" });
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Note not found" });
    }
    res.status(500).send("Server error.");
  }
});

module.exports = router;
