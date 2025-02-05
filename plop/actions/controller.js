const templatePath = 'plop/templates/controller'

const actions = ({ isShared }) => {
  let outputPath = `src/##folder##{{kebabCase name}}{{suffix}}`

  if (isShared) {
    outputPath = outputPath.replace('##folder##', 'shared/controllers/')
  } else {
    outputPath = outputPath.replace('##folder##', `/features/{{kebabCase featureName}}/controllers/`)
  }
  const actions = [
    {
      type: 'add',
      templateFile: `${templatePath}/index.ts.hbs`,
      path: `${outputPath}/index.ts`,
    },
    {
      type: 'add',
      templateFile: `${templatePath}/controller.tsx.hbs`,
      path: `${outputPath}/{{pascalCase name}}.tsx`,
    },
    // {
    //   type: 'add',
    //   templateFile: `${templatePath}/controller.test.tsx.hbs`,
    //   path: `${outputPath}/{{pascalCase name}}.test.tsx`,
    // },
  ].filter(Boolean)
  return actions
}

export default actions
