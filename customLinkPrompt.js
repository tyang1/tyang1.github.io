require('dotenv').config();
const express = require("express");
const app = express();
const port = 3001;


app.use(express.static(__dirname));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

// class Random{

//     static getUserId(e){
//         return a.a(this,
//             void 0,
//             void 0,
//             function*(){yield Object(T.c)(),Object(T.s)("getUserId",e);
//                     const t=(yield I.a.getSubscription()).deviceId;
//                     return Object(T.j)(e,t),t}
//                     )}
// }