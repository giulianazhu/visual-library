import actions from '../actions/feature.js'

const validateInput = (input) => {
  return input ? true : 'Input Required'
}

const generator = {
  description: 'Feature folder',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Feature Name:',
      validate: validateInput,
    },
  ],
  actions: actions,
}

export default generator
