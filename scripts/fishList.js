import { database } from './aquariumData.js';

export const fishList = () => {
   let fishHTML = ''
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

export const renderFishToDom = (fishHTML) => {
   const fishList = document.getElementById('fishList');

   if (fishList) {
      fishList.innerHTML = fishHTML;
   } else {
      console.error('Could not find element with id "fishList"');
   }
};