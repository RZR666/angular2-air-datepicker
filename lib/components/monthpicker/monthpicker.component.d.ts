import { EventEmitter } from '@angular/core';
import { AirCalendar, AirLanguage } from '../../classes';
export declare class MonthpickerComponent {
    airCalendar: AirCalendar;
    airLanguage: AirLanguage;
    setMonth: EventEmitter<number>;
    setYear: EventEmitter<number>;
    yearSelection: EventEmitter<void>;
}
