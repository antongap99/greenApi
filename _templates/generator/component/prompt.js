/* eslint-disable no-undef */
module.exports = {
  prompt({ prompter, }) {

    const questions = [
      {
        type: 'input',
        name: 'component_name',
        message: "component name?"
      },
      {
        type: 'input',
        name: 'dir',
        message: 'Where is the directory?(Optional)'
      }
    ];

    return prompter
      .prompt(questions)
      .then((answers) => {
        const { component_name, dir } = answers
        const path = `${dir ? `${dir}/` : ''}${component_name}`;
        const absPath = `./src/components/${path}`;
        return { ...answers, path, absPath };
      })
  }
} 