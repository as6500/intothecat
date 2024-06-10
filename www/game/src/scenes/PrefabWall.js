
// You can write more code here

/* START OF COMPILED CODE */

class PrefabWall extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		this.setInteractive(new Phaser.Geom.Rectangle(-18.75, -18.75, 37.5, 37.5), Phaser.Geom.Rectangle.Contains);

		// wallSpriteLayer1
		const wallSpriteLayer1 = scene.add.image(0, 0, "wallSprite");
		wallSpriteLayer1.scaleX = 0.015;
		wallSpriteLayer1.scaleY = 0.015;
		this.add(wallSpriteLayer1);

		// border
		const border = scene.add.image(0, 0, "border");
		border.scaleX = 0.015;
		border.scaleY = 0.015;
		border.visible = false;
		this.add(border);

		this.wallSpriteLayer1 = wallSpriteLayer1;
		this.border = border;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Image} */
	wallSpriteLayer1;
	/** @type {Phaser.GameObjects.Image} */
	border;
	/** @type {number} */
	tileID = 0;
	/** @type {number} */
	tileX = 0;
	/** @type {number} */
	tileY = 0;
	/** @type {boolean} */
	selected = false;
	/** @type {string} */
	tileType = "wall";

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
