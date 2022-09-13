module.exports = (componentName) => ({
  content: `import React from "react";
import { ${componentName.toLowerCase()}Props } from "./${componentName}.types";

const ${componentName.charAt(0).toUpperCase() + componentName.slice(1)}: React.FC<${componentName.toLowerCase()}Props> = ({ foo }) => {
  return(
      <div>
        {foo}
      </div>
  );
}

export default ${componentName.charAt(0).toUpperCase() + componentName.slice(1)};
`,
  extension: `.tsx`,
});
