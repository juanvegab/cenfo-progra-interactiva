myGrocery.factory('ItemFactory', function($firebaseObject, $firebaseArray) {
	var fireRef = new Firebase('https://grocery-store.firebaseio.com/items/');
	return {
		getAllItems : function () {
			return $firebaseArray(fireRef);
		}
	}
});

// myGrocery.factory('FirebaseFactory', function($firebaseObject, $firebaseArray) {
// 	return {
// 		getAllElements : function (dataType) {
// 			return $firebaseArray(new Firebase('https://grocery-store.firebaseio.com/' + dataType));
// 		}
// 	}
// });