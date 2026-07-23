# 💜 Premium Interactive Apology Website

A beautiful, mobile-first interactive apology experience with glassmorphism design, smooth animations, and an engaging dialogue flow.

## Features ✨

- **Dreamy Aesthetic**: Dark purple, black, and pink color scheme with glassmorphism effects
- **Mobile-First Design**: Fully responsive and optimized for all devices
- **Interactive Elements**: 
  - Heart charging game with progress tracking
  - Running button that escapes when clicked
  - Floating hearts and sparkles throughout
  - Confetti animations on completion
- **Typewriter Animation**: Beautiful reveal of the final love letter message
- **Cinematic Transitions**: Smooth screen transitions with fade effects
- **Modern Typography**: Using Google Fonts (Poppins, Playfair Display)
- **Accessibility**: Semantic HTML and keyboard-friendly navigation

## Dialogue Flow 📝

1. **Opening Screen**: "Hey, Princess 😙" with music recommendation
2. **Security Check**: Verification with two identical buttons
3. **Heart Game**: Tap to charge the heart from 0-100% with particle effects
4. **Question Screen**: "Who's been overthinking?" with the running button
5. **Final Message**: Typewriter-animated love letter with confetti and floating hearts

## Technical Stack 💻

- **HTML5**: Semantic structure
- **CSS3**: Glassmorphism, gradients, animations, flexbox
- **Vanilla JavaScript**: No dependencies, pure DOM manipulation
- **SVG**: Custom heart graphics with animated progress ring

## Browser Support 🌐

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Files 📁

- `index.html` - Main HTML structure
- `styles.css` - All styling and animations
- `script.js` - JavaScript interactivity
- `README.md` - This file

## Customization 🎨

### Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-pink: #ff006e;
    --primary-purple: #8338ec;
    --dark-bg: #0a0015;
}
```

### Messages
Edit the configuration object in `script.js`:
```javascript
const config = {
    wrongAnswerMessages: [
        "Nice try 😂",
        // Add more messages...
    ]
};
```

### Heart Taps Required
Change `maxHeartTaps` in `script.js` to adjust difficulty:
```javascript
maxHeartTaps: 30, // Increase or decrease
```

## Usage 🚀

Simply open `index.html` in a web browser. No server or build process required!

## License 📄

Created with 💜 for Shirley