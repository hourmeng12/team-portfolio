function shuffleWord(domName, wordList) {
  let myInterval = setInterval(() => displayName(domName, wordList), 75);
  let i = -1;
  function displayName(domName, wordList) {
    wordList = [1, ...wordList];
    if (i > 0) {
      let letter = wordList[i][domName.innerText.length];
      domName.innerText +=
        letter !== ' '
          ? letter
          : ' ' + wordList[i][domName.innerText.length + 1];
      if (domName.innerText === wordList[i]) {
        i = -i;
        clearInterval(myInterval);
        myInterval = setInterval(
          () => displayName(domName, wordList.slice(1)),
          75
        );
      }
    } else {
      domName.innerText = domName.innerText.slice(0, -1);
      if (domName.innerText.length == 0) {
        i = -i === wordList.length - 1 ? 1 : -i + 1;
        domName.innerText = wordList[i][0];
        clearInterval(myInterval);
        myInterval = setInterval(
          () => displayName(domName, wordList.slice(1, wordList.length)),
          150
        );
      }
    }
  }
}

setTimeout(() => {
  shuffleWord(document.getElementById('hourmeng__job'), [
    'Frontend Developer...',
    'Web Developer...',
    'UI/UX Designer...',
  ]);
}, 500);

setTimeout(() => {
  shuffleWord(document.getElementById('phearom__job'), [
    'Frontend Developer...',
    'Web Developer...',
    'Backend Developer...',
  ]);
}, 1250);

setTimeout(() => {
  shuffleWord(document.getElementById('samnang__job'), [
    'Frontend Developer...',
    'Web Developer...',
    'UI/UX Designer...',
  ]);
}, 2000);
