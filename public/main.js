// USE WITH FIREBASE AUTH
import setup from '../components/setup';
import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';

const init = () => {
  setup();
  ViewDirectorBasedOnUserAuthStatus();
};

init();
