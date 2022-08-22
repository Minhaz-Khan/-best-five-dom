document.getElementById('calculate-btn').addEventListener('click', function () {
    const perPlayerSelary = getTheValueById('player-cost-field');
    const oiPlayersList = document.getElementsByClassName('playerList');
    const PlayerQuantity = oiPlayersList.length;
    const allPlayersSelary = perPlayerSelary * PlayerQuantity;
    if (isNaN(allPlayersSelary)) {
        return;
    }
    else {
        setValueById('all-playerCost-Field', allPlayersSelary)
    }

})

