import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiPlatformDirective} from '@taiga-ui/cdk';
import {TuiButtonDirective, TuiLabelDirective} from '@taiga-ui/core';
import {TuiRadioComponent, TuiRadioDirective} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        TuiPlatformDirective,
        TuiRadioComponent,
        TuiRadioDirective,
        TuiLabelDirective,
        TuiButtonDirective,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected value: any = null;
    protected identityMatcher = (a: any, b: any): boolean => a?.test === b?.test;
}
