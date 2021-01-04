const contact = () => {
  let contactTitle = $("<h1></h1>").text("Contact Us");
  let contactContent = $("<p></p>").text("This is the contact page");
  $("#bodyTitle").html(contactTitle);
  $("#bodyContent").html(contactContent);
}

export { contact }
