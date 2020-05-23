const express = require('express')
const path = require('path')
const crypto = require('crypto')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .post("/hook/", (req, res) => {
    if (crypto.createHmac('SHA256', channelSecret)
    .update(body).digest('base64');) {
      return res.status(404);
    }
    res.header({
      Authorization: "3340c51015e5cbeb9700b2a953979ad4"
    }).json({
      replyToken: req.body.events.replyToken,

    })}
  ).listen(PORT, () => console.log(`Listening on ${ PORT }`))
