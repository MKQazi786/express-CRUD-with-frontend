import express from 'express';
import path from 'path';

import ApiV1Router from './ApiV1/api_v1.mjs'
import ApiV2Router from './ApiV2/api_v2.mjs'

const __dirname = path.resolve()
const app = express()

app.use(express.json()); 

app.use (ApiV1Router)
app.use (ApiV2Router)

app.use('/', express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
