
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

    let correct_percentage = parseFloat(corrects.length / section.length).toFixed(2)
    let incorrect_percentage = parseFloat(incorrects.length / section.length).toFixed(2)
    let no_response_percentage = parseFloat(no_response.length / section.length).toFixed(2)

    let response_percentage = (parseFloat(correct_percentage) + parseFloat(incorrect_percentage))

    return {
        mondai_numbers: section.length,
        corrects: corrects.length,
        correct_percentage: correct_percentage * 100,
        incorrects: corrects.length,
        filtered_answers: filtered_answers,
        no_response_percentage,
        response_percentage,
    }
}


const printInformation = (section, answers) => {    
    
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

    let correct_percentage = parseFloat(corrects.length / section.length).toFixed(2)
    let incorrect_percentage = parseFloat(incorrects.length / section.length).toFixed(2)
    let no_response_percentage = parseFloat(no_response.length / section.length).toFixed(2)

    let response_percentage = (parseFloat(correct_percentage) + parseFloat(incorrect_percentage))

    
    const printInformation = () => {
        console.log()
        console.log()
        console.log('Total de preguntas',section.length)
        console.log('Número de respuestas correctas',corrects.length)
        console.log('Número de respuestas incorrectas',incorrects.length)
        console.log('Número de respuestas no respondidas',no_response.length)
        console.log()
        console.log()
        console.log('Porcentaje de respuestas respondidas',response_percentage * 100, '%')
        console.log('Porcentaje de respuestas no respondidas',no_response_percentage * 100, '%')
        console.log()
        console.log()
        console.log('Porcentaje de respuestas correctas',correct_percentage * 100 , '%')
        console.log('Porcentaje de respuestas incorrectas',incorrect_percentage * 100, '%')
    }

    printInformation()
}



module.exports = {verifyAnswer, printInformation}