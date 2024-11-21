import { database } from './aquariumData.js';

export const locationList = () => {
    let locationHTML = ''
    for (const location of database.locations) {
        locationHTML += `
              <article class="location">
                    <div class="location__details">
                      <h2 class="location_country">${location.country}</h2>
                      <p class="location_name">${location.name}</p>
                      <p2 class"location_details">${location.description}</p>
                  </div>
              </article>
          `;
    }

    return locationHTML
};

export const renderLocationToDom = (locationHTML) => {
    const locationList = document.getElementById('locationList');

    if (locationList) {
        locationList.innerHTML = locationHTML;
    } else {
        console.error('Could not find element with id "locationList"');
    }
};