import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiAppearanceDirective, TuiIconComponent, TuiTooltipModule} from '@taiga-ui/core';
import {TuiWrapperModule} from '@taiga-ui/legacy/directives/wrapper';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiPrimitiveTextfieldComponent} from './primitive-textfield.component';
import {TuiPrimitiveTextfieldDirective} from './primitive-textfield.directive';
import {TuiTextfieldComponent} from './textfield/textfield.component';
import {TuiValueDecorationComponent} from './value-decoration/value-decoration.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PolymorpheusModule,
        TuiWrapperModule,
        TuiTooltipModule,
        TuiIconComponent,
        TuiAppearanceDirective,
    ],
    declarations: [
        TuiPrimitiveTextfieldComponent,
        TuiPrimitiveTextfieldDirective,
        TuiTextfieldComponent,
        TuiValueDecorationComponent,
    ],
    exports: [
        TuiPrimitiveTextfieldComponent,
        TuiPrimitiveTextfieldDirective,
        TuiTextfieldComponent,
    ],
})
export class TuiPrimitiveTextfieldModule {}
