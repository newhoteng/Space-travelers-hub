import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

// Component imports
import Header from './components/Header';
import Rockets from './components/Rockets';
import Dragons from './components/Dragons';
import Missions from './components/Missions';
import Profile from './components/MyProfile';

// Function imports
import { joinMission, leaveMission } from './redux/missions/missionsSlice';

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