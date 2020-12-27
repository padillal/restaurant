import { home } from './modules/homePage';
import { contact } from './modules/contactPage';

const navButtons = () => {
  let home = $("<button></button>").text("Home");
  home.click(function() {
    home();
  });
  $("#content").append(home);

  let contact = $("<button></button>").text("Contact");
  contact.click(function() {
    contact();
  });
  $("#content").append(contact);
}

export { navButtons }
