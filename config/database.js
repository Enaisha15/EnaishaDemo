const username  = 'Enaisha15'
const password  = 'Jasmine123!'
const dbName    = 'demo'
module.exports = {

    'url' : `mongodb+srv://${username}:${password}@cluster0.jrgra.mongodb.net/${dbName}?retryWrites=true&w=majority`
    // mongodb+srv://
    // 'url' : 'mongodb+srv://demo:demo@cluster0.q2ojb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', 
    // 'dbName': 'demo'
};
