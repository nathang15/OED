/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react';
import HeaderContainer from '../../containers/HeaderContainer';
import FooterComponent from '../../components/FooterComponent';

export default function CreateUserComponent() {
    return (
        <div>
            <HeaderContainer />
            <h1> Create User </h1>
            <FooterComponent />
        </div>
    )
}