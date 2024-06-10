
// You can write more code here

/* START OF COMPILED CODE */

class PrefabMindCat1 extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		this.setInteractive(new Phaser.Geom.Rectangle(-18.75, -18.75, 37.5, 37.5), Phaser.Geom.Rectangle.Contains);

		// mindCat1Layer1
		const mindCat1Layer1 = scene.add.image(0, 0, "mindCat1");
		mindCat1Layer1.scaleX = 0.015;
		mindCat1Layer1.scaleY = 0.015;
		this.add(mindCat1Layer1);

		this.mindCat1Layer1 = mindCat1Layer1;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Image} */
	mindCat1Layer1;
	/** @type {number} */
	atTile = 0;
	/** @type {boolean} */
	playerOwner = 0;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
