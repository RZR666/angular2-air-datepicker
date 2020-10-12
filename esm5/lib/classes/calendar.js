/**
 * @fileoverview added by tsickle
 * Generated from: lib/classes/calendar.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AirOptions } from './options';
var AirCalendar = /** @class */ (function () {
    function AirCalendar(date, airOptions) {
        if (date === void 0) { date = new Date; }
        if (airOptions === void 0) { airOptions = new AirOptions; }
        this.daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        /** @type {?} */
        var currentDate = new Date;
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
    AirCalendar.prototype.updateCalendar = /**
     * @return {?}
     */
    function () {
        this.airDays = [];
        /** @type {?} */
        var daysInMonth = this.getDaysInMonth(this.month);
        /** @type {?} */
        var date = new Date;
        /** @type {?} */
        var firstDayOfMonth = ((new Date(this.year, this.month, 1)).getDay() || 7) - 1;
        // making 0 == monday
        /** @type {?} */
        var weekend = new AirWeekend;
        if (firstDayOfMonth /* is not monday (0) */) {
            /** @type {?} */
            var daysInLastMonth = this.getDaysInMonth(this.month - 1);
            /** @type {?} */
            var prevAirMonth = new AirMonth(this.month - 1, this.year);
            for (var dateNo = daysInLastMonth - firstDayOfMonth + 1; dateNo <= daysInLastMonth; dateNo++) {
                this.airDays.push(new AirDay(dateNo, weekend.progress(), this.airOptions.isDisabled(new Date(prevAirMonth.year, prevAirMonth.month, dateNo)), true));
            }
        }
        for (var dateNo = 1; dateNo <= daysInMonth; dateNo++) {
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
        var daysSoFar = firstDayOfMonth + daysInMonth;
        /** @type {?} */
        var nextAirMonth = new AirMonth(this.month + 1, this.year);
        for (var dateNo = 1; dateNo <= (daysSoFar > 35 ? 42 : 35) - daysSoFar; dateNo++) {
            this.airDays.push(new AirDay(dateNo, weekend.progress(), this.airOptions.isDisabled(new Date(nextAirMonth.year, nextAirMonth.month, dateNo)), true));
        }
    };
    /**
     * @param {?} index
     * @return {?}
     */
    AirCalendar.prototype.selectDate = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.date = this.airDays[index].date;
        // might be a day from the previous/next month
        if (index < 7 && this.date > 20) {
            this.setMonth(this.month - 1);
        }
        else if (index > 20 && this.date < 8) {
            this.setMonth(this.month + 1);
        }
    };
    /**
     * @param {?} month
     * @return {?}
     */
    AirCalendar.prototype.setMonth = /**
     * @param {?} month
     * @return {?}
     */
    function (month) {
        /** @type {?} */
        var airMonth = new AirMonth(month, this.year);
        this.month = airMonth.month;
        this.year = airMonth.year;
        this.updateCalendar();
    };
    /**
     * @param {?} year
     * @return {?}
     */
    AirCalendar.prototype.setYear = /**
     * @param {?} year
     * @return {?}
     */
    function (year) {
        this.year = year;
    };
    /**
     * @param {?} month
     * @return {?}
     */
    AirCalendar.prototype.getDaysInMonth = /**
     * @param {?} month
     * @return {?}
     */
    function (month) {
        /** @type {?} */
        var airMonth = new AirMonth(month, this.year);
        if (airMonth.month == 1 && ((airMonth.year % 4 == 0) && (airMonth.year % 100 != 0)) || (airMonth.year % 400 == 0)) {
            return 29;
        }
        return this.daysInMonth[airMonth.month];
    };
    return AirCalendar;
}());
export { AirCalendar };
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
var 
// normalizes month/year
AirMonth = /** @class */ (function () {
    function AirMonth(month, year) {
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
    return AirMonth;
}());
// normalizes month/year
export { AirMonth };
if (false) {
    /** @type {?} */
    AirMonth.prototype.month;
    /** @type {?} */
    AirMonth.prototype.year;
}
var AirDay = /** @class */ (function () {
    function AirDay(date, weekend, disabled, other, current) {
        if (weekend === void 0) { weekend = false; }
        if (disabled === void 0) { disabled = false; }
        if (other === void 0) { other = false; }
        if (current === void 0) { current = false; }
        this.date = date;
        this.weekend = weekend;
        this.disabled = disabled;
        this.other = other;
        this.current = current;
    }
    return AirDay;
}());
export { AirDay };
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
var AirWeekend = /** @class */ (function () {
    function AirWeekend(day) {
        if (day === void 0) { day = 0; }
        this.day = day;
    }
    /**
     * @return {?}
     */
    AirWeekend.prototype.progress = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var weekend = false;
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
    };
    return AirWeekend;
}());
export { AirWeekend };
if (false) {
    /** @type {?} */
    AirWeekend.prototype.day;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyMi1haXItZGF0ZXBpY2tlci8iLCJzb3VyY2VzIjpbImxpYi9jbGFzc2VzL2NhbGVuZGFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUV2QztJQWFFLHFCQUFhLElBQXFCLEVBQUUsVUFBdUM7UUFBOUQscUJBQUEsRUFBQSxXQUFpQixJQUFJO1FBQUUsMkJBQUEsRUFBQSxpQkFBNkIsVUFBVTtRQVozRSxnQkFBVyxHQUFrQixDQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFFLENBQUM7O1lBYXhFLFdBQVcsR0FBRyxJQUFJLElBQUk7UUFDNUIsSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDM0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDN0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCxvQ0FBYzs7O0lBQWQ7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQzs7WUFDWixXQUFXLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDOztZQUM3QyxJQUFJLEdBQUcsSUFBSSxJQUFJOztZQUNmLGVBQWUsR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQzs7O1lBQzFFLE9BQU8sR0FBRyxJQUFJLFVBQVU7UUFFOUIsSUFBSSxlQUFlLENBQUEsdUJBQXVCLEVBQUU7O2dCQUNwQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQzs7Z0JBQ3JELFlBQVksR0FBRyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQzVELEtBQUssSUFBSSxNQUFNLEdBQUcsZUFBZSxHQUFHLGVBQWUsR0FBRyxDQUFDLEVBQUUsTUFBTSxJQUFJLGVBQWUsRUFBRSxNQUFNLEVBQUUsRUFBRTtnQkFDNUYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQ2YsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FDbEksQ0FBQzthQUNIO1NBQ0Y7UUFFRCxLQUFLLElBQUksTUFBTSxHQUFHLENBQUMsRUFBRSxNQUFNLElBQUksV0FBVyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ3BELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2hJO1FBRUQsSUFBSSxJQUFJLENBQUMsSUFBSSxHQUFHLFdBQVcsRUFBRTtZQUMzQixJQUFJLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQyxDQUFDLGtEQUFrRDtTQUM1RTtRQUVELHdEQUF3RDtRQUN4RCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ3BFLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1NBQ25FOztZQUVLLFNBQVMsR0FBRyxlQUFlLEdBQUcsV0FBVzs7WUFDekMsWUFBWSxHQUFHLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDNUQsS0FBSyxJQUFJLE1BQU0sR0FBRyxDQUFDLEVBQUUsTUFBTSxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDL0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQ2YsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FDbEksQ0FBQztTQUNIO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxnQ0FBVTs7OztJQUFWLFVBQVksS0FBYTtRQUN2QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBRXJDLDhDQUE4QztRQUM5QyxJQUFJLEtBQUssR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLEVBQUU7WUFDL0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQy9CO2FBQU0sSUFBSSxLQUFLLEdBQUcsRUFBRSxJQUFJLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztTQUMvQjtJQUNILENBQUM7Ozs7O0lBRUQsOEJBQVE7Ozs7SUFBUixVQUFVLEtBQWE7O1lBQ2YsUUFBUSxHQUFhLElBQUksUUFBUSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3pELElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQztRQUM1QixJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRUQsNkJBQU87Ozs7SUFBUCxVQUFTLElBQVk7UUFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbkIsQ0FBQzs7Ozs7SUFFRCxvQ0FBYzs7OztJQUFkLFVBQWdCLEtBQWE7O1lBQ3JCLFFBQVEsR0FBYSxJQUFJLFFBQVEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN6RCxJQUFJLFFBQVEsQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsRUFBRTtZQUNqSCxPQUFPLEVBQUUsQ0FBQztTQUNYO1FBRUQsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBQ0gsa0JBQUM7QUFBRCxDQUFDLEFBaEdELElBZ0dDOzs7O0lBL0ZDLGtDQUFnRjs7SUFDaEYsaUNBQXVCOztJQUN2Qiw4QkFBdUI7O0lBQ3ZCLG1DQUFxQjs7SUFDckIsa0NBQW9COztJQUNwQiwyQkFBYTs7SUFDYiw0QkFBYzs7SUFDZCwyQkFBYTs7SUFDYiwyQkFBYTs7SUFDYiw2QkFBZTs7SUFDZiw2QkFBZTs7O0FBd0ZqQjs7O0lBSUUsa0JBQWEsS0FBSyxFQUFFLElBQUk7UUFDdEIsSUFBSSxLQUFLLEdBQUcsRUFBRSxFQUFFO1lBQ2QsSUFBSSxFQUFFLENBQUM7WUFDUCxLQUFLLEdBQUcsQ0FBQyxDQUFDO1NBQ1g7YUFBTSxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUU7WUFDcEIsSUFBSSxFQUFFLENBQUM7WUFDUCxLQUFLLEdBQUcsRUFBRSxDQUFDO1NBQ1o7UUFFRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNuQixDQUFDO0lBQ0gsZUFBQztBQUFELENBQUMsQUFoQkQsSUFnQkM7Ozs7O0lBZkMseUJBQWM7O0lBQ2Qsd0JBQWE7O0FBZ0JmO0lBT0UsZ0JBQWEsSUFBWSxFQUFFLE9BQWUsRUFBRSxRQUFnQixFQUFFLEtBQWEsRUFBRSxPQUFlO1FBQWpFLHdCQUFBLEVBQUEsZUFBZTtRQUFFLHlCQUFBLEVBQUEsZ0JBQWdCO1FBQUUsc0JBQUEsRUFBQSxhQUFhO1FBQUUsd0JBQUEsRUFBQSxlQUFlO1FBQzFGLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3pCLENBQUM7SUFDSCxhQUFDO0FBQUQsQ0FBQyxBQWRELElBY0M7Ozs7SUFiQyxzQkFBYTs7SUFDYix5QkFBaUI7O0lBQ2pCLHVCQUFlOztJQUNmLHlCQUFpQjs7SUFDakIsMEJBQWtCOztBQVdwQjtJQUdFLG9CQUFhLEdBQWU7UUFBZixvQkFBQSxFQUFBLE9BQWU7UUFDMUIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDakIsQ0FBQzs7OztJQUVELDZCQUFROzs7SUFBUjs7WUFDTSxPQUFPLEdBQUcsS0FBSztRQUVuQixJQUFJLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLGNBQWMsRUFBRTtZQUNoQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ2YsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDO1NBQ1o7YUFBTSxJQUFJLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLFlBQVksRUFBRTtZQUNyQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ2YsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxtQkFBbUI7U0FDbEM7YUFBTTtZQUNMLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQztTQUNaO1FBRUQsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUNILGlCQUFDO0FBQUQsQ0FBQyxBQXRCRCxJQXNCQzs7OztJQXJCQyx5QkFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFpck9wdGlvbnMgfSBmcm9tICcuL29wdGlvbnMnO1xuXG5leHBvcnQgY2xhc3MgQWlyQ2FsZW5kYXIge1xuICBkYXlzSW5Nb250aDogQXJyYXk8bnVtYmVyPiA9IFsgMzEsIDI4LCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMSBdO1xuICBhaXJPcHRpb25zOiBBaXJPcHRpb25zO1xuICBhaXJEYXlzOiBBcnJheTxBaXJEYXk+O1xuICBjdXJyZW50TW9udGg6IG51bWJlcjtcbiAgY3VycmVudFllYXI6IG51bWJlcjtcbiAgeWVhcjogbnVtYmVyO1xuICBtb250aDogbnVtYmVyO1xuICBkYXRlOiBudW1iZXI7XG4gIGhvdXI6IG51bWJlcjtcbiAgbWludXRlOiBudW1iZXI7XG4gIHNlY29uZDogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yIChkYXRlOiBEYXRlID0gbmV3IERhdGUsIGFpck9wdGlvbnM6IEFpck9wdGlvbnMgPSBuZXcgQWlyT3B0aW9ucykge1xuICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGU7XG4gICAgdGhpcy5jdXJyZW50TW9udGggPSBjdXJyZW50RGF0ZS5nZXRNb250aCgpO1xuICAgIHRoaXMuY3VycmVudFllYXIgPSBjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIHRoaXMuYWlyT3B0aW9ucyA9IGFpck9wdGlvbnM7XG4gICAgdGhpcy55ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIHRoaXMubW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG4gICAgdGhpcy5kYXRlID0gZGF0ZS5nZXREYXRlKCk7XG4gICAgdGhpcy5ob3VyID0gZGF0ZS5nZXRIb3VycygpO1xuICAgIHRoaXMubWludXRlID0gZGF0ZS5nZXRNaW51dGVzKCk7XG4gICAgdGhpcy5zZWNvbmQgPSBkYXRlLmdldFNlY29uZHMoKTtcbiAgICB0aGlzLnVwZGF0ZUNhbGVuZGFyKCk7XG4gIH1cblxuICB1cGRhdGVDYWxlbmRhciAoKSB7XG4gICAgdGhpcy5haXJEYXlzID0gW107XG4gICAgY29uc3QgZGF5c0luTW9udGggPSB0aGlzLmdldERheXNJbk1vbnRoKHRoaXMubW9udGgpO1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZTtcbiAgICBjb25zdCBmaXJzdERheU9mTW9udGggPSAoKG5ldyBEYXRlKHRoaXMueWVhciwgdGhpcy5tb250aCwgMSkpLmdldERheSgpIHx8IDcpIC0gMTsgLy8gbWFraW5nIDAgPT0gbW9uZGF5XG4gICAgY29uc3Qgd2Vla2VuZCA9IG5ldyBBaXJXZWVrZW5kO1xuXG4gICAgaWYgKGZpcnN0RGF5T2ZNb250aC8qIGlzIG5vdCBtb25kYXkgKDApICovKSB7XG4gICAgICBjb25zdCBkYXlzSW5MYXN0TW9udGggPSB0aGlzLmdldERheXNJbk1vbnRoKHRoaXMubW9udGggLSAxKTtcbiAgICAgIGNvbnN0IHByZXZBaXJNb250aCA9IG5ldyBBaXJNb250aCh0aGlzLm1vbnRoIC0gMSwgdGhpcy55ZWFyKTtcbiAgICAgIGZvciAobGV0IGRhdGVObyA9IGRheXNJbkxhc3RNb250aCAtIGZpcnN0RGF5T2ZNb250aCArIDE7IGRhdGVObyA8PSBkYXlzSW5MYXN0TW9udGg7IGRhdGVObysrKSB7XG4gICAgICAgIHRoaXMuYWlyRGF5cy5wdXNoKFxuICAgICAgICAgIG5ldyBBaXJEYXkoZGF0ZU5vLCB3ZWVrZW5kLnByb2dyZXNzKCksIHRoaXMuYWlyT3B0aW9ucy5pc0Rpc2FibGVkKG5ldyBEYXRlKHByZXZBaXJNb250aC55ZWFyLCBwcmV2QWlyTW9udGgubW9udGgsIGRhdGVObykpLCB0cnVlKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAobGV0IGRhdGVObyA9IDE7IGRhdGVObyA8PSBkYXlzSW5Nb250aDsgZGF0ZU5vKyspIHtcbiAgICAgIHRoaXMuYWlyRGF5cy5wdXNoKG5ldyBBaXJEYXkoZGF0ZU5vLCB3ZWVrZW5kLnByb2dyZXNzKCksIHRoaXMuYWlyT3B0aW9ucy5pc0Rpc2FibGVkKG5ldyBEYXRlKHRoaXMueWVhciwgdGhpcy5tb250aCwgZGF0ZU5vKSkpKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5kYXRlID4gZGF5c0luTW9udGgpIHtcbiAgICAgIHRoaXMuZGF0ZSA9IGRheXNJbk1vbnRoOyAvLyBzZWxlY3QgdGhlIG1heGltdW0gYXZhaWxhYmxlIHRoaXMgbW9udGggaW5zdGVhZFxuICAgIH1cblxuICAgIC8vIHNldCB0aGUgY3VycmVudCBkYXRlIGlmIGl0J3MgdGhlIGN1cnJlbnQgbW9udGggJiB5ZWFyXG4gICAgaWYgKGRhdGUuZ2V0TW9udGgoKSA9PSB0aGlzLm1vbnRoICYmIGRhdGUuZ2V0RnVsbFllYXIoKSA9PSB0aGlzLnllYXIpIHtcbiAgICAgIHRoaXMuYWlyRGF5c1tmaXJzdERheU9mTW9udGggKyBkYXRlLmdldERhdGUoKSAtIDFdLmN1cnJlbnQgPSB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IGRheXNTb0ZhciA9IGZpcnN0RGF5T2ZNb250aCArIGRheXNJbk1vbnRoO1xuICAgIGNvbnN0IG5leHRBaXJNb250aCA9IG5ldyBBaXJNb250aCh0aGlzLm1vbnRoICsgMSwgdGhpcy55ZWFyKTtcbiAgICBmb3IgKGxldCBkYXRlTm8gPSAxOyBkYXRlTm8gPD0gKGRheXNTb0ZhciA+IDM1ID8gNDIgOiAzNSkgLSBkYXlzU29GYXI7IGRhdGVObysrKSB7XG4gICAgICB0aGlzLmFpckRheXMucHVzaChcbiAgICAgICAgbmV3IEFpckRheShkYXRlTm8sIHdlZWtlbmQucHJvZ3Jlc3MoKSwgdGhpcy5haXJPcHRpb25zLmlzRGlzYWJsZWQobmV3IERhdGUobmV4dEFpck1vbnRoLnllYXIsIG5leHRBaXJNb250aC5tb250aCwgZGF0ZU5vKSksIHRydWUpXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHNlbGVjdERhdGUgKGluZGV4OiBudW1iZXIpIHtcbiAgICB0aGlzLmRhdGUgPSB0aGlzLmFpckRheXNbaW5kZXhdLmRhdGU7XG5cbiAgICAvLyBtaWdodCBiZSBhIGRheSBmcm9tIHRoZSBwcmV2aW91cy9uZXh0IG1vbnRoXG4gICAgaWYgKGluZGV4IDwgNyAmJiB0aGlzLmRhdGUgPiAyMCkge1xuICAgICAgdGhpcy5zZXRNb250aCh0aGlzLm1vbnRoIC0gMSk7XG4gICAgfSBlbHNlIGlmIChpbmRleCA+IDIwICYmIHRoaXMuZGF0ZSA8IDgpIHtcbiAgICAgIHRoaXMuc2V0TW9udGgodGhpcy5tb250aCArIDEpO1xuICAgIH1cbiAgfVxuXG4gIHNldE1vbnRoIChtb250aDogbnVtYmVyKSB7XG4gICAgY29uc3QgYWlyTW9udGg6IEFpck1vbnRoID0gbmV3IEFpck1vbnRoKG1vbnRoLCB0aGlzLnllYXIpO1xuICAgIHRoaXMubW9udGggPSBhaXJNb250aC5tb250aDtcbiAgICB0aGlzLnllYXIgPSBhaXJNb250aC55ZWFyO1xuICAgIHRoaXMudXBkYXRlQ2FsZW5kYXIoKTtcbiAgfVxuXG4gIHNldFllYXIgKHllYXI6IG51bWJlcikge1xuICAgIHRoaXMueWVhciA9IHllYXI7XG4gIH1cblxuICBnZXREYXlzSW5Nb250aCAobW9udGg6IG51bWJlcikge1xuICAgIGNvbnN0IGFpck1vbnRoOiBBaXJNb250aCA9IG5ldyBBaXJNb250aChtb250aCwgdGhpcy55ZWFyKTtcbiAgICBpZiAoYWlyTW9udGgubW9udGggPT0gMSAmJiAoKGFpck1vbnRoLnllYXIgJSA0ID09IDApICYmIChhaXJNb250aC55ZWFyICUgMTAwICE9IDApKSB8fCAoYWlyTW9udGgueWVhciAlIDQwMCA9PSAwKSkge1xuICAgICAgcmV0dXJuIDI5O1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmRheXNJbk1vbnRoW2Fpck1vbnRoLm1vbnRoXTtcbiAgfVxufVxuXG4vLyBub3JtYWxpemVzIG1vbnRoL3llYXJcbmV4cG9ydCBjbGFzcyBBaXJNb250aCB7XG4gIG1vbnRoOiBudW1iZXI7XG4gIHllYXI6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvciAobW9udGgsIHllYXIpIHtcbiAgICBpZiAobW9udGggPiAxMSkge1xuICAgICAgeWVhcisrO1xuICAgICAgbW9udGggPSAwO1xuICAgIH0gZWxzZSBpZiAobW9udGggPCAwKSB7XG4gICAgICB5ZWFyLS07XG4gICAgICBtb250aCA9IDExO1xuICAgIH1cblxuICAgIHRoaXMubW9udGggPSBtb250aDtcbiAgICB0aGlzLnllYXIgPSB5ZWFyO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBaXJEYXkge1xuICBkYXRlOiBudW1iZXI7XG4gIHdlZWtlbmQ6IGJvb2xlYW47XG4gIG90aGVyOiBib29sZWFuO1xuICBjdXJyZW50OiBib29sZWFuO1xuICBkaXNhYmxlZDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvciAoZGF0ZTogbnVtYmVyLCB3ZWVrZW5kID0gZmFsc2UsIGRpc2FibGVkID0gZmFsc2UsIG90aGVyID0gZmFsc2UsIGN1cnJlbnQgPSBmYWxzZSkge1xuICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgdGhpcy53ZWVrZW5kID0gd2Vla2VuZDtcbiAgICB0aGlzLmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gICAgdGhpcy5vdGhlciA9IG90aGVyO1xuICAgIHRoaXMuY3VycmVudCA9IGN1cnJlbnQ7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFpcldlZWtlbmQge1xuICBkYXk6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvciAoZGF5OiBudW1iZXIgPSAwKSB7XG4gICAgdGhpcy5kYXkgPSBkYXk7XG4gIH1cblxuICBwcm9ncmVzcyAoKTogYm9vbGVhbiB7XG4gICAgbGV0IHdlZWtlbmQgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLmRheSA9PSA1IC8qIFNhdHVyZGF5ICovKSB7XG4gICAgICB3ZWVrZW5kID0gdHJ1ZTtcbiAgICAgICsrdGhpcy5kYXk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmRheSA9PSA2IC8qIFN1bmRheSAqLykge1xuICAgICAgd2Vla2VuZCA9IHRydWU7XG4gICAgICB0aGlzLmRheSA9IDA7IC8vIGl0J3MgYSBuZXcgd2VlayFcbiAgICB9IGVsc2Uge1xuICAgICAgKyt0aGlzLmRheTtcbiAgICB9XG5cbiAgICByZXR1cm4gd2Vla2VuZDtcbiAgfVxufVxuIl19