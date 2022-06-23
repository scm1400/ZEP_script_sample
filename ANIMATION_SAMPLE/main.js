// App.loadSpritesheet(fileName: string, frameWidth: integer, frameHeight: integer, anims: array, frameRate: integer): ScriptDynamicResource
let npc = App.loadSpritesheet("npc.png", 64, 64, [0, 1, 2, 3], 6);

// Press 'x' key to summon npc
App.addOnKeyDown(88, function (player) {
	// Put npc object at (10, 10) coordinates
	// Map.putObject(x: number, y: number, dynamicResource: ScriptDynamicResource)
	Map.putObject(10, 10, npc, {
		overlap: true,
	});

	// Play npc animation at (10, 10) coordinates
	// Map.playObjectAnimation(x: number, y: number, name: string, loop: number)
	let a = Map.playObjectAnimation(10, 10, "#" + npc.id, 0);
});
