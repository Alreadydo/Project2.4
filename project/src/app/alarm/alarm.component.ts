import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlarmService } from './alarm.services';

@Component({
    selector : 'alarm',
    templateUrl : 'alarm.component.html'
})

export class Alarmcomponent implements OnInit, OnDestroy{
    private subcription: Subscription;
    message :any;
    
    constructor(private alarmService: AlarmService){ }
    ngOnInit(){ 
        this.subcription = this.alarmService.getMessage().subscribe(message=>{
            this.message = message;
        });
    }
ngOnDestroy(){
    this.subcription.unsubscribe();
    }

}
