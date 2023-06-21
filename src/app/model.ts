import { LEVELS, LevelType } from './levels'


/*
 * Модель: все данные приложения.
 * Сейчас хранит:
 * - Массив всех уровней в LEVELS
 * - Текущий номер уровня (по умолчанию — 0) в currentLevelId
 * - Есть геттер currentLevel, который возвращает данные текущего уровня, чтобы не писать каждый раз this.model.LEVELS[this.model.currentLevelId]
 */
export default class AppModel {
    // All levels as an array
    LEVELS: Array<LevelType>;

    // Current level ID
    currentLevelId: number;

    constructor() {
        this.LEVELS = LEVELS;
        this.currentLevelId = 0;
    }

    // Current level data
    get currentLevel() {
        return this.LEVELS[this.currentLevelId]
    }
}
