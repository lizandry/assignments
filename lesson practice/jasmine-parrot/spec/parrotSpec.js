describe("Parrot", () => {
    const { Parrot } = require('../parrot.js');
    let par = new Parrot('polly');
    let evPar = new Parrot('evil polly');


    describe("speak", () => {
        it("makes the bird talk", () => {
            spyOn(par, 'speak');
            par.speak();
            expect(typeOf).toEqual('string');
        });
    });
});
describe("ApprenticeParrot", () => {
    const { Parrot, ApprenticeParrot } = require('../parrot.js');
    //let er;
    let bab = new ApprenticeParrot(0);
    let evBab = new ApprenticeParrot(4);

    describe("sleepiness", () => {
        it("counts up sleepiness whenever .speak is called", () => {
            expect(bab.sleepiness).toEqual(0);
            bab.speak();
            expect(bab.sleepiness).toEqual(1);
            bab.speak();
            bab.speak();
            expect(bab.sleepiness).toEqual(3);

        });

    });
    describe("speak", () => {
        it("makes the bird talk", () => {
            spyOn(bab, 'speak');
            bab.speak();
            expect(typeOf).toEqual('string');
        });
    });
});