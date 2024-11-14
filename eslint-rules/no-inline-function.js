function isCallback(node) {
  const parent = node.parent;

  // Check if the function is passed as an argument
  return (
    parent.type === 'CallExpression' && parent.arguments.includes(node)
  );
}

const noInlineFunctions = {
  meta: {
    type: "problem",
    docs: {
        description: "Enforce that a variable named `foo` can only be assigned a value of 'bar'."
    },
    fixable: "code",
    schema: []
},
    create(context) {
      return {
        // Check for inline arrow functions
        ArrowFunctionExpression(node) {
          if (((Math.abs(node.loc.start.line-node.loc.end.line)+1) < 3) && !isCallback(node)) {
            context.report({
              node,
              message: 'Inline arrow functions are not allowed. Height must be 3 lines long.',
            });
          }
        },
  
        // Check for inline function expressions
        FunctionExpression(node) {
          if (((Math.abs(node.loc.start.line-node.loc.end.line)+1) < 3) && !isCallback(node)) {
            context.report({
              node,
              message: 'Inline function expressions are not allowed. Height must be 3 lines long.',
            });
          }
        }
      };
    }
  };
  
  export default noInlineFunctions;