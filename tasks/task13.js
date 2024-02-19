const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 150000
}



function isBudgetEnough(data) {
    let square = 0;
    let volume = 0;

    data.shops.forEach(shop => {
        square += shop.width * shop.length;
    });

    volume += data.height * square;

    if (data.budget - (volume * data.moneyPer1m3) >= 0) {
        console.log('Бюджета достаточно');
    } else {
        console.log('Бюджета недостаточно');
    }
}

// console.log(isBudgetEnough(shoppingMallData));
isBudgetEnough(shoppingMallData);