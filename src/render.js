const RenderPosition = {
    BEFOREBEGIN: 'beforebegin',
    AFTERBEGIN: 'afterbegin',
    BEFOREEND: 'beforeend',
    AFTEREND: 'afterend',
  };
  
  
function createElement(template) {
    const newElement = document.createElement('div');
    newElement.innerHTML = template;
  
  
    return newElement.firstElementChild;
  }
  
  
function render(component, container, place = RenderPosition.BEFOREEND) {

  component.forEach(elem => {
    container.insertAdjacentElement(place, elem.getElements());
  }); 
}
  
  
export {RenderPosition, createElement, render};
  