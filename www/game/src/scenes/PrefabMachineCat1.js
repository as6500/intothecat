
// You can write more code here

/* START OF COMPILED CODE */

class PrefabMachineCat1 extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// machineCat1Layer1
		const machineCat1Layer1 = scene.add.image(0, 0, "machineCat1");
		machineCat1Layer1.scaleX = 0.015;
		machineCat1Layer1.scaleY = 0.015;
		this.add(machineCat1Layer1);

		this.machineCat1Layer1 = machineCat1Layer1;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Image} */
	machineCat1Layer1;
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
