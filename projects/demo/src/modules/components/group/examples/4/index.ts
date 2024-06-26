import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiGroupDirective, TuiTitleDirective} from '@taiga-ui/core';
import {TuiBlockDirective, TuiRadioComponent} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        TuiGroupDirective,
        ReactiveFormsModule,
        TuiBlockDirective,
        TuiTitleDirective,
        TuiRadioComponent,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected readonly testForm = new FormGroup({
        testValue: new FormControl(''),
    });
}
