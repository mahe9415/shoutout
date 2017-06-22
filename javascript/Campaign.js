function Campaign() {
var  adminName;
var  campaignName;
var  campaignDescription;
var  campaignDate;

}


	Campaign.prototype.getAdminName = function() {  
	return this.AdminName;
	};

	Campaign.prototype.setAdminName = function(AdminName) {  
  this.AdminName = AdminName;
	};

	Campaign.prototype.getCampaignName = function() {
  return this.CampaignName;
	};

	Campaign.prototype.setCampaignName = function(CampaignName) {
  this.CampaignName = CampaignName;
	};

	Campaign.prototype.getCampaignDescription = function(){
	return this.CampaignDescription;
	};

	Campaign.prototype.setCampaignDescription = function(CampaignDescription){
	this.CampaignDescription = CampaignDescription;
	};

	Campaign.prototype.getCampaignDate = function() {
	return this.CampaignDate;
	};

	Campaign.prototype.setCampaignDate = function(CampaignDate) {
	this.CampaignDate = CampaignDate;
	};


