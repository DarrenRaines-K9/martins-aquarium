// import { database } from './aquariumData.js';

// export const fishList = () => {
//    let fishHTML = '';

//    for (const fish of database.fish) {
//       fishHTML += `
//     <article class="fish">
//       <img src="${fish.image}" alt="${fish.name}" class="fish_image">
//       <div class="fish_details">
//          <h2 class ="fish_name">${fish.name}<h2>
//          </div>
//     </article>
//     `;
//    }
//    return fishHTML
// }

// export const renderFishToDOM = (fishHTML) => {
//    const fishList = document.getElementById('fish-list');

//    if (fishList) {
//       fishList.innerHTML = fishHTML;
//    } else {
//       console.error('Could not find element with id "fish-list"');
//    }
// };
import { database } from './aquariumData.js';

export const fishList = () => {
    // Generate an HTML representation of each fish

    const generateFishHTML = () => {
      let fishHTML = '';
   
      for (const fish of database.fish) {
          fishHTML += `
              <article class="movie">
                  <img src="${fish.image}" alt="${fish.name} poster" class="fish__image">
                  <div class="fish__details">
                      <h2 class="fish_name">${fish.name}</h2>
                      <p class="fish_species">${fish.species}</p>
                  </div>
              </article>
          `;
      }
   
      return fishHTML
};
}