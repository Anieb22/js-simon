function generateRandomNumbers(count, min, max) {
    let randomNumbers = [];
    
    for (let i = 0; i < count; i++) {
      let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      randomNumbers.push(randomNumber);
    }
    
    return randomNumbers;
  }
  
  function showNumbers(numbers) {
    let output = document.getElementById('output');
    output.textContent = numbers.join(' ');
  
    setTimeout(function() {
      output.textContent = '';
    }, 5000);
  }
  
  function playGame() {
    const numbersToRemember = generateRandomNumbers(5, 1, 9);
    showNumbers(numbersToRemember);
  
    setTimeout(function() {
      let userNumbers = [];
  
      for (let i = 0; i < numbersToRemember.length; i++) {
        let userNumber = prompt('Scrivi i numeri che ricordi');
        userNumbers.push(parseInt(userNumber));
      }
  
      let correctNumbers = 0;
      for (let i = 0; i < numbersToRemember.length; i++) {
        if (numbersToRemember[i] === userNumbers[i]) {
          correctNumbers++;
        }
      }
  
      alert('Hai ricordato ' + correctNumbers + ' di ' + numbersToRemember.length + ' numeri!');
    }, 6000);
  }
  
  let playButton = document.getElementById('play');
  playButton.addEventListener('click', playGame);
  