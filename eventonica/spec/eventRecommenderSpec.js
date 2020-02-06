describe("EventRecommender", () => {
    const { EventRecommender, User, Event } = require('../EventRecommender.js'); // Update with your class names and file name
    let er;
    let ev = new Event(987654, 'the party', '2020-06-18', 'pop', 'los angeles, CA', 'henry fonda theatre', 'a real fuckin party', '20:00');
    let us = new User(123456, 'liz', 94608);

    beforeEach(() => {
        er = new EventRecommender();
    });

    describe("addEvent", () => {
        it("adds a new Event to the system", () => {
            er.addEvent(ev);
            expect(er.events.length).toEqual(1); // what are some other things you can test?
            expect(er.events[0].title).toEqual('the party');
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
            //it says "user" and, i have to imagine, "event" is not defined
            //the function itself is a little rowdy, so it could simply be a bad function
            er.saveUserEvent(us, ev); // change these to match your method signature
            expect(er.users[0].savedEvents.length).toEqual(1);
        });
    });

    describe("deleteUser", () => {
        it("removes a User from the system", () => {
            let usDel = new User(666, 'doomed', 91773);
            er.addUser(usDel);
            expect(er.users.length).toEqual(1);
            er.deleteUser(usDel);
            expect(er.users.length).toEqual(0);
        });
    });

    describe("deleteEvent", () => {
        it("removes the event from the system", () => {
            let evDel = new Event(999, 'the party', '2020-06-18', 'pop', 'los angeles, CA', 'henry fonda theatre', 'a real fuckin party', '20:00');
            er.addEvent(evDel);
            expect(er.events.length).toEqual(1);
            er.deleteEvent(evDel);
            expect(er.events.length).toEqual(0);
        });
    });

    //my date function deffo doesn't work
    // describe('findEventsByDate', () => {
    //     it("removes the event from the system", () => {
    //         // let evDel = new Event(999, 'the party', '2020-06-18', 'pop', 'los angeles, CA', 'henry fonda theatre', 'a real fuckin party', '20:00');
    //         er.findEventsbyCategory(ev);
    //         expect(er.events.length).toEqual(1);
    //         expect(er.events.length).toEqual(0);
    //     });
    // });

    describe('findEventsByCategory', () => {
        it("produces an array of events, filtered by category", () => {
            // let evDel = new Event(999, 'the party', '2020-06-18', 'pop', 'los angeles, CA', 'henry fonda theatre', 'a real fuckin party', '20:00');
            expect(er.events.length).toEqual(0);
            er.addEvent(ev);
            expect(er.events.length).toEqual(1);
            er.findEventsbyCategory('pop');

            er.findEventsbyCategory('bluegrass');
            expect(er.events.length).toEqual(0);

        });
    });
});