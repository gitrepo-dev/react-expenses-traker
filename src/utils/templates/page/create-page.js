const fs = require("fs");
const templates = require("./index");

const pageName = process.argv[2];

if (!pageName) {
    console.error("Please supply a valid page name");
    process.exit(1);
}

console.log("Creating page Templates with name: " + pageName);

const pageDirectory = `./src/pages/${pageName}`.toLowerCase();

if (fs.existsSync(pageDirectory)) {
    console.error(`page ${pageName} already exists.`);
    process.exit(1);
}

fs.mkdirSync(pageDirectory);

const generatedTemplates = templates.map((template) => template(pageName));

generatedTemplates.forEach((template) => {
  fs.writeFileSync(
    template.fileName
      ? `${pageDirectory}/${template.fileName}`
      : `${pageDirectory}/${pageName}${template.extension}`,
    template.content
  );
});

console.log("Successfully created page under: " + pageDirectory);
