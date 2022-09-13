module.exports = (componentName) => ({
  content: `import React from 'react';
import { ${componentName.toLowerCase()}Props, ${componentName.toLowerCase()}State } from "./${componentName}.types";

class ${componentName} extends React.Component<${componentName.toLowerCase()}Props, ${componentName.toLowerCase()}State> {
  constructor(props: ${componentName.toLowerCase()}Props) {
    super(props);
      this.state = {
        foo: this.props.foo,
        fiz: this.props.fiz,
        buzz: "this is buzz"
      } 
  }
  
  render() {
    return (
      <div>
        {this.state.foo}
        {this.state.fiz}
        {this.state.buzz}
      </div>
    )
  }
}

export default ${componentName};
`,
  extension: `.tsx`,
});
