const outputPath = 'src/features/{{kebabCase name}}'

const actions = () => {
  const actions = [
    {
      type: 'add',
      templateFile: '',
      path: `${outputPath}/controllers/.gitkeep`,
    },
    {
      type: 'add',
      templateFile: '',
      path: `${outputPath}/hooks/.gitkeep`,
    },
    {
      type: 'add',
      templateFile: '',
      path: `${outputPath}/services/.gitkeep`,
    },
    {
      type: 'add',
      templateFile: '',
      path: `${outputPath}/store/.gitkeep`,
    },
    {
      type: 'add',
      templateFile: '',
      path: `${outputPath}/ui/.gitkeep`,
    },
  ].filter(Boolean)
  return actions
}

export default actions
