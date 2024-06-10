
// You can write more code here

/* START OF COMPILED CODE */

class PrefabMovementButton extends Phaser.GameObjects.Rectangle {

	constructor(scene, x, y, width, height) {
		super(scene, x ?? 0, y ?? 0, width ?? 128, height ?? 128);

		this.setInteractive(new Phaser.Geom.Rectangle(0, 0, 128, 128), Phaser.Geom.Rectangle.Contains);
		this.isFilled = true;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
