pragma solidity ^0.5.0;

contract Election {
    // Read/write candidate
    // string public candidate;

    // model candidate
    struct Candidate {
        uint id;
        string name;
        uint voteCount;
    }

    // read/write candidates
    mapping(uint => Candidate) public candidates;

    // Constructor
    /* function TheElection () public {
        candidate = "Candidate 1";
    } */

    // store candidates count
    uint public candidatesCount;
    
    function ElectionInstance () public {
        addCandidate("Candidate 1");
        addCandidate("Candidate 2");
    }

    function addCandidate (string memory _name) private {
        candidatesCount++;
        candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);
    }
}