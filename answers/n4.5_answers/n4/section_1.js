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

let section = {
        name_spanish: 'Conocimiento de la lengua',
        name_kanji: '言語知識',
        name_hiragana: 'げんごちしき',
        mondai_numbers: 5,
        }
            
console.log(section)   

let mondai_1_answers = answerFileReader('./answers/mondai_1_answers.txt')

let mondai_2_answers = answerFileReader('./answers/mondai_2_answers.txt')

let mondai_3_answers = answerFileReader('./answers/mondai_3_answers.txt')

let mondai_4_answers = answerFileReader('./answers/mondai_4_answers.txt')

let mondai_5_answers = answerFileReader('./answers/mondai_5_answers.txt')


const getCorrectPercentaje = (mondai_1, mondai_1_answers) => {
    // console.log([mondai_1, mondai_1_answers])
    return VerifyAnswer.verifyAnswer(mondai_1, mondai_1_answers).correct_percentage
}

const getIncorrectPercentaje = (mondai_1, mondai_1_answers) => {
    return VerifyAnswer.verifyAnswer(mondai_1, mondai_1_answers).correct_percentage
}

console.log(`
    問題: 1 ${getCorrectPercentaje(mondai_1, mondai_1_answers) >= 33 
        ? 
        `Aprobado ${getCorrectPercentaje(mondai_1, mondai_1_answers)}%` 
        :
        `No Aprobado ${getIncorrectPercentaje(mondai_1, mondai_1_answers)}%`}
    問題: 2 ${getCorrectPercentaje(mondai_2, mondai_2_answers) >= 33 
        ? 
        `Aprobado ${getCorrectPercentaje(mondai_2, mondai_2_answers)}%` 
        :
        `No Aprobado ${getIncorrectPercentaje(mondai_2, mondai_2_answers)}%`}
    問題: 3 ${getCorrectPercentaje(mondai_3, mondai_3_answers) >= 33 
        ? 
        `Aprobado ${getCorrectPercentaje(mondai_3, mondai_3_answers)}%` 
        :
        `No Aprobado ${getIncorrectPercentaje(mondai_3, mondai_3_answers)}%`}
    問題: 4 ${getCorrectPercentaje(mondai_4, mondai_4_answers) >= 33 
        ? 
        `Aprobado ${getCorrectPercentaje(mondai_4, mondai_4_answers)}%` 
        :
        `No Aprobado ${getIncorrectPercentaje(mondai_4, mondai_4_answers)}%`}
    問題: 5 ${getCorrectPercentaje(mondai_5, mondai_5_answers) >= 33 
        ? 
        `Aprobado ${getCorrectPercentaje(mondai_5, mondai_5_answers)}%` 
        :
        `No Aprobado ${getIncorrectPercentaje(mondai_5, mondai_5_answers)}%`}
    ${dokkai_data.section.name_kanji}: 6
    ${choukai_data.section.name_kanji}: 7
`)
var answer = prompt('Ingresa tu respuesta: ');
console.log('');

const printResult = (correct_answers, user_answer ) => {
            results = VerifyAnswer.verifyAnswer(correct_answers, user_answer)

            results.filtered_answers.forEach((data, key) => {
            if(data === 'correcta'){
                console.log('\x1b[42m%s\x1b[0m', `N°${key+1}  ${data}`) 
            }

            if(data === 'no respondida' || user_answer[key] === 0){
                console.log('\x1b[40m%s\x1b[0m', `N°${key+1}  ${data}`) 
            }else if (data === 'incorrecta'){
                console.log('\x1b[41m%s\x1b[0m', `N°${key+1}  ${data}  Tu respuesta --> ${user_answer[key]} Respuesta correcta --> ${correct_answers[key]}`) 
            }
        });
}

//revisar

let answers_1, answers_2, answers_3, answers_4, answers_5, answers_6

