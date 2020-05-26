module.exports = function parseStringAsArray(arrayAsString){
    //Map percorre o array e retira os espaçamentos com o trim
    return arrayAsString.split(',').map(tech => tech.trim());

}