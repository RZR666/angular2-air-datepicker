/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/timepicker/timepicker.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AirCalendar, AirOptions } from '../../classes';
var TimepickerComponent = /** @class */ (function () {
    function TimepickerComponent() {
        this.setDate = new EventEmitter();
    }
    TimepickerComponent.decorators = [
        { type: Component, args: [{
                    selector: '[timepicker]',
                    template: "\n    <div class=\"datepicker--time-current\">\n            <span class=\"datepicker--time-current-hours\"\n            >{{('0' + (!airOptions.format12h ? airCalendar.hour : (airCalendar.hour <= 12 ? airCalendar.hour : airCalendar.hour - 12))).slice(-2)}}</span>\n      <span class=\"datepicker--time-current-colon\">:</span>\n      <span class=\"datepicker--time-current-minutes\">{{('0' + airCalendar.minute).slice(-2)}}</span>\n      <span class=\"datepicker--time-current-colon\">:</span>\n      <span class=\"datepicker--time-current-seconds\">{{('0' + airCalendar.second).slice(-2)}}</span>\n      <span *ngIf=\"airOptions.format12h\" class=\"datepicker--time-current-ampm\">{{airCalendar.hour < 12 ? 'AM' : 'PM'}}</span>\n    </div>\n\n    <div class=\"datepicker--time-sliders\">\n      <div class=\"datepicker--time-row\">\n        <input type=\"range\" name=\"hours\" min=\"0\" max=\"23\" step=\"{{airOptions.hourStep}}\" [(ngModel)]=\"airCalendar.hour\" (change)=\"setDate.emit()\">\n      </div>\n\n      <div class=\"datepicker--time-row\">\n        <input type=\"range\" name=\"minutes\" min=\"0\" max=\"59\" step=\"{{airOptions.minuteStep}}\" [(ngModel)]=\"airCalendar.minute\" (change)=\"setDate.emit()\">\n      </div>\n\n      <div class=\"datepicker--time-row\">\n        <input type=\"range\" name=\"seconds\" min=\"0\" max=\"59\" step=\"{{airOptions.secondStep}}\" [(ngModel)]=\"airCalendar.second\" (change)=\"setDate.emit()\">\n      </div>\n    </div>\n  "
                }] }
    ];
    TimepickerComponent.propDecorators = {
        airOptions: [{ type: Input }],
        airCalendar: [{ type: Input }],
        setDate: [{ type: Output }]
    };
    return TimepickerComponent;
}());
export { TimepickerComponent };
if (false) {
    /** @type {?} */
    TimepickerComponent.prototype.airOptions;
    /** @type {?} */
    TimepickerComponent.prototype.airCalendar;
    /** @type {?} */
    TimepickerComponent.prototype.setDate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyMi1haXItZGF0ZXBpY2tlci8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RpbWVwaWNrZXIvdGltZXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3hEO0lBQUE7UUFnQ1ksWUFBTyxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7SUFDL0MsQ0FBQzs7Z0JBakNBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsUUFBUSxFQUFFLHk4Q0F3QlQ7aUJBQ0Y7Ozs2QkFFRSxLQUFLOzhCQUNMLEtBQUs7MEJBRUwsTUFBTTs7SUFDVCwwQkFBQztDQUFBLEFBakNELElBaUNDO1NBTFksbUJBQW1COzs7SUFDOUIseUNBQWdDOztJQUNoQywwQ0FBa0M7O0lBRWxDLHNDQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBaXJDYWxlbmRhciwgQWlyT3B0aW9ucyB9IGZyb20gJy4uLy4uL2NsYXNzZXMnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1t0aW1lcGlja2VyXScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImRhdGVwaWNrZXItLXRpbWUtY3VycmVudFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkYXRlcGlja2VyLS10aW1lLWN1cnJlbnQtaG91cnNcIlxuICAgICAgICAgICAgPnt7KCcwJyArICghYWlyT3B0aW9ucy5mb3JtYXQxMmggPyBhaXJDYWxlbmRhci5ob3VyIDogKGFpckNhbGVuZGFyLmhvdXIgPD0gMTIgPyBhaXJDYWxlbmRhci5ob3VyIDogYWlyQ2FsZW5kYXIuaG91ciAtIDEyKSkpLnNsaWNlKC0yKX19PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJkYXRlcGlja2VyLS10aW1lLWN1cnJlbnQtY29sb25cIj46PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJkYXRlcGlja2VyLS10aW1lLWN1cnJlbnQtbWludXRlc1wiPnt7KCcwJyArIGFpckNhbGVuZGFyLm1pbnV0ZSkuc2xpY2UoLTIpfX08L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImRhdGVwaWNrZXItLXRpbWUtY3VycmVudC1jb2xvblwiPjo8L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImRhdGVwaWNrZXItLXRpbWUtY3VycmVudC1zZWNvbmRzXCI+e3soJzAnICsgYWlyQ2FsZW5kYXIuc2Vjb25kKS5zbGljZSgtMil9fTwvc3Bhbj5cbiAgICAgIDxzcGFuICpuZ0lmPVwiYWlyT3B0aW9ucy5mb3JtYXQxMmhcIiBjbGFzcz1cImRhdGVwaWNrZXItLXRpbWUtY3VycmVudC1hbXBtXCI+e3thaXJDYWxlbmRhci5ob3VyIDwgMTIgPyAnQU0nIDogJ1BNJ319PC9zcGFuPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImRhdGVwaWNrZXItLXRpbWUtc2xpZGVyc1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImRhdGVwaWNrZXItLXRpbWUtcm93XCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwicmFuZ2VcIiBuYW1lPVwiaG91cnNcIiBtaW49XCIwXCIgbWF4PVwiMjNcIiBzdGVwPVwie3thaXJPcHRpb25zLmhvdXJTdGVwfX1cIiBbKG5nTW9kZWwpXT1cImFpckNhbGVuZGFyLmhvdXJcIiAoY2hhbmdlKT1cInNldERhdGUuZW1pdCgpXCI+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cImRhdGVwaWNrZXItLXRpbWUtcm93XCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwicmFuZ2VcIiBuYW1lPVwibWludXRlc1wiIG1pbj1cIjBcIiBtYXg9XCI1OVwiIHN0ZXA9XCJ7e2Fpck9wdGlvbnMubWludXRlU3RlcH19XCIgWyhuZ01vZGVsKV09XCJhaXJDYWxlbmRhci5taW51dGVcIiAoY2hhbmdlKT1cInNldERhdGUuZW1pdCgpXCI+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cImRhdGVwaWNrZXItLXRpbWUtcm93XCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwicmFuZ2VcIiBuYW1lPVwic2Vjb25kc1wiIG1pbj1cIjBcIiBtYXg9XCI1OVwiIHN0ZXA9XCJ7e2Fpck9wdGlvbnMuc2Vjb25kU3RlcH19XCIgWyhuZ01vZGVsKV09XCJhaXJDYWxlbmRhci5zZWNvbmRcIiAoY2hhbmdlKT1cInNldERhdGUuZW1pdCgpXCI+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBUaW1lcGlja2VyQ29tcG9uZW50IHtcbiAgQElucHV0KCkgYWlyT3B0aW9uczogQWlyT3B0aW9ucztcbiAgQElucHV0KCkgYWlyQ2FsZW5kYXI6IEFpckNhbGVuZGFyO1xuXG4gIEBPdXRwdXQoKSBzZXREYXRlID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xufVxuIl19