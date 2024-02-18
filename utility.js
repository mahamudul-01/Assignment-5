// set inner text by using id 
function setInnerTextByID(elementId,textValue){
    document.getElementById(elementId).innerText=textValue;
}
function setBtnColor(elementId){
   const element= document.getElementById(elementId).classList.add('btn-color');

}
function getInputFieldText(elementId){
    const element=document.getElementById(elementId);
    const elementText=element.value ;
    return elementText;
}
function getText(elementId){
    const element=document.getElementById(elementId);
    const elementInt=parseInt(element);
    return elementInt;
}
function hideElementById(elementId){
    const element=document.getElementById(elementId);
    element.classList.add('hidden')
}