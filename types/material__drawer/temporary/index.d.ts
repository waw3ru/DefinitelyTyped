/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { MDCComponent } from 'material__base';
import MDCTemporaryDrawerFoundation from './foundation';
import { MDCSlidableDrawerAdapter } from '../slidable';
import * as util from '../util';

export {MDCSlidableDrawerAdapter, MDCTemporaryDrawerFoundation, util};

export class MDCTemporaryDrawer extends MDCComponent<MDCSlidableDrawerAdapter, MDCTemporaryDrawerFoundation> {
    static attachTo(root: Element): MDCTemporaryDrawer;

    open: boolean;

    /* Return the drawer element inside the component. */
    readonly drawer: Element | null;

    getDefaultFoundation(): MDCTemporaryDrawerFoundation;
}
