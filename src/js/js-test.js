export const MyObservable = function(){
	// Observable
	function Observable() {
		let observers = [];
		
		this.addObserver = (...observersArray ) => {
			observers = observersArray;
		}
		
		this.sendMessageToSubscribers = message => {
			for( let i = 0; i < observers.length; i++ ) {
				observers[i].notification( message );
			}
		}
	}

	// [Observer]
	function Observer( callBackFn ) {
		this.notification = message => {
			callBackFn( message );
		}
	}

	// Init
	let observable = new Observable();

	let observer1 = new Observer(message => console.log('observer1: ' + message));
	let observer2 = new Observer(message => console.error('observer2: ' + message));
	let observer3 = new Observer(message => alert('observer3: ' + message));

	observable.addObserver( observer1, observer2, observer3 );
	observable.sendMessageToSubscribers( 'Текущая дата - ' + new Date + ' Но ты все еще пидор' );
}