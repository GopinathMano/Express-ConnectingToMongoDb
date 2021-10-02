// const fs = require("fs");

// fs.readdir("..", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// console.log(fs.readdirSync(".."));

// const os = require("os");

// console.log(os.hostname());
// console.log(os.version());

const http = require("http");
const port = 3001;
const data = [
  {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla",
  },
];

const user = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
  },
];

const server = http.createServer((req, res) => {
  if (req.url === "/posts" && req.method === "GET") {
    res.write(JSON.stringify(data));
    res.end();
  } else if (req.url === "/users" && req.method === "GET") {
    res.write(JSON.stringify(user));
    res.end();
  }
});

server.listen(port);

console.log("server is running");
