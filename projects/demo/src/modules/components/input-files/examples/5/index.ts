import {NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIconComponent, TuiLinkDirective} from '@taiga-ui/core';
import type {TuiFileLike} from '@taiga-ui/kit';
import {
    TuiAvatarComponent,
    TuiFileComponent,
    TuiFilesComponent,
    TuiInputFilesComponent,
    TuiInputFilesDirective,
} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        TuiInputFilesComponent,
        TuiInputFilesDirective,
        ReactiveFormsModule,
        NgIf,
        TuiAvatarComponent,
        TuiLinkDirective,
        TuiFilesComponent,
        TuiFileComponent,
        TuiIconComponent,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected readonly control = new FormControl<TuiFileLike | null>(null);

    protected readonly file: TuiFileLike = {
        name: 'custom.txt',
    };
}
