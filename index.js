const express = require("express");
const app = express();
const PORT = 3001;

// app.get("/", (rep, res) => {
//   res.send("Hello nodejs");
// });

app.get('/', (rep , res) =>{
    res.send('Hoàng Đức Thuận')
})

app.listen(PORT, () => {
  console.log("PORT: ", PORT);
});
