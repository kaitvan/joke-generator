const makeHomeView = () => {
  $('#app').html(`<image></image>
                  <button type="button" class="btn btn-light">Tell me another joke</button>
                  <div id="jokeContainer">
                    <div id="joke"></div>
                    <button type="button" class="btn btn-light">Show me the answer</button>
                    <div id="answer"></div>
                  </div>`);
};

export default { makeHomeView };
