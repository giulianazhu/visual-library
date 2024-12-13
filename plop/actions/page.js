const templatePath = 'plop/templates/page'
const outputPath = 'src/pages/{{kebabCase name}}'

const actions = ({ component_story }) => {
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
  ].filter(Boolean)
  return actions
}

export default actions
