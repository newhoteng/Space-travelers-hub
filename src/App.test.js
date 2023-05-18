import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store';

// Component imports
import Header from './components/Header';
import Profile from './components/MyProfile';

// Snapshots for Header and Profile components
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

  it('profile renders correctly', () => {
    const profile = renderer
      .create(
        <Provider store={store}>
          <Profile page="/profile">Profile Page</Profile>
        </Provider>,
      )
      .toJSON();
    expect(profile).toMatchSnapshot();
  });
});

// Using React Testing library to render Header and Profile omponents
describe('Render Components', () => {
  it('renders Header component', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
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
