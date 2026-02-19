// AI-Assisted
/**
 * @fileoverview Snapshot tests for ComponentModel shape consistency.
 */

import { expectKeysEqual } from '../helpers/assertions';
import {
  createMockAttribute,
  createMockComponentModel,
  createMockEvent,
  createMockProperty,
} from '../helpers/fixtures';

describe('ComponentModel consistency', () => {
  it('should use props field and maintains stable shape', () => {
    const model = createMockComponentModel({
      props: [createMockProperty()],
      attributes: [createMockAttribute()],
      events: [createMockEvent()],
    });

    expect(Object.keys(model)).toContain('props');
    expect(Object.keys(model)).not.toContain('properties');

    expectKeysEqual(Object.keys(model), [
      'attributes',
      'className',
      'componentDir',
      'events',
      'filePath',
      'importPath',
      'props',
      'tagName',
    ]);
    expectKeysEqual(Object.keys(model.props[0]), [
      'attribute',
      'defaultValue',
      'doc',
      'name',
      'reflect',
      'tsType',
      'type',
      'visibility',
    ]);
    expectKeysEqual(Object.keys(model.attributes[0]), [
      'defaultValue',
      'doc',
      'name',
      'propertyName',
      'reflect',
      'type',
    ]);
    expectKeysEqual(Object.keys(model.events[0]), ['detailType', 'name', 'reactHandler']);
  });
});
// End AI-Assisted
