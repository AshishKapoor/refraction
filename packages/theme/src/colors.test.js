/**
 * Copyright (c) Quid, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// @flow
import colors from './colors';

it('exposes the right colors', () => {
  expect(colors).toMatchSnapshot();
});
