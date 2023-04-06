import { HtmlGenerator } from "./modules/HtmlGenerator.js";
import { buttonTemplate } from "./modules/templates.js";
import { prepareFormData } from "./utils.js";

const form = document.querySelector('[data-form]');
form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formElements = [...form.elements];
    const initialButtonSettings = {
        displayParams: [],
        positionParams: [],
        title: '',
        events: [],
    }

    const buttonSettings = prepareFormData(formElements, initialButtonSettings);
    
    const button = new HtmlGenerator(buttonTemplate, buttonSettings);
    button.init();
});
