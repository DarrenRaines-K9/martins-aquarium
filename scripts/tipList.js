import { database } from './aquariumData.js';

export const tipList = () => {
    const tipsArray = database.tips;


    const tipsHTML = tipsArray.map(tip => {
        return `
            <div class="tips-card">
                <h3>${tip.topic}</h3>
                <p>${tip.text}</p>
            </div>
        `;
    }).join("");

    document.getElementById('tipList').innerHTML = tipsHTML;

}
// Inject tips into the #tipList section
const tipListContainer = document.querySelector("#tipList");
if (tipListContainer) {
    tipListContainer.innerHTML = tipList();
}