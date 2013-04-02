/**
* jQuery getParamF Plugin
* Version 0.01 (2012-09-11)
* Copyright (c) 2012 freegians
* 
* @requires http://code.jquery.com/jquery-latest.js
* 
* Dual licensed under the MIT and GPL licenses:
* http://www.opensource.org/licenses/mit-license.php
* http://www.gnu.org/licenses/gpl.html
* 
* @example
* http://localhost/index.html?paramName=value
* $.getURLParam("paramName");
* return value
* 
*/

jQuery.extend({
	getParamF: function(strParameterName){
		var strReturn	= "";						// 리턴되는 값
		var strUrl		= window.location.href;		// 주소창의 url
		var checkFound	= false;					// 값을 찾으면 true, 못찾으면 false
		var strCmp		= strParameterName + "=";	// 찾고자 하는 파라미터 변수 + =
		var strCmpLen	= strCmp.length;			// strCmp 의 문자열 길이
		
		if ( strUrl.indexOf("?") > -1 ){			// url 에 파라미터가 있는지 확인
			var strParams = strUrl.substr(strUrl.indexOf("?") + 1);	// url에서 ? 뒤 문자열 추출
			var arrayParams = strParams.split("&");					// 파라미터를 & 구분해서 배열로 추출
			
			for (var i = 0; i < arrayParams.length; i++ ) {			// 파라미터 갯수만큼 루프문
				var tempParam = arrayParams[i].split("#");			// hash tag 제거
				arrayParams[i] = tempParam[0];
				if (arrayParams[i].substr(0, strCmpLen) == strCmp){	// 파라미터가 구하고자 하는 파라미터인지 체크
					var arrayParam = arrayParams[i].split("=");
					strReturn = arrayParam[1];
					checkFound=true;
					break;
				}
			}
		}
		
		if (checkFound==false) return false;
		
		return strReturn;
	}
});