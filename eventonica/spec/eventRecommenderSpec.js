describe("EventRecommender", () => {
    const { EventRecommender, User, Event } = require('../EventRecommender.js'); // Update with your class names and file name
    let er;

    beforeEach(() => {
        er = new EventRecommender();
    });

    describe("addEvent", () => {
        it("adds a new Event to the system", () => {
            let event = new Event('the party', '2020-06-18', 'pop', 'henry fonda theatre', 'a real fuckin party', '20:00');
            er.addEvent(event);
            expect(er.events.length).toEqual(1);
            expect(er.events[0].title).toEqual('the party'); // what are some other things you can test?
            expect(er.events[0].category).toEqual('pop');
        });
    });

    describe("addUser", () => {
        it("adds a new User to the system", () => {
            er.addUser("Change Me");
            expect(er.user.length).toEqual(1);
        });
    });

    describe("saveUserEvent", () => {
        it("adds an event to a user's personal event array", () => {
            let event = new Event('the party', '2020-06-18', 'pop', 'henry fonda theatre', 'a real fuckin party', '20:00');
            er.addEvent(event);
            // let user = TODO
            // er.addUser(user);
            er.saveUserEvent(user, event); // change these to match your method signature
            expect(er.users[0].savedEvents.length).toEqual(1);
        });
    });

    describe("deleteUser", () => {
        it("removes a User from the system", () => {
            er.addUser("Make a new user here that you will delete later");
            er.deleteUser("Change Me");
            expect(er.user.length).toEqual(0);
        });
    });

    describe("deleteEvent", () => {
        it("removes the event from the system", () => {
            er.addEvent("A new event that you will delete later");
            expect(er.events.length).toEqual(1);
            er.deleteEvent("Change Me");
            expect(er.events.length).toEqual(0);
        });
    });
});