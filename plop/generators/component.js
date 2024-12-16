import actions from '../actions/component.js'

const validateInput = (input) => {
  return input ? true : 'Input Required'
}

const generator = {
  description: 'React Component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Component Name:',
      validate: validateInput,
    },
    {
      type: 'confirm',
      name: 'isShared',
      message: 'Is it shared?',
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
