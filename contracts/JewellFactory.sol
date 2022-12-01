// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract JewellFactory is ERC721, Ownable {
    using Counters for Counters.Counter;
    using Strings for uint256;
    Counters.Counter _tokenIds;

    address public admin;
    uint256 SERI_MOD = 10**16;
    uint256 fee = 0.025 ether;
    uint256 forgeFee = 0.01 ether;
    uint256 sellFee = 0.001 ether;
    uint256 lostTime = 30 minutes;
    uint256 quantilyLimit;
    uint32[4] public cooldowns = [
        uint32(6 hours),
        uint32(8 hours),
        uint32(10 hours),
        uint32(12 hours)
    ];

    mapping(uint256 => uint256) public tokenIdToPrice;
    mapping(uint256 => string) _tokenURIs;

    constructor() ERC721("Jewell", "TFT") {
        admin = msg.sender;
    }

    struct Jewell {
        string name;
        uint256 id;
        string location;
        uint8 rarity;
        uint8 gemslv;
        address currentOwner;
        address firstOwner;
        uint8 rawId;
        uint8 gemId;
        uint256 sell;
        uint32 sellTime;
        uint256 gen0;
    }

    Jewell[] public jewells;

    event NewJewell(address indexed owner, uint256 id, string location);
    event BuyJewell(address _seller, address _buyer, uint256 _price);

    function getFee() public view returns (uint256) {
        return fee;
    }

    function getFeeForge() public view returns (uint256) {
        return forgeFee;
    }

    function getFeeSell() public view returns (uint256) {
        return sellFee;
    }

    function _createRandomSeri(string memory _mod)
        internal
        view
        returns (uint256)
    {
        uint256 randomNum = uint256(
            keccak256(abi.encodePacked(block.timestamp, msg.sender, _mod))
        );
        return randomNum % SERI_MOD;
    }

    function _createJewell(
        string memory _name,
        string memory _location,
        uint8 _rarity,
        uint8 _gemslv,
        uint8 _rawId,
        uint8 _gemId,
        uint256 _gen0
    ) internal {
        uint256 newId = _tokenIds.current();

        uint32 time = uint32(block.timestamp);

        Jewell memory newJewell = Jewell(
            _name,
            newId,
            _location,
            _rarity,
            _gemslv,
            msg.sender,
            msg.sender,
            _rawId,
            _gemId,
            0,
            time,
            _gen0
        );
        jewells.push(newJewell);
        _safeMint(msg.sender, newId);
        _tokenIds.increment();

        emit NewJewell(msg.sender, newId, _location);
    }

    function createRandomJewellFree(string memory _location) public {
        require(msg.sender != address(0));
        uint256 counter = 0;
        for (uint256 i = 0; i < jewells.length; i++) {
            if (ownerOf(i) == msg.sender) {
                counter++;
            }
        }
        require(counter < 2);
        quantilyLimit = _tokenIds.current();
        require(quantilyLimit < 1000);
        uint256 Seri = _createRandomSeri(_location);
        uint8 newRarity = uint8((Seri % 10000) / 100 + 1);
        uint8 newGemslv = uint8((Seri % 100) + 1);
        string memory newname;
        if (newRarity >= newGemslv) {
            if (newRarity <= 40) {
                newname = "Metal Bronze";
            }
            if (newRarity > 40 && newRarity <= 60) {
                newname = "Metal Silver";
            }
            if (newRarity > 60 && newRarity <= 90) {
                newname = "Metal Gold";
            }
            if (newRarity > 90) {
                newname = "Metal Platinum";
            }
        } else {
            if (newGemslv <= 40) {
                newname = "Gem Rubi";
            }
            if (newGemslv > 40 && newGemslv <= 60) {
                newname = "Gem Amber";
            }
            if (newGemslv > 60 && newGemslv <= 90) {
                newname = "Gem Emerald";
            }
            if (newGemslv > 90) {
                newname = "Gem Diamond";
            }
        }
        _createJewell(newname, _location, newRarity, newGemslv, 0, 0, 0);
    }

    function createRandomJewell(string memory _location) public payable {
        require(msg.sender != address(0));
        require(msg.value >= fee);
        quantilyLimit = _tokenIds.current();
        require(quantilyLimit < 1000);
        uint256 Seri = _createRandomSeri(_location);
        uint8 newRarity = uint8((Seri % 10000) / 100 + 1);
        uint8 newGemslv = uint8((Seri % 100) + 1);
        string memory newname;
        if (newRarity >= newGemslv) {
            if (newRarity <= 40) {
                newname = "Metal Bronze";
            }
            if (newRarity > 40 && newRarity <= 60) {
                newname = "Metal Silver";
            }
            if (newRarity > 60 && newRarity <= 90) {
                newname = "Metal Gold";
            }
            if (newRarity > 90) {
                newname = "Metal Platinum";
            }
        } else {
            if (newGemslv <= 40) {
                newname = "Gem Rubi";
            }
            if (newGemslv > 40 && newGemslv <= 60) {
                newname = "Gem Amber";
            }
            if (newGemslv > 60 && newGemslv <= 90) {
                newname = "Gem Emerald";
            }
            if (newGemslv > 90) {
                newname = "Gem Diamond";
            }
        }
        _createJewell(newname, _location, newRarity, newGemslv, 0, 0, 0);
        payable(admin).transfer(fee);
    }

    function getJewell() public view returns (Jewell[] memory) {
        return jewells;
    }

    function getOwnerJewells(address _owner)
        public
        view
        returns (Jewell[] memory)
    {
        Jewell[] memory result = new Jewell[](balanceOf(_owner));
        uint256 counter = 0;
        for (uint256 i = 0; i < jewells.length; i++) {
            if (ownerOf(i) == _owner) {
                result[counter] = jewells[i];
                counter++;
            }
        }
        return result;
    }

    function updateFee(uint256 _fee) external onlyOwner {
        fee = _fee;
    }

    function updateFeeForge(uint256 _FeeForge) external onlyOwner {
        forgeFee = _FeeForge;
    }

    function updateFeeSell(uint256 _feeSell) external onlyOwner {
        sellFee = _feeSell;
    }

    function withdraw() external payable onlyOwner {
        address payable _owner = payable(owner());
        _owner.transfer(address(this).balance);
    }

    function updateName(uint256 _JewellId, string calldata _newName) external {
        require(ownerOf(_JewellId) == msg.sender);
        Jewell storage jewell = jewells[_JewellId];
        require(jewell.sell == 0);
        jewells[_JewellId].name = _newName;
    }

    function _getJewellGen(Jewell memory _rawId, Jewell memory _gemId)
        internal
        view
        returns (uint256)
    {
        if (_rawId.gen0 > _gemId.gen0) {
            return _rawId.gen0 += 1;
        }
        return _gemId.gen0 += 1;
    }

    function _isReady(Jewell storage _jewell) internal view returns (bool) {
        return (_jewell.gen0 <= 1);
    }

    function Forging(
        uint256 _rawID,
        uint256 _gemID,
        string memory _location
    ) public payable {
        require(msg.value == forgeFee);
        Jewell storage myRaw = jewells[_rawID];
        Jewell storage myGem = jewells[_gemID];
        require(_rawID != _gemID);
        require(ownerOf(_rawID) == msg.sender);
        require(ownerOf(_gemID) == msg.sender);
        require(_isReady(myRaw));
        require(_isReady(myGem));
        require(myRaw.sell == 0);
        require(myGem.sell == 0);

        uint8 rawId = uint8(myRaw.id);
        uint8 gemId = uint8(myGem.id);

        uint256 rawRarity = uint256(myRaw.rarity);
        uint256 gemRarity = uint256(myGem.gemslv);
        uint8 newRarity = uint8(rawRarity);
        uint8 newGemslv = uint8(gemRarity);
        uint256 newGen = _getJewellGen(myRaw, myGem);

        _transfer(
            msg.sender,
            0x000000000000000000000000000000000000dEaD,
            rawId
        );
        tokenIdToPrice[rawId] = 0; // not for sale anymore
        Jewell storage rawItem = jewells[rawId];
        rawItem.sell = 0;
        // update the token's previous owner
        // update the token's current owner
        rawItem.currentOwner = 0x000000000000000000000000000000000000dEaD;
        _transfer(
            msg.sender,
            0x000000000000000000000000000000000000dEaD,
            gemId
        );
        tokenIdToPrice[gemId] = 0; // not for sale anymore
        Jewell storage gemItem = jewells[gemId];
        gemItem.sell = 0;
        // update the token's previous owner
        // update the token's current owner
        gemItem.currentOwner = 0x000000000000000000000000000000000000dEaD;
        string memory forgeName;
        if (newRarity <= 40) {
            forgeName = "Ring Bronze";
        }
        if (newRarity > 40 && newRarity <= 60) {
            forgeName = "Ring Silver";
        }
        if (newRarity > 60 && newRarity <= 90) {
            forgeName = "Ring Gold";
        }
        if (newRarity > 90) {
            forgeName = "Ring Platinum";
        }
        _createJewell(
            forgeName,
            _location,
            newRarity,
            newGemslv,
            rawId,
            gemId,
            newGen
        );
        payable(admin).transfer(forgeFee);
    }

    function GiftToken(
        address _from,
        address _to,
        uint256 _tokenId
    ) external {
        _transfer(_from, _to, _tokenId);
        tokenIdToPrice[_tokenId] = 0; // not for sale anymore
        Jewell storage myJewell = jewells[_tokenId];
        myJewell.sell = 0;

        // update the token's previous owner
        // update the token's current owner
        myJewell.currentOwner = _to;
    }

    function allowBuy(uint256 _tokenId, uint256 _price) external payable {
        require(msg.sender == ownerOf(_tokenId), "Not owner of this token");
        require(msg.value >= sellFee, "Price must be equal to listing price");
        require(_price > 0, "Price must be at least 1 wei");
        // Jewell storage myTokenID = jewells[_tokenId];
        // require(_isReady(myTokenID), "Forge not reedy");
        tokenIdToPrice[_tokenId] = _price;
        Jewell storage myJewell = jewells[_tokenId];
        myJewell.sell = _price;
    }

    function disallowBuy(uint256 _tokenId) external {
        require(msg.sender == ownerOf(_tokenId), "Not owner of this token");
        tokenIdToPrice[_tokenId] = 0;
        Jewell storage myJewell = jewells[_tokenId];
        myJewell.sell = 0;
    }

    function buy(uint256 _tokenId) external payable {
        uint256 price = tokenIdToPrice[_tokenId];
        require(price > 0, "This token is not for sale");
        require(
            msg.value == price,
            "Please submit the asking price in order to complete the purchase"
        );

        address seller = ownerOf(_tokenId);

        _transfer(seller, msg.sender, _tokenId);
        tokenIdToPrice[_tokenId] = 0; // not for sale anymore
        Jewell storage myJewell = jewells[_tokenId];
        myJewell.sell = 0;
        payable(seller).transfer(msg.value); // send the ETH to the seller
        payable(admin).transfer(sellFee);
        // update the token's current owner
        myJewell.currentOwner = msg.sender;

        emit BuyJewell(seller, msg.sender, msg.value);
    }

    function changePrice(uint256 _tokenId, uint256 _newPrice) external {
        require(_exists(_tokenId));
        require(_newPrice > 0, "Price must be at least 1 wei");
        address seller = ownerOf(_tokenId);
        require(seller == msg.sender);
        tokenIdToPrice[_tokenId] = _newPrice;
        Jewell storage myJewell = jewells[_tokenId];
        myJewell.sell = _newPrice;
        myJewell.sellTime = uint32(block.timestamp);
    }

    function getAllJewellSell() public view returns (Jewell[] memory) {
        uint256 counter = 0;
        uint256 itemCount = 0;
        for (uint256 i = 0; i < jewells.length; i++) {
            if (jewells[i].sell > 0) {
                itemCount += 1;
            }
        }
        Jewell[] memory jewellSell = new Jewell[](itemCount);
        for (uint256 i = 0; i < jewells.length; i++) {
            if (jewells[i].sell > 0) {
                jewellSell[counter] = jewells[i];
                counter++;
            }
        }
        return jewellSell;
    }
}
