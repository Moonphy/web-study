if (Posts.find().count() === 0) {
    Posts.insert({
        title: 'Introducing Telescope',
        url: 'http://sachagreif.com/introducing-telescope/',
        flagged: true
    });
    Posts.insert({
        title: 'Meteor',
        url: 'http://meteor.com',
        flagged: false
    });
    Posts.insert({
        title: 'The Meteor Book',
        url: 'http://themeteorbook.com',
        author: 'bob-smith'
    });
}

Meteor.publish('allposts', function () {
    return Posts.find();
});

/*Meteor.publish('posts', function (author) {
    return Posts.find({flagged: false, author: author});
});*/

/*
Meteor.publish('someposts', function () {
    return Posts.find({'author':'Tom'});
});*/
