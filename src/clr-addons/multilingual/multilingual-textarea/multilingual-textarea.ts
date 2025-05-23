/*
 * Copyright (c) 2018-2025 Porsche Informatik. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, forwardRef, Injector, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlIdService } from '../../abstract-form-component/control-id.service';
import { ClrMultilingualAbstract } from '../abstract-multilingual';
import { ClarityIcons, exclamationCircleIcon } from '@cds/core/icon';

ClarityIcons.addIcons(exclamationCircleIcon);

@Component({
  selector: 'clr-multilingual-textarea',
  templateUrl: './multilingual-textarea.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ClrMultilingualTextarea),
      multi: true,
    },
    ControlIdService,
  ],
  standalone: false,
})
export class ClrMultilingualTextarea extends ClrMultilingualAbstract {
  @Input() rows: number;

  constructor(injector: Injector) {
    super(injector);
  }
}
