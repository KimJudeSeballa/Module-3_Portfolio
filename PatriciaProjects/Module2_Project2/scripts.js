let maintenance;

const form = document.getElementById('form');

form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
    event.preventDefault();

    const gender = getSelectedValue('gender');
    const age = getInputNumberValue('age');
    const weight = getInputNumberValue('weight');
    const height = getInputNumberValue('height');  
    const activityLevel = getSelectedValue('activity_level');

    const tmb = Math.round(
        gender === 'female'
        ? (10 * weight) + (6.25 * height) - (5 * age) + 5
        :  (10 * weight) + (6.25 * height) - (5 * age) + 5
    );
    maintenance = Math.round(tmb * Number(activityLevel));
    cal += maintenance;
    localStorage.setItem("main", maintenance);

    const layout = `
        <h2>Result:</h2>
        <div class="result-content">
        <ul>
            <li>
            Your basal metabolism <strong>${tmb} calories</strong>.
            </li>
            <li>
            To maintain your weight you need to consume on average <strong>${maintenance} calories</strong>.
            </li>
            <br>
            <button class="goto" onclick="location.href='food.html';">Go to Food Tracker</button> 
        </ul>
        </div>
    `;

    const result = document.getElementById('result');

    result.innerHTML = layout;
}

function getSelectedValue(id) {
    const select = document.getElementById(id);
    return select.options[select.selectedIndex].value;
}

function getInputNumberValue(id) {
    return Number(document.getElementById(id).value);
}