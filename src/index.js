/**
 * @copyright 2016-present, Prometheus Research, LLC
 */

import withFormValue from './withFormValue';

export {validate} from './Schema';
export {update} from './update';
export Fieldset from './Fieldset';
export * as Schema from './Schema';
export Input from './Input';
export ErrorList from './ErrorList';
export {create as createValue, suppressUpdate} from './Value';
export withFormValue from './withFormValue';
export Field from './Field';

export function WithFormValue(...args) {
  console.warn('react-forms - Deprecation notice: WithFormValue(..) has been renamed to withFormValue(..)'); // eslint-disable-line no-console
  return withFormValue(...args);
}

export function Value(schema, value, onChange, params, errorList) {
  console.warn('react-forms - Deprecation notice: Value(schema, value, onChange, params, errorList) has been refactored to createValue(options)'); // eslint-disable-line no-console
  return createValue({ schema, value, onChange, params, errorList })
}