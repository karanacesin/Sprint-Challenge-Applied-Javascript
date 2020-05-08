// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

const top = document.querySelector('.title');

function tabs(topics){
    const tabdiv = document.createElement('div');

    tabdiv.classList.add('tab');

    tabdiv.textContent = topics;

    return tabdiv;
}


function gettab(topics){
    axios.get ('https://lambda-times-backend.herokuapp.com/topics')
        .then(response =>{
            response.data.message.forEach(topics => {
              const tab = tabs(topics)
              top.appendChild(tab)
            });
        })
        .catch(error => {
            console.log('Failed to get topics')
          })
          .finally(() => {
            console.log('done')
          })
}
