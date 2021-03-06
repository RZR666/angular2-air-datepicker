import { EventEmitter } from '@angular/core';
import { AirCalendar, AirLanguage, AirOptions } from '../../classes';
export declare class DatepickerComponent {
    airDate: Date;
    airOptions: AirOptions;
    airCalendar: AirCalendar;
    airLanguage: AirLanguage;
    setDate: EventEmitter<number>;
    setMonth: EventEmitter<number>;
    monthSelection: EventEmitter<void>;
}
