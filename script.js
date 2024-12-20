const story = [
    {
        question: "Haiiiii Sarah!!",
        next: true,
        responses: ["Okiee!!"],
    },
    {
        question: "Happy Birthday Misses Sarah!! 🥳🥳",
        next: true,
    },
    {
        question: "I wanted to make you something and here it is :)",
        next: true,
    },
    {
        question: "How excited are you to see me again? 🙃",
        options: ["Super excited!", "Super excited to hug you!", "Super excited to go get ice cream!"],
        responses: ["Me too! ❤️", "Hehe 😉", "I bet your favorite flavor is Vanilla (I bet I got it right)"],
    },
    {
        question: "This was me on August 29th, I had no clue what Germany was going to bring me.",
        next: true,
        image: "IMG_0209.png"
    },
    {
        question: "I landed at Chicago then took my connecting flight to Munich, Germany.",
        next: true,
        image: "IMG_0223.png"
    },
    {
        question: "There I was, I landed and was in Germany. (I couldn't believe it haha)",
        next: true,
        image: "IMG_0228.png"
    },
    {
        question: "After a sweaty 2 hour train ride, we made it to the hostel.",
        next: true,
        image: false,
    },
    {
        question: "When we first talked during the sports competition lunch break. You recognized my Mario Boo keychain and I was like, Sarah is so cool.",
        next: true,
    },
    {
        question: "I wanted to get to know you more, even if it was just for a week.",
        next: true,
    },
    {
        question: "I love those late night talking until we got told to sleep at the hostel.",
        next: true,
    },
    {
        question: "I love those late night texting sessions we have until I accidentally fall asleep haha.",
        next: true,
    },
    {
        question: "After 3 days, I wanted to give you something special.",
        next: true,
    },
    {
        question: "After 2 short train rides and 15 minutes walking, I walked into the Stuttgart LEGO Store.",
        next: true,
    },
    {
        question: "I bought 2 sets, #40647 and #40460.",
        next: true,
        image: "40460_alt1.png"
    },
    {
        question: "I bought 2 sets, #40647 and #40460.",
        next: true,
        image: "40647_alt3.png"
    },
    {
        question: "Now, 3 months later.",
        next: true,
    },
    {
        question: "I have a question for you... 👉👈",
        next: true,
    },
    {
        question: "I wanna ask...",
        next: true,
    },
    {
        question: "If you want to be my prom date ❤️",
        next: true,
    },
    {
        question: "I would like to fly you out to the US for prom! ✈️❤️",
        next: true,
    },
    {
        question: "I'm being fr haha, but when you have time, I would like to talk with you about making this into a reality.",
        next: true,
    },
    {
        question: "Well enjoy your birthday Sarah. Eat a lot of ice cream for me cutie. 🥰",
        next: true,
    },
    {
        question: "I'll write you later, bye bye.",
        next: true,
    },
    {
        question: "Pssst",
        next: true,
    },
    {
        question: "Love you so much Sarah 🥰🥰",
    },
];

let currentStep = 0;
const preloadedImages = {};

// Preload images
story.forEach(item => {
    if (item.image) {
        const img = new Image();
        img.src = item.image;
        preloadedImages[item.image] = img;
    }
});

function loadQuestion() {
    const current = story[currentStep];
    document.getElementById('question').textContent = current.question;

    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = ""; // Clear previous options

    // Update image if present
// Update image if present
const imageElement = document.getElementById('question-image');
if (current.image) {
    imageElement.src = preloadedImages[current.image].src;
    imageElement.classList.remove('hidden'); // Show the image
} else {
    imageElement.src = ""; // Clear the source
    imageElement.classList.add('hidden'); // Hide the image
}


    if (current.next) {
        // If "next" is true, show the next button only
        document.getElementById('next-button').classList.remove('hidden');
    } else {
        // Display multiple options if available
        current.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.textContent = option;
            button.className = 'option-button';
            button.addEventListener('click', () => handleAnswer(index));
            optionsDiv.appendChild(button);
        });
    }
}

function handleAnswer(index) {
    const current = story[currentStep];
    const responseMessage = current.responses[index];

    document.getElementById('question').textContent = responseMessage;

    // Show "Next" button if there are more questions
    if (currentStep < story.length - 1) {
        document.getElementById('next-button').classList.remove('hidden');
    } else {
        document.getElementById('options').innerHTML = "<h2>Surprise! 🎉 I'm buying you a plane ticket to the US for prom! ✈️</h2>";
    }
}

document.getElementById('next-button').addEventListener('click', () => {
    currentStep++;
    document.getElementById('next-button').classList.add('hidden');
    loadQuestion();
});



// Start the story
loadQuestion();
