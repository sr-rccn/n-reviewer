
let mondai_1, mondai_2, mondai_3, mondai_4, mondai_5, mondai_6

mondai_1 = [2,1,3,3,1,1,4,4,2]
mondai_2 = [3,1,3,3,2,4]
mondai_3 = [2,3,2,1,3,1,4,2,3,4]
mondai_4 = [4,2,3,1,2]
mondai_5 = [4,1,1,3,2]


let answers_section_1 = [2,1,3,3,1,1,4,4,2,3,1,1,3,3,4,3,4,2,3,3,4,1,2,4,3,4,1,2,1,1,4,4,4,3,1]

console.log(answers_section_1)

let section_1 = [...mondai_1,...mondai_2,...mondai_3,...mondai_4,...mondai_5]

console.log(section_1)

let filtered_answers = section_1.map(
    (correct_answers, key) =>  correct_answers === answers_section_1[key] ? 'correcta' : 'incorrecta' )


console.log('resultados')  

filtered_answers.forEach((answer) =>{
    if(answer === 'correcta'){
        return console.log('\x1b[42m%s\x1b[0m', answer) 
    }else{
        return console.log('\x1b[41m%s\x1b[0m', answer)
    }

})

console.log()

let corrects = filtered_answers.filter(answer => answer === 'correcta')
let incorrects = filtered_answers.filter(answer => answer === 'incorrecta')

console.log('Total de preguntas',answers_section_1.length)
console.log('Número de respuestas correctas',corrects.length)
console.log('Número de respuestas incorrectas',incorrects.length)

let correct_percentage = parseFloat(corrects.length / answers_section_1.length).toFixed(2)
let incorrect_percentage = parseFloat(incorrects.length / answers_section_1.length).toFixed(2)

console.log('Porcentaje de respuestas correctas',correct_percentage , '%')
console.log('Porcentaje de respuestas incorrectas',incorrect_percentage, '%')