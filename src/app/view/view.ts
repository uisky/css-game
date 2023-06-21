import Controller from "../controller";
import AppModel from "../model";

/*
 * Base class for all views
 */
export default class View {
    model: AppModel;
    controller: Controller;
    container: HTMLElement;
    
    constructor(controller: Controller, container: HTMLElement | null, model: AppModel) {
        this.controller = controller;
        this.model = model;

        if(!container) {
            throw new Error('No view container');
        }
        this.container = container;
    }
}
