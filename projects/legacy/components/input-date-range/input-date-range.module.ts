import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MaskitoDirective} from '@maskito/angular';
import {TuiLetDirective} from '@taiga-ui/cdk';
import {
    TuiAppearanceDirective,
    TuiDropdownModule,
    TuiIconComponent,
} from '@taiga-ui/core';
import {TuiCalendarRangeComponent} from '@taiga-ui/kit';
import {
    TuiPrimitiveTextfieldModule,
    TuiTextfieldComponent,
} from '@taiga-ui/legacy/components/primitive-textfield';
import {
    TuiLegacyDropdownOpenMonitorDirective,
    TuiTextfieldControllerModule,
    TuiValueAccessorModule,
} from '@taiga-ui/legacy/directives';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiInputDateRangeComponent} from './input-date-range.component';
import {TuiInputDateRangeDirective} from './input-date-range.directive';

@NgModule({
    imports: [
        CommonModule,
        MaskitoDirective,
        TuiLetDirective,
        PolymorpheusModule,
        TuiPrimitiveTextfieldModule,
        TuiTextfieldControllerModule,
        TuiDropdownModule,
        TuiCalendarRangeComponent,
        TuiValueAccessorModule,
        TuiLegacyDropdownOpenMonitorDirective,
        TuiIconComponent,
        TuiAppearanceDirective,
    ],
    declarations: [TuiInputDateRangeComponent, TuiInputDateRangeDirective],
    exports: [
        TuiInputDateRangeComponent,
        TuiInputDateRangeDirective,
        TuiTextfieldComponent,
    ],
})
export class TuiInputDateRangeModule {}
