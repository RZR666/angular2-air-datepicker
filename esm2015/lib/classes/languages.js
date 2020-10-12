/**
 * @fileoverview added by tsickle
 * Generated from: lib/classes/languages.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class AirLanguage {
    /**
     * @param {?} days
     * @param {?} daysMin
     * @param {?} months
     */
    constructor(days, daysMin, months) {
        this.days = days;
        this.daysMin = daysMin;
        this.months = months;
    }
}
if (false) {
    /** @type {?} */
    AirLanguage.prototype.days;
    /** @type {?} */
    AirLanguage.prototype.daysMin;
    /** @type {?} */
    AirLanguage.prototype.months;
}
/** @type {?} */
export const AIR_LANGUAGES = new Map([
    (/** @type {?} */ (['cs', new AirLanguage(['Pondělí', 'Úterý', 'Středa', 'Čtvrtek', 'Pátek', 'Sobota', 'Neděle'], ['Po', 'Út', 'St', 'Čt', 'Pá', 'So', 'Ne'], ['Leden', 'Únor', 'Březen', 'Duben', 'Květen', 'Červen', 'Červenec', 'Srpen', 'Září', 'Říjen', 'Listopad', 'Prosinec'])])),
    (/** @type {?} */ (['da', new AirLanguage(['Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag', 'Søndag'], ['Ma', 'Ti', 'On', 'To', 'Fr', 'Lø', 'Sø'], ['Januar', 'Februar', 'Marts', 'April', 'Maj', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'December'])])),
    (/** @type {?} */ (['de', new AirLanguage(['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag'], ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'], ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'])])),
    (/** @type {?} */ (['en', new AirLanguage(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'], ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'])])),
    (/** @type {?} */ (['es', new AirLanguage(['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'], ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa', 'Do'], ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Augosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'])])),
    (/** @type {?} */ (['fi', new AirLanguage(['Maanantai', 'Tiistai', 'Keskiviikko', 'Torstai', 'Perjantai', 'Lauantai', 'Sunnuntai'], ['Ma', 'Ti', 'Ke', 'To', 'Pe', 'La', 'Su'], ['Tammikuu', 'Helmikuu', 'Maaliskuu', 'Huhtikuu', 'Toukokuu', 'Kesäkuu', 'Heinäkuu', 'Elokuu', 'Syyskuu', 'Lokakuu', 'Marraskuu', 'Joulukuu'])])),
    (/** @type {?} */ (['fr', new AirLanguage(['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'], ['Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa', 'Di'], ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Decembre'])])),
    (/** @type {?} */ (['hu', new AirLanguage(['Hétfő', 'Kedd', 'Szerda', 'Csütörtök', 'Péntek', 'Szombat', 'Vasárnap'], ['H', 'K', 'Sz', 'Cs', 'P', 'Sz', 'V'], ['Január', 'Február', 'Március', 'Április', 'Május', 'Június', 'Július', 'Augusztus', 'Szeptember', 'Október', 'November', 'December'])])),
    (/** @type {?} */ (['it', new AirLanguage(['Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato', 'Domenica'], ['Lu', 'Ma', 'Me', 'Gi', 'Ve', 'Sa', 'Do'], ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'])])),
    (/** @type {?} */ (['jp', new AirLanguage(['月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日', '日曜日'], ['月', '火', '水', '木', '金', '土', '日'], ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'])])),
    (/** @type {?} */ (['nl', new AirLanguage(['maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag', 'zondag'], ['ma', 'di', 'wo', 'do', 'vr', 'za', 'zo'], ['Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December'])])),
    (/** @type {?} */ (['pl', new AirLanguage(['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela'], ['Pn', 'Wt', 'Śr', 'Czw', 'Pt', 'So', 'Nd'], ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'])])),
    (/** @type {?} */ (['pt', new AirLanguage(['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'], ['Se', 'Te', 'Qa', 'Qi', 'Sx', 'Sa', 'Do'], ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'])])),
    (/** @type {?} */ (['ro', new AirLanguage(['Luni', 'Marţi', 'Miercuri', 'Joi', 'Vineri', 'Sâmbătă', 'Duminică'], ['Lu', 'Ma', 'Mi', 'Jo', 'Vi', 'Sa', 'Du'], ['Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie', 'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie'])])),
    (/** @type {?} */ (['ru', new AirLanguage(['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'], ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'], ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'])])),
    (/** @type {?} */ (['sk', new AirLanguage(['Pondelok', 'Utorok', 'Streda', 'Štvrtok', 'Piatok', 'Sobota', 'Nedeľa'], ['Po', 'Ut', 'St', 'Št', 'Pi', 'So', 'Ne'], ['Január', 'Február', 'Marec', 'Apríl', 'Máj', 'Jún', 'Júl', 'August', 'September', 'Október', 'November', 'December'])])),
    (/** @type {?} */ (['zh', new AirLanguage(['周一', '周二', '周三', '周四', '周五', '周六', '周日'], ['一', '二', '三', '四', '五', '六', '日'], ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'])])),
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2VzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhcjItYWlyLWRhdGVwaWNrZXIvIiwic291cmNlcyI6WyJsaWIvY2xhc3Nlcy9sYW5ndWFnZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxNQUFNLE9BQU8sV0FBVzs7Ozs7O0lBS3BCLFlBQWEsSUFBbUIsRUFBRSxPQUFzQixFQUFFLE1BQXFCO1FBQzNFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3pCLENBQUM7Q0FDSjs7O0lBVEcsMkJBQW9COztJQUNwQiw4QkFBdUI7O0lBQ3ZCLDZCQUFzQjs7O0FBUzFCLE1BQU0sT0FBTyxhQUFhLEdBQTZCLElBQUksR0FBRyxDQUFDO0lBQzNELG1CQUFBLENBQUMsSUFBSSxFQUFFLElBQUksV0FBVyxDQUNsQixDQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBRSxFQUN4RSxDQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBRSxFQUM1QyxDQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFFLENBQzNILENBQUMsRUFBeUI7SUFFM0IsbUJBQUEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxXQUFXLENBQ2xCLENBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFFLEVBQzFFLENBQUUsSUFB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QUUsQ0FDL0UsQ0FBQyxFQUF5QjtDQUU5QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEFpckxhbmd1YWdlIHtcbiAgICBkYXlzOiBBcnJheTxzdHJpbmc+O1xuICAgIGRheXNNaW46IEFycmF5PHN0cmluZz47XG4gICAgbW9udGhzOiBBcnJheTxzdHJpbmc+O1xuXG4gICAgY29uc3RydWN0b3IgKGRheXM6IEFycmF5PHN0cmluZz4sIGRheXNNaW46IEFycmF5PHN0cmluZz4sIG1vbnRoczogQXJyYXk8c3RyaW5nPikge1xuICAgICAgICB0aGlzLmRheXMgPSBkYXlzO1xuICAgICAgICB0aGlzLmRheXNNaW4gPSBkYXlzTWluO1xuICAgICAgICB0aGlzLm1vbnRocyA9IG1vbnRocztcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBBSVJfTEFOR1VBR0VTOiBNYXA8c3RyaW5nLCBBaXJMYW5ndWFnZT4gPSBuZXcgTWFwKFtcbiAgICBbJ2NzJywgbmV3IEFpckxhbmd1YWdlKFxuICAgICAgICBbICdQb25kxJtsw60nLCAnw5p0ZXLDvScsICdTdMWZZWRhJywgJ8SMdHZydGVrJywgJ1DDoXRlaycsICdTb2JvdGEnLCAnTmVkxJtsZScgXSxcbiAgICAgICAgWyAnUG8nLCAnw5p0JywgJ1N0JywgJ8SMdCcsICdQw6EnLCAnU28nLCAnTmUnIF0sXG4gICAgICAgIFsgJ0xlZGVuJywgJ8Oabm9yJywgJ0LFmWV6ZW4nLCAnRHViZW4nLCAnS3bEm3RlbicsICfEjGVydmVuJywgJ8SMZXJ2ZW5lYycsICdTcnBlbicsICdaw6HFmcOtJywgJ8WYw61qZW4nLCAnTGlzdG9wYWQnLCAnUHJvc2luZWMnIF1cbiAgICApXSBhcyBbc3RyaW5nLCBBaXJMYW5ndWFnZV0sXG5cbiAgICBbJ2RhJywgbmV3IEFpckxhbmd1YWdlKFxuICAgICAgICBbICdNYW5kYWcnLCAnVGlyc2RhZycsICdPbnNkYWcnLCAnVG9yc2RhZycsICdGcmVkYWcnLCAnTMO4cmRhZycsICdTw7huZGFnJyBdLFxuICAgICAgICBbICdNYScsICdUaScsICdPbicsICdUbycsICdGcicsICdMw7gnLCAnU8O4JyBdLFxuICAgICAgICBbICdKYW51YXInLCAnRmVicnVhcicsICdNYXJ0cycsICdBcHJpbCcsICdNYWonLCAnSnVuaScsICdKdWxpJywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2t0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlcicgXVxuICAgICldIGFzIFtzdHJpbmcsIEFpckxhbmd1YWdlXSxcblxuICAgIFsnZGUnLCBuZXcgQWlyTGFuZ3VhZ2UoXG4gICAgICAgIFsgJ01vbnRhZycsICdEaWVuc3RhZycsICdNaXR0d29jaCcsICdEb25uZXJzdGFnJywgJ0ZyZWl0YWcnLCAnU2Ftc3RhZycsICdTb25udGFnJyBdLFxuICAgICAgICBbICdNbycsICdEaScsICdNaScsICdEbycsICdGcicsICdTYScsICdTbycgXSxcbiAgICAgICAgWyAnSmFudWFyJywgJ0ZlYnJ1YXInLCAnTcOkcnonLCAnQXByaWwnLCAnTWFpJywgJ0p1bmknLCAnSnVsaScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09rdG9iZXInLCAnTm92ZW1iZXInLCAnRGV6ZW1iZXInIF1cbiAgICApXSBhcyBbc3RyaW5nLCBBaXJMYW5ndWFnZV0sXG5cbiAgICBbJ2VuJywgbmV3IEFpckxhbmd1YWdlKFxuICAgICAgICBbICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5JywgJ1N1bmRheScgXSxcbiAgICAgICAgWyAnTW8nLCAnVHUnLCAnV2UnLCAnVGgnLCAnRnInLCAnU2EnLCAnU3UnIF0sXG4gICAgICAgIFsgJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInIF1cbiAgICApXSBhcyBbc3RyaW5nLCBBaXJMYW5ndWFnZV0sXG5cbiAgICBbJ2VzJywgbmV3IEFpckxhbmd1YWdlKFxuICAgICAgICBbICdMdW5lcycsICdNYXJ0ZXMnLCAnTWnDqXJjb2xlcycsICdKdWV2ZXMnLCAnVmllcm5lcycsICdTw6FiYWRvJywgJ0RvbWluZ28nIF0sXG4gICAgICAgIFsgJ0x1JywgJ01hJywgJ01pJywgJ0p1JywgJ1ZpJywgJ1NhJywgJ0RvJ10sXG4gICAgICAgIFsgJ0VuZXJvJywgJ0ZlYnJlcm8nLCAnTWFyem8nLCAnQWJyaWwnLCAnTWF5bycsICdKdW5pbycsICdKdWxpbycsICdBdWdvc3RvJywgJ1NlcHRpZW1icmUnLCAnT2N0dWJyZScsICdOb3ZpZW1icmUnLCAnRGljaWVtYnJlJyBdXG4gICAgKV0gYXMgW3N0cmluZywgQWlyTGFuZ3VhZ2VdLFxuXG4gICAgWydmaScsIG5ldyBBaXJMYW5ndWFnZShcbiAgICAgICAgWyAnTWFhbmFudGFpJywgJ1RpaXN0YWknLCAnS2Vza2l2aWlra28nLCAnVG9yc3RhaScsICdQZXJqYW50YWknLCAnTGF1YW50YWknLCAnU3VubnVudGFpJyBdLFxuICAgICAgICBbICdNYScsICdUaScsICdLZScsICdUbycsICdQZScsICdMYScsICdTdScgXSxcbiAgICAgICAgWyAnVGFtbWlrdXUnLCAnSGVsbWlrdXUnLCAnTWFhbGlza3V1JywgJ0h1aHRpa3V1JywgJ1RvdWtva3V1JywgJ0tlc8Oka3V1JywgJ0hlaW7DpGt1dScsICdFbG9rdXUnLCAnU3l5c2t1dScsICdMb2tha3V1JywgJ01hcnJhc2t1dScsICdKb3VsdWt1dScgXVxuICAgICldIGFzIFtzdHJpbmcsIEFpckxhbmd1YWdlXSxcblxuICAgIFsnZnInLCBuZXcgQWlyTGFuZ3VhZ2UoXG4gICAgICAgIFsgJ0x1bmRpJywgJ01hcmRpJywgJ01lcmNyZWRpJywgJ0pldWRpJywgJ1ZlbmRyZWRpJywgJ1NhbWVkaScsICdEaW1hbmNoZScgXSxcbiAgICAgICAgWyAnTHUnLCAnTWEnLCAnTWUnLCAnSmUnLCAnVmUnLCAnU2EnLCAnRGknIF0sXG4gICAgICAgIFsgJ0phbnZpZXInLCAnRsOpdnJpZXInLCAnTWFycycsICdBdnJpbCcsICdNYWknLCAnSnVpbicsICdKdWlsbGV0JywgJ0Fvw7t0JywgJ1NlcHRlbWJyZScsICdPY3RvYnJlJywgJ05vdmVtYnJlJywgJ0RlY2VtYnJlJyBdXG4gICAgKV0gYXMgW3N0cmluZywgQWlyTGFuZ3VhZ2VdLFxuXG4gICAgWydodScsIG5ldyBBaXJMYW5ndWFnZShcbiAgICAgICAgWyAnSMOpdGbFkScsICdLZWRkJywgJ1N6ZXJkYScsICdDc8O8dMO2cnTDtmsnLCAnUMOpbnRlaycsICdTem9tYmF0JywgJ1Zhc8Ohcm5hcCcgXSxcbiAgICAgICAgWyAnSCcsICdLJywgJ1N6JywgJ0NzJywgJ1AnLCAnU3onLCAnVicgXSxcbiAgICAgICAgWyAnSmFudcOhcicsICdGZWJydcOhcicsICdNw6FyY2l1cycsICfDgXByaWxpcycsICdNw6FqdXMnLCAnSsO6bml1cycsICdKw7psaXVzJywgJ0F1Z3VzenR1cycsICdTemVwdGVtYmVyJywgJ09rdMOzYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJyBdXG4gICAgKV0gYXMgW3N0cmluZywgQWlyTGFuZ3VhZ2VdLFxuXG4gICAgWydpdCcsIG5ldyBBaXJMYW5ndWFnZShcbiAgICAgICAgWyAnTHVuZWTDrCcsICdNYXJ0ZWTDrCcsICdNZXJjb2xlZMOsJywgJ0dpb3ZlZMOsJywgJ1ZlbmVyZMOsJywgJ1NhYmF0bycsICdEb21lbmljYScgXSxcbiAgICAgICAgWyAnTHUnLCAnTWEnLCAnTWUnLCAnR2knLCAnVmUnLCAnU2EnLCAnRG8nIF0sXG4gICAgICAgIFsgJ0dlbm5haW8nLCAnRmViYnJhaW8nLCAnTWFyem8nLCAnQXByaWxlJywgJ01hZ2dpbycsICdHaXVnbm8nLCAnTHVnbGlvJywgJ0Fnb3N0bycsICdTZXR0ZW1icmUnLCAnT3R0b2JyZScsICdOb3ZlbWJyZScsICdEaWNlbWJyZScgXVxuICAgICldIGFzIFtzdHJpbmcsIEFpckxhbmd1YWdlXSxcblxuICAgIFsnanAnLCBuZXcgQWlyTGFuZ3VhZ2UoXG4gICAgICAgIFsgJ+aciOabnOaXpScsXHQn54Gr5puc5pelJywgJ+awtOabnOaXpScsICfmnKjmm5zml6UnLCAn6YeR5puc5pelJywgJ+Wcn+abnOaXpScsICfml6Xmm5zml6UnIF0sXG4gICAgICAgIFsgJ+aciCcsICfngasnLCAn5rC0JywgJ+acqCcsICfph5EnLCAn5ZyfJywgJ+aXpScgXSxcbiAgICAgICAgWyAn5LiA5pyIJywgJ+S6jOaciCcsICfkuInmnIgnLCAn5Zub5pyIJywgJ+S6lOaciCcsICflha3mnIgnLCAn5LiD5pyIJywgJ+WFq+aciCcsICfkuZ3mnIgnLCAn5Y2B5pyIJywgJ+WNgeS4gOaciCcsICfljYHkuozmnIgnIF1cbiAgICApXSBhcyBbc3RyaW5nLCBBaXJMYW5ndWFnZV0sXG5cbiAgICBbJ25sJywgbmV3IEFpckxhbmd1YWdlKFxuICAgICAgICBbICdtYWFuZGFnJywgJ2RpbnNkYWcnLCAnd29lbnNkYWcnLCAnZG9uZGVyZGFnJywgJ3ZyaWpkYWcnLCAnemF0ZXJkYWcnLCAnem9uZGFnJyBdLFxuICAgICAgICBbICdtYScsICdkaScsICd3bycsICdkbycsICd2cicsICd6YScsICd6bycgXSxcbiAgICAgICAgWyAnSmFudWFyaScsICdGZWJydWFyaScsICdNYWFydCcsICdBcHJpbCcsICdNZWknLCAnSnVuaScsICdKdWxpJywgJ0F1Z3VzdHVzJywgJ1NlcHRlbWJlcicsICdPa3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJyBdXG4gICAgKV0gYXMgW3N0cmluZywgQWlyTGFuZ3VhZ2VdLFxuXG4gICAgWydwbCcsIG5ldyBBaXJMYW5ndWFnZShcbiAgICAgICAgWyAnUG9uaWVkemlhxYJlaycsICdXdG9yZWsnLCAnxZpyb2RhJywgJ0N6d2FydGVrJywgJ1BpxIV0ZWsnLCAnU29ib3RhJywgJ05pZWR6aWVsYScgXSxcbiAgICAgICAgWyAnUG4nLCAnV3QnLCAnxZpyJywgJ0N6dycsICdQdCcsICdTbycsICdOZCcgXSxcbiAgICAgICAgWyAnU3R5Y3plxYQnLCAnTHV0eScsICdNYXJ6ZWMnLCAnS3dpZWNpZcWEJywgJ01haicsICdDemVyd2llYycsICdMaXBpZWMnLCAnU2llcnBpZcWEJywgJ1dyemVzaWXFhCcsICdQYcW6ZHppZXJuaWsnLCAnTGlzdG9wYWQnLCAnR3J1ZHppZcWEJyBdXG4gICAgKV0gYXMgW3N0cmluZywgQWlyTGFuZ3VhZ2VdLFxuXG4gICAgWydwdCcsIG5ldyBBaXJMYW5ndWFnZShcbiAgICAgICAgWyAnU2VndW5kYScsICdUZXLDp2EnLCAnUXVhcnRhJywgJ1F1aW50YScsICdTZXh0YScsICdTw6FiYWRvJywgJ0RvbWluZ28nIF0sXG4gICAgICAgIFsgJ1NlJywgJ1RlJywgJ1FhJywgJ1FpJywgJ1N4JywgJ1NhJywgJ0RvJyBdLFxuICAgICAgICBbICdKYW5laXJvJywgJ0ZldmVyZWlybycsICdNYXLDp28nLCAnQWJyaWwnLCAnTWFpbycsICdKdW5obycsICdKdWxobycsICdBZ29zdG8nLCAnU2V0ZW1icm8nLCAnT3V0dWJybycsICdOb3ZlbWJybycsICdEZXplbWJybycgXVxuICAgICldIGFzIFtzdHJpbmcsIEFpckxhbmd1YWdlXSxcblxuICAgIFsncm8nLCBuZXcgQWlyTGFuZ3VhZ2UoXG4gICAgICAgIFsgJ0x1bmknLCAnTWFyxaNpJywgJ01pZXJjdXJpJywgJ0pvaScsICdWaW5lcmknLCAnU8OibWLEg3TEgycsICdEdW1pbmljxIMnIF0sXG4gICAgICAgIFsgJ0x1JywgJ01hJywgJ01pJywgJ0pvJywgJ1ZpJywgJ1NhJywgJ0R1JyBdLFxuICAgICAgICBbICdJYW51YXJpZScsICdGZWJydWFyaWUnLCAnTWFydGllJywgJ0FwcmlsaWUnLCAnTWFpJywgJ0l1bmllJywgJ0l1bGllJywgJ0F1Z3VzdCcsICdTZXB0ZW1icmllJywgJ09jdG9tYnJpZScsICdOb2llbWJyaWUnLCAnRGVjZW1icmllJyBdXG4gICAgKV0gYXMgW3N0cmluZywgQWlyTGFuZ3VhZ2VdLFxuXG4gICAgWydydScsIG5ldyBBaXJMYW5ndWFnZShcbiAgICAgICAgWyAn0J/QvtC90LXQtNC10LvRjNC90LjQuicsICfQktGC0L7RgNC90LjQuicsICfQodGA0LXQtNCwJywgJ9Cn0LXRgtCy0LXRgNCzJywgJ9Cf0Y/RgtC90LjRhtCwJywgJ9Ch0YPQsdCx0L7RgtCwJywgJ9CS0L7RgdC60YDQtdGB0LXQvdGM0LUnIF0sXG4gICAgICAgIFsgJ9Cf0L0nLCAn0JLRgicsICfQodGAJywgJ9Cn0YInLCAn0J/RgicsICfQodCxJywgJ9CS0YEnIF0sXG4gICAgICAgIFsgJ9Cv0L3QstCw0YDRjCcsICfQpNC10LLRgNCw0LvRjCcsICfQnNCw0YDRgicsICfQkNC/0YDQtdC70YwnLCAn0JzQsNC5JywgJ9CY0Y7QvdGMJywgJ9CY0Y7Qu9GMJywgJ9CQ0LLQs9GD0YHRgicsICfQodC10L3RgtGP0LHRgNGMJywgJ9Ce0LrRgtGP0LHRgNGMJywgJ9Cd0L7Rj9Cx0YDRjCcsICfQlNC10LrQsNCx0YDRjCcgXVxuICAgICldIGFzIFtzdHJpbmcsIEFpckxhbmd1YWdlXSxcblxuICAgIFsnc2snLCBuZXcgQWlyTGFuZ3VhZ2UoXG4gICAgICAgIFsgJ1BvbmRlbG9rJywgJ1V0b3JvaycsICdTdHJlZGEnLCAnxaB0dnJ0b2snLCAnUGlhdG9rJywgJ1NvYm90YScsICdOZWRlxL5hJ10sXG4gICAgICAgIFsgJ1BvJywgJ1V0JywgJ1N0JywgJ8WgdCcsICdQaScsICdTbycsICdOZScgXSxcbiAgICAgICAgWyAnSmFudcOhcicsICdGZWJydcOhcicsICdNYXJlYycsICdBcHLDrWwnLCAnTcOhaicsICdKw7puJywgJ0rDumwnLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPa3TDs2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlcicgXVxuICAgICldIGFzIFtzdHJpbmcsIEFpckxhbmd1YWdlXSxcblxuICAgIFsnemgnLCBuZXcgQWlyTGFuZ3VhZ2UoXG4gICAgICAgIFsgJ+WRqOS4gCcsICflkajkuownLCAn5ZGo5LiJJywgJ+WRqOWbmycsICflkajkupQnLCAn5ZGo5YWtJywgJ+WRqOaXpScgXSxcbiAgICAgICAgWyAn5LiAJywgJ+S6jCcsICfkuIknLCAn5ZubJywgJ+S6lCcsICflha0nLCAn5pelJyBdLFxuICAgICAgICBbICfkuIDmnIgnLCAn5LqM5pyIJywgJ+S4ieaciCcsICflm5vmnIgnLCAn5LqU5pyIJywgJ+WFreaciCcsICfkuIPmnIgnLCAn5YWr5pyIJywgJ+S5neaciCcsICfljYHmnIgnLCAn5Y2B5LiA5pyIJywgJ+WNgeS6jOaciCcgXVxuICAgICldIGFzIFtzdHJpbmcsIEFpckxhbmd1YWdlXSxcblxuXSk7XG4iXX0=