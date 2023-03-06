// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract crowdFunding {
struct Campaign{
    address owner;
    string title;
    string description;
    uint256 target;
    uint256 amountCollected;
    uint256 deadline;
    string image;
    address[] donators;
    uint256[] donations;
    }

    mapping (uint256=>Campaign) public campaign ;
    uint256 public numberOfCampaign=0;

    function createCampaign(address _owner,string memory _title, string memory _description,uint256 _target,uint256 _deadline, string memory _image)public returns(uint256){
        Campaign storage campaign=campaign[numberOfCampaign];
        require(campaign.deadline<block.timestamp,"the deadline should be less than timestamp");
        campaign.owner=_owner;
        campaign.title=_title;
        campaign.description=_description;
        campaign.target=_target;
        campaign.deadline=_deadline;
        campaign.amountCollected=0;
        campaign.image=_image;

        numberOfCampaign++;
        return(numberOfCampaign-1);
    }

    function donateCampaign(uint256 _id)public payable{
        uint256 amount=msg.value;
        Campaign storage campaign=campaign[_id];
        campaign.donators.push(msg.sender);
        campaign.donations.push(amount);
        (bool sent,)=payable(campaign.owner).call{value:amount}("");

        if(sent){
            campaign.amountCollected=campaign.amountCollected+amount;
        }
    }

    function getDonators(uint256 _id)view public returns(address[] memory,uint256[] memory){
        return(campaign[_id].donators,campaign[_id].donations);
    }

    function getCampaign()public view returns(Campaign[] memory){
        Campaign[] memory allCompaign=new Campaign[](numberOfCampaign);
        for(uint i=0;i<numberOfCampaign;i++){
            Campaign storage items=campaign[i];
            allCompaign[i]=items;
        }
        return allCompaign;
    }

}