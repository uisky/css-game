import Controller from './controller';

export default class App {
    controller: Controller;
    
    constructor() {
        this.controller = new Controller();
    }

    start() {
        this.controller.view.render()
        this.controller.setLevel(0);
    }
}