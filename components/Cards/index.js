// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

const ccontainer = document.querySelector('.cards-container');

function cards(attr){
    const {headline, authorPhoto, authorName} = attr

    const cardtop = document.createElement('div');
    const cardtitle = document.createElement('div');
    const cardauthor = document.createElement('div');
    const imgtop = document.createElement('div');
    const aimg = document.createElement('img');
    const aname = document.createElement('span');

    cardtop.appendChild(cardtitle);
    cardtop.appendChild(cardauthor);
    cardauthor.appendChild(imgtop);
    imgtop.appendChild(aimg);
    cardauthor.appendChild(aname);

    cardtop.classList.add('card');
    cardtitle.classList.add('headline');
    cardauthor.classList.add('author');
    imgtop.classList.add('img-container');

    cardtitle.textContent = headline;
    aimg.src = authorPhoto;
    aname.textContent = `By: ${authorName}`;

    return cardtop;
}

function article(articles){
    http.get ('https://lambda-times-backend.herokuapp.com/articles')
        .then(response =>{
            response.data.message.forEach(articles => {
              const card = cards({headline: headline, authorPhoto: authorPhoto, authorName: authorName})
              ccontainer.appendChild(card)
            });
        })
        .catch(error => {
            console.log('Failed to get articles')
          })
          .finally(() => {
            console.log('done')
          })
}
