let draggingElement, startingX, startingY;
let moving = false;

function onMouseMove (event) {
    draggingElement.style.top = `${event.clientY-startingY}px`;
    draggingElement.style.left = `${event.clientX-startingX}px`;

  }


function onMouseUp (event) {
    document.removeEventListener('mousemove', onMouseMove)
  }

function onMouseClick (event) {
    if(event.target.classList.contains('draggable-item')){
        moving = !moving;
        draggingElement = event.target;
        startingX = event.clientX;
        startingY = event.clientY;
        if(moving){
            document.addEventListener('mousemove', onMouseMove) 
        } else {
            document.removeEventListener('mousemove', onMouseMove)
        }
    }
}
 

  
  
document.addEventListener('click', onMouseClick)
//   document.addEventListener('mousemove', onMouseMove)
//   document.addEventListener('mouseup', onMouseUp)


  //extended functionality, maybe make it so positions are saved
//   in a file/ string so that they can be put back in those positions at a later date