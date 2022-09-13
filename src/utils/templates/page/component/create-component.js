const fs = require("fs");
const templates = require("./index");

const componentName = process.argv[2];

if (!componentName) {
    console.error("Please supply a valid component name");
    process.exit(1);
}

console.log("Creating Component Templates with name: " + componentName);

const componentDirectory = `./src/pages/${componentName}`.toLocaleLowerCase();

if (fs.existsSync(componentDirectory)) {
    console.error(`Component ${componentName} already exists.`);
    process.exit(1);
}

fs.mkdirSync(componentDirectory);

const generatedTemplates = templates.map((template) => template(componentName));

generatedTemplates.forEach((template) => {
  fs.writeFileSync(
    template.fileName
      ? `${componentDirectory}/${template.fileName}`
      : `${template.extension}` === '.tsx' ? `${componentDirectory}/${componentName.charAt(0).toUpperCase() + componentName.slice(1)}${template.extension}` : `${componentDirectory}/${componentName}${template.extension}`,
    template.content
  );
});

console.log("Successfully created component under: " + componentDirectory + ':)');
