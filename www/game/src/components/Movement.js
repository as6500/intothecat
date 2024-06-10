
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class Movement {

	constructor(gameObject) {
		this.gameObject = gameObject;
		gameObject["__Movement"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {Movement} */
	static getComponent(gameObject) {
		return gameObject["__Movement"];
	}

	/** @type {Phaser.GameObjects.Sprite} */
	gameObject;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
