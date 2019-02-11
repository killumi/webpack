
export class EventObserver {
	constructor() {
		this.observers = [];
	}

	subscribe( fn ) {
		this.observers.push( fn );
	}

	unsubscribe( fn ) { 
		this.observers.filter(subscriber => subscriber != fn);
	}

	broadcast( data ) {
		this.observers.forEach( subscriber => subscriber(data));
	}
}

const observer = new EventObserver();

observer.subscribe( data => console.log('observer 1 - ', data ));
observer.subscribe( data => console.log('observer 2 - ', data));
observer.subscribe( data => console.log('observer 3 - ', data));

observer.broadcast([
	{
		id: 1,
		title: 'todo 1',
	},

	{
		id: 2,
		title: 'todo 2',
	},

	{
		id: 3,
		title: 'todo 3',
	},
]);