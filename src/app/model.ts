import { LEVELS, LevelType } from './levels'

export enum SolvedState {
    MYSELF = 1,
    WITH_HINT = 2
}

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

    solved: Map<string, number>;

    constructor() {
        this.LEVELS = LEVELS;
        this.currentLevelId = 0;
        // Загружаем пройденные уровни из LocalStorage
        const solved = localStorage.rsCssSolved;
        if (solved) {
            this.solved = new Map(Object.entries(JSON.parse(solved)));
        } else {
            this.solved = new Map();
        }
        console.log('Model.solved = ', this.solved);
    }

    save() {
        localStorage.rsCssSolved = JSON.stringify(Object.fromEntries(this.solved));
    }

    clearProgress() {
        this.solved = new Map();
        this.save();
    }

    // Current level data
    get currentLevel() {
        return this.LEVELS[this.currentLevelId]
    }
}
