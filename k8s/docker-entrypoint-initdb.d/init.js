db.createUser(
    {user: 'root', pwd: '123456', roles:[{role: 'userAdminAnyDatabase', db: 'admin'},
    {role: 'userAdminAnyDatabase', db: 'admin'}]});
  db = db.getSiblingDB('users');
  db.createUser({user: 'surajkishor', pwd: '123456', roles:[{role: 'dbAdmin', db: 'users'}, {role : 'readWrite', db : 'users'}, {role : 'userAdmin', db : 'users'}]});
  