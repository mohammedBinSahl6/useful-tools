//get the element for word counter 
const pr = document.querySelector('#pr');
const word = document.querySelector('#word');
const count_btn = document.querySelector('#count');
const result = document.querySelector('.result');


let counter = 0
function count (){
    let non = pr.value.split('')
    for(let j = 0; j<non.length; j++){
        if(non[j]==',' ){
            non[j]=' ';
        };
    };
    let non2 = non.join('');
    console.log('@@@',non2)
    console.log('###',non)
    let spliter = non2.split(' ');
    for(let wrd of spliter){
        if(word.value == wrd){
            counter += 1;
            console.log(wrd)
        };
    };
    result.innerText = `There is : ${counter} from the word ${word.value}\n
    The Paragraph has ${pr.value.length} charecter , ${spliter.length} word`;
    counter = 0;
    console.log(spliter)
    console.log(counter);
    console.log(pr.value)
};
count_btn.addEventListener('click' , count);


//get he elements for word changer
const pr2 = document.querySelector('#pr2');
const original = document.querySelector('#original');
const changer = document.querySelector('#changer');
const change_btn = document.querySelector('#change');

function change(){
    let list = pr2.value.split(' ');
    for (let i = 0; i<list.length; i++ ){
        if(original.value === list[i]){
            list[i] = changer.value;
            console.log(list[i])
        
        };
    };
    let newP = list.join(' ');
    pr2.value = newP;
    console.log(newP)
};

change_btn.addEventListener('click', change)