/**
 * @fileoverview added by tsickle
 * Generated from: lib/angular2-air-datepicker.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { AIR_LANGUAGES, AirCalendar, AirOptions } from './classes';
export class Angular2AirDatepickerComponent {
    constructor() {
        this.airChange = new EventEmitter();
        this.airMonthSelect = new EventEmitter();
        this.airYearSelect = new EventEmitter();
        this.mode = 'datepicker';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.airOptions = new AirOptions(this.airOptions || (/** @type {?} */ ({})));
        this.airLanguage = AIR_LANGUAGES.get(this.airOptions.language);
        this.airCalendar = new AirCalendar(this.airDate, this.airOptions);
    }
    /**
     * @param {?=} index
     * @return {?}
     */
    setDate(index) {
        if (this.airCalendar.airDays[index]) {
            if (this.airCalendar.airDays[index].disabled) {
                return;
            }
            this.airCalendar.selectDate(index);
        }
        /** @type {?} */
        const time = Date.UTC(this.airCalendar.year, this.airCalendar.month, this.airCalendar.date, this.airCalendar.hour, this.airCalendar.minute, this.airCalendar.second);
        if (!this.airOptions.isDisabled(new Date(time))) {
            this.airDate.setTime(time);
            this.airChange.emit(this.airDate);
        }
    }
}
Angular2AirDatepickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'air-datepicker',
                template: `
    <div class="datepicker-inline">
      <ng-container [ngSwitch]="mode">
        <div *ngSwitchCase="'datepicker'"
             datepicker
             [airDate]="airDate"
             [airOptions]="airOptions"
             [airCalendar]="airCalendar"
             [airLanguage]="airLanguage"
             (setDate)="setDate($event)"
             (setMonth)="airCalendar.setMonth($event); airMonthSelect.emit($event);"
             (monthSelection)="mode = 'monthpicker'"
             class="datepicker"></div>

        <div *ngSwitchCase="'monthpicker'"
             monthpicker
             [airCalendar]="airCalendar"
             [airLanguage]="airLanguage"
             (setMonth)="airCalendar.setMonth($event); airMonthSelect.emit($event); mode = 'datepicker';"
             (setYear)="airCalendar.setYear($event); airYearSelect.emit($event);"
             (yearSelection)="mode = 'yearpicker'"
             class="datepicker"></div>

        <div *ngSwitchCase="'yearpicker'"
             yearpicker
             [airCalendar]="airCalendar"
             (setYear)="airCalendar.setYear($event); airYearSelect.emit($event); mode = 'monthpicker';"
             class="datepicker"></div>
      </ng-container>
    </div>
  `,
                encapsulation: ViewEncapsulation.None,
                styles: [".datepicker--cells{display:flex;flex-wrap:wrap}.datepicker--cell{border-radius:4px;box-sizing:border-box;cursor:pointer;display:flex;position:relative;align-items:center;justify-content:center;height:32px;z-index:1}.datepicker--cell.-focus-,.datepicker--cell:hover{background:#f0f0f0}.datepicker--cell.-current-{color:#4eb5e6}.datepicker--cell.-current-.-focus-{color:#4a4a4a}.datepicker--cell.-current-.-in-range-{color:#4eb5e6}.datepicker--cell.-in-range-{background:rgba(92,196,239,.1);color:#4a4a4a;border-radius:0}.datepicker--cell.-in-range-.-focus-{background-color:rgba(92,196,239,.2)}.datepicker--cell.-disabled-{cursor:default;color:#aeaeae}.datepicker--cell.-disabled-.-focus-{color:#aeaeae}.datepicker--cell.-disabled-.-in-range-{color:#a1a1a1}.datepicker--cell.-disabled-.-current-.-focus-{color:#aeaeae}.datepicker--cell.-range-from-{border:1px solid rgba(92,196,239,.5);background-color:rgba(92,196,239,.1);border-radius:4px 0 0 4px}.datepicker--cell.-range-to-{border:1px solid rgba(92,196,239,.5);background-color:rgba(92,196,239,.1);border-radius:0 4px 4px 0}.datepicker--cell.-range-from-.-range-to-{border-radius:4px}.datepicker--cell.-selected-{color:#fff;border:none;background:#5cc4ef}.datepicker--cell.-selected-.-current-{color:#fff;background:#5cc4ef}.datepicker--cell.-selected-.-focus-{background:#45bced}.datepicker--cell:empty{cursor:default}.datepicker--days-names{display:flex;flex-wrap:wrap;margin:8px 0 3px}.datepicker--day-name{color:#ff9a19;display:flex;align-items:center;justify-content:center;flex:1;text-align:center;text-transform:uppercase;font-size:.8em}.datepicker--cell-day{width:14.28571%}.datepicker--cells-months{height:170px}.datepicker--cell-month{width:33.33%;height:25%}.datepicker--cells-years,.datepicker--years{height:170px}.datepicker--cell-year{width:25%;height:33.33%}.datepickers-container{position:absolute;left:0;top:0}@media print{.datepickers-container{display:none}}.datepicker{background:#fff;border:1px solid #dbdbdb;box-shadow:0 4px 12px rgba(0,0,0,.15);border-radius:4px;box-sizing:content-box;font-family:Tahoma,sans-serif;font-size:14px;color:#4a4a4a;width:250px;position:absolute;left:-100000px;opacity:0;transition:opacity .3s,transform .3s,left .3s;z-index:100}.datepicker.-from-top-{transform:translateY(-8px)}.datepicker.-from-right-{transform:translateX(8px)}.datepicker.-from-bottom-{transform:translateY(8px)}.datepicker.-from-left-{transform:translateX(-8px)}.datepicker.active{opacity:1;transform:translate(0);transition:opacity .3s,transform .3s,left}.datepicker-inline .datepicker{border-color:#d7d7d7;box-shadow:none;position:static;left:auto;right:auto;opacity:1;transform:none}.datepicker-inline .datepicker--pointer{display:none}.datepicker--content{box-sizing:content-box;padding:4px}.-only-timepicker- .datepicker--content{display:none}.datepicker--pointer{position:absolute;background:#fff;border-top:1px solid #dbdbdb;border-right:1px solid #dbdbdb;width:10px;height:10px;z-index:-1}.-top-center- .datepicker--pointer,.-top-left- .datepicker--pointer,.-top-right- .datepicker--pointer{top:calc(100% - 4px);transform:rotate(135deg)}.-right-bottom- .datepicker--pointer,.-right-center- .datepicker--pointer,.-right-top- .datepicker--pointer{right:calc(100% - 4px);transform:rotate(225deg)}.-bottom-center- .datepicker--pointer,.-bottom-left- .datepicker--pointer,.-bottom-right- .datepicker--pointer{bottom:calc(100% - 4px);transform:rotate(315deg)}.-left-bottom- .datepicker--pointer,.-left-center- .datepicker--pointer,.-left-top- .datepicker--pointer{left:calc(100% - 4px);transform:rotate(45deg)}.-bottom-left- .datepicker--pointer,.-top-left- .datepicker--pointer{left:10px}.-bottom-right- .datepicker--pointer,.-top-right- .datepicker--pointer{right:10px}.-bottom-center- .datepicker--pointer,.-top-center- .datepicker--pointer{left:calc(50% - 10px / 2)}.-left-top- .datepicker--pointer,.-right-top- .datepicker--pointer{top:10px}.-left-bottom- .datepicker--pointer,.-right-bottom- .datepicker--pointer{bottom:10px}.-left-center- .datepicker--pointer,.-right-center- .datepicker--pointer{top:calc(50% - 10px / 2)}.datepicker--body{display:none}.datepicker--body.active{display:block}.datepicker--nav{display:flex;justify-content:space-between;border-bottom:1px solid #efefef;min-height:32px;padding:4px}.-only-timepicker- .datepicker--nav{display:none}.datepicker--nav-action,.datepicker--nav-title{display:flex;cursor:pointer;align-items:center;justify-content:center}.datepicker--nav-action{width:32px;border-radius:4px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.datepicker--nav-action:hover{background:#f0f0f0}.datepicker--nav-action.-disabled-{visibility:hidden}.datepicker--nav-action svg{width:32px;height:32px}.datepicker--nav-action path{fill:none;stroke:#9c9c9c;stroke-width:2px}.datepicker--nav-title{border-radius:4px;padding:0 8px}.datepicker--nav-title i{font-style:normal;color:#9c9c9c;margin-left:5px}.datepicker--nav-title:hover{background:#f0f0f0}.datepicker--nav-title.-disabled-{cursor:default;background:0 0}.datepicker--buttons{display:flex;padding:4px;border-top:1px solid #efefef}.datepicker--button{color:#4eb5e6;cursor:pointer;border-radius:4px;flex:1;display:inline-flex;justify-content:center;align-items:center;height:32px}.datepicker--button:hover{color:#4a4a4a;background:#f0f0f0}.datepicker--time{border-top:1px solid #efefef;display:flex;align-items:center;padding:4px;position:relative}.datepicker--time.-am-pm- .datepicker--time-sliders{flex:0 1 138px;max-width:138px}.-only-timepicker- .datepicker--time{border-top:none}.datepicker--time-sliders{flex:0 1 153px;margin-right:10px;max-width:153px}.datepicker--time-label{display:none;font-size:12px}.datepicker--time-current{display:flex;align-items:center;flex:1;font-size:14px;text-align:center;margin:0 0 0 10px}.datepicker--time-current-colon{margin:0 2px 3px;line-height:1}.datepicker--time-current-hours,.datepicker--time-current-minutes,.datepicker--time-current-seconds{line-height:1;font-size:19px;font-family:\"Century Gothic\",CenturyGothic,AppleGothic,sans-serif;position:relative;z-index:1}.datepicker--time-current-hours:after,.datepicker--time-current-minutes:after,.datepicker--time-current-seconds:after{content:\"\";background:#f0f0f0;border-radius:4px;position:absolute;left:-2px;top:-3px;right:-2px;bottom:-2px;z-index:-1;opacity:0}.datepicker--time-current-hours.-focus-:after,.datepicker--time-current-minutes.-focus-:after,.datepicker--time-current-seconds.-focus-:after{opacity:1}.datepicker--time-current-ampm{text-transform:uppercase;align-self:flex-end;color:#9c9c9c;margin-left:6px;font-size:11px;margin-bottom:1px}.datepicker--time-row{display:flex;align-items:center;font-size:11px;height:17px;background:linear-gradient(to right,#dedede,#dedede) left 50%/100% 1px no-repeat}.datepicker--time-row:first-child{margin-bottom:4px}.datepicker--time-row input[type=range]{background:0 0;cursor:pointer;flex:1;height:100%;max-width:100%;padding:0;margin:0;-webkit-appearance:none}.datepicker--time-row input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;box-sizing:border-box;height:12px;width:12px;border-radius:3px;border:1px solid #dedede;background:#fff;cursor:pointer;transition:background .2s;margin-top:-6px}.datepicker--time-row input[type=range]::-ms-tooltip{display:none}.datepicker--time-row input[type=range]:hover::-webkit-slider-thumb{border-color:#b8b8b8}.datepicker--time-row input[type=range]:hover::-moz-range-thumb{border-color:#b8b8b8}.datepicker--time-row input[type=range]:hover::-ms-thumb{border-color:#b8b8b8}.datepicker--time-row input[type=range]:focus{outline:0}.datepicker--time-row input[type=range]:focus::-webkit-slider-thumb{background:#5cc4ef;border-color:#5cc4ef}.datepicker--time-row input[type=range]:focus::-moz-range-thumb{background:#5cc4ef;border-color:#5cc4ef}.datepicker--time-row input[type=range]:focus::-ms-thumb{background:#5cc4ef;border-color:#5cc4ef}.datepicker--time-row input[type=range]::-moz-range-thumb{box-sizing:border-box;height:12px;width:12px;border-radius:3px;border:1px solid #dedede;background:#fff;cursor:pointer;transition:background .2s}.datepicker--time-row input[type=range]::-ms-thumb{box-sizing:border-box;height:12px;width:12px;border-radius:3px;border:1px solid #dedede;background:#fff;cursor:pointer;transition:background .2s}.datepicker--time-row input[type=range]::-webkit-slider-runnable-track{border:none;height:1px;cursor:pointer;color:transparent;background:0 0}.datepicker--time-row input[type=range]::-moz-range-track{border:none;height:1px;cursor:pointer;color:transparent;background:0 0}.datepicker--time-row input[type=range]::-ms-track{border:none;height:1px;cursor:pointer;color:transparent;background:0 0}.datepicker--time-row input[type=range]::-ms-fill-lower{background:0 0}.datepicker--time-row input[type=range]::-ms-fill-upper{background:0 0}.datepicker--time-row span{padding:0 12px}.datepicker--time-icon{color:#9c9c9c;border:1px solid;border-radius:50%;font-size:16px;position:relative;margin:0 5px -1px 0;width:1em;height:1em}.datepicker--time-icon:after,.datepicker--time-icon:before{content:\"\";background:currentColor;position:absolute}.datepicker--time-icon:after{height:.4em;width:1px;left:calc(50% - 1px);top:calc(50% + 1px);transform:translateY(-100%)}.datepicker--time-icon:before{width:.4em;height:1px;top:calc(50% + 1px);left:calc(50% - 1px)}.datepicker--cell-day.-other-month-,.datepicker--cell-year.-other-decade-{color:#dedede}.datepicker--cell-day.-other-month-:hover,.datepicker--cell-year.-other-decade-:hover{color:#c5c5c5}.-disabled-.-focus-.datepicker--cell-day.-other-month-,.-disabled-.-focus-.datepicker--cell-year.-other-decade-{color:#dedede}.-selected-.datepicker--cell-day.-other-month-,.-selected-.datepicker--cell-year.-other-decade-{color:#fff;background:#a2ddf6}.-selected-.-focus-.datepicker--cell-day.-other-month-,.-selected-.-focus-.datepicker--cell-year.-other-decade-{background:#8ad5f4}.-in-range-.datepicker--cell-day.-other-month-,.-in-range-.datepicker--cell-year.-other-decade-{background-color:rgba(92,196,239,.1);color:#ccc}.-in-range-.-focus-.datepicker--cell-day.-other-month-,.-in-range-.-focus-.datepicker--cell-year.-other-decade-{background-color:rgba(92,196,239,.2)}.datepicker--cell-day.-other-month-:empty,.datepicker--cell-year.-other-decade-:empty{background:0 0;border:none}"]
            }] }
];
Angular2AirDatepickerComponent.propDecorators = {
    airOptions: [{ type: Input }],
    airDate: [{ type: Input }],
    airChange: [{ type: Output }],
    airMonthSelect: [{ type: Output }],
    airYearSelect: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    Angular2AirDatepickerComponent.prototype.airOptions;
    /** @type {?} */
    Angular2AirDatepickerComponent.prototype.airDate;
    /** @type {?} */
    Angular2AirDatepickerComponent.prototype.airChange;
    /** @type {?} */
    Angular2AirDatepickerComponent.prototype.airMonthSelect;
    /** @type {?} */
    Angular2AirDatepickerComponent.prototype.airYearSelect;
    /** @type {?} */
    Angular2AirDatepickerComponent.prototype.airLanguage;
    /** @type {?} */
    Angular2AirDatepickerComponent.prototype.airCalendar;
    /** @type {?} */
    Angular2AirDatepickerComponent.prototype.mode;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcjItYWlyLWRhdGVwaWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhcjItYWlyLWRhdGVwaWNrZXIvIiwic291cmNlcyI6WyJsaWIvYW5ndWxhcjItYWlyLWRhdGVwaWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVsRyxPQUFPLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBZSxVQUFVLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFzQ2hGLE1BQU0sT0FBTyw4QkFBOEI7SUFwQzNDO1FBd0NZLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBQ3JDLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUM1QyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFJckQsU0FBSSxHQUFHLFlBQVksQ0FBQztJQXVCdEIsQ0FBQzs7OztJQXJCQyxRQUFRO1FBQ04sSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLG1CQUFBLEVBQUUsRUFBYyxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLFdBQVcsR0FBRyxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNwRSxDQUFDOzs7OztJQUVELE9BQU8sQ0FBRSxLQUFjO1FBQ3JCLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDbkMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLEVBQUU7Z0JBQzVDLE9BQU87YUFDUjtZQUVELElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3BDOztjQUVLLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO1FBQ3BLLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO1lBQy9DLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzNCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNuQztJQUNILENBQUM7OztZQXBFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E4QlQ7Z0JBRUQsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2FBQ3RDOzs7eUJBRUUsS0FBSztzQkFDTCxLQUFLO3dCQUVMLE1BQU07NkJBQ04sTUFBTTs0QkFDTixNQUFNOzs7O0lBTFAsb0RBQWdDOztJQUNoQyxpREFBdUI7O0lBRXZCLG1EQUErQzs7SUFDL0Msd0RBQXNEOztJQUN0RCx1REFBcUQ7O0lBRXJELHFEQUF5Qjs7SUFDekIscURBQXlCOztJQUN6Qiw4Q0FBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBSVJfTEFOR1VBR0VTLCBBaXJDYWxlbmRhciwgQWlyTGFuZ3VhZ2UsIEFpck9wdGlvbnMgfSBmcm9tICcuL2NsYXNzZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhaXItZGF0ZXBpY2tlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImRhdGVwaWNrZXItaW5saW5lXCI+XG4gICAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJtb2RlXCI+XG4gICAgICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIidkYXRlcGlja2VyJ1wiXG4gICAgICAgICAgICAgZGF0ZXBpY2tlclxuICAgICAgICAgICAgIFthaXJEYXRlXT1cImFpckRhdGVcIlxuICAgICAgICAgICAgIFthaXJPcHRpb25zXT1cImFpck9wdGlvbnNcIlxuICAgICAgICAgICAgIFthaXJDYWxlbmRhcl09XCJhaXJDYWxlbmRhclwiXG4gICAgICAgICAgICAgW2Fpckxhbmd1YWdlXT1cImFpckxhbmd1YWdlXCJcbiAgICAgICAgICAgICAoc2V0RGF0ZSk9XCJzZXREYXRlKCRldmVudClcIlxuICAgICAgICAgICAgIChzZXRNb250aCk9XCJhaXJDYWxlbmRhci5zZXRNb250aCgkZXZlbnQpOyBhaXJNb250aFNlbGVjdC5lbWl0KCRldmVudCk7XCJcbiAgICAgICAgICAgICAobW9udGhTZWxlY3Rpb24pPVwibW9kZSA9ICdtb250aHBpY2tlcidcIlxuICAgICAgICAgICAgIGNsYXNzPVwiZGF0ZXBpY2tlclwiPjwvZGl2PlxuXG4gICAgICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIidtb250aHBpY2tlcidcIlxuICAgICAgICAgICAgIG1vbnRocGlja2VyXG4gICAgICAgICAgICAgW2FpckNhbGVuZGFyXT1cImFpckNhbGVuZGFyXCJcbiAgICAgICAgICAgICBbYWlyTGFuZ3VhZ2VdPVwiYWlyTGFuZ3VhZ2VcIlxuICAgICAgICAgICAgIChzZXRNb250aCk9XCJhaXJDYWxlbmRhci5zZXRNb250aCgkZXZlbnQpOyBhaXJNb250aFNlbGVjdC5lbWl0KCRldmVudCk7IG1vZGUgPSAnZGF0ZXBpY2tlcic7XCJcbiAgICAgICAgICAgICAoc2V0WWVhcik9XCJhaXJDYWxlbmRhci5zZXRZZWFyKCRldmVudCk7IGFpclllYXJTZWxlY3QuZW1pdCgkZXZlbnQpO1wiXG4gICAgICAgICAgICAgKHllYXJTZWxlY3Rpb24pPVwibW9kZSA9ICd5ZWFycGlja2VyJ1wiXG4gICAgICAgICAgICAgY2xhc3M9XCJkYXRlcGlja2VyXCI+PC9kaXY+XG5cbiAgICAgICAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwiJ3llYXJwaWNrZXInXCJcbiAgICAgICAgICAgICB5ZWFycGlja2VyXG4gICAgICAgICAgICAgW2FpckNhbGVuZGFyXT1cImFpckNhbGVuZGFyXCJcbiAgICAgICAgICAgICAoc2V0WWVhcik9XCJhaXJDYWxlbmRhci5zZXRZZWFyKCRldmVudCk7IGFpclllYXJTZWxlY3QuZW1pdCgkZXZlbnQpOyBtb2RlID0gJ21vbnRocGlja2VyJztcIlxuICAgICAgICAgICAgIGNsYXNzPVwiZGF0ZXBpY2tlclwiPjwvZGl2PlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlVXJsczogWycuL2FuZ3VsYXIyLWFpci1kYXRlcGlja2VyLmNvbXBvbmVudC5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgQW5ndWxhcjJBaXJEYXRlcGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgYWlyT3B0aW9uczogQWlyT3B0aW9ucztcbiAgQElucHV0KCkgYWlyRGF0ZTogRGF0ZTtcblxuICBAT3V0cHV0KCkgYWlyQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRlPigpO1xuICBAT3V0cHV0KCkgYWlyTW9udGhTZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcbiAgQE91dHB1dCgpIGFpclllYXJTZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICBhaXJMYW5ndWFnZTogQWlyTGFuZ3VhZ2U7XG4gIGFpckNhbGVuZGFyOiBBaXJDYWxlbmRhcjtcbiAgbW9kZSA9ICdkYXRlcGlja2VyJztcblxuICBuZ09uSW5pdCAoKSB7XG4gICAgdGhpcy5haXJPcHRpb25zID0gbmV3IEFpck9wdGlvbnModGhpcy5haXJPcHRpb25zIHx8IHt9IGFzIEFpck9wdGlvbnMpO1xuICAgIHRoaXMuYWlyTGFuZ3VhZ2UgPSBBSVJfTEFOR1VBR0VTLmdldCh0aGlzLmFpck9wdGlvbnMubGFuZ3VhZ2UpO1xuICAgIHRoaXMuYWlyQ2FsZW5kYXIgPSBuZXcgQWlyQ2FsZW5kYXIodGhpcy5haXJEYXRlLCB0aGlzLmFpck9wdGlvbnMpO1xuICB9XG5cbiAgc2V0RGF0ZSAoaW5kZXg/OiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5haXJDYWxlbmRhci5haXJEYXlzW2luZGV4XSkge1xuICAgICAgaWYgKHRoaXMuYWlyQ2FsZW5kYXIuYWlyRGF5c1tpbmRleF0uZGlzYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmFpckNhbGVuZGFyLnNlbGVjdERhdGUoaW5kZXgpO1xuICAgIH1cblxuICAgIGNvbnN0IHRpbWUgPSBEYXRlLlVUQyh0aGlzLmFpckNhbGVuZGFyLnllYXIsIHRoaXMuYWlyQ2FsZW5kYXIubW9udGgsIHRoaXMuYWlyQ2FsZW5kYXIuZGF0ZSwgdGhpcy5haXJDYWxlbmRhci5ob3VyLCB0aGlzLmFpckNhbGVuZGFyLm1pbnV0ZSwgdGhpcy5haXJDYWxlbmRhci5zZWNvbmQpO1xuICAgIGlmICghdGhpcy5haXJPcHRpb25zLmlzRGlzYWJsZWQobmV3IERhdGUodGltZSkpKSB7XG4gICAgICB0aGlzLmFpckRhdGUuc2V0VGltZSh0aW1lKTtcbiAgICAgIHRoaXMuYWlyQ2hhbmdlLmVtaXQodGhpcy5haXJEYXRlKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==