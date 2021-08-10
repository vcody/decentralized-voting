let Election = artifacts.require("./Election.sol");

contract("Election", function(accounts) {
    let electionInstance;

    it("create election with 2 candidates...", function() {
        return Election.deployed().then(function(instance) {
            return instance.candidatesCount();
        }).then(function(count) {
            assert.equal(count, 2);
        });
    });

    it("check candidates for correct values...", function() {
        return Election.deployed().then(function(instance) {
            electionInstance = instance;
            return electionInstance.candidates(1);
        }).then(function(candidate) {
            assert.equal(candidate[0], 1, "has correct ID");
            assert.equal(candidate[1], "Candidate 1", "has correct name");
            assert.equal(candidate[2], 0, "has correct # votes");
        }).then(function(candidate) {
            assert.equal(candidate[0], 2, "has correct ID");
            assert.equal(candidate[1], "Candidate 2", "has correct name");
            assert.equal(candidate[2], 0, "has correct # votes");
        });
    });

});