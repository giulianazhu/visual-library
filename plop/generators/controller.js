import actions from '../actions/controller.js'

const validateInput = (input) => {
  return input ? true : 'Input Required'
}

const generator = {
  description: 'Create Controller Component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Controller Name:',
      validate: validateInputNotNull,
    },

    {
      type: 'confirm',
      name: 'isShared',
      message: 'Is it a shared controller?',
    },

    {
      type: 'input',
      name: 'pageName',
      message: 'Name of the page it belongs to',
      validate: validateInputNotNull,
      when(answers) {
        return !answers.isShared
      },
    },
  ],
  actions: actions,
}

export default generator
