const templatePath = 'plop/templates/component'

const actions = ({ isShared }) => {
  let outputPath = 'src/##folder##{{kebabCase name}}'

  if (isShared) {
    outputPath = outputPath.replace('##folder##', 'shared/ui/')
  } else {
    outputPath = outputPath.replace('##folder##', `/features/{{kebabCase featureName}}/ui/`)
  }

  const actions = [
    {
      type: 'add',
      templateFile: `${templatePath}/component.scss.hbs`,
      path: `${outputPath}/styles.module.scss`,
    },
    {
      type: 'add',
      templateFile: `${templatePath}/index.ts.hbs`,
      path: `${outputPath}/index.ts`,
    },
    {
      type: 'add',
      templateFile: `${templatePath}/component.tsx.hbs`,
      path: `${outputPath}/{{pascalCase name}}.tsx`,
    },
    {
      type: 'add',
      templateFile: `${templatePath}/component.test.tsx.hbs`,
      path: `${outputPath}/{{pascalCase name}}.test.tsx`,
    },
  ].filter(Boolean)
  return actions
}

export default actions
