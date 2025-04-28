/**
 * Babel plugin to automatically add data-source attributes to components
 * This plugin should be added to your babel configuration
 */
module.exports = function() {
  return {
    name: 'react-jump2source-babel-plugin',
    visitor: {
      // Transform JSX elements
      JSXElement(path, state) {
        // Only run in development mode
        if (process.env.NODE_ENV !== 'development') {
          return;
        }

        const { node } = path;
        const { file } = state;
        
        // Optionally ignore certain paths
        const ignorePaths = process.env.REACT_JUMP2SOURCE_IGNORE_PATHS?.split(',') || [];
        if (ignorePaths.some(path => file.opts.filename.includes(path))) {
          return;
        }

        // Get the source file path relative to src/
        const sourceFile = file.opts.filename.split('src/')[1];
        if (!sourceFile) return;

        // Get the line number from the node's location
        const lineNumber = node.loc?.start.line;
        if (!lineNumber) return;

        // Add the data-source attribute with line number
        const dataSource = `${sourceFile}:${lineNumber}`;
        node.openingElement.attributes.push(
          {
            type: 'JSXAttribute',
            name: {
              type: 'JSXIdentifier',
              name: 'data-source'
            },
            value: {
              type: 'StringLiteral',
              value: dataSource
            }
          }
        );
      },
    },
  };
}; 