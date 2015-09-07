/**
*  Start Small
*
*
*  Note:
*  run with babel-node
*
*  Equan Pr.
*  2015
*/

import express from 'express';
import hbs from 'express-handlebars';
import React from 'react/addons';
import App from './components/app';

let port = process.env.PORT || 3000;
let app = express();

app.engine('html', hbs({extname: 'html'}));
app.set('view engine', 'html');
app.locals.settings['x-powered-by'] = false;
app.use(express.static(__dirname+'/public'));

app.get('/', function(req, res, next){
    res.render('layout', {reactHTML: React.renderToString(<App/>)})
})

app.listen(port, function(){
  console.log(`server start at ${port}`);
});
