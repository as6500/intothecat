
// You can write more code here

/* START OF COMPILED CODE */

class tileTypeImage extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// waterSprite
		const waterSprite = scene.add.image(0, 0, "waterSprite");
		waterSprite.name = "waterSprite";
		waterSprite.scaleX = 0.02;
		waterSprite.scaleY = 0.02;
		this.add(waterSprite);

		// groundSprite
		const groundSprite = scene.add.image(161, 1, "groundSprite");
		groundSprite.name = "groundSprite";
		groundSprite.scaleX = 0.02;
		groundSprite.scaleY = 0.02;
		this.add(groundSprite);

		// wallSprite
		const wallSprite = scene.add.image(98, 51, "wallSprite");
		wallSprite.name = "wallSprite";
		wallSprite.scaleX = 0.02;
		wallSprite.scaleY = 0.02;
		this.add(wallSprite);

		// mindCat1
		const mindCat1 = scene.add.image(49, 47, "mindCat1");
		mindCat1.name = "mindCat1";
		mindCat1.scaleX = 0.02;
		mindCat1.scaleY = 0.02;
		this.add(mindCat1);

		// mindCat2
		const mindCat2 = scene.add.image(57, 0, "mindCat2");
		mindCat2.name = "mindCat2";
		mindCat2.scaleX = 0.02;
		mindCat2.scaleY = 0.02;
		this.add(mindCat2);

		// machineCat1
		const machineCat1 = scene.add.image(0, 53, "machineCat1");
		machineCat1.name = "machineCat1";
		machineCat1.scaleX = 0.02;
		machineCat1.scaleY = 0.02;
		this.add(machineCat1);

		// machineCat2
		const machineCat2 = scene.add.image(98, 0, "machineCat2");
		machineCat2.name = "machineCat2";
		machineCat2.scaleX = 0.02;
		machineCat2.scaleY = 0.02;
		this.add(machineCat2);

		this.waterSprite = waterSprite;
		this.groundSprite = groundSprite;
		this.wallSprite = wallSprite;
		this.mindCat1 = mindCat1;
		this.mindCat2 = mindCat2;
		this.machineCat1 = machineCat1;
		this.machineCat2 = machineCat2;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Image} */
	waterSprite;
	/** @type {Phaser.GameObjects.Image} */
	groundSprite;
	/** @type {Phaser.GameObjects.Image} */
	wallSprite;
	/** @type {Phaser.GameObjects.Image} */
	mindCat1;
	/** @type {Phaser.GameObjects.Image} */
	mindCat2;
	/** @type {Phaser.GameObjects.Image} */
	machineCat1;
	/** @type {Phaser.GameObjects.Image} */
	machineCat2;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
