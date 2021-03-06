/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/datepicker/datepicker.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AirCalendar, AirLanguage, AirOptions } from '../../classes';
export class DatepickerComponent {
    constructor() {
        this.setDate = new EventEmitter();
        this.setMonth = new EventEmitter();
        this.monthSelection = new EventEmitter();
    }
}
DatepickerComponent.decorators = [
    { type: Component, args: [{
                selector: '[datepicker]',
                template: `
    <nav class="datepicker--nav">
      <div class="datepicker--nav-action" (click)="setMonth.emit(airCalendar.month - 1)"><svg><path d="M 17,12 l -5,5 l 5,5"></path></svg></div>

      <div (click)="monthSelection.emit()" class="datepicker--nav-title">{{airLanguage.months[airCalendar.month]}}, <i>{{airCalendar.year}}</i></div>

      <div class="datepicker--nav-action" (click)="setMonth.emit(airCalendar.month + 1)"><svg><path d="M 14,12 l 5,5 l -5,5"></path></svg></div>
    </nav>

    <div class="datepicker--content">
      <div class="datepicker--days datepicker--body active">
        <div class="datepicker--days-names">
          <div *ngFor="let day of [0,1,2,3,4,5,6]" class="datepicker--day-name" [class.-weekend-]="day == 5 || day == 6"
          >{{airLanguage[airOptions.fullDays ? 'days' : 'daysMin'][day]}}</div>
        </div>

        <div class="datepicker--cells datepicker--cells-days">
          <div *ngFor="let airDay of airCalendar.airDays; let i=index"
               class="datepicker--cell datepicker--cell-day"
               [ngClass]="{ '-weekend-': airDay.weekend,
                            '-other-month-': airDay.other,
                            '-current-': airDay.current,
                            '-selected-':
                            airDate.getUTCFullYear() == airCalendar.year
                            && airDate.getUTCMonth() == airCalendar.month
                            && airDate.getUTCDate() == airDay.date
                            && !airDay.other,
                            '-disabled-': airDay.disabled }"
               (click)="setDate.emit(i)">{{airDay.date}}</div>
        </div>
      </div>

      <div *ngIf="airOptions.timepicker"
           timepicker
           [airOptions]="airOptions" [airCalendar]="airCalendar" (setDate)="setDate.emit(null)" class="datepicker--time -am-pm-"></div>
    </div>
  `
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyMi1haXItZGF0ZXBpY2tlci8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQTJDckUsTUFBTSxPQUFPLG1CQUFtQjtJQXhDaEM7UUE4Q1ksWUFBTyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDckMsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDdEMsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO0lBQ3RELENBQUM7OztZQWpEQSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBb0NUO2FBQ0Y7OztzQkFFRSxLQUFLO3lCQUNMLEtBQUs7MEJBQ0wsS0FBSzswQkFDTCxLQUFLO3NCQUVMLE1BQU07dUJBQ04sTUFBTTs2QkFDTixNQUFNOzs7O0lBUFAsc0NBQXVCOztJQUN2Qix5Q0FBZ0M7O0lBQ2hDLDBDQUFrQzs7SUFDbEMsMENBQWtDOztJQUVsQyxzQ0FBK0M7O0lBQy9DLHVDQUFnRDs7SUFDaEQsNkNBQW9EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFpckNhbGVuZGFyLCBBaXJMYW5ndWFnZSwgQWlyT3B0aW9ucyB9IGZyb20gJy4uLy4uL2NsYXNzZXMnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1tkYXRlcGlja2VyXScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5hdiBjbGFzcz1cImRhdGVwaWNrZXItLW5hdlwiPlxuICAgICAgPGRpdiBjbGFzcz1cImRhdGVwaWNrZXItLW5hdi1hY3Rpb25cIiAoY2xpY2spPVwic2V0TW9udGguZW1pdChhaXJDYWxlbmRhci5tb250aCAtIDEpXCI+PHN2Zz48cGF0aCBkPVwiTSAxNywxMiBsIC01LDUgbCA1LDVcIj48L3BhdGg+PC9zdmc+PC9kaXY+XG5cbiAgICAgIDxkaXYgKGNsaWNrKT1cIm1vbnRoU2VsZWN0aW9uLmVtaXQoKVwiIGNsYXNzPVwiZGF0ZXBpY2tlci0tbmF2LXRpdGxlXCI+e3thaXJMYW5ndWFnZS5tb250aHNbYWlyQ2FsZW5kYXIubW9udGhdfX0sIDxpPnt7YWlyQ2FsZW5kYXIueWVhcn19PC9pPjwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiZGF0ZXBpY2tlci0tbmF2LWFjdGlvblwiIChjbGljayk9XCJzZXRNb250aC5lbWl0KGFpckNhbGVuZGFyLm1vbnRoICsgMSlcIj48c3ZnPjxwYXRoIGQ9XCJNIDE0LDEyIGwgNSw1IGwgLTUsNVwiPjwvcGF0aD48L3N2Zz48L2Rpdj5cbiAgICA8L25hdj5cblxuICAgIDxkaXYgY2xhc3M9XCJkYXRlcGlja2VyLS1jb250ZW50XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZGF0ZXBpY2tlci0tZGF5cyBkYXRlcGlja2VyLS1ib2R5IGFjdGl2ZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0ZXBpY2tlci0tZGF5cy1uYW1lc1wiPlxuICAgICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGRheSBvZiBbMCwxLDIsMyw0LDUsNl1cIiBjbGFzcz1cImRhdGVwaWNrZXItLWRheS1uYW1lXCIgW2NsYXNzLi13ZWVrZW5kLV09XCJkYXkgPT0gNSB8fCBkYXkgPT0gNlwiXG4gICAgICAgICAgPnt7YWlyTGFuZ3VhZ2VbYWlyT3B0aW9ucy5mdWxsRGF5cyA/ICdkYXlzJyA6ICdkYXlzTWluJ11bZGF5XX19PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJkYXRlcGlja2VyLS1jZWxscyBkYXRlcGlja2VyLS1jZWxscy1kYXlzXCI+XG4gICAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgYWlyRGF5IG9mIGFpckNhbGVuZGFyLmFpckRheXM7IGxldCBpPWluZGV4XCJcbiAgICAgICAgICAgICAgIGNsYXNzPVwiZGF0ZXBpY2tlci0tY2VsbCBkYXRlcGlja2VyLS1jZWxsLWRheVwiXG4gICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7ICctd2Vla2VuZC0nOiBhaXJEYXkud2Vla2VuZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnLW90aGVyLW1vbnRoLSc6IGFpckRheS5vdGhlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnLWN1cnJlbnQtJzogYWlyRGF5LmN1cnJlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJy1zZWxlY3RlZC0nOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFpckRhdGUuZ2V0VVRDRnVsbFllYXIoKSA9PSBhaXJDYWxlbmRhci55ZWFyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgYWlyRGF0ZS5nZXRVVENNb250aCgpID09IGFpckNhbGVuZGFyLm1vbnRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgYWlyRGF0ZS5nZXRVVENEYXRlKCkgPT0gYWlyRGF5LmRhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiAhYWlyRGF5Lm90aGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICctZGlzYWJsZWQtJzogYWlyRGF5LmRpc2FibGVkIH1cIlxuICAgICAgICAgICAgICAgKGNsaWNrKT1cInNldERhdGUuZW1pdChpKVwiPnt7YWlyRGF5LmRhdGV9fTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2ICpuZ0lmPVwiYWlyT3B0aW9ucy50aW1lcGlja2VyXCJcbiAgICAgICAgICAgdGltZXBpY2tlclxuICAgICAgICAgICBbYWlyT3B0aW9uc109XCJhaXJPcHRpb25zXCIgW2FpckNhbGVuZGFyXT1cImFpckNhbGVuZGFyXCIgKHNldERhdGUpPVwic2V0RGF0ZS5lbWl0KG51bGwpXCIgY2xhc3M9XCJkYXRlcGlja2VyLS10aW1lIC1hbS1wbS1cIj48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlcGlja2VyQ29tcG9uZW50IHtcbiAgQElucHV0KCkgYWlyRGF0ZTogRGF0ZTtcbiAgQElucHV0KCkgYWlyT3B0aW9uczogQWlyT3B0aW9ucztcbiAgQElucHV0KCkgYWlyQ2FsZW5kYXI6IEFpckNhbGVuZGFyO1xuICBASW5wdXQoKSBhaXJMYW5ndWFnZTogQWlyTGFuZ3VhZ2U7XG5cbiAgQE91dHB1dCgpIHNldERhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcbiAgQE91dHB1dCgpIHNldE1vbnRoID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG4gIEBPdXRwdXQoKSBtb250aFNlbGVjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbn1cbiJdfQ==