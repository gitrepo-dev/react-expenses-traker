module.exports = (componentName) => ({
    name: `${componentName}Types`,
    dir: './src/redux/types/',
    content: `const ACTION_TYPES = {
    ${componentName.toUpperCase()}_LOADING: '${componentName.toUpperCase()}_LOADING',
    GET_${componentName.toUpperCase()}: 'GET_${componentName.toUpperCase()}',
}

export default ACTION_TYPES;`,
});