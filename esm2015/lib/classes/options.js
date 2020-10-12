/**
 * @fileoverview added by tsickle
 * Generated from: lib/classes/options.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class AirOptions {
    /**
     * @param {?=} options
     */
    constructor(options = (/** @type {?} */ ({}))) {
        this.timepicker = !!options.timepicker;
        this.format12h = !!options.format12h;
        this.fullDays = !!options.fullDays;
        this.language = options.language || 'en';
        this.hourStep = options.hourStep || 1;
        this.minuteStep = options.minuteStep || 1;
        this.secondStep = options.secondStep || 1;
        this.enabledDateRanges = options.enabledDateRanges || [];
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isDisabled(date) {
        for (const dateRange of this.enabledDateRanges) {
            if (date >= dateRange.start && date <= dateRange.end) {
                return false;
            }
        }
        return !!this.enabledDateRanges.length;
    }
}
if (false) {
    /** @type {?} */
    AirOptions.prototype.timepicker;
    /** @type {?} */
    AirOptions.prototype.format12h;
    /** @type {?} */
    AirOptions.prototype.fullDays;
    /** @type {?} */
    AirOptions.prototype.language;
    /** @type {?} */
    AirOptions.prototype.hourStep;
    /** @type {?} */
    AirOptions.prototype.minuteStep;
    /** @type {?} */
    AirOptions.prototype.secondStep;
    /** @type {?} */
    AirOptions.prototype.enabledDateRanges;
}
/**
 * @record
 */
export function DateRange() { }
if (false) {
    /** @type {?} */
    DateRange.prototype.start;
    /** @type {?} */
    DateRange.prototype.end;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXIyLWFpci1kYXRlcGlja2VyLyIsInNvdXJjZXMiOlsibGliL2NsYXNzZXMvb3B0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE1BQU0sT0FBTyxVQUFVOzs7O0lBVW5CLFlBQWEsVUFBc0IsbUJBQUEsRUFBRSxFQUFjO1FBQy9DLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7UUFDdkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztRQUNyQyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO1FBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUM7UUFDekMsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsSUFBSSxFQUFFLENBQUM7SUFDN0QsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUUsSUFBVTtRQUNwQixLQUFLLE1BQU0sU0FBUyxJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUM5QyxJQUFJLElBQUksSUFBSSxTQUFTLENBQUMsS0FBSyxJQUFJLElBQUksSUFBSSxTQUFTLENBQUMsR0FBRyxFQUFFO2dCQUNwRCxPQUFPLEtBQUssQ0FBQzthQUNkO1NBQ0Y7UUFFRCxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDO0lBQ3pDLENBQUM7Q0FDSjs7O0lBN0JHLGdDQUFxQjs7SUFDckIsK0JBQW9COztJQUNwQiw4QkFBbUI7O0lBQ25CLDhCQUFrQjs7SUFDbEIsOEJBQWtCOztJQUNsQixnQ0FBb0I7O0lBQ3BCLGdDQUFvQjs7SUFDcEIsdUNBQWdDOzs7OztBQXdCcEMsK0JBR0M7OztJQUZDLDBCQUFZOztJQUNaLHdCQUFVIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEFpck9wdGlvbnMge1xuICAgIHRpbWVwaWNrZXI/OiBib29sZWFuO1xuICAgIGZvcm1hdDEyaD86IGJvb2xlYW47XG4gICAgZnVsbERheXM/OiBib29sZWFuO1xuICAgIGxhbmd1YWdlPzogc3RyaW5nO1xuICAgIGhvdXJTdGVwPzogbnVtYmVyO1xuICAgIG1pbnV0ZVN0ZXA/OiBudW1iZXI7XG4gICAgc2Vjb25kU3RlcD86IG51bWJlcjtcbiAgICBlbmFibGVkRGF0ZVJhbmdlcz86IERhdGVSYW5nZVtdO1xuXG4gICAgY29uc3RydWN0b3IgKG9wdGlvbnM6IEFpck9wdGlvbnMgPSB7fSBhcyBBaXJPcHRpb25zKSB7XG4gICAgICAgIHRoaXMudGltZXBpY2tlciA9ICEhb3B0aW9ucy50aW1lcGlja2VyO1xuICAgICAgICB0aGlzLmZvcm1hdDEyaCA9ICEhb3B0aW9ucy5mb3JtYXQxMmg7XG4gICAgICAgIHRoaXMuZnVsbERheXMgPSAhIW9wdGlvbnMuZnVsbERheXM7XG4gICAgICAgIHRoaXMubGFuZ3VhZ2UgPSBvcHRpb25zLmxhbmd1YWdlIHx8ICdlbic7XG4gICAgICAgIHRoaXMuaG91clN0ZXAgPSBvcHRpb25zLmhvdXJTdGVwIHx8IDE7XG4gICAgICAgIHRoaXMubWludXRlU3RlcCA9IG9wdGlvbnMubWludXRlU3RlcCB8fCAxO1xuICAgICAgICB0aGlzLnNlY29uZFN0ZXAgPSBvcHRpb25zLnNlY29uZFN0ZXAgfHwgMTtcbiAgICAgICAgdGhpcy5lbmFibGVkRGF0ZVJhbmdlcyA9IG9wdGlvbnMuZW5hYmxlZERhdGVSYW5nZXMgfHwgW107XG4gICAgfVxuXG4gICAgaXNEaXNhYmxlZCAoZGF0ZTogRGF0ZSkge1xuICAgICAgZm9yIChjb25zdCBkYXRlUmFuZ2Ugb2YgdGhpcy5lbmFibGVkRGF0ZVJhbmdlcykge1xuICAgICAgICBpZiAoZGF0ZSA+PSBkYXRlUmFuZ2Uuc3RhcnQgJiYgZGF0ZSA8PSBkYXRlUmFuZ2UuZW5kKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAhIXRoaXMuZW5hYmxlZERhdGVSYW5nZXMubGVuZ3RoO1xuICAgIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBEYXRlUmFuZ2Uge1xuICBzdGFydDogRGF0ZTtcbiAgZW5kOiBEYXRlO1xufVxuIl19