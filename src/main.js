import {HeaderComponent} from './components/header-component.js';
import {CreateMainWorkzoneComponent} from './components/mainworkzone-component.js'
import {render, RenderPosition} from './render.js';


const bodyContainer = document.querySelector('.board-app');

const mainComponents = [new HeaderComponent(), new CreateMainWorkzoneComponent()]

render(mainComponents, bodyContainer, RenderPosition.BEFOREEND);

function rerender(){
    bodyContainer.replaceChildren();
    var mainComponents = [new HeaderComponent(), new CreateMainWorkzoneComponent()];
    render(mainComponents, bodyContainer, RenderPosition.BEFOREEND);
}

export {rerender}
