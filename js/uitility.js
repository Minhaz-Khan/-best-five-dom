function makeDisable(elementId) {
    const selectedBtn = document.getElementById(elementId);
    const oiPlayersList = document.getElementsByClassName('playerList');
    if (oiPlayersList.length < 5) {
        selectedBtn.setAttribute('disabled', true);
        selectedBtn.classList.add('bg-light')
        selectedBtn.classList.add('text-dark')
    }
    return
}




function getInnerTextById(elementId) {
    const getElement = document.getElementById(elementId);
    const getElementText = getElement.innerText;

    const li = document.createElement('li');
    li.setAttribute('class', 'fs-4 mb-2 ms-3 playerList');
    li.innerText = getElementText;
    const oiPlayersList = document.getElementsByClassName('playerList');
    if (oiPlayersList.length < 5) {
        const selectedPlayerList = document.getElementById('selected-player');
        selectedPlayerList.appendChild(li);
    }
    return;



}

function setValueById(elementId, setValue) {
    const getElementfield = document.getElementById(elementId);
    getElementfield.innerText = setValue;
}


function getTheValueById(elementId) {
    const getValueField = document.getElementById(elementId);
    const getElementValueString = getValueField.value;
    if (isNaN(getElementValueString)) {
        getValueField.value = '';
        getValueField.setAttribute('placeholder', 'Please input a number');
        return;
    }
    else {
        const getElementValue = parseInt(getElementValueString)
        return getElementValue;
    }

}