describe("EventRecommender", () => {
    const { EventRecommender, User, Event } = require('../EventRecommender.js'); // Update with your class names and file name
    let er;
    let ev = new Event('the party', '2020-06-18', 'pop', 'los angeles, CA', 'henry fonda theatre', 'a real fuckin party', '20:00');
    let evdel = new Event('the party', '2020-06-18', 'pop', 'los angeles, CA', 'henry fonda theatre', 'a real fuckin party', '20:00');
    let us = new User(123456, 'liz', 94608);
    let usdel = new User(666, 'doomed', 91773);

    beforeEach(() => {
        er = new EventRecommender();
    });

    describe("addEvent", () => {
        it("adds a new Event to the system", () => {
            er.addEvent(ev);
            expect(er.events.length).toEqual(1);
            expect(er.events[0].title).toEqual('the party'); // what are some other things you can test?
            expect(er.events[0].category).toEqual('pop');
        });
    });

    describe("addUser", () => {
        it("adds a new User to the system", () => {
            er.addUser(us);
            expect(er.users.length).toEqual(1);
            expect(er.users[0].chosenName).toEqual('liz');
            expect(er.users[0].zipcode).toEqual(94608);
        });
    });



    describe("saveUserEvent", () => {
        it("adds an event to a user's personal event array", () => {
            er.addEvent(ev);
            er.addUser(us);
            er.saveUserEvent(user, event); // change these to match your method signature
            expect(er.users.user.savedEvents.length).toEqual(1);
        });
    });

    describe("deleteUser", () => {
        it("removes a User from the system", () => {
            er.addUser(usDel);
            expect(er.users.length).toEqual(1);
            er.deleteUser(usDel);
            expect(er.users.length).toEqual(0);
        });
    });

    describe("deleteEvent", () => {
        it("removes the event from the system", () => {
            er.addEvent(evDel);
            expect(er.events.length).toEqual(1);
            er.deleteEvent(evDel);
            expect(er.events.length).toEqual(0);
        });
    });
});