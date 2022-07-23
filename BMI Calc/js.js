// bmi formel          weight / height * height 

function calculateBmi() {
    let weight = document.getElementById('weight').value
    let height = document.getElementById('height').value

    let bmi = (weight / (height * height));

    document.getElementById('heading').innerText = "Dein Body-Mass-Index: ";
    document.getElementById('bmi-output').innerText = bmi.toFixed(1);

    if (bmi <= 18.5) {
        document.getElementById('messageHeading').innerText = "Untergewicht";
        document.getElementById('message').innerText = "Ihr Gewicht ist im Verhältnis zu Ihrer Körpergröße sehr niedrig. Idealerweise sollten Sie etwas zunehmen, um auf lange Sicht gesund und leistungsfähig zu bleiben.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        document.getElementById('messageHeading').innerText = "Normalgewicht";
        document.getElementById('message').innerText = "Der BMI zeigt bei Ihnen ein gesundes Verhältnis von Größe zu Gewicht an. Mit ausgewogener Ernährung und regelmäßiger Bewegung bleibt das auch langfristig so.";
    } else {
        document.getElementById('messageHeading').innerText = "Übergewicht";
        document.getElementById('message').innerText = "25–30 ÜBERGEWICHT Laut Body-Mass-Index sind Sie übergewichtig. Dies erhöht das Risiko von Krankheiten wie z. B. Diabetes.";
    }
}

function reload() {
    window.location.reload();
}