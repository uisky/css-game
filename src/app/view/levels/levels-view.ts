import {LEVELS, LevelType} from "../../levels";
import View from "../view";
import { crel } from "../../util"

const CssClasses = {
    LEVELS: 'levels',
}

export default class LevelsView extends View {
    render() {
        this.container.innerHTML = '';
        
        this.container.append(crel('h2', {html: 'Choose level of pain'}));

        const ul = document.createElement('ul');
        LEVELS.forEach((v, idx) => {
            const li = crel('li', {html: '<span>' + v.name + '</span>'});

            li.addEventListener('click', this.click.bind(this, idx));

            ul.append(li);
        });
        this.container.append(ul);

        const resetBtn = crel('button', {html:'Reset'});
        resetBtn.onclick = () => {
            this.controller.resetProgress();
        }
        this.container.append(resetBtn);
    }

    click(level: number) {
        this.controller.setLevel(level);
    }
}
