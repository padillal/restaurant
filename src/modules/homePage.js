const home = () => {
  let homeContent = $("<p></p>").text("This is the home page"); 
  $("#container").html(homeContent);
}
export { home }
