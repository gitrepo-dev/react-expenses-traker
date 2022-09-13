module.exports = (componentName) => ({
  content: `export interface ${componentName.toLowerCase()}Props {
    readonly foo?: string;
    readonly fiz?: string;
}

export interface ${componentName.toLowerCase()}State extends ${componentName.toLowerCase()}Props  {
  buzz?: string;
}
`,
  extension: `.types.ts`,
});
