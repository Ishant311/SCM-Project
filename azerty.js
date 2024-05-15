count = 0
function add(t){
    const tex = document.querySelector(".textarea-style").innerHTML
    document.querySelector(".textarea-style").innerHTML = tex + t
}
const dot = '"'
const bracket = "("
const CloseBracket = ")"
const upperSign = ````
const slash = '\\'
function type1(word1,word2 = "",word3=""){
    if (count == 0){
        add(word1)
    }
    else if (count == 1){
        add(word2)
        count = 0
    }
    else if (count == 2){
        add(word3)
    }
}