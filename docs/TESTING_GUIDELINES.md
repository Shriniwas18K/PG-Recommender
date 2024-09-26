## TESTING GUIDELINES FOR REACT COMPONENTS

Ensure below testing guidelines are followed for each react component.

### Rendering/Markup Tests
------------------------
Verify component renders correctly
Check HTML structure and elements
Validate props rendering

### Logic Tests
-------------
Test component's internal logic and calculations
Validate state changes and updates
Check conditional rendering

### Action/Event Tests
------------------
Test event handlers (e.g., clicks, submits)
Verify actions trigger expected behavior
Check event propagation

### Loader/Async Tests
------------------
Test loading states and async data fetching
Verify loading indicators and spinners
Check error handling

### Integration Tests
------------------
Test component interactions with other components
Validate data exchange and communication
Check integrated functionality

### Accessibility Tests
-------------------
Verify accessibility features (e.g., ARIA attributes)
Test screen reader compatibility
Check keyboard navigation

### Snapshot Tests
----------------
Compare component snapshots for changes
Verify component rendering consistency

### Error Handling Tests
-------------------
Test error boundaries and fallbacks
Verify error messages and displays

### Performance Tests
------------------
Measure component rendering performance
Optimize component for better performance

### Best Practices
----------------
Keep tests concise and focused
Use descriptive test names
Test individual components in isolation
Use mocking for dependencies and APIs
Write tests for both happy paths and edge cases
 
#### Example Test
--------------
```JavaScript
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import MyComponent from './MyComponent';

test('renders correctly', () => {
  const { getByText } = render(<MyComponent />);
  expect(getByText('Hello World')).toBeInTheDocument();
});

test('handles click event', () => {
  const onClick = jest.fn();
  const { getByText } = render(<MyComponent onClick={onClick} />);
  fireEvent.click(getByText('Click me'));
  expect(onClick).toHaveBeenCalledTimes(1);
});
```