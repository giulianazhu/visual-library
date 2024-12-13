import actions from '../actions/page.js'

const validateInput = (input) => {
  return input ? true : 'Input Required'
}

const generator = {
  description: 'React Page Component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Page Name:',
      validate: validateInput,
    },
  ],
  actions: actions,
}

export default generator
