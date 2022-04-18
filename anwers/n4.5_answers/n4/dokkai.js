let mondai_1, mondai_2, mondai_3, mondai_4, mondai_5, mondai_6

        //  1 2 3 4 5 6 7 8 9 10
mondai_1 = [4,1,3,2,2,3,1,1,4,4, //00
            2,3,1,2,4,3,2,1,4,4, //10
            1,1,2,4,3,1,4,2,1,3, //20
            4,2,2,3,1,1,3,4,1,2, //30
            4,1,3,1,2,4,3,1,1,2, //40
            3,3,1,4,3,2,1,4,2,2, //50
            3,1,3,4]             //60

        //  1 2 3 4
mondai_2 = [1,2,4,2,
            4,3,2,2,
            3,4,3,4,
            2,1,3,1,
            4,3,3,1,
            1,4,1,3,
            3,2,2,3,
            3,1,2,2,
            3,3,1,1,
            3,2,2,3,
            4,3,4,4,
            3,4,3,1,
            1,1,4,2,
            4,4,1,2,
            2,3,1,1,
            3,3,2,4,
            2,2,1,3,
            1,3,1,1,
            3,4,1,1,
            4,3,2,2,
            3,3,1,3
            ]

mondai_3 = [4,1,4,3,1,
            3,2,2,1,
            4,1,3,1,2]

mondai_4 = [2,4,1,2]

mondai_5 = [4,2,2,
            4,2,4,
            4,3,1,
            4,1,4,1]

mondai_6 = [4,2,
            4,2,
            4,2]

let section = {
            name_spanish: 'Comprensión lectora',
            name_kanji: '読解',
            name_hiragana: 'どっかい',
            mondai_numbers: 6,
            mondai_answers: [
                mondai_1,
                mondai_2,
                mondai_3,
                mondai_4,
                mondai_5,
                mondai_6,
              ]
            }

console.log(section)   

module.exports = {section}  