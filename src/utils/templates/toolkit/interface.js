module.exports = (componentName) => ({
  name: `${componentName}`,
  dir: './src/interfaces',
  content: `
export type ${componentName}Data = {
    data: string;
};

export interface ${componentName}StateType {
    data: ${componentName}Data[]
};

export interface ${componentName}ActionType {
    type: string;
    payload: ${componentName}Data[];
};`,
});
