const home = () => {
  let homeContent = $("<p></p>").text("This is the home page");
  $("#bodyContent").html(homeContent);
}
export { home }
