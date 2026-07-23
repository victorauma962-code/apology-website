const dateConfig = {
    selectedDate: null,
    selectedTime: null,
    selectedSnacks: null,
    currentScreen: 1
};

const dates = [
    { date: '31', month: 'July', fullDate: 'Sunday, July 31st' },
    { date: '1', month: 'August', fullDate: 'Friday, August 1st' },
    { date: '2', month: 'August', fullDate: 'Saturday, August 2nd' },
    { date: '3', month: 'August', fullDate: 'Sunday, August 3rd' },
    { date: '4', month: 'August', fullDate: 'Monday, August 4th' },
    { date: '5', month: 'August', fullDate: 'Tuesday, August 5th' }
];

document.addEventListener('DOMContentLoaded', () => {
    initializeStars();
    initializeFloatingElements();
    setupEventListeners();
});

function initializeStars() {
    const container = document.getElementById('starsContainer');
    const starCount = window.innerWidth > 768 ? 120 : 60;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        star.style.animationDuration = (Math.random() * 2 + 2) + 's';
        container.appendChild(star);
    }
}

function initializeFloatingElements() {
    const container = document.getElementById('floatingElements');
    const elements = ['🎬', '🍿', '💜', '✨', '🎭', '🎪'];
    const elementCount = 8;
    
    for (let i = 0; i < elementCount; i++) {
        const el = document.createElement('div');
        el.className = 'floating-element';
        el.innerHTML = elements[Math.floor(Math.random() * elements.length)];
        el.style.left = Math.random() * 100 + '%';
        el.style.top = Math.random() * 100 + '%';
        el.style.animationDelay = Math.random() * 8 + 's';
        el.style.animationDuration = (Math.random() * 4 + 8) + 's';
        container.appendChild(el);
    }
}

function setupEventListeners() {
    document.getElementById('yesBtn').addEventListener('click', () => {
        transitionToScreen(2);
    });
    
    document.querySelectorAll('.date-option').forEach(option => {
        option.addEventListener('click', () => selectDate(option));
    });
    
    document.querySelectorAll('.time-option').forEach(option => {
        option.addEventListener('click', () => selectTime(option));
    });
    
    document.querySelectorAll('.snack-option').forEach(option => {
        option.addEventListener('click', () => selectSnack(option));
    });
}

function transitionToScreen(screenNumber) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.add('hidden');
    });
    
    const targetScreen = document.getElementById(`screen${screenNumber}`);
    targetScreen.classList.remove('hidden');
    
    if (screenNumber === 5) {
        setTimeout(() => {
            showConfirmation();
            createConfetti();
            createFinalHearts();
        }, 300);
    }
    
    dateConfig.currentScreen = screenNumber;
}

function selectDate(element) {
    document.querySelectorAll('.date-option').forEach(el => {
        el.classList.remove('selected');
    });
    
    element.classList.add('selected');
    const date = element.getAttribute('data-date');
    const month = element.getAttribute('data-month');
    
    dateConfig.selectedDate = `${month} ${date}${getDateSuffix(date)}`;
    
    document.getElementById('dateText').textContent = dateConfig.selectedDate;
    document.getElementById('selectedDateDisplay').classList.remove('hidden');
    
    createConfetti();
    
    setTimeout(() => {
        transitionToScreen(3);
    }, 800);
}

function selectTime(element) {
    document.querySelectorAll('.time-option').forEach(el => {
        el.classList.remove('selected');
    });
    
    element.classList.add('selected');
    dateConfig.selectedTime = element.getAttribute('data-time');
    
    createConfetti();
    
    setTimeout(() => {
        transitionToScreen(4);
    }, 800);
}

function selectSnack(element) {
    document.querySelectorAll('.snack-option').forEach(el => {
        el.classList.remove('selected');
    });
    
    element.classList.add('selected');
    dateConfig.selectedSnacks = element.getAttribute('data-snack');
    
    createConfetti();
    
    setTimeout(() => {
        transitionToScreen(5);
    }, 800);
}

function showConfirmation() {
    document.getElementById('confirmDate').textContent = dateConfig.selectedDate + ' 🎫';
    document.getElementById('confirmTime').textContent = dateConfig.selectedTime + ' ⏰';
    document.getElementById('confirmSnacks').textContent = dateConfig.selectedSnacks + ' 🎉';
}

function createConfetti() {
    const confettiCount = 30;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        
        const colors = ['💖', '✨', '💜', '🎉', '💕', '🍿', '🎬'];
        const emoji = colors[Math.floor(Math.random() * colors.length)];
        confetti.innerHTML = emoji;
        
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-20px';
        confetti.style.fontSize = (0.8 + Math.random() * 1) + 'rem';
        confetti.style.animationDelay = Math.random() * 0.5 + 's';
        
        document.body.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 3500);
    }
}

function createFinalHearts() {
    const container = document.getElementById('finalHearts');
    const heartCount = 20;
    
    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '💜';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 2 + 's';
        heart.style.animationDuration = (Math.random() * 3 + 5) + 's';
        container.appendChild(heart);
    }
}

function getDateSuffix(date) {
    const d = parseInt(date);
    if (d === 1 || d === 21 || d === 31) return 'st';
    if (d === 2 || d === 22) return 'nd';
    if (d === 3 || d === 23) return 'rd';
    return 'th';
}

const style = document.createElement('style');
style.innerHTML = `
    @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }
`;
document.head.appendChild(style);