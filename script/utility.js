// set inner text by using id 
function setInnerTextByID(elementId,textValue){
    document.getElementById(elementId).innerText=textValue;
}
// set button color
function setBtnColor(elementId){
   const element= document.getElementById(elementId).classList.add('btn-color');

}
// get input input field
function getInputFieldText(elementId){
    const element=document.getElementById(elementId);
    const elementText=element.value ;
    return elementText;
}
// get element text
function getText(elementId){
    const element=document.getElementById(elementId);
    const elementInt=parseInt(element);
    return elementInt;
}
// hide element
function hideElementById(elementId){
    const element=document.getElementById(elementId);
    element.classList.add('hidden')
}
// display element
function showElementById(elementId){
    const element=document.getElementById(elementId);
    element.classList.remove('hidden')
}