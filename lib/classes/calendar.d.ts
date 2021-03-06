import { AirOptions } from './options';
export declare class AirCalendar {
    daysInMonth: Array<number>;
    airOptions: AirOptions;
    airDays: Array<AirDay>;
    currentMonth: number;
    currentYear: number;
    year: number;
    month: number;
    date: number;
    hour: number;
    minute: number;
    second: number;
    constructor(date?: Date, airOptions?: AirOptions);
    updateCalendar(): void;
    selectDate(index: number): void;
    setMonth(month: number): void;
    setYear(year: number): void;
    getDaysInMonth(month: number): number;
}
export declare class AirMonth {
    month: number;
    year: number;
    constructor(month: any, year: any);
}
export declare class AirDay {
    date: number;
    weekend: boolean;
    other: boolean;
    current: boolean;
    disabled: boolean;
    constructor(date: number, weekend?: boolean, disabled?: boolean, other?: boolean, current?: boolean);
}
export declare class AirWeekend {
    day: number;
    constructor(day?: number);
    progress(): boolean;
}
