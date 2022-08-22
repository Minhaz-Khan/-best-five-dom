document.getElementById('calculate-btn').addEventListener('click', function () {
    const perPlayerSelary = getTheValueById('player-cost-field');
    const selectPlayersList = document.getElementsByClassName('playerList');
    const PlayerQuantity = selectPlayersList.length;
    const allPlayersSelary = perPlayerSelary * PlayerQuantity;
    if (isNaN(allPlayersSelary)) {
        return;
    }
    else {
        setValueById('all-playerCost-Field', allPlayersSelary)
    }

})

document.getElementById('calculate-total').addEventListener('click', function () {
    const mangerSalaryAmount = getTheValueById('manager-salary');
    const coachSalaryAmount = getTheValueById('coach-salary');
    const getAllPlayersSelary = document.getElementById('all-playerCost-Field');
    const allPlayersSelaryString = getAllPlayersSelary.innerText;
    const allPlayersSelary = parseInt(allPlayersSelaryString);
    const totalAmount = allPlayersSelary + mangerSalaryAmount + coachSalaryAmount;
    if (isNaN(totalAmount)) {
        return;
    }
    setValueById('total-amount', totalAmount);
})