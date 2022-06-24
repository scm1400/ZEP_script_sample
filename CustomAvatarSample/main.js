// App.loadSpritesheet(fileName: string, frameWidth: integer, frameHeight: integer, anims: array, frameRate: integer): ScriptDynamicResource
let ghost = App.loadSpritesheet(
	"ghost.png",
	48,
	48,
	{
		left: [3, 4, 5],
		up: [9, 10, 11],
		down: [0, 1, 2],
		right: [6, 7, 8],
	},
	8
);

// Press 'x' key to change avatar
App.addOnKeyDown(88, function (player) {
	player.sprite = ghost;
	player.sendUpdated();
});
