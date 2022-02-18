const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const makeQuestion = function (callback) {
rl.question('What\'s your name? ', (name) => { 
  console.log(`Thank you for your valuable feedback: ${name}`);

  makeQuestion(rl.question('What\'s your fav activity? ', (activity) => {
    console.log(`Thank you for your valuable feedback: ${activity}`);

    makeQuestion(rl.question('What do you listen to while doing that?', (music) => {
    console.log(`Thank you for your valuable feedback: ${music}`);

      makeQuestion(rl.question('What is your favorite meal of the day', (meal) => {
      console.log(`Thank you for your valuable feedback: ${meal}`);

        makeQuestion(rl.question('What is your favorite meal of the day', (meal) => {
        console.log(`Thank you for your valuable feedback: ${meal}`);

          makeQuestion(rl.question('What do you like to eat for that meal', (food) => {
          console.log(`Thank you for your valuable feedback: ${food}`);

            makeQuestion( rl.question('What is your favorite sport', (sport) => {
            console.log(`Thank you for your valuable feedback: ${sport}`);

              makeQuestion(rl.question('What is your superpower', (superpower) => {
              console.log(`Thank you for your valuable feedback: ${superpower}`);
              rl.close();
              }))
            }))
          }))
        }))
      }))
    }))
  }))
})
};
makeQuestion();

            


