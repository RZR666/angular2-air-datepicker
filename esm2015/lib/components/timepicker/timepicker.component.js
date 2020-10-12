/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/timepicker/timepicker.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AirCalendar, AirOptions } from '../../classes';
export class TimepickerComponent {
    constructor() {
        this.setDate = new EventEmitter();
    }
}
TimepickerComponent.decorators = [
    { type: Component, args: [{
                selector: '[timepicker]',
                template: `
    <div class="datepicker--time-current">
            <span class="datepicker--time-current-hours"
            >{{('0' + (!airOptions.format12h ? airCalendar.hour : (airCalendar.hour <= 12 ? airCalendar.hour : airCalendar.hour - 12))).slice(-2)}}</span>
      <span class="datepicker--time-current-colon">:</span>
      <span class="datepicker--time-current-minutes">{{('0' + airCalendar.minute).slice(-2)}}</span>
      <span class="datepicker--time-current-colon">:</span>
      <span class="datepicker--time-current-seconds">{{('0' + airCalendar.second).slice(-2)}}</span>
      <span *ngIf="airOptions.format12h" class="datepicker--time-current-ampm">{{airCalendar.hour < 12 ? 'AM' : 'PM'}}</span>
    </div>

    <div class="datepicker--time-sliders">
      <div class="datepicker--time-row">
        <input type="range" name="hours" min="0" max="23" step="{{airOptions.hourStep}}" [(ngModel)]="airCalendar.hour" (change)="setDate.emit()">
      </div>

      <div class="datepicker--time-row">
        <input type="range" name="minutes" min="0" max="59" step="{{airOptions.minuteStep}}" [(ngModel)]="airCalendar.minute" (change)="setDate.emit()">
      </div>

      <div class="datepicker--time-row">
        <input type="range" name="seconds" min="0" max="59" step="{{airOptions.secondStep}}" [(ngModel)]="airCalendar.second" (change)="setDate.emit()">
      </div>
    </div>
  `
            }] }
];
TimepickerComponent.propDecorators = {
    airOptions: [{ type: Input }],
    airCalendar: [{ type: Input }],
    setDate: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    TimepickerComponent.prototype.airOptions;
    /** @type {?} */
    TimepickerComponent.prototype.airCalendar;
    /** @type {?} */
    TimepickerComponent.prototype.setDate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyMi1haXItZGF0ZXBpY2tlci8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RpbWVwaWNrZXIvdGltZXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBK0J4RCxNQUFNLE9BQU8sbUJBQW1CO0lBNUJoQztRQWdDWSxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztJQUMvQyxDQUFDOzs7WUFqQ0EsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCVDthQUNGOzs7eUJBRUUsS0FBSzswQkFDTCxLQUFLO3NCQUVMLE1BQU07Ozs7SUFIUCx5Q0FBZ0M7O0lBQ2hDLDBDQUFrQzs7SUFFbEMsc0NBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFpckNhbGVuZGFyLCBBaXJPcHRpb25zIH0gZnJvbSAnLi4vLi4vY2xhc3Nlcyc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnW3RpbWVwaWNrZXJdJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiZGF0ZXBpY2tlci0tdGltZS1jdXJyZW50XCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRhdGVwaWNrZXItLXRpbWUtY3VycmVudC1ob3Vyc1wiXG4gICAgICAgICAgICA+e3soJzAnICsgKCFhaXJPcHRpb25zLmZvcm1hdDEyaCA/IGFpckNhbGVuZGFyLmhvdXIgOiAoYWlyQ2FsZW5kYXIuaG91ciA8PSAxMiA/IGFpckNhbGVuZGFyLmhvdXIgOiBhaXJDYWxlbmRhci5ob3VyIC0gMTIpKSkuc2xpY2UoLTIpfX08L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImRhdGVwaWNrZXItLXRpbWUtY3VycmVudC1jb2xvblwiPjo8L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImRhdGVwaWNrZXItLXRpbWUtY3VycmVudC1taW51dGVzXCI+e3soJzAnICsgYWlyQ2FsZW5kYXIubWludXRlKS5zbGljZSgtMil9fTwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZGF0ZXBpY2tlci0tdGltZS1jdXJyZW50LWNvbG9uXCI+Ojwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZGF0ZXBpY2tlci0tdGltZS1jdXJyZW50LXNlY29uZHNcIj57eygnMCcgKyBhaXJDYWxlbmRhci5zZWNvbmQpLnNsaWNlKC0yKX19PC9zcGFuPlxuICAgICAgPHNwYW4gKm5nSWY9XCJhaXJPcHRpb25zLmZvcm1hdDEyaFwiIGNsYXNzPVwiZGF0ZXBpY2tlci0tdGltZS1jdXJyZW50LWFtcG1cIj57e2FpckNhbGVuZGFyLmhvdXIgPCAxMiA/ICdBTScgOiAnUE0nfX08L3NwYW4+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZGF0ZXBpY2tlci0tdGltZS1zbGlkZXJzXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZGF0ZXBpY2tlci0tdGltZS1yb3dcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJyYW5nZVwiIG5hbWU9XCJob3Vyc1wiIG1pbj1cIjBcIiBtYXg9XCIyM1wiIHN0ZXA9XCJ7e2Fpck9wdGlvbnMuaG91clN0ZXB9fVwiIFsobmdNb2RlbCldPVwiYWlyQ2FsZW5kYXIuaG91clwiIChjaGFuZ2UpPVwic2V0RGF0ZS5lbWl0KClcIj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiZGF0ZXBpY2tlci0tdGltZS1yb3dcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJyYW5nZVwiIG5hbWU9XCJtaW51dGVzXCIgbWluPVwiMFwiIG1heD1cIjU5XCIgc3RlcD1cInt7YWlyT3B0aW9ucy5taW51dGVTdGVwfX1cIiBbKG5nTW9kZWwpXT1cImFpckNhbGVuZGFyLm1pbnV0ZVwiIChjaGFuZ2UpPVwic2V0RGF0ZS5lbWl0KClcIj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiZGF0ZXBpY2tlci0tdGltZS1yb3dcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJyYW5nZVwiIG5hbWU9XCJzZWNvbmRzXCIgbWluPVwiMFwiIG1heD1cIjU5XCIgc3RlcD1cInt7YWlyT3B0aW9ucy5zZWNvbmRTdGVwfX1cIiBbKG5nTW9kZWwpXT1cImFpckNhbGVuZGFyLnNlY29uZFwiIChjaGFuZ2UpPVwic2V0RGF0ZS5lbWl0KClcIj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIFRpbWVwaWNrZXJDb21wb25lbnQge1xuICBASW5wdXQoKSBhaXJPcHRpb25zOiBBaXJPcHRpb25zO1xuICBASW5wdXQoKSBhaXJDYWxlbmRhcjogQWlyQ2FsZW5kYXI7XG5cbiAgQE91dHB1dCgpIHNldERhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG59XG4iXX0=