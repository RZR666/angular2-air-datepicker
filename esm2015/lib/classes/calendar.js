/**
 * @fileoverview added by tsickle
 * Generated from: lib/classes/calendar.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AirOptions } from './options';
export class AirCalendar {
    /**
     * @param {?=} date
     * @param {?=} airOptions
     */
    constructor(date = new Date, airOptions = new AirOptions) {
        this.daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        /** @type {?} */
        const currentDate = new Date;
        this.currentMonth = currentDate.getMonth();
        this.currentYear = currentDate.getFullYear();
        this.airOptions = airOptions;
        this.year = date.getFullYear();
        this.month = date.getMonth();
        this.date = date.getDate();
        this.hour = date.getHours();
        this.minute = date.getMinutes();
        this.second = date.getSeconds();
        this.updateCalendar();
    }
    /**
     * @return {?}
     */
    updateCalendar() {
        this.airDays = [];
        /** @type {?} */
        const daysInMonth = this.getDaysInMonth(this.month);
        /** @type {?} */
        const date = new Date;
        /** @type {?} */
        const firstDayOfMonth = ((new Date(this.year, this.month, 1)).getDay() || 7) - 1;
        // making 0 == monday
        /** @type {?} */
        const weekend = new AirWeekend;
        if (firstDayOfMonth /* is not monday (0) */) {
            /** @type {?} */
            const daysInLastMonth = this.getDaysInMonth(this.month - 1);
            /** @type {?} */
            const prevAirMonth = new AirMonth(this.month - 1, this.year);
            for (let dateNo = daysInLastMonth - firstDayOfMonth + 1; dateNo <= daysInLastMonth; dateNo++) {
                this.airDays.push(new AirDay(dateNo, weekend.progress(), this.airOptions.isDisabled(new Date(prevAirMonth.year, prevAirMonth.month, dateNo)), true));
            }
        }
        for (let dateNo = 1; dateNo <= daysInMonth; dateNo++) {
            this.airDays.push(new AirDay(dateNo, weekend.progress(), this.airOptions.isDisabled(new Date(this.year, this.month, dateNo))));
        }
        if (this.date > daysInMonth) {
            this.date = daysInMonth; // select the maximum available this month instead
        }
        // set the current date if it's the current month & year
        if (date.getMonth() == this.month && date.getFullYear() == this.year) {
            this.airDays[firstDayOfMonth + date.getDate() - 1].current = true;
        }
        /** @type {?} */
        const daysSoFar = firstDayOfMonth + daysInMonth;
        /** @type {?} */
        const nextAirMonth = new AirMonth(this.month + 1, this.year);
        for (let dateNo = 1; dateNo <= (daysSoFar > 35 ? 42 : 35) - daysSoFar; dateNo++) {
            this.airDays.push(new AirDay(dateNo, weekend.progress(), this.airOptions.isDisabled(new Date(nextAirMonth.year, nextAirMonth.month, dateNo)), true));
        }
    }
    /**
     * @param {?} index
     * @return {?}
     */
    selectDate(index) {
        this.date = this.airDays[index].date;
        // might be a day from the previous/next month
        if (index < 7 && this.date > 20) {
            this.setMonth(this.month - 1);
        }
        else if (index > 20 && this.date < 8) {
            this.setMonth(this.month + 1);
        }
    }
    /**
     * @param {?} month
     * @return {?}
     */
    setMonth(month) {
        /** @type {?} */
        const airMonth = new AirMonth(month, this.year);
        this.month = airMonth.month;
        this.year = airMonth.year;
        this.updateCalendar();
    }
    /**
     * @param {?} year
     * @return {?}
     */
    setYear(year) {
        this.year = year;
    }
    /**
     * @param {?} month
     * @return {?}
     */
    getDaysInMonth(month) {
        /** @type {?} */
        const airMonth = new AirMonth(month, this.year);
        if (airMonth.month == 1 && ((airMonth.year % 4 == 0) && (airMonth.year % 100 != 0)) || (airMonth.year % 400 == 0)) {
            return 29;
        }
        return this.daysInMonth[airMonth.month];
    }
}
if (false) {
    /** @type {?} */
    AirCalendar.prototype.daysInMonth;
    /** @type {?} */
    AirCalendar.prototype.airOptions;
    /** @type {?} */
    AirCalendar.prototype.airDays;
    /** @type {?} */
    AirCalendar.prototype.currentMonth;
    /** @type {?} */
    AirCalendar.prototype.currentYear;
    /** @type {?} */
    AirCalendar.prototype.year;
    /** @type {?} */
    AirCalendar.prototype.month;
    /** @type {?} */
    AirCalendar.prototype.date;
    /** @type {?} */
    AirCalendar.prototype.hour;
    /** @type {?} */
    AirCalendar.prototype.minute;
    /** @type {?} */
    AirCalendar.prototype.second;
}
// normalizes month/year
export class AirMonth {
    /**
     * @param {?} month
     * @param {?} year
     */
    constructor(month, year) {
        if (month > 11) {
            year++;
            month = 0;
        }
        else if (month < 0) {
            year--;
            month = 11;
        }
        this.month = month;
        this.year = year;
    }
}
if (false) {
    /** @type {?} */
    AirMonth.prototype.month;
    /** @type {?} */
    AirMonth.prototype.year;
}
export class AirDay {
    /**
     * @param {?} date
     * @param {?=} weekend
     * @param {?=} disabled
     * @param {?=} other
     * @param {?=} current
     */
    constructor(date, weekend = false, disabled = false, other = false, current = false) {
        this.date = date;
        this.weekend = weekend;
        this.disabled = disabled;
        this.other = other;
        this.current = current;
    }
}
if (false) {
    /** @type {?} */
    AirDay.prototype.date;
    /** @type {?} */
    AirDay.prototype.weekend;
    /** @type {?} */
    AirDay.prototype.other;
    /** @type {?} */
    AirDay.prototype.current;
    /** @type {?} */
    AirDay.prototype.disabled;
}
export class AirWeekend {
    /**
     * @param {?=} day
     */
    constructor(day = 0) {
        this.day = day;
    }
    /**
     * @return {?}
     */
    progress() {
        /** @type {?} */
        let weekend = false;
        if (this.day == 5 /* Saturday */) {
            weekend = true;
            ++this.day;
        }
        else if (this.day == 6 /* Sunday */) {
            weekend = true;
            this.day = 0; // it's a new week!
        }
        else {
            ++this.day;
        }
        return weekend;
    }
}
if (false) {
    /** @type {?} */
    AirWeekend.prototype.day;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyMi1haXItZGF0ZXBpY2tlci8iLCJzb3VyY2VzIjpbImxpYi9jbGFzc2VzL2NhbGVuZGFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUV2QyxNQUFNLE9BQU8sV0FBVzs7Ozs7SUFhdEIsWUFBYSxPQUFhLElBQUksSUFBSSxFQUFFLGFBQXlCLElBQUksVUFBVTtRQVozRSxnQkFBVyxHQUFrQixDQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFFLENBQUM7O2NBYXhFLFdBQVcsR0FBRyxJQUFJLElBQUk7UUFDNUIsSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDM0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDN0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCxjQUFjO1FBQ1osSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7O2NBQ1osV0FBVyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzs7Y0FDN0MsSUFBSSxHQUFHLElBQUksSUFBSTs7Y0FDZixlQUFlLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUM7OztjQUMxRSxPQUFPLEdBQUcsSUFBSSxVQUFVO1FBRTlCLElBQUksZUFBZSxDQUFBLHVCQUF1QixFQUFFOztrQkFDcEMsZUFBZSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7O2tCQUNyRCxZQUFZLEdBQUcsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQztZQUM1RCxLQUFLLElBQUksTUFBTSxHQUFHLGVBQWUsR0FBRyxlQUFlLEdBQUcsQ0FBQyxFQUFFLE1BQU0sSUFBSSxlQUFlLEVBQUUsTUFBTSxFQUFFLEVBQUU7Z0JBQzVGLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUNmLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQ2xJLENBQUM7YUFDSDtTQUNGO1FBRUQsS0FBSyxJQUFJLE1BQU0sR0FBRyxDQUFDLEVBQUUsTUFBTSxJQUFJLFdBQVcsRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNwRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNoSTtRQUVELElBQUksSUFBSSxDQUFDLElBQUksR0FBRyxXQUFXLEVBQUU7WUFDM0IsSUFBSSxDQUFDLElBQUksR0FBRyxXQUFXLENBQUMsQ0FBQyxrREFBa0Q7U0FDNUU7UUFFRCx3REFBd0Q7UUFDeEQsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNwRSxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztTQUNuRTs7Y0FFSyxTQUFTLEdBQUcsZUFBZSxHQUFHLFdBQVc7O2NBQ3pDLFlBQVksR0FBRyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzVELEtBQUssSUFBSSxNQUFNLEdBQUcsQ0FBQyxFQUFFLE1BQU0sSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQy9FLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUNmLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQ2xJLENBQUM7U0FDSDtJQUNILENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFFLEtBQWE7UUFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQztRQUVyQyw4Q0FBOEM7UUFDOUMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxFQUFFO1lBQy9CLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztTQUMvQjthQUFNLElBQUksS0FBSyxHQUFHLEVBQUUsSUFBSSxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRTtZQUN0QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDL0I7SUFDSCxDQUFDOzs7OztJQUVELFFBQVEsQ0FBRSxLQUFhOztjQUNmLFFBQVEsR0FBYSxJQUFJLFFBQVEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN6RCxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFDNUIsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO1FBQzFCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDOzs7OztJQUVELE9BQU8sQ0FBRSxJQUFZO1FBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ25CLENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFFLEtBQWE7O2NBQ3JCLFFBQVEsR0FBYSxJQUFJLFFBQVEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN6RCxJQUFJLFFBQVEsQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsRUFBRTtZQUNqSCxPQUFPLEVBQUUsQ0FBQztTQUNYO1FBRUQsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQyxDQUFDO0NBQ0Y7OztJQS9GQyxrQ0FBZ0Y7O0lBQ2hGLGlDQUF1Qjs7SUFDdkIsOEJBQXVCOztJQUN2QixtQ0FBcUI7O0lBQ3JCLGtDQUFvQjs7SUFDcEIsMkJBQWE7O0lBQ2IsNEJBQWM7O0lBQ2QsMkJBQWE7O0lBQ2IsMkJBQWE7O0lBQ2IsNkJBQWU7O0lBQ2YsNkJBQWU7OztBQXdGakIsTUFBTSxPQUFPLFFBQVE7Ozs7O0lBSW5CLFlBQWEsS0FBSyxFQUFFLElBQUk7UUFDdEIsSUFBSSxLQUFLLEdBQUcsRUFBRSxFQUFFO1lBQ2QsSUFBSSxFQUFFLENBQUM7WUFDUCxLQUFLLEdBQUcsQ0FBQyxDQUFDO1NBQ1g7YUFBTSxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUU7WUFDcEIsSUFBSSxFQUFFLENBQUM7WUFDUCxLQUFLLEdBQUcsRUFBRSxDQUFDO1NBQ1o7UUFFRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNuQixDQUFDO0NBQ0Y7OztJQWZDLHlCQUFjOztJQUNkLHdCQUFhOztBQWdCZixNQUFNLE9BQU8sTUFBTTs7Ozs7Ozs7SUFPakIsWUFBYSxJQUFZLEVBQUUsT0FBTyxHQUFHLEtBQUssRUFBRSxRQUFRLEdBQUcsS0FBSyxFQUFFLEtBQUssR0FBRyxLQUFLLEVBQUUsT0FBTyxHQUFHLEtBQUs7UUFDMUYsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDekIsQ0FBQztDQUNGOzs7SUFiQyxzQkFBYTs7SUFDYix5QkFBaUI7O0lBQ2pCLHVCQUFlOztJQUNmLHlCQUFpQjs7SUFDakIsMEJBQWtCOztBQVdwQixNQUFNLE9BQU8sVUFBVTs7OztJQUdyQixZQUFhLE1BQWMsQ0FBQztRQUMxQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNqQixDQUFDOzs7O0lBRUQsUUFBUTs7WUFDRixPQUFPLEdBQUcsS0FBSztRQUVuQixJQUFJLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLGNBQWMsRUFBRTtZQUNoQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ2YsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDO1NBQ1o7YUFBTSxJQUFJLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLFlBQVksRUFBRTtZQUNyQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ2YsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxtQkFBbUI7U0FDbEM7YUFBTTtZQUNMLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQztTQUNaO1FBRUQsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztDQUNGOzs7SUFyQkMseUJBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBaXJPcHRpb25zIH0gZnJvbSAnLi9vcHRpb25zJztcblxuZXhwb3J0IGNsYXNzIEFpckNhbGVuZGFyIHtcbiAgZGF5c0luTW9udGg6IEFycmF5PG51bWJlcj4gPSBbIDMxLCAyOCwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzEgXTtcbiAgYWlyT3B0aW9uczogQWlyT3B0aW9ucztcbiAgYWlyRGF5czogQXJyYXk8QWlyRGF5PjtcbiAgY3VycmVudE1vbnRoOiBudW1iZXI7XG4gIGN1cnJlbnRZZWFyOiBudW1iZXI7XG4gIHllYXI6IG51bWJlcjtcbiAgbW9udGg6IG51bWJlcjtcbiAgZGF0ZTogbnVtYmVyO1xuICBob3VyOiBudW1iZXI7XG4gIG1pbnV0ZTogbnVtYmVyO1xuICBzZWNvbmQ6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvciAoZGF0ZTogRGF0ZSA9IG5ldyBEYXRlLCBhaXJPcHRpb25zOiBBaXJPcHRpb25zID0gbmV3IEFpck9wdGlvbnMpIHtcbiAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlO1xuICAgIHRoaXMuY3VycmVudE1vbnRoID0gY3VycmVudERhdGUuZ2V0TW9udGgoKTtcbiAgICB0aGlzLmN1cnJlbnRZZWFyID0gY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICB0aGlzLmFpck9wdGlvbnMgPSBhaXJPcHRpb25zO1xuICAgIHRoaXMueWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICB0aGlzLm1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xuICAgIHRoaXMuZGF0ZSA9IGRhdGUuZ2V0RGF0ZSgpO1xuICAgIHRoaXMuaG91ciA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgICB0aGlzLm1pbnV0ZSA9IGRhdGUuZ2V0TWludXRlcygpO1xuICAgIHRoaXMuc2Vjb25kID0gZGF0ZS5nZXRTZWNvbmRzKCk7XG4gICAgdGhpcy51cGRhdGVDYWxlbmRhcigpO1xuICB9XG5cbiAgdXBkYXRlQ2FsZW5kYXIgKCkge1xuICAgIHRoaXMuYWlyRGF5cyA9IFtdO1xuICAgIGNvbnN0IGRheXNJbk1vbnRoID0gdGhpcy5nZXREYXlzSW5Nb250aCh0aGlzLm1vbnRoKTtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGU7XG4gICAgY29uc3QgZmlyc3REYXlPZk1vbnRoID0gKChuZXcgRGF0ZSh0aGlzLnllYXIsIHRoaXMubW9udGgsIDEpKS5nZXREYXkoKSB8fCA3KSAtIDE7IC8vIG1ha2luZyAwID09IG1vbmRheVxuICAgIGNvbnN0IHdlZWtlbmQgPSBuZXcgQWlyV2Vla2VuZDtcblxuICAgIGlmIChmaXJzdERheU9mTW9udGgvKiBpcyBub3QgbW9uZGF5ICgwKSAqLykge1xuICAgICAgY29uc3QgZGF5c0luTGFzdE1vbnRoID0gdGhpcy5nZXREYXlzSW5Nb250aCh0aGlzLm1vbnRoIC0gMSk7XG4gICAgICBjb25zdCBwcmV2QWlyTW9udGggPSBuZXcgQWlyTW9udGgodGhpcy5tb250aCAtIDEsIHRoaXMueWVhcik7XG4gICAgICBmb3IgKGxldCBkYXRlTm8gPSBkYXlzSW5MYXN0TW9udGggLSBmaXJzdERheU9mTW9udGggKyAxOyBkYXRlTm8gPD0gZGF5c0luTGFzdE1vbnRoOyBkYXRlTm8rKykge1xuICAgICAgICB0aGlzLmFpckRheXMucHVzaChcbiAgICAgICAgICBuZXcgQWlyRGF5KGRhdGVObywgd2Vla2VuZC5wcm9ncmVzcygpLCB0aGlzLmFpck9wdGlvbnMuaXNEaXNhYmxlZChuZXcgRGF0ZShwcmV2QWlyTW9udGgueWVhciwgcHJldkFpck1vbnRoLm1vbnRoLCBkYXRlTm8pKSwgdHJ1ZSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCBkYXRlTm8gPSAxOyBkYXRlTm8gPD0gZGF5c0luTW9udGg7IGRhdGVObysrKSB7XG4gICAgICB0aGlzLmFpckRheXMucHVzaChuZXcgQWlyRGF5KGRhdGVObywgd2Vla2VuZC5wcm9ncmVzcygpLCB0aGlzLmFpck9wdGlvbnMuaXNEaXNhYmxlZChuZXcgRGF0ZSh0aGlzLnllYXIsIHRoaXMubW9udGgsIGRhdGVObykpKSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZGF0ZSA+IGRheXNJbk1vbnRoKSB7XG4gICAgICB0aGlzLmRhdGUgPSBkYXlzSW5Nb250aDsgLy8gc2VsZWN0IHRoZSBtYXhpbXVtIGF2YWlsYWJsZSB0aGlzIG1vbnRoIGluc3RlYWRcbiAgICB9XG5cbiAgICAvLyBzZXQgdGhlIGN1cnJlbnQgZGF0ZSBpZiBpdCdzIHRoZSBjdXJyZW50IG1vbnRoICYgeWVhclxuICAgIGlmIChkYXRlLmdldE1vbnRoKCkgPT0gdGhpcy5tb250aCAmJiBkYXRlLmdldEZ1bGxZZWFyKCkgPT0gdGhpcy55ZWFyKSB7XG4gICAgICB0aGlzLmFpckRheXNbZmlyc3REYXlPZk1vbnRoICsgZGF0ZS5nZXREYXRlKCkgLSAxXS5jdXJyZW50ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBkYXlzU29GYXIgPSBmaXJzdERheU9mTW9udGggKyBkYXlzSW5Nb250aDtcbiAgICBjb25zdCBuZXh0QWlyTW9udGggPSBuZXcgQWlyTW9udGgodGhpcy5tb250aCArIDEsIHRoaXMueWVhcik7XG4gICAgZm9yIChsZXQgZGF0ZU5vID0gMTsgZGF0ZU5vIDw9IChkYXlzU29GYXIgPiAzNSA/IDQyIDogMzUpIC0gZGF5c1NvRmFyOyBkYXRlTm8rKykge1xuICAgICAgdGhpcy5haXJEYXlzLnB1c2goXG4gICAgICAgIG5ldyBBaXJEYXkoZGF0ZU5vLCB3ZWVrZW5kLnByb2dyZXNzKCksIHRoaXMuYWlyT3B0aW9ucy5pc0Rpc2FibGVkKG5ldyBEYXRlKG5leHRBaXJNb250aC55ZWFyLCBuZXh0QWlyTW9udGgubW9udGgsIGRhdGVObykpLCB0cnVlKVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBzZWxlY3REYXRlIChpbmRleDogbnVtYmVyKSB7XG4gICAgdGhpcy5kYXRlID0gdGhpcy5haXJEYXlzW2luZGV4XS5kYXRlO1xuXG4gICAgLy8gbWlnaHQgYmUgYSBkYXkgZnJvbSB0aGUgcHJldmlvdXMvbmV4dCBtb250aFxuICAgIGlmIChpbmRleCA8IDcgJiYgdGhpcy5kYXRlID4gMjApIHtcbiAgICAgIHRoaXMuc2V0TW9udGgodGhpcy5tb250aCAtIDEpO1xuICAgIH0gZWxzZSBpZiAoaW5kZXggPiAyMCAmJiB0aGlzLmRhdGUgPCA4KSB7XG4gICAgICB0aGlzLnNldE1vbnRoKHRoaXMubW9udGggKyAxKTtcbiAgICB9XG4gIH1cblxuICBzZXRNb250aCAobW9udGg6IG51bWJlcikge1xuICAgIGNvbnN0IGFpck1vbnRoOiBBaXJNb250aCA9IG5ldyBBaXJNb250aChtb250aCwgdGhpcy55ZWFyKTtcbiAgICB0aGlzLm1vbnRoID0gYWlyTW9udGgubW9udGg7XG4gICAgdGhpcy55ZWFyID0gYWlyTW9udGgueWVhcjtcbiAgICB0aGlzLnVwZGF0ZUNhbGVuZGFyKCk7XG4gIH1cblxuICBzZXRZZWFyICh5ZWFyOiBudW1iZXIpIHtcbiAgICB0aGlzLnllYXIgPSB5ZWFyO1xuICB9XG5cbiAgZ2V0RGF5c0luTW9udGggKG1vbnRoOiBudW1iZXIpIHtcbiAgICBjb25zdCBhaXJNb250aDogQWlyTW9udGggPSBuZXcgQWlyTW9udGgobW9udGgsIHRoaXMueWVhcik7XG4gICAgaWYgKGFpck1vbnRoLm1vbnRoID09IDEgJiYgKChhaXJNb250aC55ZWFyICUgNCA9PSAwKSAmJiAoYWlyTW9udGgueWVhciAlIDEwMCAhPSAwKSkgfHwgKGFpck1vbnRoLnllYXIgJSA0MDAgPT0gMCkpIHtcbiAgICAgIHJldHVybiAyOTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5kYXlzSW5Nb250aFthaXJNb250aC5tb250aF07XG4gIH1cbn1cblxuLy8gbm9ybWFsaXplcyBtb250aC95ZWFyXG5leHBvcnQgY2xhc3MgQWlyTW9udGgge1xuICBtb250aDogbnVtYmVyO1xuICB5ZWFyOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IgKG1vbnRoLCB5ZWFyKSB7XG4gICAgaWYgKG1vbnRoID4gMTEpIHtcbiAgICAgIHllYXIrKztcbiAgICAgIG1vbnRoID0gMDtcbiAgICB9IGVsc2UgaWYgKG1vbnRoIDwgMCkge1xuICAgICAgeWVhci0tO1xuICAgICAgbW9udGggPSAxMTtcbiAgICB9XG5cbiAgICB0aGlzLm1vbnRoID0gbW9udGg7XG4gICAgdGhpcy55ZWFyID0geWVhcjtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQWlyRGF5IHtcbiAgZGF0ZTogbnVtYmVyO1xuICB3ZWVrZW5kOiBib29sZWFuO1xuICBvdGhlcjogYm9vbGVhbjtcbiAgY3VycmVudDogYm9vbGVhbjtcbiAgZGlzYWJsZWQ6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IgKGRhdGU6IG51bWJlciwgd2Vla2VuZCA9IGZhbHNlLCBkaXNhYmxlZCA9IGZhbHNlLCBvdGhlciA9IGZhbHNlLCBjdXJyZW50ID0gZmFsc2UpIHtcbiAgICB0aGlzLmRhdGUgPSBkYXRlO1xuICAgIHRoaXMud2Vla2VuZCA9IHdlZWtlbmQ7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGRpc2FibGVkO1xuICAgIHRoaXMub3RoZXIgPSBvdGhlcjtcbiAgICB0aGlzLmN1cnJlbnQgPSBjdXJyZW50O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBaXJXZWVrZW5kIHtcbiAgZGF5OiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IgKGRheTogbnVtYmVyID0gMCkge1xuICAgIHRoaXMuZGF5ID0gZGF5O1xuICB9XG5cbiAgcHJvZ3Jlc3MgKCk6IGJvb2xlYW4ge1xuICAgIGxldCB3ZWVrZW5kID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5kYXkgPT0gNSAvKiBTYXR1cmRheSAqLykge1xuICAgICAgd2Vla2VuZCA9IHRydWU7XG4gICAgICArK3RoaXMuZGF5O1xuICAgIH0gZWxzZSBpZiAodGhpcy5kYXkgPT0gNiAvKiBTdW5kYXkgKi8pIHtcbiAgICAgIHdlZWtlbmQgPSB0cnVlO1xuICAgICAgdGhpcy5kYXkgPSAwOyAvLyBpdCdzIGEgbmV3IHdlZWshXG4gICAgfSBlbHNlIHtcbiAgICAgICsrdGhpcy5kYXk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdlZWtlbmQ7XG4gIH1cbn1cbiJdfQ==