switch (answer) {

    case '1':
        VerifyAnswer.printInformation(mondai_1,mondai_1_answers)    
        printResult(mondai_1,mondai_1_answers)
        break;

    case '2':
        VerifyAnswer.printInformation(mondai_2,mondai_2_answers)    
        printResult(mondai_2,mondai_2_answers)
        break;

    case '3':
        VerifyAnswer.printInformation(mondai_3,mondai_3_answers)    
        printResult(mondai_3,mondai_3_answers)
        break;

    case '4':
        VerifyAnswer.printInformation(mondai_4,mondai_4_answers)    
        printResult(mondai_4,mondai_4_answers)
        break; 

    case '5':
        VerifyAnswer.printInformation(mondai_5,mondai_5_answers)    
        printResult(mondai_5,mondai_5_answers)

        break;

    case '6':
        console.log(dokkai_data)

        dokkai_data.section.mondai_answers.forEach((answers, key) => {
            let temp_key = key + 1
            let temp_answ = answerFileReader(`./answers/dokkai/mondai_${temp_key}.txt`)
            console.log(`   問題 ${key+1} : ${getCorrectPercentaje(temp_answ, answers) >= 33 
                ? 
                `Aprobado ${getCorrectPercentaje(temp_answ, answers)}%` 
                :
                `No Aprobado ${getCorrectPercentaje(temp_answ, answers)}%`}`)
        })
   
        answers_1 = [] 
        answers_2 = [] 
        answers_3 = [] 
        answers_4 = [] 
        answers_5 = [] 
        answers_6 = [] 

        answer = prompt('Ingresa tu respuesta: ');

        switch (answer) {
            case '1':
                let answers_1 = answerFileReader('./answers/dokkai/mondai_1.txt')
                VerifyAnswer.printInformation(dokkai_data.section.mondai_answers[0] , answers_1)    
                printResult(dokkai_data.section.mondai_answers[0] , answers_1)
                break;
            case '2':
                let answers_2 = answerFileReader('./answers/dokkai/mondai_2.txt')
                VerifyAnswer.printInformation(dokkai_data.section.mondai_answers[1] , answers_2)    

                printResult(dokkai_data.section.mondai_answers[1] , answers_2)
                break;
            case '3':
                let answers_3 = answerFileReader('./answers/dokkai/mondai_3.txt')
                VerifyAnswer.printInformation(dokkai_data.section.mondai_answers[2] , answers_3)    

                printResult(dokkai_data.section.mondai_answers[2] , answers_3)
                break;    
            case '4':
                let answers_4 = answerFileReader('./answers/dokkai/mondai_4.txt')
                VerifyAnswer.printInformation(dokkai_data.section.mondai_answers[3] , answers_4)    

                printResult(dokkai_data.section.mondai_answers[3] , answers_4)
                break;
            case '5':
                let answers_5 = answerFileReader('./answers/dokkai/mondai_5.txt')
                VerifyAnswer.printInformation(dokkai_data.section.mondai_answers[4] , answers_5)    

                printResult(dokkai_data.section.mondai_answers[4] , answers_5)
            break;
            case '6':
                let answers_6 = answerFileReader('./answers/dokkai/mondai_6.txt')
                VerifyAnswer.printInformation(dokkai_data.section.mondai_answers[5] , answers_6)    

                printResult(dokkai_data.section.mondai_answers[5] , answers_6)
            break;
                            
            default:
                break;
        }
        break;


        
    case '7':
        console.log(choukai_data)
        choukai_data.section.mondai_answers.forEach((answers, key) => {
            let temp_key = key + 1
            let temp_answ = answerFileReader(`./answers/choukai/mondai_${temp_key}.txt`)
            console.log(`   問題 ${key+1} : ${getCorrectPercentaje(temp_answ, answers) >= 33 
                ? 
                `Aprobado ${getCorrectPercentaje(temp_answ, answers)}%` 
                :
                `No Aprobado ${getCorrectPercentaje(temp_answ, answers)}%`}`)
        })
        answers_1 = [] 
        answers_2 = [] 
        answers_3 = [] 
        answers_4 = [] 

        answer = prompt('Ingresa tu respuesta: ');

        switch (answer) {
            case '1':
                let answers_1 = answerFileReader('./answers/choukai/mondai_1.txt')
                VerifyAnswer.printInformation(choukai_data.section.mondai_answers[0] , answers_1)    

                printResult(choukai_data.section.mondai_answers[0] , answers_1)
                break;
            case '2':
                let answers_2 = answerFileReader('./answers/choukai/mondai_2.txt')
                VerifyAnswer.printInformation(choukai_data.section.mondai_answers[1] , answers_2)    

                printResult(choukai_data.section.mondai_answers[1] , answers_2)
                break;
            case '3':
                let answers_3 = answerFileReader('./answers/choukai/mondai_3.txt')
                VerifyAnswer.printInformation(choukai_data.section.mondai_answers[2] , answers_3)    

                printResult(choukai_data.section.mondai_answers[2] , answers_3)
            break;    
            case '4':
                let answers_4 = answerFileReader('./answers/choukai/mondai_4.txt')
                VerifyAnswer.printInformation(choukai_data.section.mondai_answers[3] , answers_4)    

                printResult(choukai_data.section.mondai_answers[3] , answers_4)
            break;
                            
            default:
                break;
        }
        break;

    default:
        break;
}