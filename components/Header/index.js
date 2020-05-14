// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

const chead = document.querySelector('.header-container');

function Header() {
    const ctop = document.createElement('div');
    const dspan = document.createElement('span');
    const ch1 = document.createElement('h1');
    const tspan = document.createElement('span');

    ctop.appendChild(dspan);
    ctop.appendChild(ch1);
    ctop.appendChild(tspan);

    ctop.classList.add('header');
    dspan.classList.add('date');
    tspan.classList.add('temp');

    return ctop;

}

chead.appendChild(Header());