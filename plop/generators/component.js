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
      name: 'pageName',
      message: 'Name of the page it belongs to',
      validate: validateInput,
      when(answers) {
        return !answers.isShared
      },
    },
    {
      type: 'confirm',
      name: 'component_story',
      message: 'Should have a story?',
      choices: [
        { name: 'Yes', value: true },
        { name: 'No', value: false },
      ],
      default: 'Yes',
    },
  ],
  actions: actions,
}

export default generator
