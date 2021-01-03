import { navButtons } from './navigation';
import { info} from './body';
import { welcome } from './modules/initial';

const init = () => {
  welcome();
  navButtons();
  info();
}

init();
