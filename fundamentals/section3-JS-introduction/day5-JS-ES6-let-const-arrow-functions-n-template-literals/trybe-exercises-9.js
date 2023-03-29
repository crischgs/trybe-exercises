const powerCar = (status) => {
    if (status === 'off') {
        status = 'on';
    } else {
        status = 'off';
    }
    console.log(`O motor está ${status}`);
    return status;
}