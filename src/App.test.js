import { render } from '@testing-library/react';
// import renderer from 'react-test-renderer';

// Component imports
import Header from './components/Header';
import Rockets from './components/Rockets';
import Dragons from './components/Dragons';
import Missions from './components/Missions';
import Profile from './components/MyProfile';

// Function imports
import reducer, { joinMission, leaveMission } from './redux/missions/missionsSlice';

describe('Missions Slice', () => {
  test('should handle a mission being reserved', () => {

    const state = {
      missions: [
        {id: '0', name: 'Thaicom', description: 'The best', reserved: false},
        {id: '1', name: 'Telstar', description: 'Second best', reserved: false},
        {id: '2', name: 'Iridium', description: 'Third best', reserved: false},
      ],
      isLoading: false,
      error: undefined,
    };

    expect(reducer(state, joinMission('1'))).toEqual(
      {
        missions: [
          {id: '0', name: 'Thaicom', description: 'The best', reserved: false},
          {id: '1', name: 'Telstar', description: 'Second best', reserved: true},
          {id: '2', name: 'Iridium', description: 'Third best', reserved: false},
        ],
        isLoading: false,
        error: undefined,
      }
    );
  });

  test('should handle a mission being cancelled', () => {

    const state = {
      missions: [
        {id: '0', name: 'Thaicom', description: 'The best', reserved: true},
        {id: '1', name: 'Telstar', description: 'Second best', reserved: false},
        {id: '2', name: 'Iridium', description: 'Third best', reserved: false},
      ],
      isLoading: false,
      error: undefined,
    };

    expect(reducer(state, leaveMission('0'))).toEqual(
      {
        missions: [
          {id: '0', name: 'Thaicom', description: 'The best', reserved: false},
          {id: '1', name: 'Telstar', description: 'Second best', reserved: false},
          {id: '2', name: 'Iridium', description: 'Third best', reserved: false},
        ],
        isLoading: false,
        error: undefined,
      }
    );
  });
});


// Snapshots for all components
describe('App snapshots', () => {
  it('renders correctly', () => {
    const header = renderer
      .create(<Header page="/">Header</Header>)
      .toJSON();
    expect(header).toMatchSnapshot();
  });

  it('renders correctly', () => {
    const rockets = renderer
      .create(<Rockets page="/">Rockets Page</Rockets>)
      .toJSON();
    expect(rockets).toMatchSnapshot();
  });

  it('renders correctly', () => {
    const missions = renderer
      .create(<Missions page="/missions">Missions Page</Missions>)
      .toJSON();
    expect(missions).toMatchSnapshot();
  });

  it('renders correctly', () => {
    const dragons = renderer
      .create(<Dragons page="/dragons">Dragons Page</Dragons>)
      .toJSON();
    expect(dragons).toMatchSnapshot();
  });

  it('renders correctly', () => {
    const profile = renderer
      .create(<Profile page="/profile">Profile Page</Profile>)
      .toJSON();
    expect(profile).toMatchSnapshot();
  });
});

// Using React Testing library to render components
describe('Render Components', () => {
  it('renders Header component', () => {
    render(<Header />);
  });

  it('renders Rockets component', () => {
    render(<Rockets />);
  });

  it('renders Missions component', () => {
    render(<Missions />);
  });

  it('renders Rockets component', () => {
    render(<Dragons />);
  });

  it('renders Missions component', () => {
    render(<Profile />);
  });
});
