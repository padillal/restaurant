const info = () => {
  let body = $("<div id='bodyContent'></div>");
  let title = $("<div id='bodyTitle'></div>");
  $("#content").append(title);
  $("#content").append(body);
}

export { info}
