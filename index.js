class Game {
    buttons;
    allowPlayer;
    sequence;
    playerPlaybackPos;
    mistakeSound;
  
    constructor() {
      this.buttons = new Map();
      this.allowPlayer = false;
      this.sequence = [];
      this.playerPlaybackPos = 0;
      this.mistakeSound = loadSound('error.mp3');
  
      document.querySelectorAll('.game-button').forEach((el, i) => {
        if (i < btnDescriptions.length) {
          this.buttons.set(el.id, new Button(btnDescriptions[i], el));
        }
      });
  
      const playerNameEl = document.querySelector('.player-name');
      playerNameEl.textContent = this.getPlayerName();
    }
    getPlayerName() {
        return localStorage.getItem('userName') ?? 'Mystery player';
      }
    
}
  