		function numberClick(e){
			const input = document.querySelector('#input');
			let value = this.innerHTML;
			value = input.innerHTML + value ;
			input.innerHTML = value;
			return value;

		}


		function storeA (e){
			// stores the first value and operator type to be used in operate function 
			const input = document.querySelector('#input');
			const storedValue = document.querySelector('#storedValue');
			const storedOperator = document.querySelector('#storedOperator');
			const styleMarker = document.querySelector('#styleMarker');
			styleMarker.style.visibility = "visible";
			storedValue.innerHTML = input.innerHTML;
			storedOperator.innerHTML = this.innerHTML;
			input.innerHTML = " ";

		}

		function operate (a,b){
			// Takes values from the calculator and computes based on operator selected 
			const input = document.querySelector('#input');
			const storedValue = document.querySelector('#storedValue');
			const storedOperator = document.querySelector('#storedOperator');
			const styleMarker = document.querySelector('#styleMarker');
			styleMarker.style.visibility = "hidden";			

			a = Number(storedValue.innerHTML);
			b = Number(input.innerHTML);
			let result;

			if (storedOperator.innerHTML == '+'){
				result = a + b;
			}
			else if (storedOperator.innerHTML == '-'){
				result = a - b;
			}
			else if (storedOperator.innerHTML == '/'){
				result = a / b;
			}						
			else if (storedOperator.innerHTML == '*'){
				result = a * b;
			}
			input.innerHTML = result;
			storedValue.innerHTML = " ";
			storedOperator.innerHTML = " ";

		}

		function clear(e) {
			// clears the input values and operators from the calculator 
			const input = document.querySelector('#input');
			const storedValue = document.querySelector('#storedValue');
			const storedOperator = document.querySelector('#storedOperator');
			const styleMarker = document.querySelector('#styleMarker');
			styleMarker.style.visibility = "hidden";			
			input.innerHTML = " ";
			storedValue.innerHTML = " ";
			storedOperator.innerHTML = " ";
		}




		const numberButtons = document.querySelectorAll('.number');
		numberButtons.forEach(button =>{
			button.addEventListener('click',numberClick)
		});

		const mathButtons = document.querySelectorAll('.math');

		mathButtons.forEach(button =>{
			button.addEventListener('click', storeA)
		});

		const equalButton = document.querySelector('#equal');

		equalButton.addEventListener('click',operate);
		
		const clearButton = document.querySelector('#clear');

		clearButton.addEventListener('click',clear);