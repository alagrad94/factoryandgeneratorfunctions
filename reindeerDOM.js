const santasReinbow = {
    reindeerDom (coloredReindeer) {

            coloredReindeer.forEach(reindeer => {
            let reindeerName = reindeer.name;
            let reindeerColor = reindeer.color;

            let reindeerArticle = document.getElementById("colored-reindeer");
            let reindeerSection = document.createElement("section");
            reindeerSection.setAttribute("style", `color: ${reindeerColor}`),
            reindeerSection.textContent = reindeerName;

            reindeerArticle.appendChild(reindeerSection);
        })
    }
}