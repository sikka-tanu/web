import { User } from "./models/User";

const user = new User({ name: 'myname', age: 20});

user.set({'name': 'newname'});

user.on('change', () => {
    console.log('Change triggered')
});

user.trigger('change');