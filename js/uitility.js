function makeDisable(elementId) {
    const selectedButton = document.getElementById(elementId);
    const oiPlayersList = document.getElementsByClassName('playerList');
    if (oiPlayersList.length < 5) {
        selectedButton.setAttribute('disabled', true);
        selectedButton.classList.add('bg-light')
        selectedButton.classList.add('text-dark')
    }
    return
}




function getInnerTextById(elementId) {
    const getElement = document.getElementById(elementId);
    const getElementText = getElement.innerText;

    const li = document.createElement('li');
    li.setAttribute('class', 'fs-5 mb-3 ms-3 playerList');
    li.innerText = getElementText;
    const selectPlayersList = document.getElementsByClassName('playerList');
    if (selectPlayersList.length < 5) {
        const allSelectedPlayerList = document.getElementById('selected-player');
        allSelectedPlayerList.appendChild(li);
    }
    else {
        alert('Already you selected five player');
        return;
    }




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