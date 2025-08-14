# Guess the Word Game

A fun and interactive word-guessing game built with HTML, CSS, and JavaScript. Similar to Wordle, players have 6 attempts to guess a 6-letter word with visual feedback for each guess.

## 🎮 Game Features

- **6 Attempts**: Players get 6 tries to guess the correct word
- **6-Letter Words**: All words are exactly 6 letters long
- **Visual Feedback**: Color-coded system to indicate correct letters and positions
- **Hint System**: 2 hints available that reveal random letters from the word
- **Keyboard Navigation**: Smooth input navigation with automatic focus management
- **Responsive Design**: Clean and modern UI that works across devices

## 🎯 How to Play

1. **Start the Game**: Open `index.htm` in your web browser
2. **Make a Guess**: Type a 6-letter word using the input fields
3. **Check Your Word**: Click "Check Word" or press Enter
4. **Read the Feedback**:
   - 🟢 **Green**: Letter is correct and in the right position
   - 🟡 **Yellow**: Letter is in the word but in the wrong position
   - ⚫ **Gray**: Letter is not in the word
5. **Use Hints**: Click the hint button to reveal random letters (2 hints available)
6. **Win or Lose**: Guess the word within 6 attempts to win!

## 📁 Project Structure

```
Guess Game/
├── index.htm          # Main HTML file
├── script.js          # Game logic and functionality
├── style.css          # Styling and visual design
└── README.md          # Project documentation
```

## 🎲 Word Pool

The game includes a variety of 6-letter words:
- Create
- Update
- Delete
- Clouds
- Fables
- Flakes
- Stamps
- Folders

## 🚀 Getting Started

1. **Clone or Download** the project files
2. **Open** `index.htm` in any modern web browser
3. **Start Playing** immediately - no installation required!

## 🛠️ Technical Details

### Technologies Used
- **HTML5**: Structure and layout
- **CSS3**: Styling, animations, and responsive design
- **Vanilla JavaScript**: Game logic, DOM manipulation, and event handling

### Key Functions
- `generateInput()`: Creates dynamic input fields for each attempt
- `getHint()`: Provides hint functionality by revealing random letters
- `handelGuesses()`: Main game logic for word validation and feedback
- `handelBackspace()`: Manages keyboard navigation and input handling

### Features Implementation
- **Dynamic DOM Generation**: Input fields are created programmatically
- **Event Listeners**: Handles clicks, keyboard input, and navigation
- **Visual Feedback System**: CSS classes applied based on letter accuracy
- **Game State Management**: Tracks attempts, hints, and win/lose conditions

## 🎨 Design Features

- Clean, minimalist interface
- Color-coded feedback system
- Responsive layout for different screen sizes
- Smooth transitions and hover effects
- Clear visual hierarchy and typography

## 🔧 Customization

You can easily customize the game by modifying:
- **Word List**: Add or remove words in the `words` array in `script.js`
- **Number of Attempts**: Change `numberOfTries` variable
- **Number of Hints**: Modify `numberOfHints` variable
- **Styling**: Update colors and layout in `style.css`

## 📱 Browser Compatibility

This game works on all modern browsers including:
- Chrome
- Firefox
- Safari
- Edge

## 👨‍💻 Author

**Mostafa Atwa** © 2025

## 📄 License

This project is open source and available under the MIT License.

---

**Enjoy playing and happy guessing! 🎉**
