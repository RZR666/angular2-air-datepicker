import { EventEmitter } from '@angular/core';
import { AirCalendar, AirOptions } from '../../classes';
export declare class TimepickerComponent {
    airOptions: AirOptions;
    airCalendar: AirCalendar;
    setDate: EventEmitter<void>;
}
