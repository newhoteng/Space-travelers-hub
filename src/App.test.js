import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store';

// Component imports
import Header from './components/Header';
import Rockets from './components/Rockets';
import Dragons from './components/Dragons';
import Missions from './components/Missions';
import Profile from './components/MyProfile';

// Function imports
import reducer, { joinMission, leaveMission } from './redux/missions/missionsSlice';
import { reserveRocket } from './redux/Rockets/RocketsSlice';
import { reserveDragon } from './redux/Dragons/DragonsSlice';

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
            id: '1', name: 'Falcon 9', description: 'Second best', image: 'linkto image',
          },
          {
            id: '2', name: 'Falcon Heavy', description: 'Third best', image: 'linkto image',
          },
        ],
        isLoading: false,
      }
    );
  });
});

describe('Missions Slice', () => {
  test('should handle reserving a mission', () => {
    const state = {
      missions: [
        {
          id: '0', name: 'Thaicom', description: 'The best', reserved: false,
        },
        {
          id: '1', name: 'Telstar', description: 'Second best', reserved: false,
        },
        {
          id: '2', name: 'Iridium', description: 'Third best', reserved: false,
        },
      ],
      isLoading: false,
      error: undefined,
    };

    expect(reducer(state, joinMission('1'))).toEqual(
      {
        missions: [
          {
            id: '0', name: 'Thaicom', description: 'The best', reserved: false,
          },
          {
            id: '1', name: 'Telstar', description: 'Second best', reserved: true,
          },
          {
            id: '2', name: 'Iridium', description: 'Third best', reserved: false,
          },
        ],
        isLoading: false,
        error: undefined,
      },
    );
  });

  test('should handle cancelling a mission', () => {
    const state = {
      missions: [
        {
          id: '0', name: 'Thaicom', description: 'The best', reserved: true,
        },
        {
          id: '1', name: 'Telstar', description: 'Second best', reserved: false,
        },
        {
          id: '2', name: 'Iridium', description: 'Third best', reserved: false,
        },
      ],
      isLoading: false,
      error: undefined,
    };

    expect(reducer(state, leaveMission('0'))).toEqual(
      {
        missions: [
          {
            id: '0', name: 'Thaicom', description: 'The best', reserved: false,
          },
          {
            id: '1', name: 'Telstar', description: 'Second best', reserved: false,
          },
          {
            id: '2', name: 'Iridium', description: 'Third best', reserved: false,
          },
        ],
        isLoading: false,
        error: undefined,
      },
    );
  });
});

// const initialState = {
//   dragon: [],
//   status: false,
//   error: null,
// };

// return dragonData.map((dragon) => ({
//   id: dragon.id,
//   name: dragon.name,
//   description: dragon.description,
//   image: dragon.flickr_images[0],
// }));

describe('Dragons Slice', () => {
  test('should handle reserving a rocket', () => {
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
            id: '1', name: 'Dragon 2', description: 'Second best', image: 'linkto image',
          },
        ],
        status: false,
        error: null,
      }
    );
  });
})

// // Snapshots for all components await screen.findByText(/loaded/i)
describe('App snapshots', () => {
  it('header renders correctly', () => {
    const header = renderer
      .create(
        <BrowserRouter>
          <Header page="/">Header</Header>
        </BrowserRouter>,
      )
      .toJSON();
    expect(header).toMatchSnapshot();
  });

  // it('rockets renders correctly', () => {
  //   const rockets = renderer
  //     .create(
  //       <Provider store={store}>
  //         <Rockets page="/">Rockets Page</Rockets>
  //       </Provider>
  //     )
  //     .toJSON();
  //   expect(rockets).toMatchSnapshot();
  // });

  it('mission renders correctly', () => {
    const missions = renderer
      .create(
        <Provider store={store}>
          <Missions page="/missions">Missions Page</Missions>
        </Provider>,
      )
      .toJSON();
    expect(missions).toMatchSnapshot();
  });

  // it('dragons renders correctly', () => {
  //   const dragons = renderer
  //     .create(
  //       <Provider store={store}>
  //         <Dragons page="/dragons">Dragons Page</Dragons>
  //       </Provider>
  //     )
  //     .toJSON();
  //   expect(dragons).toMatchSnapshot();
  // });

  // it('profile renders correctly', () => {
  //   const profile = renderer
  //     .create(
  //       <Provider store={store}>
  //         <Profile page="/profile">Profile Page</Profile>
  //       </Provider>,
  //     )
  //     .toJSON();
  //   expect(profile).toMatchSnapshot();
  // });
});

// Using React Testing library to render components
describe('Render Components', () => {
  it('renders Header component', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
  });

  it('renders Rockets component', () => {
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
  });

  it('renders Missions component', () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
  });

  it('renders Dragons component', () => {
    render(
      <Provider store={store}>
        <Dragons />
      </Provider>,
    );
  });

  it('renders Profile component', () => {
    render(
      <Provider store={store}>
        <Profile />
      </Provider>,
    );
  });
});
