const frequencies = [
    {
        illness: "Anxiety Relief",
        frequency: "528Hz",
        audioFile: "audio/528.wav"
    },
    {
        illness: "Deep Sleep",
        frequency: "432Hz",
        audioFile: "audio/432.wav"
    },
    {
        illness: "Pain Relief",
        frequency: "174Hz",
        audioFile: "audio/174.wav"
    },
    {
        illness: "Immune Boost",
        frequency: "285Hz",
        audioFile: "audio/285.wav"
    },
    {
        illness: "Depression",
        frequency: "639Hz",
        audioFile: "audio/639.wav"
    },
    {
        illness: "Migraine Relief",
        frequency: "400Hz",
        audioFile: "audio/400.wav"
    },
    {
        illness: "Concentration",
        frequency: "40Hz Gamma",
        audioFile: "audio/300.wav"
    },
    {
        illness: "Stress Relief",
        frequency: "396Hz",
        audioFile: "audio/396.wav"
    },
    {
        illness: "DNA Repair",
        frequency: "528Hz",
        audioFile: "audio/528.wav"
    },
    {
        illness: "Energy Boost",
        frequency: "852Hz",
        audioFile: "audio/852.wav"
    }
];

function createFrequencyCards() {
    const grid = document.getElementById('frequencyGrid');

    frequencies.forEach(item => {
        const card = document.createElement('div');
        card.className = 'frequency-card';
        card.innerHTML = `
            <div class="illness-name">${item.illness}</div>
            <div class="frequency">Frequency: <span>${item.frequency}</span></div>
            <button class="play-button" data-audio="${item.audioFile}">Play ${item.frequency}</button>
        `;
        grid.appendChild(card);
    });
}

// Initialize the frequency cards
createFrequencyCards();

// Add click handlers to play WAV audio
document.querySelectorAll('.play-button').forEach(button => {
    button.addEventListener('click', function () {
        const audioFile = this.dataset.audio;

        if (audioFile) {
            let audio = new Audio(audioFile);
            audio.play();
        } else {
            console.log("No audio file available for this frequency.");
        }
    });
});
