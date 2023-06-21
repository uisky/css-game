import { LevelType, LEVELS } from "./levels";
import AppModel from "./model"
import AppView from "./view/app-view";

/*
 * Контроллер приложения. Содержит:
 * - модель
 * - главную вьюху
 * - функции бизнес-логики. Вьюхи дёргают эти функции в своих обработчиках событий
 */
export default class Controller {
    model: AppModel;
    view: AppView;

    constructor() {
        this.model = new AppModel();
        this.view = new AppView(this, this.model);
    }

    /*
     * Установить текущий номер уровня.
     * Изменяет currentLevelId в модели и просит главную вьюху привести отображение в соответствии с данными нового уровня
     * (обрати внимание: this.view.setLevel принимает аргументом не ID уровня, а данные уровня)
     */
    setLevel(levelId: number) {
        console.log(`Controller.setLevel(${levelId})`);

        this.model.currentLevelId = levelId;
        this.view.setLevel(this.model.currentLevel);
    }

    /*
     * Проверить решение юзера. Решение юзера в параметре `selector`.
     */
    checkSolution(selector: string) {
        console.log(`Controller.checkSolution("${selector}")`);

        // Смотрим, какие элементы выбирает эталонный, правильный селектор (хранится в данных уровня)
        const correct = this.view.playground.table?.querySelectorAll(this.model.currentLevel.correct);

        // Смотрим, что выбирает селектор тупого юзера
        const check = this.view.playground.table?.querySelectorAll(selector);

        // Сравниваем две коллекции DOM-нод: эталонную и юзерскую
        let result = true;
        if (check && correct?.length === check.length) {
            correct?.forEach((v, i) => {
                if (v !== check[i]) result = false;
            });
        } else {
            result = false;
        }
        console.log('Correct: ', correct, 'Queried: ', check, 'Result: ', result);

        if (result) {
            // Ну тут по идее нужно перейти на следующий уровень, если он не последний.
            // Для этого у нас есть this.setLevel
            this.view.playground.highlight(check!, 'good');
        } else {
            // А тут нужно юзеру показать, что он выбрал (это есть в переменной check),
            // и намекнуть, что он мудак залупоглазый
            this.view.playground.highlight(check!, 'bad');
        }
    }
}
