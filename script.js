const searchInput = document.getElementById("searchInput");
const toolCards = document.querySelectorAll(".tool-card");
const toolCount = document.getElementById("toolCount");
const noResults = document.getElementById("noResults");

function searchTools() {
    const query = searchInput.value.trim().toLowerCase();
    let visibleCount = 0;

    toolCards.forEach((card) => {
        const searchableText = (
            card.innerText + " " +
            card.dataset.search
        ).toLowerCase();

        const matches = searchableText.includes(query);

        card.hidden = !matches;

        if (matches) {
            visibleCount++;
        }
    });

    toolCount.textContent =
        `${visibleCount} ${visibleCount === 1 ? "tool" : "tools"}`;

    noResults.hidden = visibleCount !== 0;
}

searchInput.addEventListener("input", searchTools);

document.getElementById("year").textContent =
    new Date().getFullYear();