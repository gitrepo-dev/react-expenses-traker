module.exports = (componentName) => ({
  content: `export { default } from "./${componentName.charAt(0).toUpperCase() + componentName.slice(1)}";
`,
  fileName: `index.ts`,
});
