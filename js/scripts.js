window.addEventListener('keydown', function(e){
  console.log(e.keyCode)

  // Figure out the key code that corresponds to the key that's pressed
  // Find its associated data-key
  // Assign it to constant audio
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  // Stop working if there isn't an audio file associated with the key
  if (!audio){
    return;
  }

  // Play the sound after verifying that it's going to start at the beginning
  audio.currentTime = 0;
  audio.play();
  key.classList.add('activated');

  // Set up a function that will remove the transition when it's called
  function removeTransition(e){
    if(e.propertyName !== 'transform') return; // Only select the transform transitions
    this.classList.remove('activated')
  }

  // Select all of the keys and listen for when the transition ends
  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
});
