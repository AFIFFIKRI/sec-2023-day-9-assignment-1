let keycodeDOM = document.querySelector("#keycode");
let eventkeyDOM = document.querySelector("#eventkey");
let eventcodeDOM = document.querySelector("#eventcode");
let eventlocationDOM = document.querySelector("#eventlocation");

let keycode, eventkey, eventcode, eventlocation;

document.addEventListener("keydown", function keyevent(event) {
  console.log(event);

  keycode = `${event.key}`;
  eventkey = `${event.keyCode}`;
  eventcode = `${event.code}`;
  eventlocation = `${event.location}`;

  keycodeDOM.innerText = keycode;
  eventkeyDOM.innerText = eventkey;
  eventcodeDOM.innerText = eventcode;
  eventlocationDOM.innerText = eventlocation;
});
