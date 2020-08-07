		var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
		var digits= [0,1,2,3,4,5,6,7,8,9];
		var special = ['!','"','£','$','€','%','^','&','*','(',')','@','~','#','/','<','>','?','.','-','_','[',']','{','}','`','¬','¦','|','+','=',','];
		function generateNumber()
		{
			var userinput1 = document.getElementById('input1').value;
			var num1= Number(""+ userinput1+"");
			var userinput2 = document.getElementById('input2').value;
			var num2= Number(""+ userinput2+"");
			if(num1 > num2 )
			{
				document.getElementById('warning1').style.visibility="visible";
				document.getElementById('answer1').style.visibility="hidden";
			}
			else if(num1 < num2 && userinput1 ==0)
			{
				document.getElementById('warning1').style.visibility="hidden";
				document.getElementById('answer1').style.visibility="visible";
				var num=Math.floor(Math.random()* userinput2);
				while(num<userinput1){  num=Math.floor(Math.random()* userinput2)}
				document.getElementById('answer1').innerHTML="Your random number is " + num;
				var norm = document.getElementById('answer1').innerHTML;
				var bold = norm.bold();
				document.getElementById('answer1').innerHTML=bold;
			}
			else
			{
				document.getElementById('warning1').style.visibility="hidden";
				document.getElementById('answer1').style.visibility="visible";
				var num=Math.floor(Math.random()* userinput2+1);
				while(num<userinput1){  num=Math.floor(Math.random()* userinput2+1)}
				document.getElementById('answer1').innerHTML="Your random number is " + num;
				var norm = document.getElementById('answer1').innerHTML;
				var bold = norm.bold();
				document.getElementById('answer1').innerHTML=bold;

			}
		}
		function generatePassword(){
			var userinput1 = document.getElementById('input3').value;
			var userinput2 = document.getElementById('input4').value;
			var userinput3 = document.getElementById('input5').value;
			var userinput4 = document.getElementById('input6').value;
			var length= Number(""+ userinput1+"");
			var numOfDigits= Number(""+ userinput2+"");
			var specialAmount= Number(""+ userinput3+"");
			var upperCase= Number(""+ userinput4+"");
			var numOfLetters = length - (upperCase + specialAmount + numOfDigits );
			var names = ['letter','number','upper', 'special'];
			var type = names[Math.floor(Math.random()*names.length)];
			var base  = "Your Password is ";
			var password="";
			var original = length;
			while(length>0)
			{
				if(type == 'letter' && numOfLetters >0)
				{
					password= password + letters[Math.floor(Math.random()*letters.length)];
					numOfLetters--;
					length--;
				}
				else if(type == 'number' && numOfDigits>0)
				{
					password= password + digits[Math.floor(Math.random()*digits.length)];
					numOfDigits--;
					length--;
				}
				else if(type == 'upper' && upperCase>0)
				{
					var letter = letters[Math.floor(Math.random()*letters.length)];
					var upperCaseLetter = letter.toUpperCase();
					password= password + upperCaseLetter;
					upperCase--;
					length--;
				}
				else if(type == 'special' && specialAmount>0)
				{
					password= password + special[Math.floor(Math.random()*special.length)];
					specialAmount--;
					length--;
				}
				type = names[Math.floor(Math.random()*names.length)];
				if(password.length == original)break;
			}
			if(length < numOfDigits || length < numOfLetters || length < specialAmount|| length < upperCase)
			{
				document.getElementById('warning2').style.visibility="visible";
				document.getElementById('answer2').style.visibility="hidden";
			}
			else{
				document.getElementById('warning2').style.visibility="hidden";
				document.getElementById('answer2').style.visibility="visible";
			}
			document.getElementById('answer2').innerHTML = base + password;
			var norm = document.getElementById('answer2').innerHTML;
			var bold = norm.bold();
			document.getElementById('answer2').innerHTML=bold;
		}
		function checkSecurity()
		{
			var userinput1=document.getElementById('input7').value;
			var length= userinput1.length;
			var UpperCount=0;
			var SpecialCount=0;
			var DigitCount=0;
			for(var i =0;i<userinput1.length;i++)
		    {
		    	for(var j=0;j<digits.length;j++)
		    	{
		    		if(digits[j] == userinput1.charAt(i))
		    		{
		    			DigitCount++;
		    		}
		    	}
			}
			for(var i =0;i<userinput1.length;i++)
		    {
		    	for(var j=0;j<special.length;j++)
		    	{
		    		if(special[j] == userinput1.charAt(i))
		    		{
		    			SpecialCount++;
		    		}
		    	}
			}
			for(var i =0;i<userinput1.length;i++)
		    {
		    	for(var j=0;j<letters.length;j++)
		    	{
		    		if(letters[j].toUpperCase() == userinput1.charAt(i))
		    		{
		    			UpperCount++;
		    		}
		    	}
			}
			var strength = "Your Password Strength is";
			if(length<8)
			{
				document.getElementById('warning3').style.visibility="visible";
				document.getElementById('answer3').style.visibility="hidden";
				document.getElementById('warning4').style.visibility = "hidden";

			}
			else if( (length>=8 && length<=15) && (UpperCount ==0 || SpecialCount ==0 || DigitCount==0))
			{
				strength= strength + " The Worst";
				document.getElementById('answer3').style.color="red";
				document.getElementById('answer3').style.visibility="visible";
				document.getElementById('warning3').style.visibility="hidden";
				document.getElementById('warning4').style.visibility = "visible";
			}
			else if(length>=15 && (UpperCount==0 || DigitCount ==0 || SpecialCount==0))
			{
				strength = strength + " Very Poor";
				document.getElementById('answer3').style.color="orange";
				document.getElementById('answer3').style.visibility="visible";
				document.getElementById('warning3').style.visibility="hidden";
				document.getElementById('warning4').style.visibility = "visible";

			}
			else if( (length>=8 && length<=15) && (UpperCount >0 && UpperCount<2) && (DigitCount >0 && DigitCount<2) && (SpecialCount>0 && SpecialCount<2))
			{
				strength =strength + " Okay";
				document.getElementById('answer3').style.color="yellow";
				document.getElementById('answer3').style.visibility="visible";
				document.getElementById('warning3').style.visibility="hidden";
				document.getElementById('warning4').style.visibility = "visible";
			}
			else if( (length>=8 && length<=15) && UpperCount >=2 && DigitCount >=2 && SpecialCount>=2)
			{
				strength = strength + " Good";
				document.getElementById('answer3').style.color="lime";
				document.getElementById('answer3').style.visibility="visible";
				document.getElementById('warning3').style.visibility="hidden";
				document.getElementById('warning4').style.visibility = "visible";
			}
			else if(length >15 && UpperCount >=2 && DigitCount >= 2 && SpecialCount>=2)
			{
				strength = strength + " Excellent";
				document.getElementById('answer3').style.color="green";
				document.getElementById('answer3').style.visibility="visible";
				document.getElementById('warning3').style.visibility="hidden";

			}
			else{
				strength =strength + " Undecideable";
				document.getElementById('answer3').style.color="white";
				document.getElementById('answer3').style.visibility="visible";
				document.getElementById('warning3').style.visibility="hidden";
				document.getElementById('warning4').style.visibility = "visible";

			}
			document.getElementById('answer3').innerHTML=strength;
			var norm = document.getElementById('answer3').innerHTML;
			var bold = norm.bold();
			document.getElementById('answer3').innerHTML=bold;
		}