/* eslint-disable no-undef */
module.exports = {
  prompt({ prompter, }) {

    const questions = [
      {
        type: 'input',
        name: 'page_name',
        message: "page name?"
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
        console.log('answers: ', answers);
        const { page_name, dir } = answers
        const path = `${dir ? `${dir}/` : ''}${page_name}`;
        const absPath = `./src/pages/${path}`;
        return { ...answers, path, absPath };
      })
  }
} 