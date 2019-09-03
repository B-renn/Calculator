		function numberClick(e){
			//Event listener for number clicks on calculator. Will display clicks in the input field. 
			if (e.clientX != 0){
				const input = document.querySelector('#input');
				let value = this.innerHTML;
				value = input.innerHTML + value ;
				input.innerHTML = value;
				let inputString = input.innerHTML.toString();
				let decimalCounter = 0;

				for (var i = 0; i < inputString.length; i++) {
					if (inputString[i] == '.'){
						decimalCounter ++;
					}
					if (decimalCounter > 1){
						alert('Cannot have more than one decimal point in a number')
						input.innerHTML = " ";
						break;
					}
				}
			}	
		}

		function numberKeydown(e) {
			//Handles all keyboard functionality. Use numpad to be safe - Bugs still need worked out.
			let keyDownCode = e.keyCode;
			let keyDownKey = e.key;
			const storedValue = document.querySelector('#storedValue');
			const storedOperator = document.querySelector('#storedOperator');
			const numberButtons = document.querySelectorAll('.number');
			const operatorButtons = document.querySelectorAll('.math');
			const input = document.querySelector('#input');
			const equalButton = document.querySelector('#equal');
			const clearButton = document.querySelector('#clear');
			const backButton = document.querySelector('#back');
			for (var i = 0; i < numberButtons.length; i++) {
				if ((keyDownCode == numberButtons[i].dataset.numpad) || (keyDownCode == numberButtons[i].dataset.key)){					keyDownKey = input.innerHTML + keyDownKey;
					input.innerHTML = keyDownKey;
				}
			}

			let inputString = input.innerHTML.toString();
			let decimalCounter = 0;

			for (var i = 0; i < inputString.length; i++) {
				if (inputString[i] == '.'){
					decimalCounter ++;
				}
				if (decimalCounter > 1){
					alert('Cannot have more than one decimal point in a number')
					input.innerHTML = " ";
					break;
				}
			}

			for (var i = 0; i < operatorButtons.length; i++) {
				if (keyDownCode == operatorButtons[i].dataset.numpad){
					storedValue.innerHTML = input.innerHTML;
					storedOperator.innerHTML = keyDownKey;
					styleMarker.style.visibility = "visible";
					input.innerHTML = " ";
					if (storedValue.innerHTML == " "){
						storedValue.innerHTML = 0;
					}

				}
				
			}

			if (keyDownCode == equalButton.dataset.key){
				let a = Number(storedValue.innerHTML);
				let b = Number(input.innerHTML);
				let result;	
				if (storedOperator.innerHTML == ' '){
					alert('No operator chosen');
					result = " ";
				}	
				else{
					if (storedOperator.innerHTML == '+'){
						result = a + b;

					}
					else if (storedOperator.innerHTML == '-'){
						result = a - b;
					}
					else if (storedOperator.innerHTML == '/'){
						if (b == 0){
							alert('Cannot divide by Zero')
							result = " ";
						}
						else if (b!=0){
							result = a / b;
						}					
					}						
					else if (storedOperator.innerHTML == '*'){
						result = a * b;
					}
					input.innerHTML = result;
					storedValue.innerHTML = " ";
					storedOperator.innerHTML = " ";	
					styleMarker.style.visibility = "hidden";
				}
			}

			if(keyDownCode == clearButton.dataset.key){
				styleMarker.style.visibility = "hidden";			
				input.innerHTML = " ";
				storedValue.innerHTML = " ";
				storedOperator.innerHTML = " ";				
			}

			if(keyDownCode == backButton.dataset.key){
				let inputString = input.innerHTML.toString();
				for (var i = 0; i < inputString.length; i++) {
					let newInputString = inputString.slice(0,-1);
					input.innerHTML = Number(newInputString);
				}

			}
		}


		function storeA (e){
			if (e.clientX != 0){
				// Event listener for operator buttons. Stores the first value and operator type to be used in operate function 
				const input = document.querySelector('#input');
				const storedValue = document.querySelector('#storedValue');
				const storedOperator = document.querySelector('#storedOperator');
				const styleMarker = document.querySelector('#styleMarker');
				styleMarker.style.visibility = "visible";
				storedValue.innerHTML = input.innerHTML;
				storedOperator.innerHTML = this.innerHTML;
				input.innerHTML = " ";

				if (storedValue.innerHTML == " "){
					storedValue.innerHTML = 0;
				}
			}

		}

		function operate (a,b){
			// Event listener for equals button. Takes values from the calculator and computes based on operator selected 
			const input = document.querySelector('#input');
			const storedValue = document.querySelector('#storedValue');
			const storedOperator = document.querySelector('#storedOperator');
			const styleMarker = document.querySelector('#styleMarker');
			styleMarker.style.visibility = "hidden";			

			a = Number(storedValue.innerHTML);
			b = Number(input.innerHTML);
			let result; 
			if (storedOperator.innerHTML == ' '){
				alert('No operator chosen');
				input.innerHTML = " ";
			}

			else{
				if (storedOperator.innerHTML == '+'){
					result = a + b;
				}
				else if (storedOperator.innerHTML == '-'){
					result = a - b;
				}
				else if (storedOperator.innerHTML == '/'){
					if (b == 0){
						alert('Cannot divide by Zero')
						result = " ";
					}
					else if (b!=0){
						result = a / b;
					}
				}						
				else if (storedOperator.innerHTML == '*'){
					result = a * b;
				}
				input.innerHTML = result;
				storedValue.innerHTML = " ";
				storedOperator.innerHTML = " ";
			}	
		}

		function clear(e) {
			if (e.clientX != 0){
				// Event listener for C button. clears the input values and operators from the calculator 
				const input = document.querySelector('#input');
				const storedValue = document.querySelector('#storedValue');
				const storedOperator = document.querySelector('#storedOperator');
				const styleMarker = document.querySelector('#styleMarker');
				styleMarker.style.visibility = "hidden";			
				input.innerHTML = " ";
				storedValue.innerHTML = " ";
				storedOperator.innerHTML = " ";
			}	
		}

		function back(e){
			// Event listener for Back button. Will delete the last number in the input field.
			if (e.clientX != 0){
				const input = document.querySelector('#input');
				let inputString = input.innerHTML.toString();
				for (var i = 0; i < inputString.length; i++) {
					let newInputString = inputString.slice(0,-1);
					input.innerHTML = Number(newInputString);
				}
			}

		}
		
		//Setting up eventlisteners for button clicks and keydown events
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

		const backButton = document.querySelector('#back');
		backButton.addEventListener('click',back);

		window.addEventListener('keydown', numberKeydown);