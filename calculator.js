class Calculator {
	constructor(a, b){
		this.a = a
		this.b = b
	}

	add() {
		return this.a + this.b
	}
	
	substract() {
		return this.a - this.b
	}
	
	multi(a, b) {
		return this.a * this.b
	}
	
	div() {
		return this.a / this.b
	}
}

const calculator = new Calculator

module.exports = Calculator;