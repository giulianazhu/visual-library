const templatePath = 'plop/templates/controller'

const actions = ({ isShared, pageName }) => {
  let outputPath = `src/##folder##{{kebabCase name}}{{suffix}}`

  if (isShared) {
    outputPath = outputPath.replace('##folder##', 'shared/controllers/')
  } else {
    outputPath = outputPath.replace('##folder##', `/pages/{{kebabCase pageName}}/controllers/`)
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
  ].filter(Boolean)
  return actions
}

export default actions
