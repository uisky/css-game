import View from "./view";
import HeaderView from "./header/header-view"
import LevelsView from "./levels/levels-view";
import PlaygroundView from "./playground/playground-view";
import CodeView from "./code/code-view";
import FooterView from "./footer/footer-view";
import Controller from "../controller";
import { LevelType } from "../levels";
import { crel } from '../util';
import AppModel from "../model";

/*
 * Главная вьюха. Отвечает за всё отображение интерфейса. Рисует в конструкторе layout и создаёт дочерние
 * вьюхи. См. также общего предка, класс View.
 */
export default class AppView extends View {
    header: HeaderView
    levels: LevelsView
    playground: PlaygroundView
    code: CodeView
    footer: FooterView

    constructor(controller: Controller, model: AppModel) {
        super(controller, document.body, model);

        const leftCol = crel('div', {class: 'left-col'});
        
        const header = crel('div', {class: 'header', html: '<h1>rs-css</h1>'});
        const playground = crel('div', {class: 'playground'});
        const code = crel('div', {class: 'code'});
        const footer = crel('div', {class: 'footer', html: '<p>made in Bishkek with love to beshbarmak</p>'});
        leftCol.append(header, playground, code, footer);

        const rightCol = crel('div', {class: 'right-col'});
        const levels = crel('div', {class: 'levels'});
        rightCol.append(levels);

        document.body.append(leftCol, rightCol);

        this.header = new HeaderView(this.controller, header, model);
        this.levels = new LevelsView(this.controller, levels, model);
        this.playground = new PlaygroundView(this.controller, playground, model);
        this.code = new CodeView(this.controller, code, model);
        this.footer = new FooterView(this.controller, footer, model);
    }
 
    /*
     * Отрендериться. Просто просит отреднериться все дочерние вьюхи.
     */
    render() {
        this.header.render();
        this.levels.render();
        this.playground.render();
        this.code.render();
        this.footer.render();
    }

    /*
     * Сменить текущий уровень.
     * И главная вьюха (и, вынужденно, все дочерние), работают только с данными одного уровня. Ни про какой LEVELS они не знают,
     * получают только экземпляр типа LevelType и всё.
     * Функция просто сообщает данные нового уровня дочерним вьюхам (которых вообще этот уровень в принципе касается).
     */
    setLevel(level: LevelType) {
        this.playground.setLevel(level);
        this.code.setLevel(level);
    }
}