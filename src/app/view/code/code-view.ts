import View from "../view";
import { LevelType } from "../../levels";
import './code.css';
import { crel } from "../../util";
import Controller from "../../controller";
import AppModel from "../../model";

const CssClasses = {
    CODE: 'code',
}

export default class CodeView extends View {
    input: HTMLInputElement | null;
    code: HTMLElement | null;

    constructor(controller: Controller, container: HTMLElement, model: AppModel) {
        super(controller, container, model);

        this.input = null;
        this.code = null;        
    }
    
    render() {
        this.container.innerHTML = '';

        const left = crel('div');
        left.append(crel('h2', {html: 'CSS'}));
        this.input = crel('input') as HTMLInputElement;
        this.input.addEventListener('keypress', (e: KeyboardEvent) => {
            if (e.key === 'Enter') {
                this.controller.checkSolution(this.input?.value ?? '');
            }
        });
        left.append(this.input);

        const right = crel('div');
        right.append(crel('h2', {html: 'Source'}));
        this.code = crel('div', {class: 'html-source'});
        right.append(this.code);
        
        this.container.append(left, right);
    }

    setLevel(level: LevelType) {
        this.code!.innerText = level.code;
    }
}
