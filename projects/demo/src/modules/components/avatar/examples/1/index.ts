import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiFallbackSrcPipe} from '@taiga-ui/core';
import {TuiAvatarComponent} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiAvatarComponent, TuiFallbackSrcPipe, AsyncPipe],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {}
