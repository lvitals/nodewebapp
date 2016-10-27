# nodewebapp, install express-generator


```bash

$ sudo npm install -g express-generator

$ express nodewebapp

$ cd nodewebapp && npm install

```

#### npm update

```bash

$ npm install -g npm-check-updates

$ ncu -u

$ npm install

```

#### Starting app

```bash

$ sudo npm install -g nodemon

$ nodemon bin/www

or

$ npm install nodemon --save-dev

$ node_modules/.bin/nodemon bin/www


```

#### Sequelizejs ORM

```bash
$ npm install --save sequelize sequelize-cli

# And one of the following:
$ npm install --save pg pg-hstore
$ npm install --save mysql // For both mysql and mariadb dialects
$ npm install --save sqlite3
$ npm install --save tedious // MSSQL

$ node_modules/.bin/sequelize init

```

#### Semantic UI

```bash

$ node_modules/.bin/gulp build --gulpfile public/semantic/gulpfile.js

or

gulp build --cwd 'semantic/'

```

#### Yarn

```bash

yarn install

```
