/**
 * @copyright 2015, Prometheus Research, LLC
 */

import React from 'react';
import FormComponent from './Component';

export default function withFormValue(Component) {

  let displayName = Component.displayName || Component.name;

  return class extends FormComponent {

    static displayName = `WithFormValue(${displayName})`;

    render() {
      // eslint-disable-next-line no-unused-vars
      const { select, ...props } = this.props;
      return (
        <Component
          {...props}
          formValue={this.formValue}
          />
      );
    }
  };
}
