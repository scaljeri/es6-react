import React from 'react/addons';
import Foo   from '../../app/js/Foo.jsx';

var TestUtils = React.addons.TestUtils;

describe('Foo', () => {

  it('should work', () => {
    var component = <Foo />;
    TestUtils.renderIntoDocument(component);
    expect(component).toBeTruthy();
  });

});