import { EventEmitter, OnInit } from '@angular/core';
import { AirCalendar, AirLanguage, AirOptions } from './classes';
export declare class Angular2AirDatepickerComponent implements OnInit {
    airOptions: AirOptions;
    airDate: Date;
    airChange: EventEmitter<Date>;
    airMonthSelect: EventEmitter<number>;
    airYearSelect: EventEmitter<number>;
    airLanguage: AirLanguage;
    airCalendar: AirCalendar;
    mode: string;
    ngOnInit(): void;
    setDate(index?: number): void;
}
