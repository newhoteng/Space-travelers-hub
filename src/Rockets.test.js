import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { store } from './redux/store';

// Component imports
import Rockets from './components/Rockets';

// Function imports
import reducer, { reserveRocket } from './redux/Rockets/RocketsSlice';

describe('Rockets Slice', () => {
  test('should handle reserving a rocket', () => {
    const state = {
      rocket: [
        {
          id: '0', name: 'Falcon 1', description: 'The best', image: 'linkto image',
        },
        {
          id: '1', name: 'Falcon 9', description: 'Second best', image: 'linkto image',
        },
        {
          id: '2', name: 'Falcon Heavy', description: 'Third best', image: 'linkto image',
        },
      ],
      isLoading: false,
    };

    expect(reducer(state, reserveRocket('1'))).toEqual(
      {
        rocket: [
          {
            id: '0', name: 'Falcon 1', description: 'The best', image: 'linkto image',
          },
          {
            id: '1', name: 'Falcon 9', description: 'Second best', image: 'linkto image', reserved: true,
          },
          {
            id: '2', name: 'Falcon Heavy', description: 'Third best', image: 'linkto image',
          },
        ],
        isLoading: false,
      },
    );
  });
});

it('rockets renders correctly', () => {
  const rockets = renderer
    .create(
      <Provider store={store}>
        <Rockets page="/">Rockets Page</Rockets>
      </Provider>,
    )
    .toJSON();
  expect(rockets).toMatchSnapshot();
});

it('renders Rockets component', () => {
  render(
    <Provider store={store}>
      <Rockets />
    </Provider>,
  );
});
