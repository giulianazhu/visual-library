import actions from '../actions/controller.js'

const validateInput = (input) => {
  return input ? true : 'Input Required'
}

const generator = {
  description: 'React Controller',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Controller Name:',
      validate: validateInput,
    },

    {
      type: 'confirm',
      name: 'isShared',
      message: 'Is it a shared controller?',
    },

    {
      type: 'input',
      name: 'featureName',
      message: 'Name of the feature it belongs to',
      validate: validateInput,
      when(answers) {
        return !answers.isShared
      },
    },
  ],
  actions: actions,
}

export default generator
