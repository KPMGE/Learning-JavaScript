// we can create functions that do something N times


function repeatSomething(times, action) {
  for (let i = 0; i < times; i++) {
    action(i);
  }
}

// now, we can pass a function as action
repeatSomething(4, console.log);
