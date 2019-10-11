module.exports = function checkBrackets(str, settings){
    let arrSequence = [];
    let objBreck = {};
//   создание объекта с ключом откр скобка значение закр скобка на основе
// settings
    settings.forEach(function (item) {
        objBreck[item[0]] = item[1];
    })
//   -------------------------------------------------------------------------
    let arrOpenBreck = Object.keys(objBreck);
    let arrCloseBreck = Object.values(objBreck);
//   анализ строки
    for (var i = 0; i < str.length; i++) {
        let sym = str[i];
        // отсекаем перебор символов которые не скобочки
        if (arrOpenBreck.indexOf(sym) == -1 && arrCloseBreck.indexOf(sym) == -1) continue;
        //___________________________________________________________________
        // проверяем что данный символ не стоит на первом месте в
        // последовательности, а
        // также  наша форовская i это открытая скобка - добавляем
        //  ее !!!!!!!!!!!!!негатив!!!!!!!!!!!!!! в
        // начало последовательности
        if (arrSequence[0] !== sym && arrOpenBreck.indexOf(sym) !== -1) {
            arrSequence.unshift(objBreck[sym]);
            continue;
        }
        // ранее мы добавили негатив открывающейся скобочки, а тут если
        // форовская ишка равна закрывающейся скобочки(негативу), то нужно
        // ее из последовательности убрать!
        if (arrSequence[0] == sym) {
            arrSequence.shift();
            continue;
        }
        //добавь символ в последовательность
        arrSequence.unshift(sym)
    }
    if (arrSequence.length > 0) return false;
    return true;
}
