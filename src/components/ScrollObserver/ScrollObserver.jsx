import { forwardRef } from 'react';

const ScrollObserver = forwardRef((props, ref) => (
  <div ref={ref} style={{ height: '1px' }} {...props} />
));

ScrollObserver.displayName = 'ScrollObserver';

export default ScrollObserver;
