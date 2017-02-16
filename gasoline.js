function calculate()
{
    //get values from input boxes
    spent = document.getElementById("spentid").value; 
	pergallon = document.getElementById("pergallonid").value;
	seenit = document.getElementById("seenitid").value;
	
	//make sure input boxes are filled in
	if (spent > 0) {
	    if (pergallon > 0) {
	        if (seenit > 0) {
	            
	           	//for the given variables, perform this function and return a value
                var calc1 = function (a, b, c) {return a - (b * (a / c))};
                var calc2 = function (a, b, c) {return a / b - a / c};
                var calc3 = function (a, b) {return a / b};
                
                //use expressions stored in variables to perform functions with given values taken from user
                document.getElementById("gallons").innerHTML = "You just bought <zodiac>" + calc3(spent, pergallon).toFixed(2) + "</zodiac> gallons of gas";
	            document.getElementById("overpaid").innerHTML = "Compared to what you just saw, you paid <zodiac>$" + calc1(spent, seenit, pergallon).toFixed(2) + "</zodiac> too much";
                document.getElementById("extragas").innerHTML = "And you could have gotten <zodiac>" + calc2(spent, seenit, pergallon).toFixed(2) + "</zodiac> more gallon(s) of gas.  Oh well.";
	        }
	        	else {
	    alert("Please enter how much you saw gas going for.");
	        }
	    }
	    	else {
	    alert("Please enter how much you paid per gallon.");
	    }
	}
	else {
	    alert("Please enter how much you spent.");
	}
	

}
