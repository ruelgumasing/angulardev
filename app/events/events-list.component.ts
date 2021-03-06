import { Component } from "@angular/core";

@Component({
    selector: 'events-list',
    //templateUrl: 'app/events/events-list.component.html',
    template: ` <div>
                    <h1>Upcoming Angular 2 Events</h1>
                    <hr/>
                    <!-- <event-thumbnail (eventClick)="handleEventClicked($event)" [event]="event1"> -->
                    <!-- <event-thumbnail #thumbnail [event]="event1"> -->
                    <event-thumbnail [event]="event1"></event-thumbnail>
                    <!-- <h3>{{thumbnail.someProperty}}</h3> -->
                    <button class="btn btn-primary" (click)="thumbnail.logFoo()">Log me some foo</button>
                </div>`
})
export class EventsListComponent{
    event1 = {
        id: 1,
        name: 'Angular Connect',
        date: '9/26/2036',
        time: '10:00 am',
        price: 599.99,
        imageUrl: 'app/assets/images/angularconnect-shield.png',
        location: {
            address: '1057 DT',
            city: 'london',
            country: 'England'
        }
    }

    // handleEventClicked(data){
    //     console.log('received:', data)
    // }
}