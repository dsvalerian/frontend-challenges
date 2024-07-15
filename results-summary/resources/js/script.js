function getCategoriesHtml() {
    return fetch("resources/data/categories.json")
        .then(response => response.json());
}

function generateHtml(categoryData) {
    let html = "";
    categoryData.forEach(category => {
        html +=
            `<div class="results__category-card">` +
                `<div class="icon-label"><img src="${category.icon}" /><p>${category.category}</p></div>` +
                `<p>${category.score} / 100</p>` +
            `</div>`;
    });

    return html;
}

function getAverageScore(categoryData) {
    let total = 0;
    categoryData.forEach(category => {
       total += category.score;
    });

    return Math.floor(total / categoryData.length);
}

const categories = document.querySelector(".results__summary-categories");
const overviewScore = document.querySelector(".results__overview-score__value");
getCategoriesHtml().then(categoryData => {
    categories.innerHTML = generateHtml(categoryData);
    overviewScore.innerHTML = `${getAverageScore(categoryData)}`;
});