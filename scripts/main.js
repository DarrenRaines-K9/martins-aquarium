import { fishList, renderFishToDom } from './fishList.js'
//import { tipList } from './tipList.js'
//import { locationList } from './locationList.js'

// Generate the fish list
const fishHTML = fishList();
renderFishToDom(fishHTML);
// Generate the care tips
//const tipHTML = tipList()

// Generate the location list
//const locationHTML = locationList()