new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue to do app',
    url: "https://www.google.com",
    todos: [
      {title: 'Todo 1'},
      {title: 'Todo 2'},
      {title: 'Todo 3'},
      {title: 'Todo 4'},
      {title: 'Todo 5'}
    ],
    showTodos: true
  }
});
