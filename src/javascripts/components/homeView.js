import jokeData from '../helpers/data/jokeData';

const printJoke = () => {
  $('#joke').html('');
  $('#answer').html('');
  jokeData.getJoke().then((jokeObject) => {
    $('#joke').html(`${jokeObject.setup}`);
    $('body').on('click', '#answerBtn', () => {
      $('#answer').html(`${jokeObject.punchline}`);
    });
  });
};

const makeHomeView = () => {
  $('#app').html(`<image></image>
                  <button type="button" id="anotherBtn" class="btn btn-light">Tell me another joke</button>
                  <div id="jokeContainer">
                    <div id="joke"></div>
                    <button type="button" id="answerBtn" class="btn btn-light">Show me the answer</button>
                    <div id="answer"></div>
                  </div>`);
  printJoke();
  $('body').on('click', '#anotherBtn', () => {
    printJoke();
  });
};

export default { makeHomeView };
