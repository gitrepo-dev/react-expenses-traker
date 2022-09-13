module.exports = (componentName) => ({
  name: `${componentName}Services`,
  dir: './src/services/',
  content: `
  /**
   * get ${componentName}
   * @param {''}
   * @returns {null}
   */

   export const get${componentName.charAt(0).toUpperCase() + componentName.slice(1)}Service = async (): Promise<object> => {
    try {
        const res = await fetch('/api/end/point');
        return await res.json()
    } catch (e) {
        throw e
    }
};`,
});
