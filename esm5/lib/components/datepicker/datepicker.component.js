/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/datepicker/datepicker.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AirCalendar, AirLanguage, AirOptions } from '../../classes';
var DatepickerComponent = /** @class */ (function () {
    function DatepickerComponent() {
        this.setDate = new EventEmitter();
        this.setMonth = new EventEmitter();
        this.monthSelection = new EventEmitter();
    }
    DatepickerComponent.decorators = [
        { type: Component, args: [{
                    selector: '[datepicker]',
                    template: "\n    <nav class=\"datepicker--nav\">\n      <div class=\"datepicker--nav-action\" (click)=\"setMonth.emit(airCalendar.month - 1)\"><svg><path d=\"M 17,12 l -5,5 l 5,5\"></path></svg></div>\n\n      <div (click)=\"monthSelection.emit()\" class=\"datepicker--nav-title\">{{airLanguage.months[airCalendar.month]}}, <i>{{airCalendar.year}}</i></div>\n\n      <div class=\"datepicker--nav-action\" (click)=\"setMonth.emit(airCalendar.month + 1)\"><svg><path d=\"M 14,12 l 5,5 l -5,5\"></path></svg></div>\n    </nav>\n\n    <div class=\"datepicker--content\">\n      <div class=\"datepicker--days datepicker--body active\">\n        <div class=\"datepicker--days-names\">\n          <div *ngFor=\"let day of [0,1,2,3,4,5,6]\" class=\"datepicker--day-name\" [class.-weekend-]=\"day == 5 || day == 6\"\n          >{{airLanguage[airOptions.fullDays ? 'days' : 'daysMin'][day]}}</div>\n        </div>\n\n        <div class=\"datepicker--cells datepicker--cells-days\">\n          <div *ngFor=\"let airDay of airCalendar.airDays; let i=index\"\n               class=\"datepicker--cell datepicker--cell-day\"\n               [ngClass]=\"{ '-weekend-': airDay.weekend,\n                            '-other-month-': airDay.other,\n                            '-current-': airDay.current,\n                            '-selected-':\n                            airDate.getUTCFullYear() == airCalendar.year\n                            && airDate.getUTCMonth() == airCalendar.month\n                            && airDate.getUTCDate() == airDay.date\n                            && !airDay.other,\n                            '-disabled-': airDay.disabled }\"\n               (click)=\"setDate.emit(i)\">{{airDay.date}}</div>\n        </div>\n      </div>\n\n      <div *ngIf=\"airOptions.timepicker\"\n           timepicker\n           [airOptions]=\"airOptions\" [airCalendar]=\"airCalendar\" (setDate)=\"setDate.emit(null)\" class=\"datepicker--time -am-pm-\"></div>\n    </div>\n  "
                }] }
    ];
    DatepickerComponent.propDecorators = {
        airDate: [{ type: Input }],
        airOptions: [{ type: Input }],
        airCalendar: [{ type: Input }],
        airLanguage: [{ type: Input }],
        setDate: [{ type: Output }],
        setMonth: [{ type: Output }],
        monthSelection: [{ type: Output }]
    };
    return DatepickerComponent;
}());
export { DatepickerComponent };
if (false) {
    /** @type {?} */
    DatepickerComponent.prototype.airDate;
    /** @type {?} */
    DatepickerComponent.prototype.airOptions;
    /** @type {?} */
    DatepickerComponent.prototype.airCalendar;
    /** @type {?} */
    DatepickerComponent.prototype.airLanguage;
    /** @type {?} */
    DatepickerComponent.prototype.setDate;
    /** @type {?} */
    DatepickerComponent.prototype.setMonth;
    /** @type {?} */
    DatepickerComponent.prototype.monthSelection;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyMi1haXItZGF0ZXBpY2tlci8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUdyRTtJQUFBO1FBOENZLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBQ3JDLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBQ3RDLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztJQUN0RCxDQUFDOztnQkFqREEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4QixRQUFRLEVBQUUscTdEQW9DVDtpQkFDRjs7OzBCQUVFLEtBQUs7NkJBQ0wsS0FBSzs4QkFDTCxLQUFLOzhCQUNMLEtBQUs7MEJBRUwsTUFBTTsyQkFDTixNQUFNO2lDQUNOLE1BQU07O0lBQ1QsMEJBQUM7Q0FBQSxBQWpERCxJQWlEQztTQVRZLG1CQUFtQjs7O0lBQzlCLHNDQUF1Qjs7SUFDdkIseUNBQWdDOztJQUNoQywwQ0FBa0M7O0lBQ2xDLDBDQUFrQzs7SUFFbEMsc0NBQStDOztJQUMvQyx1Q0FBZ0Q7O0lBQ2hELDZDQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBaXJDYWxlbmRhciwgQWlyTGFuZ3VhZ2UsIEFpck9wdGlvbnMgfSBmcm9tICcuLi8uLi9jbGFzc2VzJztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbZGF0ZXBpY2tlcl0nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuYXYgY2xhc3M9XCJkYXRlcGlja2VyLS1uYXZcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJkYXRlcGlja2VyLS1uYXYtYWN0aW9uXCIgKGNsaWNrKT1cInNldE1vbnRoLmVtaXQoYWlyQ2FsZW5kYXIubW9udGggLSAxKVwiPjxzdmc+PHBhdGggZD1cIk0gMTcsMTIgbCAtNSw1IGwgNSw1XCI+PC9wYXRoPjwvc3ZnPjwvZGl2PlxuXG4gICAgICA8ZGl2IChjbGljayk9XCJtb250aFNlbGVjdGlvbi5lbWl0KClcIiBjbGFzcz1cImRhdGVwaWNrZXItLW5hdi10aXRsZVwiPnt7YWlyTGFuZ3VhZ2UubW9udGhzW2FpckNhbGVuZGFyLm1vbnRoXX19LCA8aT57e2FpckNhbGVuZGFyLnllYXJ9fTwvaT48L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cImRhdGVwaWNrZXItLW5hdi1hY3Rpb25cIiAoY2xpY2spPVwic2V0TW9udGguZW1pdChhaXJDYWxlbmRhci5tb250aCArIDEpXCI+PHN2Zz48cGF0aCBkPVwiTSAxNCwxMiBsIDUsNSBsIC01LDVcIj48L3BhdGg+PC9zdmc+PC9kaXY+XG4gICAgPC9uYXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZGF0ZXBpY2tlci0tY29udGVudFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImRhdGVwaWNrZXItLWRheXMgZGF0ZXBpY2tlci0tYm9keSBhY3RpdmVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRhdGVwaWNrZXItLWRheXMtbmFtZXNcIj5cbiAgICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBkYXkgb2YgWzAsMSwyLDMsNCw1LDZdXCIgY2xhc3M9XCJkYXRlcGlja2VyLS1kYXktbmFtZVwiIFtjbGFzcy4td2Vla2VuZC1dPVwiZGF5ID09IDUgfHwgZGF5ID09IDZcIlxuICAgICAgICAgID57e2Fpckxhbmd1YWdlW2Fpck9wdGlvbnMuZnVsbERheXMgPyAnZGF5cycgOiAnZGF5c01pbiddW2RheV19fTwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0ZXBpY2tlci0tY2VsbHMgZGF0ZXBpY2tlci0tY2VsbHMtZGF5c1wiPlxuICAgICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGFpckRheSBvZiBhaXJDYWxlbmRhci5haXJEYXlzOyBsZXQgaT1pbmRleFwiXG4gICAgICAgICAgICAgICBjbGFzcz1cImRhdGVwaWNrZXItLWNlbGwgZGF0ZXBpY2tlci0tY2VsbC1kYXlcIlxuICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieyAnLXdlZWtlbmQtJzogYWlyRGF5LndlZWtlbmQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJy1vdGhlci1tb250aC0nOiBhaXJEYXkub3RoZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJy1jdXJyZW50LSc6IGFpckRheS5jdXJyZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICctc2VsZWN0ZWQtJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhaXJEYXRlLmdldFVUQ0Z1bGxZZWFyKCkgPT0gYWlyQ2FsZW5kYXIueWVhclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIGFpckRhdGUuZ2V0VVRDTW9udGgoKSA9PSBhaXJDYWxlbmRhci5tb250aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIGFpckRhdGUuZ2V0VVRDRGF0ZSgpID09IGFpckRheS5kYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgIWFpckRheS5vdGhlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnLWRpc2FibGVkLSc6IGFpckRheS5kaXNhYmxlZCB9XCJcbiAgICAgICAgICAgICAgIChjbGljayk9XCJzZXREYXRlLmVtaXQoaSlcIj57e2FpckRheS5kYXRlfX08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiAqbmdJZj1cImFpck9wdGlvbnMudGltZXBpY2tlclwiXG4gICAgICAgICAgIHRpbWVwaWNrZXJcbiAgICAgICAgICAgW2Fpck9wdGlvbnNdPVwiYWlyT3B0aW9uc1wiIFthaXJDYWxlbmRhcl09XCJhaXJDYWxlbmRhclwiIChzZXREYXRlKT1cInNldERhdGUuZW1pdChudWxsKVwiIGNsYXNzPVwiZGF0ZXBpY2tlci0tdGltZSAtYW0tcG0tXCI+PC9kaXY+XG4gICAgPC9kaXY+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZXBpY2tlckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGFpckRhdGU6IERhdGU7XG4gIEBJbnB1dCgpIGFpck9wdGlvbnM6IEFpck9wdGlvbnM7XG4gIEBJbnB1dCgpIGFpckNhbGVuZGFyOiBBaXJDYWxlbmRhcjtcbiAgQElucHV0KCkgYWlyTGFuZ3VhZ2U6IEFpckxhbmd1YWdlO1xuXG4gIEBPdXRwdXQoKSBzZXREYXRlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG4gIEBPdXRwdXQoKSBzZXRNb250aCA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuICBAT3V0cHV0KCkgbW9udGhTZWxlY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG59XG4iXX0=