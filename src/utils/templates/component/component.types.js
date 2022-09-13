module.exports = (componentName) => ({
  content: `export interface ${componentName.toLowerCase()}Props {
  foo?: string;
}
`,
  extension: `.types.ts`,
});
