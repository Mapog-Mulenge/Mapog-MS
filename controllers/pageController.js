const Page = require("../models/Page");

exports.createPage = async (req, res) => {
  try {
    const { title, content, slug } = req.body;
    const page = new Page({ title, content, slug });
    await page.save();
    res.status(201).json({ message: "Page created successfully", page });
  } catch (error) {
    console.error("Create Page Error:", error);
    res.status(500).json({ error: "Server error creating page" });
  }
};

exports.getPage = async (req, res) => {
  try {
    const { slug } = req.params;
    const page = await Page.findOne({ slug });
    if (!page) return res.status(404).json({ error: "Page not found" });
    res.status(200).json(page);
  } catch (error) {
    console.error("Get Page Error:", error);
    res.status(500).json({ error: "Server error fetching page" });
  }
};

exports.updatePage = async (req, res) => {
  try {
    const { slug } = req.params;
    const { title, content } = req.body;
    const page = await Page.findOneAndUpdate(
      { slug },
      { title, content, updatedAt: Date.now() },
      { new: true }
    );
    if (!page) return res.status(404).json({ error: "Page not found" });
    res.status(200).json({ message: "Page updated", page });
  } catch (error) {
    console.error("Update Page Error:", error);
    res.status(500).json({ error: "Server error updating page" });
  }
};

exports.deletePage = async (req, res) => {
  try {
    const { slug } = req.params;
    const page = await Page.findOneAndDelete({ slug });
    if (!page) return res.status(404).json({ error: "Page not found" });
    res.status(200).json({ message: "Page deleted successfully" });
  } catch (error) {
    console.error("Delete Page Error:", error);
    res.status(500).json({ error: "Server error deleting page" });
  }
};
