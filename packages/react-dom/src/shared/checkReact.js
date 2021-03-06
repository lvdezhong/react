/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import React from 'react';
import invariant from 'fbjs/lib/invariant';

invariant(
  React,
  'ReactDOM was loaded before React. Make sure you load ' +
    'the React package before loading ReactDOM.',
);
