const singlePoint = ['ب', 'ج', 'خ', 'ذ', 'ز', 'ض', 'ظ', 'غ', 'ن', 'ف','i','j','.'];
const twoPoint = ['ت', 'ی', 'ق'];
const threePoint = ['پ','ث','چ','ش'];
const str = document.getElementById("str");
const result = document.getElementById("result");
const changeHandler = (e) => {
    let singlePointCounter = 0;
    let twoPointCounter = 0;
    let threePointCounter = 0;
    const arrOfStr = str.value.split("");
    for (let i = 0; i < arrOfStr.length; i++) {
        singlePoint.map(item => {
            if (arrOfStr[i] === item)
                singlePointCounter++;
        })
        twoPoint.map(item => {
            if (arrOfStr[i] === item)
                twoPointCounter += 2;
        })
        threePoint.map(item => {
            if (arrOfStr[i] === item)
                threePointCounter += 3;
        })

    }
    const splittedWords = str.value.split(" ");
    splittedWords.map(item => {
        if (item.slice(item.lastIndexOf()) === 'ی') {
            twoPointCounter -= 2;
        }
    })
    result.innerHTML = `  تعداد نقطه ها : ${singlePointCounter + twoPointCounter + threePointCounter} `;

}
str.addEventListener("input", changeHandler);
