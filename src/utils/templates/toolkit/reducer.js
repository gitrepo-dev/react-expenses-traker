module.exports = (componentName) => ({
  name: `${componentName}Reducer`,
  dir: './src/redux/reducers/',
  content: `
  import { createSlice } from '@reduxjs/toolkit';
  import { ${componentName}StateType, ${componentName}ActionType } from 'interfaces/${componentName}';

  const initialState: ${componentName}StateType = {
    data: []
};

export const ${componentName}Slice = createSlice({
    name: '${componentName}',
    initialState,
    reducers: {
        get${componentName.charAt(0).toUpperCase() + componentName.slice(1)}: (state, action: ${componentName}ActionType) => {
          state.data = action.payload;
        },
        set${componentName.charAt(0).toUpperCase() + componentName.slice(1)}: (state, action: ${componentName}ActionType) => {
          state.data = action.payload;
        }
    },
});

export const { set${componentName.charAt(0).toUpperCase() + componentName.slice(1)} } = ${componentName}Slice.actions;
export const get${componentName.charAt(0).toUpperCase() + componentName.slice(1)} = (state: any) => state.${componentName}.data;
export default ${componentName}Slice.reducer;`,
});
