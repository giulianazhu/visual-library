const templatePath = 'plop/templates/page'
const outputPath = 'src/pages/{{kebabCase name}}'

const actions = () => {
  const actions = [
    {
      type: 'add',
      templateFile: `${templatePath}/index.ts.hbs`,
      path: `${outputPath}/index.ts`,
    },
    {
      type: 'add',
      templateFile: `${templatePath}/page.tsx.hbs`,
      path: `${outputPath}/{{pascalCase name}}.tsx`,
    },
    {
      type: 'add',
      templateFile: `${templatePath}/page.scss.hbs`,
      path: `${outputPath}/styles.module.scss`,
    },
  ].filter(Boolean)
  return actions
}

export default actions
