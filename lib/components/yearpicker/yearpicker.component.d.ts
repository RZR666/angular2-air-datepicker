import { EventEmitter, OnInit } from '@angular/core';
import { AirCalendar } from '../../classes';
export declare class YearpickerComponent implements OnInit {
    airCalendar: AirCalendar;
    setYear: EventEmitter<number>;
    years: number[];
    ngOnInit(): void;
    next(): void;
    previous(): void;
}
