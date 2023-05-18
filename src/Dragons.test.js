import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { store } from './redux/store';

// Component imports
import Dragons from './components/Dragons';

import reducer, { reserveDragon } from './redux/Dragons/DragonsSlice';

describe('Dragons Slice', () => {
  test('should handle reserving a dragon', () => {
    const state = {
      dragon: [
        {
          id: '0', name: 'Dragon 1', description: 'The best', image: 'linkto image',
        },
        {
          id: '1', name: 'Dragon 2', description: 'Second best', image: 'linkto image',
        },
      ],
      status: false,
      error: null,
    };

    expect(reducer(state, reserveDragon('1'))).toEqual(
      {
        dragon: [
          {
            id: '0', name: 'Dragon 1', description: 'The best', image: 'linkto image',
          },
          {
            id: '1', name: 'Dragon 2', description: 'Second best', image: 'linkto image', reserved: true,
          },
        ],
        status: false,
        error: null,
      },
    );
  });
});

it('dragons renders correctly', () => {
  const dragons = renderer
    .create(
      <Provider store={store}>
        <Dragons page="/dragons">Dragons Page</Dragons>
      </Provider>,
    )
    .toJSON();
  expect(dragons).toMatchSnapshot();
});

it('renders Dragons component', () => {
  render(
    <Provider store={store}>
      <Dragons />
    </Provider>,
  );
});
