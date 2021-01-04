const home = () => {
  let homeTitle = $("<h1></h1>").text("Welcome to my Restaurant");
  let homeContent = $("<p></p>").text("This is the home page");
  $("#bodyTitle").html(homeTitle);
  $("#bodyContent").html(homeContent);
}
export { home }
