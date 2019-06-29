$(document).ready(function() {
		localStorage.setItem("imageItems",[]);
        setButtons();
		var options = ["veganCheckbox","gluten-freeCheckbox","peskatarianCheckbox","vegetarianCheckbox",
			"halalCheckbox","lactoseintolerantCheckbox"];

		var slider = document.getElementById("moneySlider");
		var amount = document.getElementById("dollarSign");

		var sliderValue = 50;
		var servingData = 5;

		$(slider).on('input', function() {
			sliderValue = this.value;
			if(this.value < 33) {
				amount.innerHTML = "$";
			} else if (this.value <75) {
				amount.innerHTML = "$$";
			} else {
				amount.innerHTML = "$$$";
			}
		});

		var servingSlider = document.getElementById("servingSlider");
		var servingSize = document.getElementById("servingSize");

		$(servingSlider).on('input', function() {
			servingData = this.value;
			servingSize.innerHTML = this.value;
		});

		$("#proceedButton").click(function(event) {
			var dietary = [];
			var restore = [];
			if(!(document.getElementsByClassName("none")[0].checked)) {
				for(var i=0;i<options.length;i++) {
					if(document.getElementsByClassName(options[i])[0].checked) {
						dietary.push(document.getElementsByClassName(options[i])[0].name);
						restore.push(options[i]);
					}
				}
			} else {
				dietary.push("");
			}
			var servingData = document.getElementById("servingSlider").value;
			var sliderValue = document.getElementById("moneySlider").value;

			localStorage.setItem("serving preferences", [sliderValue,servingData]);
			localStorage.setItem("dietary", dietary);
			localStorage.setItem("dietaryIds",restore);
			window.location.href = "index.html";
		});
		
	function setButtons() {

        if(localStorage.getItem("dietaryIds") != null) {
            var preferences = localStorage.getItem("dietaryIds");
            var sliderValues = localStorage.getItem("serving preferences").split(",");
            var split = preferences.split(",");
           
			$('#moneySlider').val(sliderValues[0]);
			if(sliderValues[0] < 33) {
				$('#dollarSign')[0].innerHTML = "$";
			} else if (sliderValues[0] <75) {
				$('#dollarSign')[0].innerHTML = "$$";
			} else {
				$('#dollarSign')[0].innerHTML = "$$$";
			}


			$("#servingSize")[0].innerHTML = sliderValues[1];
            $("#servingSlider").val(sliderValues[1]);
            
            for(var i=0;i<split.length;i++) {
                $(getClassName(split[i])).prop('checked',true);
            }
        }
	}

	function getClassName(stringName) {
		switch(stringName) {
			case "veganCheckbox":
				return ".veganCheckbox";
			case "peskatarianCheckbox":
				return ".peskatarianCheckbox";
			case "gluten-freeCheckbox":
				return ".gluten-freeCheckbox";
			case "vegetarianCheckbox":
				return ".vegetarianCheckbox";
			case "halalCheckbox":
				return ".halalCheckbox";
			case "lactoseintolerantCheckbox":
				return ".lactoseintolerantCheckbox";
		}
	}
});