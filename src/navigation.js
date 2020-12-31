import { home } from './modules/homePage';
import { contact } from './modules/contactPage';

const navButtons = () => {
  let homeTab = $("<button></button>").text("Home");
  homeTab.click(function() {
    home();
  });
  $("#content").append(homeTab);

  let contactTab = $("<button></button>").text("Contact");
  contactTab.click(function() {
    contact();
  });
  $("#content").append(contactTab);
}

export { navButtons }
