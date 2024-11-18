import { database } from './aquariumData.js';

export const fishList = () => {
   let fishHTML = '';

   for (fish of fishList) {
      fishHTML += `
    <article class="fish">
      <img src="${fish.image}" alt="${fish.name}" class="fish_image">
      <div class="fish_details">
         <h2 class ="fish_name">${fish.name}<h2>
         </div>
    </article>
    `;
   }
   return fishHTML
}