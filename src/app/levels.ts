interface LevelType {
    name: string;
    code: string;
    question: string;
    correct: string;
}

const LEVELS: Array<LevelType> = [
    {
        name: '1',
        code: '<plate></plate> <bento></bento> <plate></plate>',
        question: 'Select all plates',
        correct: 'plate'
    },
    {
        name: '2',
        code: '<plate class="fancy"><apple></apple></plate> <plate></plate> <plate><apple></apple></plate>',
        question: 'Select apple on the fancy plate',
        correct: 'plate.fancy apple'
    },
    {
        name: '3',
        code: '<bento><orange></orange></bento> <plate></plate> <bento></bento> <orange></orange>',
        question: 'Select an orange in the fucking bento',
        correct: 'bento orange'
    },

];

export {LEVELS, LevelType};