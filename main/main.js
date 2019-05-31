module.exports = function main(inputs) {
    var parkprice = inputs.parkTime*0.25;
	var price = 6;
	if(inputs.distance>2 && inputs.distance<=8)
		price += (inputs.distance-2)*0.8;
	else if(inputs.distance>8){
		price += 6*0.8+(inputs.distance-8)*1.2;
	}
	price += parkprice;
    return Math.round(price);
};
