const fs = require("fs");
const templates = require("./index");
const cmdArgs = process.argv;

const tookitName = process.argv[2];

if (!tookitName) {
  console.error("Please supply a valid toolkit name");
  process.exit(1);
}

console.log("Creating toolkit Templates with name: " + tookitName);

const toolkitAction = `./src/redux/actions/${tookitName}Action.ts`;
const toolkitReducer = `./src/redux/reducers/${tookitName}Reducer.ts`;
const toolkitSaga = `./src/redux/sagas/${tookitName}Saga.ts`;
const toolkitTypes = `./src/redux/types/${tookitName}Types.ts`;
const toolkitServices = `./src/services/${tookitName}Services.ts`;
const toolkitInterfaces = `./src/interfaces/${tookitName}.ts`;

if (fs.existsSync(toolkitAction || toolkitReducer || toolkitSaga || toolkitTypes || toolkitServices || toolkitInterfaces)) {
  console.error(`toolkit ${tookitName} already exists.`);
  process.exit(1);
}

const generatedTemplates = templates.map((template) => template(tookitName));

generatedTemplates.forEach((template) => {
  fs.writeFileSync(
    `${template.dir}/${template.name}.ts`,
    template.content
  );
});

console.log("Successfully created toolkit files under: redux dir :)");
console.log("Please import the reducer & saga file in store.ts for work !!!");

// const createFileName = cmdArgs[cmdArgs?.length - 1]
// fs.readdir('./src/interfaces', (err, files) => {
//   files.forEach(file => {
//     if (file === 'index.ts') {
//       console.log(fs.readFileSync(`./src/interfaces/${file}`)?.toString()?.split("\r\n"))
//       // fs.appendFile(`./src/interfaces/${file}`, `import { ${createFileName}StateType, ${createFileName}ActionType } from '${createFileName}';`, (err) => {
//       //   if (!err) console.log("The file was saved!");
//       // })

//     }
//   });
// });
// console.log("Importing toolkit files");
// console.log("Successfully Imported files :)");
