import Controller from "../../controller";
import { LevelType } from "../../levels";
import AppModel from "../../model";
import { crel } from "../../util";
import View from "../view";

const CssClasses = {
    PLAYGROUND: 'playground',
}

/*
 * Вьюха рабочего поля.
 * Помимо унаследованных из базовой вьюхи View свойств `controller` и `container`,
 * хранит два нужных ей элемента: `question` и `table`, где лежат DOM-ноды для блока с вопросом
 * и сам "стол"
 */
export default class PlaygroundView extends View {
    question: HTMLElement | null;
    table: HTMLElement | null;


    constructor(controller: Controller, container: HTMLElement, model: AppModel) {
        super(controller, container, model);

        this.question = null;
        this.table = null;
    }

    /*
     * Просто создаёт нужные элементы и сохраняет их в свойствах `question` и `table`.
     * Они пустые, получат какой-то контент только после того, как вьюхе сообщат, на каком уровне сейчас 
     * играем (вызова setLevel).
     */
    render() {
        this.container.innerHTML = '';

        this.question = crel('h2');
        this.container.append(this.question);

        this.table = crel('div', {class: 'table'});
        this.container.append(this.table);
    }

    /*
     * Установить текущий уровень. Метод вызывается из главной вьюхи AppView, и после вызова
     * рабочее поле знает, что мы играем на уровне `level`. Делает простую вещь:
     * ставит текст вопроса и рендерит содержимое стола (все эти данные есть в данных уровня level: LevelType)
     */
    setLevel(level: LevelType) {
        this.question!.innerText = level.question;
        this.table!.innerHTML = level.code;

        this.container.querySelectorAll(this.model.currentLevel.correct).forEach(el => {
            console.log(el);
            el.classList.add('must-select');
        });
    }

    highlight(nodes: NodeListOf<Element>, cls: string) {
        nodes.forEach(el => {
            el.classList.add(cls);
        });

        setTimeout(() => {
            nodes.forEach(el => {
                el.classList.remove(cls);
            });
        }, 1000);
    }
}