import {NgForOf, NgIf, SlicePipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAvatarComponent, TuiChipDirective} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiChipDirective, NgForOf, NgIf, TuiAvatarComponent, SlicePipe],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected readonly sizes = ['m', 's', 'xs', 'xxs'] as const;
}
