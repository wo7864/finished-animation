

function createAnimationBox(name, type) {
    const container = document.createElement('div');
    const title = document.createElement('span');
    title.className = 'sub-title'
    title.innerText = `${name}`

    const button = document.createElement('button');
    button.className = `${name} ${type}`;
    button.innerText = `Hover Me!`

    container.appendChild(title);
    container.appendChild(button);

    return {
        container: container,
        button: button,
    }
}


window.onload = () => {

    
    const animation = circleOverlay2({
        target:'.btn-1',
        backgroundColor:'#fff',
        color:'#333',
      });
      hover('.btn-1', animation);
  


}
