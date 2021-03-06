/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/monthpicker/monthpicker.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AirCalendar, AirLanguage } from '../../classes';
var MonthpickerComponent = /** @class */ (function () {
    function MonthpickerComponent() {
        this.setMonth = new EventEmitter();
        this.setYear = new EventEmitter();
        this.yearSelection = new EventEmitter();
    }
    MonthpickerComponent.decorators = [
        { type: Component, args: [{
                    selector: '[monthpicker]',
                    template: "\n    <nav class=\"datepicker--nav\">\n      <div class=\"datepicker--nav-action\" (click)=\"setYear.emit(airCalendar.year - 1)\"><svg><path d=\"M 17,12 l -5,5 l 5,5\"></path></svg></div>\n\n      <div (click)=\"yearSelection.emit()\" class=\"datepicker--nav-title\">{{airCalendar.year}}</div>\n\n      <div class=\"datepicker--nav-action\" (click)=\"setYear.emit(airCalendar.year + 1)\"><svg><path d=\"M 14,12 l 5,5 l -5,5\"></path></svg></div>\n    </nav>\n\n    <div class=\"datepicker--content\">\n      <div class=\"datepicker--months datepicker--body active\">\n        <div class=\"datepicker--cells datepicker--cells-months\">\n          <div *ngFor=\"let month of airLanguage.months; let i=index\"\n               (click)=\"setMonth.emit(i)\"\n               class=\"datepicker--cell datepicker--cell-month\"\n               [ngClass]=\"{ '-current-': airCalendar.year == airCalendar.currentYear && i == airCalendar.currentMonth }\">{{month}}</div>\n        </div>\n      </div>\n    </div>\n  "
                }] }
    ];
    MonthpickerComponent.propDecorators = {
        airCalendar: [{ type: Input }],
        airLanguage: [{ type: Input }],
        setMonth: [{ type: Output }],
        setYear: [{ type: Output }],
        yearSelection: [{ type: Output }]
    };
    return MonthpickerComponent;
}());
export { MonthpickerComponent };
if (false) {
    /** @type {?} */
    MonthpickerComponent.prototype.airCalendar;
    /** @type {?} */
    MonthpickerComponent.prototype.airLanguage;
    /** @type {?} */
    MonthpickerComponent.prototype.setMonth;
    /** @type {?} */
    MonthpickerComponent.prototype.setYear;
    /** @type {?} */
    MonthpickerComponent.prototype.yearSelection;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGhwaWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhcjItYWlyLWRhdGVwaWNrZXIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9tb250aHBpY2tlci9tb250aHBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3pEO0lBQUE7UUEyQlksYUFBUSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDdEMsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDckMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO0lBQ3JELENBQUM7O2dCQTlCQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFFBQVEsRUFBRSw2K0JBbUJUO2lCQUNGOzs7OEJBRUUsS0FBSzs4QkFDTCxLQUFLOzJCQUVMLE1BQU07MEJBQ04sTUFBTTtnQ0FDTixNQUFNOztJQUNULDJCQUFDO0NBQUEsQUE5QkQsSUE4QkM7U0FQWSxvQkFBb0I7OztJQUMvQiwyQ0FBa0M7O0lBQ2xDLDJDQUFrQzs7SUFFbEMsd0NBQWdEOztJQUNoRCx1Q0FBK0M7O0lBQy9DLDZDQUFtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBaXJDYWxlbmRhciwgQWlyTGFuZ3VhZ2UgfSBmcm9tICcuLi8uLi9jbGFzc2VzJztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbbW9udGhwaWNrZXJdJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmF2IGNsYXNzPVwiZGF0ZXBpY2tlci0tbmF2XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZGF0ZXBpY2tlci0tbmF2LWFjdGlvblwiIChjbGljayk9XCJzZXRZZWFyLmVtaXQoYWlyQ2FsZW5kYXIueWVhciAtIDEpXCI+PHN2Zz48cGF0aCBkPVwiTSAxNywxMiBsIC01LDUgbCA1LDVcIj48L3BhdGg+PC9zdmc+PC9kaXY+XG5cbiAgICAgIDxkaXYgKGNsaWNrKT1cInllYXJTZWxlY3Rpb24uZW1pdCgpXCIgY2xhc3M9XCJkYXRlcGlja2VyLS1uYXYtdGl0bGVcIj57e2FpckNhbGVuZGFyLnllYXJ9fTwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiZGF0ZXBpY2tlci0tbmF2LWFjdGlvblwiIChjbGljayk9XCJzZXRZZWFyLmVtaXQoYWlyQ2FsZW5kYXIueWVhciArIDEpXCI+PHN2Zz48cGF0aCBkPVwiTSAxNCwxMiBsIDUsNSBsIC01LDVcIj48L3BhdGg+PC9zdmc+PC9kaXY+XG4gICAgPC9uYXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZGF0ZXBpY2tlci0tY29udGVudFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImRhdGVwaWNrZXItLW1vbnRocyBkYXRlcGlja2VyLS1ib2R5IGFjdGl2ZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0ZXBpY2tlci0tY2VsbHMgZGF0ZXBpY2tlci0tY2VsbHMtbW9udGhzXCI+XG4gICAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgbW9udGggb2YgYWlyTGFuZ3VhZ2UubW9udGhzOyBsZXQgaT1pbmRleFwiXG4gICAgICAgICAgICAgICAoY2xpY2spPVwic2V0TW9udGguZW1pdChpKVwiXG4gICAgICAgICAgICAgICBjbGFzcz1cImRhdGVwaWNrZXItLWNlbGwgZGF0ZXBpY2tlci0tY2VsbC1tb250aFwiXG4gICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7ICctY3VycmVudC0nOiBhaXJDYWxlbmRhci55ZWFyID09IGFpckNhbGVuZGFyLmN1cnJlbnRZZWFyICYmIGkgPT0gYWlyQ2FsZW5kYXIuY3VycmVudE1vbnRoIH1cIj57e21vbnRofX08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBNb250aHBpY2tlckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGFpckNhbGVuZGFyOiBBaXJDYWxlbmRhcjtcbiAgQElucHV0KCkgYWlyTGFuZ3VhZ2U6IEFpckxhbmd1YWdlO1xuXG4gIEBPdXRwdXQoKSBzZXRNb250aCA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuICBAT3V0cHV0KCkgc2V0WWVhciA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuICBAT3V0cHV0KCkgeWVhclNlbGVjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbn1cbiJdfQ==