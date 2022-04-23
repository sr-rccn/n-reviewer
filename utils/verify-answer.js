
const verifyAnswer = (section, answers) => {    
    
    let filtered_answers = section.map(
        (correct_answer, key) =>  {
            if(answers[key] !== undefined && answers[key] !== 0){
                return correct_answer === answers[key] ? 'correcta' : 'incorrecta' 
            }else{
                return 'no respondida'
            }
        }
    )

    let corrects = filtered_answers.filter(answer => answer === 'correcta')
    let incorrects = filtered_answers.filter(answer => answer === 'incorrecta')
    let no_response = filtered_answers.filter(answer => answer === 'no respondida')

    
    console.log('Total de preguntas',section.length)
    console.log('Número de respuestas correctas',corrects.length)
    console.log('Número de respuestas incorrectas',incorrects.length)
    console.log('Número de respuestas no respondidas',no_response.length)

    let correct_percentage = parseFloat(corrects.length / section.length).toFixed(2)
    let incorrect_percentage = parseFloat(incorrects.length / section.length).toFixed(2)
    
    console.log('Porcentaje de respuestas correctas',correct_percentage * 100 , '%')
    console.log('Porcentaje de respuestas incorrectas',incorrect_percentage * 100, '%')

    return {
        mondai_numbers: section.length,
        corrects: corrects.length,
        correct_percentage: correct_percentage * 100,
        incorrects: corrects.length,
        filtered_answers: filtered_answers

    }
}


module.exports = {verifyAnswer}