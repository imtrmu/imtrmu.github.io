

function video(){
  const videoContainer =  document.querySelector('.work-video');
  const graphicContainer = document.querySelector('.work-graphic');

  const videoButton = document.querySelector('#video-button');
  const graphicButton = document.querySelector('#graphic-button')

  videoContainer.classList.add('work-use');
  graphicContainer.classList.remove('work-use');

  videoContainer.classList.remove('work-remove');
  graphicContainer.classList.add('work-remove')

  videoButton.classList.add('button-selected');
  graphicButton.classList.remove('button-selected');
}

function graphic(){
  const videoContainer =  document.querySelector('.work-video');
  const graphicContainer = document.querySelector('.work-graphic');

  const videoButton = document.querySelector('#video-button');
  const graphicButton = document.querySelector('#graphic-button')
  videoContainer.classList.remove('work-use');
  graphicContainer.classList.add('work-use');

  videoContainer.classList.add('work-remove');
  graphicContainer.classList.remove('work-remove')

  videoButton.classList.remove('button-selected');
  graphicButton.classList.add('button-selected');
}