'use strict';

angular.module('ctlApp')
	.service('appFunctions', function appFunctions(){

		this.capitalizeString = function (string) {
			return string.trim().charAt(0).toUpperCase() + string.trim().slice(1);
		};

		this.capitalizeStrArray = function (strArray) {
			var retString = '';

			// Looping through each of the strings in an array
			for (var i=0; i < strArray.length - 1; i++){
				var str = strArray[i].trim();
				retString += this.capitalizeString(str);
				retString += ' ';
			}
			// don't add in the trailing whitespace for the last one
			retString += this.capitalizeString(strArray[strArray.length - 1].trim());

			return retString;
		};
	});