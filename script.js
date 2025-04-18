document.addEventListener('DOMContentLoaded', () => {
    const healthForm = document.getElementById('healthForm');
    
    if (!healthForm) {
        console.error('Error: healthForm not found.');
        return;
    }

    healthForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const condition = document.getElementById('healthProblem')?.value.trim();

        if (!condition) {
            alert('Please enter a health problem.');
            return;
        }

        try {
            console.log('Fetching data.json...');
            const response = await fetch('data.json');

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log('Data loaded:', data);

            if (!data[condition]) {
                throw new Error(`Condition "${condition}" not found in data.json`);
            }

            const conditionData = data[condition];

            document.getElementById('conditionTitle').textContent = condition;
            document.getElementById('conditionDescription').textContent = conditionData.desc;

            populateRecommendations('fruitsList', conditionData.fruits);
            populateRecommendations('veggiesList', conditionData.veggies);
            populateRecommendations('drinksList', conditionData.drinks);

            document.getElementById('result').style.opacity = 1;

        } catch (error) {
            console.error('Error:', error);
            alert('Failed to load recommendations. Please check console for details.');
        }
    });

    function populateRecommendations(containerId, items) {
        const container = document.getElementById(containerId);
        if (!container) return;

        container.innerHTML = '';

        items.forEach(item => {
            const div = document.createElement('div');
            div.className = 'food-item';
            div.innerHTML = `
                <div class="food-icon">${getCategoryIcon(containerId)}</div>
                <div>
                    <h4>${item.name}</h4>
                    <p>${item.benefit}</p>
                </div>
            `;
            container.appendChild(div);
        });
    }

    function getCategoryIcon(containerId) {
        const icons = {
            fruitsList: '🍎',
            veggiesList: '🥦',
            drinksList: '🍵'
        };
        return icons[containerId] || '✨';
    }

    document.querySelector("#logout")?.addEventListener("click", () => {
        window.location.href = 'frontpage.html';
    });

    document.querySelector("#nutri")?.addEventListener("click", () => {
        console.log("Pressed: Nutrition");
        window.location.href = 'nutrition/nutrition.html';
    });

    document.querySelector("#freq")?.addEventListener("click", () => {
        console.log("Pressed: Frequency");
        window.location.href = 'frequency.html';
    });
});
