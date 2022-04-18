var prompt = require('prompt-sync')();
var choukai_data = require("./choukai");
var dokkai_data = require("./dokkai");
var VerifyAnswer = require("../../../utils/verify-answer");
var {answerFileReader} = require("../../../utils/FileSystem");


let mondai_1, mondai_2, mondai_3, mondai_4, mondai_5

        //  1 2 3 4 5 6 7 8 9 10
mondai_1 = [2,3,3,1,4,3,2,2,2,1, //00
            1,2,1,2,4,3,2,4,1,3, //10
            1,4,3,2,2,3,4,2,2,4, //20
            3,2,1,1,2,4,1,3,3,3, //30
            2,4,2,2,4,4,1,4,1,3, //40
            2,2,3,4,2,2,4,1,3,3, //50
            2,2,3,3,1,3,1,2,3,4, //60
            4,1,2,4,2,1,3,2,3,3, //70
            1,4,4,3,1,3          //80
            ]

        //  1 2 3 4 5 6 7 8 9 10
mondai_2 = [2,1,3,4,4,3,1,2,2,1, //00
            3,3,4,3,1,2,4,3,1,1, //10
            2,3,3,2,1,4,4,2,2,1, //20
            4,4,3,3,2,1,1,2,4,3, //30
            4,2,2,1,3,3,2,1,1,4, //40
            3,4,2,3,1,2,3,4,3,4, //50
            2,2,1,3,2            //60
            ] 

        //  1 2 3 4 5 6 7 8 9 10
mondai_3 = [4,1,2,1,1,1,2,2,2,3, //00
            2,1,3,4,2,1,2,2,1,1, //10
            2,1,3,3,2,3,4,2,1,1, //20
            1,3,2,1,1,2,2,2,4,2, //30
            2,2,4,3,3,3,1,2,2,4, //40
            3,4,2,3,1,2,3,4,3,4, //50
            3,4,2,3,1,2,3,4,3,4, //60
            ]

        //  1 2 3 4 5 6 7 8 9 10
mondai_4 = [2,4,1,3,4,2,1,2,3,1, //00
            3,2,4,3,4,4,3,2,1,4, //10
            3,3,2,3,1,4,2,2,1,3, //20
            2,2,1,1,4,4,1,4,4,4, //40
            4,3,2,1              //50
            ]

        //  1 2 3 4 5 6 7 8 9 10
mondai_5 = [4,1,3,2,2,3,1,1,4,4,
            1,3,3,1,2,4,3,4,1,3,
            2,2,4,1,1,3]

let mondai_1_answers = answerFileReader('./answers/mondai_1_answers.txt')

let mondai_2_answers = answerFileReader('./answers/mondai_2_answers.txt')

let mondai_3_answers = answerFileReader('./answers/mondai_3_answers.txt')

let mondai_4_answers = answerFileReader('./answers/mondai_4_answers.txt')

let mondai_5_answers = answerFileReader('./answers/mondai_5_answers.txt')

console.log('mondai_1_answers', mondai_1_answers)

console.log(`
    問題: 1 ${VerifyAnswer.verifyAnswer(mondai_1, mondai_1_answers).correct_percentage >= 80 ? `Aprobado` : ''}
    問題: 2 ${VerifyAnswer.verifyAnswer(mondai_1, mondai_1_answers).correct_percentage >= 80 ? `Aprobado` : ''}
    問題: 3
    問題: 4
    問題: 5 ${VerifyAnswer.verifyAnswer(mondai_5, mondai_5_answers).correct_percentage >= 80 ? 'Aprobado' : ''}
    ${choukai_data.section.name_kanji}: 6
    ${dokkai_data.section.name_kanji}: 7
`)
var answer = prompt('Ingresa tu respuesta: ');
console.log('');

let result

const printResult = (answers) => {
            answers.forEach(data => {
            if(data === 'correcta'){
                console.log('\x1b[42m%s\x1b[0m', data) 
            }
            if(data === 'incorrecta'){
                console.log('\x1b[41m%s\x1b[0m', data) 
            }
            if(data === 'no respondida'){
                console.log('\x1b[40m%s\x1b[0m', data) 
            }
        });
}

switch (answer) {

    case '1':
        result = VerifyAnswer.verifyAnswer(mondai_1,mondai_1_answers)
        printResult(result.filtered_answers)

        break;

    case '2':
        result = VerifyAnswer.verifyAnswer(mondai_2,mondai_2_answers)
        printResult(result.filtered_answers)

        break;

    case '3':
        result = VerifyAnswer.verifyAnswer(mondai_3,mondai_3_answers)
        printResult(result.filtered_answers)

        break;

    case '4':
        result = VerifyAnswer.verifyAnswer(mondai_4,mondai_4_answers)
        printResult(result.filtered_answers)

        break; 

    case '5':
        result = VerifyAnswer.verifyAnswer(mondai_5,mondai_5_answers)
        printResult(result.filtered_answers)

        break;

    case '6':
        console.log(choukai_data)
        choukai_data.section.mondai_answers.forEach((answers, key) => {
            console.log(`   問題 ${key+1}`)
        })

        let answers_1, answers_2, answers_3, answers_4
        answers_1 = [] 
        answers_2 = [] 
        answers_3 = [] 
        answers_4 = [] 

        answer = prompt('Ingresa tu respuesta: ');

        switch (answer) {
            case '1':
                result = VerifyAnswer.verifyAnswer(choukai_data.section.mondai_answers[answer] , answers_1 )
                printResult(result.filtered_answers)
                break;
            case '2':
                result = VerifyAnswer.verifyAnswer(choukai_data.section.mondai_answers[answer] , answers_2 )
                printResult(result.filtered_answers)
                break;
            case '3':
                result = VerifyAnswer.verifyAnswer(choukai_data.section.mondai_answers[answer] , answers_3 )
                printResult(result.filtered_answers)
            break;    
            case '4':
                result = VerifyAnswer.verifyAnswer(choukai_data.section.mondai_answers[answer] , answers_4 )
                printResult(result.filtered_answers)
            break;
                            
            default:
                break;
        }
        break;
        
    case '7':
        console.log(dokkai_data)

        break;

    default:
        break;
}