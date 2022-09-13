module.exports = (componentName) => ({
  name: `${componentName}Actions`,
  dir: './src/redux/actions/',
  content: `import Types from 'redux/types/${componentName}Types';

/***
  * loading
  * @param {'string, boolean'}
  * @return {'true/false'}
  * 
***/
export const on${componentName.charAt(0).toUpperCase() + componentName.slice(1)}Loading = (data: string, status: boolean) => ({
    type: Types.${componentName.toUpperCase()}_LOADING,
    payload: {
        data,
        status
    }
});

/***
 * get the ${componentName}
 * @param {''}
 * @return {'data'}
 * 
***/
export const onGet${componentName.charAt(0).toUpperCase() + componentName.slice(1)} = () => ({
    type: Types.GET_${componentName.toUpperCase()},
    payload: []
});`,
});
