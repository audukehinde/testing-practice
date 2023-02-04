function stringLength(myval) {

	if (myval.length > 0 && myval.length <= 10) {

		return myval.length
	}else {
		return `Character is empty or has a character greater than 10`
	}
	
}

module.exports = stringLength;