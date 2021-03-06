export declare class AirOptions {
    timepicker?: boolean;
    format12h?: boolean;
    fullDays?: boolean;
    language?: string;
    hourStep?: number;
    minuteStep?: number;
    secondStep?: number;
    enabledDateRanges?: DateRange[];
    constructor(options?: AirOptions);
    isDisabled(date: Date): boolean;
}
export interface DateRange {
    start: Date;
    end: Date;
}
