const config = {
    heartTaps: 0,
    maxHeartTaps: 30,
    currentScreen: 1,
    wrongAnswerMessages: [
        "Nice try 😂",
        "Still wrong.",
        "Shirley... really? 😭",
        "Nope 😌",
        "Come on Princess 😅",
        "That's not it 🤔"
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    initializeStars();
    initializeFloatingHearts();
    setupEventListeners();
});

function initializeStars() {
    const container = document.getElementById('starsContainer');
    const starCount = window.innerWidth > 768 ? 100 : 50;
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

function initializeFloatingHearts() {
    const container = document.getElementById('openingHearts');
    const heartCount = 8;
    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '💜';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 6 + 's';
        heart.style.animationDuration = (Math.random() * 4 + 6) + 's';
        container.appendChild(heart);
    }
}

function setupEventListeners() {
    document.getElementById('beginBtn').addEventListener('click', () => transitionToScreen(2));
    document.querySelectorAll('#screen2 .btn-secondary').forEach(btn => {
        btn.addEventListener('click', () => {
            showMessage('Welcome, Princess 💜', 1.5);
            setTimeout(() => transitionToScreen(3), 1500);
        });
    });
    document.getElementById('heartContainer').addEventListener('click', tapHeart);
    document.getElementById('wrongBtn').addEventListener('click', function() {
        playWrongAnswerAnimation(this);
    });
    document.getElementById('correctBtn').addEventListener('click', () => {
        showMessage('Good girl 😏', 1.5);
        setTimeout(() => transitionToScreen(5), 1500);
    });
}

function transitionToScreen(screenNumber) {
    document.querySelectorAll('.screen').forEach(screen => screen.classList.add('hidden'));
    const targetScreen = document.getElementById(`screen${screenNumber}`);
    targetScreen.classList.remove('hidden');
    
    if (screenNumber === 5) {
        setTimeout(() => {
            startTypewriterAnimation();
            createConfetti();
            createFinalHearts();
        }, 300);
    }
    config.currentScreen = screenNumber;
}

function tapHeart() {
    config.heartTaps++;
    const percentage = (config.heartTaps / config.maxHeartTaps) * 100;
    updateHeartProgress(percentage);
    createHeartParticles();
    if (config.heartTaps >= config.maxHeartTaps) completeHeartGame();
}

function updateHeartProgress(percentage) {
    const progressRing = document.querySelector('.progress-ring-fill');
    const circumference = 2 * Math.PI * 45;
    const offset = circumference - (percentage / 100) * circumference;
    progressRing.style.strokeDashoffset = offset;
    document.getElementById('progressText').textContent = Math.min(100, Math.round(percentage)) + '%';
}

function createHeartParticles() {
    const container = document.getElementById('particlesContainer');
    const heartContainer = document.getElementById('heartContainer');
    const rect = heartContainer.getBoundingClientRect();
    const particleCount = 5;
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.innerHTML = '💖';
        const angle = (i / particleCount) * Math.PI * 2;
        const tx = Math.cos(angle) * 80;
        particle.style.left = rect.left + rect.width / 2 + 'px';
        particle.style.top = rect.top + rect.height / 2 + 'px';
        particle.style.setProperty('--tx', tx + 'px');
        particle.style.fontSize = (0.8 + Math.random() * 0.6) + 'rem';
        container.appendChild(particle);
        setTimeout(() => particle.remove(), 1000);
    }
}

function completeHeartGame() {
    document.getElementById('heartContainer').style.pointerEvents = 'none';
    showMessage('Okay... you proved me wrong 😂', 2);
    createConfetti();
    setTimeout(() => {
        transitionToScreen(4);
        config.heartTaps = 0;
        document.getElementById('heartContainer').style.pointerEvents = 'auto';
    }, 2000);
}

function playWrongAnswerAnimation(button) {
    if (button.classList.contains('running')) return;
    button.classList.add('running');
    const randomMessage = config.wrongAnswerMessages[Math.floor(Math.random() * config.wrongAnswerMessages.length)];
    showMessage(randomMessage, 1.2);
    setTimeout(() => {
        button.classList.remove('running');
        button.style.transform = '';
    }, 600);
}

function showMessage(text, duration) {
    const messageEl = document.getElementById('floatingMessage');
    messageEl.textContent = text;
    messageEl.classList.remove('hidden', 'hide');
    setTimeout(() => {
        messageEl.classList.add('hide');
        setTimeout(() => messageEl.classList.add('hidden'), 400);
    }, duration * 1000);
}

function createConfetti() {
    const container = document.getElementById('confettiContainer') || document.getElementById('particlesContainer');
    const confettiCount = 50;
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        const colors = ['💖', '✨', '💜', '🎉', '💕'];
        confetti.innerHTML = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-20px';
        confetti.style.fontSize = (0.8 + Math.random() * 1) + 'rem';
        confetti.style.animationDelay = Math.random() * 0.5 + 's';
        container.appendChild(confetti);
        setTimeout(() => confetti.remove(), 3500);
    }
}

function createFinalHearts() {
    const container = document.getElementById('finalHearts');
    const heartCount = 15;
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

function startTypewriterAnimation() {
    const content = document.getElementById('typewriterContent');
    const message = `
        <p><span class="emphasis">A goddess of a woman,</span></p>
        <p><span class="emphasis">beauty beyond discovery,</span></p>
        <p><span class="emphasis">my toxic talking stage Shirley 😭😂</span></p>
        <p style="margin-top: 2.5rem;">I'm sorry.</p>
        <p>I know I mess up a lot with my replies but truth is I really crave for deep conversations with you 😭</p>
        <p>I think I like you and you're becoming an obsession and I'm not even playing Shirley 🥲</p>
        <p>And if this little surprise managed to steal even one smile from you...</p>
        <p>I'll quietly count that as my biggest win😌</p>
        <p style="margin-bottom: 1.5rem;">Thank you for reading</p>
        <p class="signature">Kisses Princess😙🫶🏾</p>
    `;
    content.innerHTML = message;
    const paragraphs = content.querySelectorAll('p');
    let delay = 0;
    paragraphs.forEach(p => {
        p.style.animation = `fadeIn 0.8s ease ${delay}ms forwards`;
        delay += 400;
    });
}

const style = document.createElement('style');
style.innerHTML = `@keyframes fadeIn { 0% { opacity: 0; } 100% { opacity: 1; } }`;
document.head.appendChild(style);