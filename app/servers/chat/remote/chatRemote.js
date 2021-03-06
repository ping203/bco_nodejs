module.exports = function(app) {
	return new ChatRemote(app, app.get('chatService'));
}

var ChatRemote = function(app, chatService) {
	this.app = app;
	this.chatService = chatService;
}

/**
* Add player into channel
*/
ChatRemote.prototype.add = function(uid, userName, channelName, cb) {
	var code = this.chatService.add(uid, userName, channelName);
	cb(null, code);
};

/**
* leave channel
*/
ChatRemote.prototype.leave = function(uid, channelName, cb) {
	this.chatService.leave(uid, channelName);
	if (!!cb) {
		cb();
	}
};

ChatRemote.prototype.kick = function(uid, cb){
	this.chatService.kick(uid);
	cb();
};