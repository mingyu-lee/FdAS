'use strict';

/**
 * @author: CodeforSeoul by blim(kkh975@naver.com)
 */

define([], function(){
	
	function DefineBridge( StoreService ){
		
		return {
			'test': function(){
				console.log( 'test DeviceBridge' );
			},
			'isDevice': function(){
				return window.androidBridge ? true : false;
			},
			'alarmSetToDevice': function( isAlarm, isInit ){
				if ( window.androidBridge ){
					window.androidBridge.alarmSet( isAlarm === true ? 1 : 0, isInit === true ? 1 : 0 );
				}
			},
			'alarmSetFromDevice': function( data ){
				StoreService.save({
					appAlarm: data === "1" ? true : false
				});
			},
			'facebookLoginToDevice': function(){
				if ( window.androidBridge ){
					window.androidBridge.facebookLogin();
				}
			},
			'facebookLoginFromDevice': function( data ){
				// TODO, auth to server
				// 어떻게 들어가게 할 것인지 협의 필요
				// /auth/account/add??
				console.log( data );
				console.log( JSON.parse( data ) );
			},
			'facebookShareToDevice': function( name, caption, description, link, picture ){
				if ( window.androidBridge ){
					window.androidBridge.facebookShare( 
						name, 
						(caption ? caption : ''), 
						(description ? description : ''), 
						(link ? link : '' ), 
						(picture ? picture : '' ) 
					);
				}
			},
			'kakaoLoginToDevice': function(){
				if ( window.androidBridge ){
					window.androidBridge.kakaoLogin();
				}
			},
			'kakaoLoginFromDevice': function( data ){
				// TODO, auth to server 
				// 어떻게 들어가게 할 것인지 협의 필요
				// /auth/account/add??
				console.log( data );
				console.log( JSON.parse( data ) );
			},
			'kakaoShareToDevice': function( name, caption, description, link, picture ){
				if ( window.androidBridge ){
					window.androidBridge.kakaoShare( 
						name, 
						(caption ? caption : ''), 
						(description ? description : ''), 
						(link ? link : '' ), 	
						(picture ? picture : '' ) 
					);
				}
			}
		};
	};

	DefineBridge.$inject = [
		'StoreService'
	];

	return DefineBridge;
})