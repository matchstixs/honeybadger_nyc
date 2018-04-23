// variable result
// expect(result)
// to be is left side
// to equal is right side
const tdd = require('../tdd');
const sinon = require('sinon');
require('jasmine-sinon')


describe('tdd', () => {
    let sandbox;

    beforeEach(() => {
        sandbox = sinon.sandbox.create();
    });

    describe('sortArray()', () => {
        it('returns sorted array', () => {
            const result = tdd.sortArray([3, 2, 1]);
            expect(result).toEqual([1, 2, 3]);
        });
    });

    describe('methodToTest()', () => {
        it('returns the sum of three numbers', () => {
            const result = tdd.methodToTest([1, 2, 3]);
            expect(result).toEqual(6);
        });
    });

    describe('sinonSpy()', () => {
        it('uses spy to show external function was called', () => {
            const spy = sandbox.spy(Date, 'now');
            tdd.sinonSpy();

            expect(spy.calledOnce).tobe(true);
        });
    });

    describe('sinonStub()', () => {
        it('it returns the stubbed value', () => {
            const stub = sandbox.stub(Date, 'now').returns('hello');
            const result = tdd.sinonStub();

            console.log(result)
        })
    })

    afterEach(() => {
        sandbox.restore();
    });
});
