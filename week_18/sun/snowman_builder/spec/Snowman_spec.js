let Snowman = require('../Snowman')

describe('Snowman', () => {
    let snowman;

    beforeEach(() => {
        snowman = new Snowman();
    });

    it("Each snowman has a name", () => {
        expect(snowman.name).toBe(true);
    })

    it("Each snowman needs to have a carrot nose", () => {
        expect(snowman.nose).carrotNose(true);
    })

    it("Each snowman needs stick arms", () => {
        expect(snowman.arm).hasStickArms(true);
    })

    describe("likeWarmHugs()", () => {
        describe('when snowmans name is Olaf', () =>
        it("Returns true when snowman name is Olaf", () => { 
            const result = snowman.likesWarmHugs();
            expect(result).toBe(true)
        })

        describe("All other snowmen", () => {
            beforeEach(() => {
                name = 'Snowman'
            });
            it('returns false', () => {
                const result = snowman.likesWarmHugs()
                expect(result).toBe(false);
            })
        })
    })
})
