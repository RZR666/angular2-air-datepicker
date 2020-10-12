/**
 * @fileoverview added by tsickle
 * Generated from: lib/classes/options.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
var AirOptions = /** @class */ (function () {
    function AirOptions(options) {
        if (options === void 0) { options = (/** @type {?} */ ({})); }
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
    AirOptions.prototype.isDisabled = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        var e_1, _a;
        try {
            for (var _b = tslib_1.__values(this.enabledDateRanges), _c = _b.next(); !_c.done; _c = _b.next()) {
                var dateRange = _c.value;
                if (date >= dateRange.start && date <= dateRange.end) {
                    return false;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return !!this.enabledDateRanges.length;
    };
    return AirOptions;
}());
export { AirOptions };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXIyLWFpci1kYXRlcGlja2VyLyIsInNvdXJjZXMiOlsibGliL2NsYXNzZXMvb3B0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtJQVVJLG9CQUFhLE9BQXNDO1FBQXRDLHdCQUFBLEVBQUEsNkJBQXNCLEVBQUUsRUFBYztRQUMvQyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7UUFDckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztRQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxPQUFPLENBQUMsaUJBQWlCLElBQUksRUFBRSxDQUFDO0lBQzdELENBQUM7Ozs7O0lBRUQsK0JBQVU7Ozs7SUFBVixVQUFZLElBQVU7OztZQUNwQixLQUF3QixJQUFBLEtBQUEsaUJBQUEsSUFBSSxDQUFDLGlCQUFpQixDQUFBLGdCQUFBLDRCQUFFO2dCQUEzQyxJQUFNLFNBQVMsV0FBQTtnQkFDbEIsSUFBSSxJQUFJLElBQUksU0FBUyxDQUFDLEtBQUssSUFBSSxJQUFJLElBQUksU0FBUyxDQUFDLEdBQUcsRUFBRTtvQkFDcEQsT0FBTyxLQUFLLENBQUM7aUJBQ2Q7YUFDRjs7Ozs7Ozs7O1FBRUQsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQztJQUN6QyxDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQUFDLEFBOUJELElBOEJDOzs7O0lBN0JHLGdDQUFxQjs7SUFDckIsK0JBQW9COztJQUNwQiw4QkFBbUI7O0lBQ25CLDhCQUFrQjs7SUFDbEIsOEJBQWtCOztJQUNsQixnQ0FBb0I7O0lBQ3BCLGdDQUFvQjs7SUFDcEIsdUNBQWdDOzs7OztBQXdCcEMsK0JBR0M7OztJQUZDLDBCQUFZOztJQUNaLHdCQUFVIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEFpck9wdGlvbnMge1xuICAgIHRpbWVwaWNrZXI/OiBib29sZWFuO1xuICAgIGZvcm1hdDEyaD86IGJvb2xlYW47XG4gICAgZnVsbERheXM/OiBib29sZWFuO1xuICAgIGxhbmd1YWdlPzogc3RyaW5nO1xuICAgIGhvdXJTdGVwPzogbnVtYmVyO1xuICAgIG1pbnV0ZVN0ZXA/OiBudW1iZXI7XG4gICAgc2Vjb25kU3RlcD86IG51bWJlcjtcbiAgICBlbmFibGVkRGF0ZVJhbmdlcz86IERhdGVSYW5nZVtdO1xuXG4gICAgY29uc3RydWN0b3IgKG9wdGlvbnM6IEFpck9wdGlvbnMgPSB7fSBhcyBBaXJPcHRpb25zKSB7XG4gICAgICAgIHRoaXMudGltZXBpY2tlciA9ICEhb3B0aW9ucy50aW1lcGlja2VyO1xuICAgICAgICB0aGlzLmZvcm1hdDEyaCA9ICEhb3B0aW9ucy5mb3JtYXQxMmg7XG4gICAgICAgIHRoaXMuZnVsbERheXMgPSAhIW9wdGlvbnMuZnVsbERheXM7XG4gICAgICAgIHRoaXMubGFuZ3VhZ2UgPSBvcHRpb25zLmxhbmd1YWdlIHx8ICdlbic7XG4gICAgICAgIHRoaXMuaG91clN0ZXAgPSBvcHRpb25zLmhvdXJTdGVwIHx8IDE7XG4gICAgICAgIHRoaXMubWludXRlU3RlcCA9IG9wdGlvbnMubWludXRlU3RlcCB8fCAxO1xuICAgICAgICB0aGlzLnNlY29uZFN0ZXAgPSBvcHRpb25zLnNlY29uZFN0ZXAgfHwgMTtcbiAgICAgICAgdGhpcy5lbmFibGVkRGF0ZVJhbmdlcyA9IG9wdGlvbnMuZW5hYmxlZERhdGVSYW5nZXMgfHwgW107XG4gICAgfVxuXG4gICAgaXNEaXNhYmxlZCAoZGF0ZTogRGF0ZSkge1xuICAgICAgZm9yIChjb25zdCBkYXRlUmFuZ2Ugb2YgdGhpcy5lbmFibGVkRGF0ZVJhbmdlcykge1xuICAgICAgICBpZiAoZGF0ZSA+PSBkYXRlUmFuZ2Uuc3RhcnQgJiYgZGF0ZSA8PSBkYXRlUmFuZ2UuZW5kKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAhIXRoaXMuZW5hYmxlZERhdGVSYW5nZXMubGVuZ3RoO1xuICAgIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBEYXRlUmFuZ2Uge1xuICBzdGFydDogRGF0ZTtcbiAgZW5kOiBEYXRlO1xufVxuIl19