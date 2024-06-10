
var match_id 
var pawn_id 
var positions 
var player_id 
var map_id 

var mind_cat1x 
var mind_cat2x  
var machine_cat1x
var machine_cat2x

var mind_cat1y 
var mind_cat2y  
var machine_cat1y
var machine_cat2y

var chosen_pawn_movement
var chosen_pawn_attack

var attack_name
var direction

var player1Health
var player2Health

var Player1Turn
var Player2Turn

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// gamebackground
		const gamebackground = this.add.image(634, 357, "gamebackground");
		gamebackground.scaleX = 0.61;
		gamebackground.scaleY = 0.47;

		// prefabGround
		const prefabGround = new PrefabGround(this, 381, 98);
		this.add.existing(prefabGround);

		// prefabGround_1
		const prefabGround_1 = new PrefabGround(this, 418, 98);
		this.add.existing(prefabGround_1);

		// prefabGround_2
		const prefabGround_2 = new PrefabGround(this, 455, 98);
		this.add.existing(prefabGround_2);

		// prefabGround_3
		const prefabGround_3 = new PrefabGround(this, 492, 98);
		this.add.existing(prefabGround_3);

		// prefabGround_4
		const prefabGround_4 = new PrefabGround(this, 529, 98);
		this.add.existing(prefabGround_4);

		// prefabGround_5
		const prefabGround_5 = new PrefabGround(this, 566, 98);
		this.add.existing(prefabGround_5);

		// prefabGround_6
		const prefabGround_6 = new PrefabGround(this, 603, 98);
		this.add.existing(prefabGround_6);

		// prefabGround_7
		const prefabGround_7 = new PrefabGround(this, 640, 98);
		this.add.existing(prefabGround_7);

		// prefabGround_8
		const prefabGround_8 = new PrefabGround(this, 677, 98);
		this.add.existing(prefabGround_8);

		// prefabGround_9
		const prefabGround_9 = new PrefabGround(this, 714, 98);
		this.add.existing(prefabGround_9);

		// prefabWall
		const prefabWall = new PrefabWall(this, 751, 98);
		this.add.existing(prefabWall);

		// prefabGround_10
		const prefabGround_10 = new PrefabGround(this, 788, 98);
		this.add.existing(prefabGround_10);

		// prefabGround_11
		const prefabGround_11 = new PrefabGround(this, 825, 98);
		this.add.existing(prefabGround_11);

		// prefabGround_12
		const prefabGround_12 = new PrefabGround(this, 862, 98);
		this.add.existing(prefabGround_12);

		// prefabGround_13
		const prefabGround_13 = new PrefabGround(this, 899, 98);
		this.add.existing(prefabGround_13);

		// prefabGround_14
		const prefabGround_14 = new PrefabGround(this, 381, 135);
		this.add.existing(prefabGround_14);

		// prefabGround_15
		const prefabGround_15 = new PrefabGround(this, 418, 135);
		this.add.existing(prefabGround_15);

		// prefabWall_1
		const prefabWall_1 = new PrefabWall(this, 455, 135);
		this.add.existing(prefabWall_1);

		// prefabWall_2
		const prefabWall_2 = new PrefabWall(this, 492, 135);
		this.add.existing(prefabWall_2);

		// prefabWall_3
		const prefabWall_3 = new PrefabWall(this, 529, 135);
		this.add.existing(prefabWall_3);

		// prefabWall_4
		const prefabWall_4 = new PrefabWall(this, 566, 135);
		this.add.existing(prefabWall_4);

		// prefabWall_5
		const prefabWall_5 = new PrefabWall(this, 603, 135);
		this.add.existing(prefabWall_5);

		// prefabWall_6
		const prefabWall_6 = new PrefabWall(this, 640, 135);
		this.add.existing(prefabWall_6);

		// prefabGround_16
		const prefabGround_16 = new PrefabGround(this, 677, 135);
		this.add.existing(prefabGround_16);

		// prefabGround_17
		const prefabGround_17 = new PrefabGround(this, 714, 135);
		this.add.existing(prefabGround_17);

		// prefabWall_7
		const prefabWall_7 = new PrefabWall(this, 751, 135);
		this.add.existing(prefabWall_7);

		// prefabGround_18
		const prefabGround_18 = new PrefabGround(this, 788, 135);
		this.add.existing(prefabGround_18);

		// prefabGround_19
		const prefabGround_19 = new PrefabGround(this, 825, 135);
		this.add.existing(prefabGround_19);

		// prefabGround_20
		const prefabGround_20 = new PrefabGround(this, 862, 135);
		this.add.existing(prefabGround_20);

		// prefabGround_21
		const prefabGround_21 = new PrefabGround(this, 899, 135);
		this.add.existing(prefabGround_21);

		// prefabGround_22
		const prefabGround_22 = new PrefabGround(this, 381, 172);
		this.add.existing(prefabGround_22);

		// prefabGround_23
		const prefabGround_23 = new PrefabGround(this, 418, 172);
		this.add.existing(prefabGround_23);

		// prefabWall_8
		const prefabWall_8 = new PrefabWall(this, 455, 172);
		this.add.existing(prefabWall_8);

		// prefabWater
		const prefabWater = new PrefabWater(this, 492, 172);
		this.add.existing(prefabWater);

		// prefabGround_24
		const prefabGround_24 = new PrefabGround(this, 529, 172);
		this.add.existing(prefabGround_24);

		// prefabGround_25
		const prefabGround_25 = new PrefabGround(this, 566, 172);
		this.add.existing(prefabGround_25);

		// prefabGround_26
		const prefabGround_26 = new PrefabGround(this, 603, 172);
		this.add.existing(prefabGround_26);

		// prefabWall_9
		const prefabWall_9 = new PrefabWall(this, 640, 172);
		this.add.existing(prefabWall_9);

		// prefabGround_27
		const prefabGround_27 = new PrefabGround(this, 677, 172);
		this.add.existing(prefabGround_27);

		// prefabGround_28
		const prefabGround_28 = new PrefabGround(this, 714, 172);
		this.add.existing(prefabGround_28);

		// prefabWall_10
		const prefabWall_10 = new PrefabWall(this, 751, 172);
		this.add.existing(prefabWall_10);

		// prefabWall_11
		const prefabWall_11 = new PrefabWall(this, 788, 172);
		this.add.existing(prefabWall_11);

		// prefabGround_29
		const prefabGround_29 = new PrefabGround(this, 825, 172);
		this.add.existing(prefabGround_29);

		// prefabWall_12
		const prefabWall_12 = new PrefabWall(this, 862, 172);
		this.add.existing(prefabWall_12);

		// prefabWall_13
		const prefabWall_13 = new PrefabWall(this, 899, 172);
		this.add.existing(prefabWall_13);

		// prefabGround_30
		const prefabGround_30 = new PrefabGround(this, 381, 209);
		this.add.existing(prefabGround_30);

		// prefabGround_31
		const prefabGround_31 = new PrefabGround(this, 418, 209);
		this.add.existing(prefabGround_31);

		// prefabWall_14
		const prefabWall_14 = new PrefabWall(this, 455, 209);
		this.add.existing(prefabWall_14);

		// prefabWater_1
		const prefabWater_1 = new PrefabWater(this, 492, 209);
		this.add.existing(prefabWater_1);

		// prefabWater_2
		const prefabWater_2 = new PrefabWater(this, 529, 209);
		this.add.existing(prefabWater_2);

		// prefabGround_32
		const prefabGround_32 = new PrefabGround(this, 566, 209);
		this.add.existing(prefabGround_32);

		// prefabGround_33
		const prefabGround_33 = new PrefabGround(this, 603, 209);
		this.add.existing(prefabGround_33);

		// prefabWall_15
		const prefabWall_15 = new PrefabWall(this, 640, 209);
		this.add.existing(prefabWall_15);

		// prefabGround_34
		const prefabGround_34 = new PrefabGround(this, 677, 209);
		this.add.existing(prefabGround_34);

		// prefabGround_35
		const prefabGround_35 = new PrefabGround(this, 714, 209);
		this.add.existing(prefabGround_35);

		// prefabWall_16
		const prefabWall_16 = new PrefabWall(this, 751, 209);
		this.add.existing(prefabWall_16);

		// prefabWater_3
		const prefabWater_3 = new PrefabWater(this, 788, 209);
		this.add.existing(prefabWater_3);

		// prefabWater_4
		const prefabWater_4 = new PrefabWater(this, 825, 209);
		this.add.existing(prefabWater_4);

		// prefabWall_17
		const prefabWall_17 = new PrefabWall(this, 862, 209);
		this.add.existing(prefabWall_17);

		// prefabGround_36
		const prefabGround_36 = new PrefabGround(this, 899, 209);
		this.add.existing(prefabGround_36);

		// prefabWall_18
		const prefabWall_18 = new PrefabWall(this, 381, 246);
		this.add.existing(prefabWall_18);

		// prefabGround_37
		const prefabGround_37 = new PrefabGround(this, 418, 246);
		this.add.existing(prefabGround_37);

		// prefabWall_19
		const prefabWall_19 = new PrefabWall(this, 455, 246);
		this.add.existing(prefabWall_19);

		// prefabWall_20
		const prefabWall_20 = new PrefabWall(this, 492, 246);
		this.add.existing(prefabWall_20);

		// prefabWater_5
		const prefabWater_5 = new PrefabWater(this, 529, 246);
		this.add.existing(prefabWater_5);

		// prefabWall_21
		const prefabWall_21 = new PrefabWall(this, 566, 246);
		this.add.existing(prefabWall_21);

		// prefabGround_38
		const prefabGround_38 = new PrefabGround(this, 603, 246);
		this.add.existing(prefabGround_38);

		// prefabWall_22
		const prefabWall_22 = new PrefabWall(this, 640, 246);
		this.add.existing(prefabWall_22);

		// prefabWall_23
		const prefabWall_23 = new PrefabWall(this, 677, 246);
		this.add.existing(prefabWall_23);

		// prefabWater_6
		const prefabWater_6 = new PrefabWater(this, 714, 246);
		this.add.existing(prefabWater_6);

		// prefabWall_24
		const prefabWall_24 = new PrefabWall(this, 751, 246);
		this.add.existing(prefabWall_24);

		// prefabWall_25
		const prefabWall_25 = new PrefabWall(this, 788, 246);
		this.add.existing(prefabWall_25);

		// prefabWater_7
		const prefabWater_7 = new PrefabWater(this, 825, 246);
		this.add.existing(prefabWater_7);

		// prefabWall_26
		const prefabWall_26 = new PrefabWall(this, 862, 246);
		this.add.existing(prefabWall_26);

		// prefabGround_39
		const prefabGround_39 = new PrefabGround(this, 899, 246);
		this.add.existing(prefabGround_39);

		// prefabGround_40
		const prefabGround_40 = new PrefabGround(this, 381, 283);
		this.add.existing(prefabGround_40);

		// prefabGround_41
		const prefabGround_41 = new PrefabGround(this, 418, 283);
		this.add.existing(prefabGround_41);

		// prefabWall_27
		const prefabWall_27 = new PrefabWall(this, 455, 283);
		this.add.existing(prefabWall_27);

		// prefabWater_8
		const prefabWater_8 = new PrefabWater(this, 492, 283);
		this.add.existing(prefabWater_8);

		// prefabWater_9
		const prefabWater_9 = new PrefabWater(this, 529, 283);
		this.add.existing(prefabWater_9);

		// prefabWall_28
		const prefabWall_28 = new PrefabWall(this, 566, 283);
		this.add.existing(prefabWall_28);

		// prefabGround_42
		const prefabGround_42 = new PrefabGround(this, 603, 283);
		this.add.existing(prefabGround_42);

		// prefabWater_10
		const prefabWater_10 = new PrefabWater(this, 640, 283);
		this.add.existing(prefabWater_10);

		// prefabWater_11
		const prefabWater_11 = new PrefabWater(this, 677, 283);
		this.add.existing(prefabWater_11);

		// prefabWater_12
		const prefabWater_12 = new PrefabWater(this, 714, 283);
		this.add.existing(prefabWater_12);

		// prefabWater_13
		const prefabWater_13 = new PrefabWater(this, 751, 283);
		this.add.existing(prefabWater_13);

		// prefabWall_29
		const prefabWall_29 = new PrefabWall(this, 788, 283);
		this.add.existing(prefabWall_29);

		// prefabWater_14
		const prefabWater_14 = new PrefabWater(this, 825, 283);
		this.add.existing(prefabWater_14);

		// prefabWall_30
		const prefabWall_30 = new PrefabWall(this, 862, 283);
		this.add.existing(prefabWall_30);

		// prefabGround_43
		const prefabGround_43 = new PrefabGround(this, 899, 283);
		this.add.existing(prefabGround_43);

		// prefabGround_44
		const prefabGround_44 = new PrefabGround(this, 381, 320);
		this.add.existing(prefabGround_44);

		// prefabGround_45
		const prefabGround_45 = new PrefabGround(this, 418, 320);
		this.add.existing(prefabGround_45);

		// prefabWall_31
		const prefabWall_31 = new PrefabWall(this, 455, 320);
		this.add.existing(prefabWall_31);

		// prefabWall_32
		const prefabWall_32 = new PrefabWall(this, 492, 320);
		this.add.existing(prefabWall_32);

		// prefabWall_33
		const prefabWall_33 = new PrefabWall(this, 529, 320);
		this.add.existing(prefabWall_33);

		// prefabWall_34
		const prefabWall_34 = new PrefabWall(this, 566, 320);
		this.add.existing(prefabWall_34);

		// prefabWall_35
		const prefabWall_35 = new PrefabWall(this, 603, 320);
		this.add.existing(prefabWall_35);

		// prefabWall_36
		const prefabWall_36 = new PrefabWall(this, 640, 320);
		this.add.existing(prefabWall_36);

		// prefabWall_37
		const prefabWall_37 = new PrefabWall(this, 677, 320);
		this.add.existing(prefabWall_37);

		// prefabWater_15
		const prefabWater_15 = new PrefabWater(this, 714, 320);
		this.add.existing(prefabWater_15);

		// prefabWater_16
		const prefabWater_16 = new PrefabWater(this, 751, 320);
		this.add.existing(prefabWater_16);

		// prefabWater_17
		const prefabWater_17 = new PrefabWater(this, 788, 320);
		this.add.existing(prefabWater_17);

		// prefabWater_18
		const prefabWater_18 = new PrefabWater(this, 825, 320);
		this.add.existing(prefabWater_18);

		// prefabGround_46
		const prefabGround_46 = new PrefabGround(this, 862, 320);
		this.add.existing(prefabGround_46);

		// prefabGround_47
		const prefabGround_47 = new PrefabGround(this, 899, 320);
		this.add.existing(prefabGround_47);

		// prefabGround_48
		const prefabGround_48 = new PrefabGround(this, 381, 357);
		this.add.existing(prefabGround_48);

		// prefabGround_49
		const prefabGround_49 = new PrefabGround(this, 418, 357);
		this.add.existing(prefabGround_49);

		// prefabWall_38
		const prefabWall_38 = new PrefabWall(this, 455, 357);
		this.add.existing(prefabWall_38);

		// prefabWater_19
		const prefabWater_19 = new PrefabWater(this, 492, 357);
		this.add.existing(prefabWater_19);

		// prefabWall_39
		const prefabWall_39 = new PrefabWall(this, 529, 357);
		this.add.existing(prefabWall_39);

		// prefabWater_20
		const prefabWater_20 = new PrefabWater(this, 566, 357);
		this.add.existing(prefabWater_20);

		// prefabWall_40
		const prefabWall_40 = new PrefabWall(this, 603, 357);
		this.add.existing(prefabWall_40);

		// prefabGround_50
		const prefabGround_50 = new PrefabGround(this, 640, 357);
		this.add.existing(prefabGround_50);

		// prefabGround_51
		const prefabGround_51 = new PrefabGround(this, 677, 357);
		this.add.existing(prefabGround_51);

		// prefabGround_52
		const prefabGround_52 = new PrefabGround(this, 714, 357);
		this.add.existing(prefabGround_52);

		// prefabWall_41
		const prefabWall_41 = new PrefabWall(this, 751, 357);
		this.add.existing(prefabWall_41);

		// prefabWater_21
		const prefabWater_21 = new PrefabWater(this, 788, 357);
		this.add.existing(prefabWater_21);

		// prefabGround_53
		const prefabGround_53 = new PrefabGround(this, 825, 357);
		this.add.existing(prefabGround_53);

		// prefabGround_54
		const prefabGround_54 = new PrefabGround(this, 862, 357);
		this.add.existing(prefabGround_54);

		// prefabGround_55
		const prefabGround_55 = new PrefabGround(this, 899, 357);
		this.add.existing(prefabGround_55);

		// prefabGround_56
		const prefabGround_56 = new PrefabGround(this, 381, 394);
		this.add.existing(prefabGround_56);

		// prefabGround_57
		const prefabGround_57 = new PrefabGround(this, 418, 394);
		this.add.existing(prefabGround_57);

		// prefabWall_42
		const prefabWall_42 = new PrefabWall(this, 455, 394);
		this.add.existing(prefabWall_42);

		// prefabWater_22
		const prefabWater_22 = new PrefabWater(this, 492, 394);
		this.add.existing(prefabWater_22);

		// prefabWall_43
		const prefabWall_43 = new PrefabWall(this, 529, 394);
		this.add.existing(prefabWall_43);

		// prefabWater_23
		const prefabWater_23 = new PrefabWater(this, 566, 394);
		this.add.existing(prefabWater_23);

		// prefabWall_44
		const prefabWall_44 = new PrefabWall(this, 603, 394);
		this.add.existing(prefabWall_44);

		// prefabGround_58
		const prefabGround_58 = new PrefabGround(this, 640, 394);
		this.add.existing(prefabGround_58);

		// prefabWall_45
		const prefabWall_45 = new PrefabWall(this, 677, 394);
		this.add.existing(prefabWall_45);

		// prefabWall_46
		const prefabWall_46 = new PrefabWall(this, 714, 394);
		this.add.existing(prefabWall_46);

		// prefabWall_47
		const prefabWall_47 = new PrefabWall(this, 751, 394);
		this.add.existing(prefabWall_47);

		// prefabGround_59
		const prefabGround_59 = new PrefabGround(this, 788, 394);
		this.add.existing(prefabGround_59);

		// prefabGround_60
		const prefabGround_60 = new PrefabGround(this, 825, 394);
		this.add.existing(prefabGround_60);

		// prefabGround_61
		const prefabGround_61 = new PrefabGround(this, 862, 394);
		this.add.existing(prefabGround_61);

		// prefabGround_62
		const prefabGround_62 = new PrefabGround(this, 899, 394);
		this.add.existing(prefabGround_62);

		// prefabWall_48
		const prefabWall_48 = new PrefabWall(this, 381, 431);
		this.add.existing(prefabWall_48);

		// prefabGround_63
		const prefabGround_63 = new PrefabGround(this, 418, 431);
		this.add.existing(prefabGround_63);

		// prefabWall_49
		const prefabWall_49 = new PrefabWall(this, 455, 431);
		this.add.existing(prefabWall_49);

		// prefabWater_24
		const prefabWater_24 = new PrefabWater(this, 492, 431);
		this.add.existing(prefabWater_24);

		// prefabWater_25
		const prefabWater_25 = new PrefabWater(this, 529, 431);
		this.add.existing(prefabWater_25);

		// prefabWater_26
		const prefabWater_26 = new PrefabWater(this, 566, 431);
		this.add.existing(prefabWater_26);

		// prefabWater_27
		const prefabWater_27 = new PrefabWater(this, 603, 431);
		this.add.existing(prefabWater_27);

		// prefabGround_64
		const prefabGround_64 = new PrefabGround(this, 640, 431);
		this.add.existing(prefabGround_64);

		// prefabWall_50
		const prefabWall_50 = new PrefabWall(this, 677, 431);
		this.add.existing(prefabWall_50);

		// prefabGround_65
		const prefabGround_65 = new PrefabGround(this, 714, 431);
		this.add.existing(prefabGround_65);

		// prefabGround_66
		const prefabGround_66 = new PrefabGround(this, 751, 431);
		this.add.existing(prefabGround_66);

		// prefabGround_67
		const prefabGround_67 = new PrefabGround(this, 788, 431);
		this.add.existing(prefabGround_67);

		// prefabGround_68
		const prefabGround_68 = new PrefabGround(this, 825, 431);
		this.add.existing(prefabGround_68);

		// prefabGround_69
		const prefabGround_69 = new PrefabGround(this, 862, 431);
		this.add.existing(prefabGround_69);

		// prefabGround_70
		const prefabGround_70 = new PrefabGround(this, 899, 431);
		this.add.existing(prefabGround_70);

		// prefabGround_71
		const prefabGround_71 = new PrefabGround(this, 381, 468);
		this.add.existing(prefabGround_71);

		// prefabGround_72
		const prefabGround_72 = new PrefabGround(this, 418, 468);
		this.add.existing(prefabGround_72);

		// prefabWall_51
		const prefabWall_51 = new PrefabWall(this, 455, 468);
		this.add.existing(prefabWall_51);

		// prefabWater_28
		const prefabWater_28 = new PrefabWater(this, 492, 468);
		this.add.existing(prefabWater_28);

		// prefabWater_29
		const prefabWater_29 = new PrefabWater(this, 529, 468);
		this.add.existing(prefabWater_29);

		// prefabGround_73
		const prefabGround_73 = new PrefabGround(this, 566, 468);
		this.add.existing(prefabGround_73);

		// prefabGround_74
		const prefabGround_74 = new PrefabGround(this, 603, 468);
		this.add.existing(prefabGround_74);

		// prefabGround_75
		const prefabGround_75 = new PrefabGround(this, 640, 468);
		this.add.existing(prefabGround_75);

		// prefabWall_52
		const prefabWall_52 = new PrefabWall(this, 677, 468);
		this.add.existing(prefabWall_52);

		// prefabGround_76
		const prefabGround_76 = new PrefabGround(this, 714, 468);
		this.add.existing(prefabGround_76);

		// prefabWall_53
		const prefabWall_53 = new PrefabWall(this, 751, 468);
		this.add.existing(prefabWall_53);

		// prefabWall_54
		const prefabWall_54 = new PrefabWall(this, 788, 468);
		this.add.existing(prefabWall_54);

		// prefabGround_77
		const prefabGround_77 = new PrefabGround(this, 825, 468);
		this.add.existing(prefabGround_77);

		// prefabWall_55
		const prefabWall_55 = new PrefabWall(this, 862, 468);
		this.add.existing(prefabWall_55);

		// prefabWall_56
		const prefabWall_56 = new PrefabWall(this, 899, 468);
		this.add.existing(prefabWall_56);

		// prefabGround_78
		const prefabGround_78 = new PrefabGround(this, 381, 505);
		this.add.existing(prefabGround_78);

		// prefabGround_79
		const prefabGround_79 = new PrefabGround(this, 418, 505);
		this.add.existing(prefabGround_79);

		// prefabWall_57
		const prefabWall_57 = new PrefabWall(this, 455, 505);
		this.add.existing(prefabWall_57);

		// prefabWall_58
		const prefabWall_58 = new PrefabWall(this, 492, 505);
		this.add.existing(prefabWall_58);

		// prefabWall_59
		const prefabWall_59 = new PrefabWall(this, 529, 505);
		this.add.existing(prefabWall_59);

		// prefabWall_60
		const prefabWall_60 = new PrefabWall(this, 566, 505);
		this.add.existing(prefabWall_60);

		// prefabWall_61
		const prefabWall_61 = new PrefabWall(this, 603, 505);
		this.add.existing(prefabWall_61);

		// prefabWall_62
		const prefabWall_62 = new PrefabWall(this, 640, 505);
		this.add.existing(prefabWall_62);

		// prefabWall_63
		const prefabWall_63 = new PrefabWall(this, 677, 505);
		this.add.existing(prefabWall_63);

		// prefabGround_80
		const prefabGround_80 = new PrefabGround(this, 714, 505);
		this.add.existing(prefabGround_80);

		// prefabWall_64
		const prefabWall_64 = new PrefabWall(this, 751, 505);
		this.add.existing(prefabWall_64);

		// prefabWater_30
		const prefabWater_30 = new PrefabWater(this, 788, 505);
		this.add.existing(prefabWater_30);

		// prefabWater_31
		const prefabWater_31 = new PrefabWater(this, 825, 505);
		this.add.existing(prefabWater_31);

		// prefabGround_81
		const prefabGround_81 = new PrefabGround(this, 862, 505);
		this.add.existing(prefabGround_81);

		// prefabGround_82
		const prefabGround_82 = new PrefabGround(this, 899, 505);
		this.add.existing(prefabGround_82);

		// prefabGround_83
		const prefabGround_83 = new PrefabGround(this, 381, 542);
		this.add.existing(prefabGround_83);

		// prefabGround_84
		const prefabGround_84 = new PrefabGround(this, 418, 542);
		this.add.existing(prefabGround_84);

		// prefabGround_85
		const prefabGround_85 = new PrefabGround(this, 455, 542);
		this.add.existing(prefabGround_85);

		// prefabGround_86
		const prefabGround_86 = new PrefabGround(this, 492, 542);
		this.add.existing(prefabGround_86);

		// prefabWater_32
		const prefabWater_32 = new PrefabWater(this, 529, 542);
		this.add.existing(prefabWater_32);

		// prefabWater_33
		const prefabWater_33 = new PrefabWater(this, 566, 542);
		this.add.existing(prefabWater_33);

		// prefabWater_34
		const prefabWater_34 = new PrefabWater(this, 603, 542);
		this.add.existing(prefabWater_34);

		// prefabWater_35
		const prefabWater_35 = new PrefabWater(this, 640, 542);
		this.add.existing(prefabWater_35);

		// prefabGround_87
		const prefabGround_87 = new PrefabGround(this, 677, 542);
		this.add.existing(prefabGround_87);

		// prefabGround_88
		const prefabGround_88 = new PrefabGround(this, 714, 542);
		this.add.existing(prefabGround_88);

		// prefabWall_65
		const prefabWall_65 = new PrefabWall(this, 751, 542);
		this.add.existing(prefabWall_65);

		// prefabWall_66
		const prefabWall_66 = new PrefabWall(this, 788, 542);
		this.add.existing(prefabWall_66);

		// prefabWater_36
		const prefabWater_36 = new PrefabWater(this, 825, 542);
		this.add.existing(prefabWater_36);

		// prefabWall_67
		const prefabWall_67 = new PrefabWall(this, 862, 542);
		this.add.existing(prefabWall_67);

		// prefabWall_68
		const prefabWall_68 = new PrefabWall(this, 899, 542);
		this.add.existing(prefabWall_68);

		// prefabGround_89
		const prefabGround_89 = new PrefabGround(this, 381, 579);
		this.add.existing(prefabGround_89);

		// prefabGround_90
		const prefabGround_90 = new PrefabGround(this, 418, 579);
		this.add.existing(prefabGround_90);

		// prefabGround_91
		const prefabGround_91 = new PrefabGround(this, 455, 579);
		this.add.existing(prefabGround_91);

		// prefabWall_69
		const prefabWall_69 = new PrefabWall(this, 492, 579);
		this.add.existing(prefabWall_69);

		// prefabWall_73
		const prefabWall_73 = new PrefabWall(this, 640, 579);
		this.add.existing(prefabWall_73);

		// prefabWall_70
		const prefabWall_70 = new PrefabWall(this, 529, 579);
		this.add.existing(prefabWall_70);

		// prefabWall_71
		const prefabWall_71 = new PrefabWall(this, 566, 579);
		this.add.existing(prefabWall_71);

		// prefabWall_72
		const prefabWall_72 = new PrefabWall(this, 603, 579);
		this.add.existing(prefabWall_72);

		// prefabWall_74
		const prefabWall_74 = new PrefabWall(this, 677, 579);
		this.add.existing(prefabWall_74);

		// prefabGround_92
		const prefabGround_92 = new PrefabGround(this, 714, 579);
		this.add.existing(prefabGround_92);

		// prefabWall_75
		const prefabWall_75 = new PrefabWall(this, 751, 579);
		this.add.existing(prefabWall_75);

		// prefabWater_37
		const prefabWater_37 = new PrefabWater(this, 788, 579);
		this.add.existing(prefabWater_37);

		// prefabWater_38
		const prefabWater_38 = new PrefabWater(this, 825, 579);
		this.add.existing(prefabWater_38);

		// prefabWater_39
		const prefabWater_39 = new PrefabWater(this, 862, 579);
		this.add.existing(prefabWater_39);

		// prefabGround_93
		const prefabGround_93 = new PrefabGround(this, 899, 579);
		this.add.existing(prefabGround_93);

		// prefabGround_94
		const prefabGround_94 = new PrefabGround(this, 381, 616);
		this.add.existing(prefabGround_94);

		// prefabGround_95
		const prefabGround_95 = new PrefabGround(this, 418, 616);
		this.add.existing(prefabGround_95);

		// prefabGround_96
		const prefabGround_96 = new PrefabGround(this, 455, 616);
		this.add.existing(prefabGround_96);

		// prefabGround_97
		const prefabGround_97 = new PrefabGround(this, 492, 616);
		this.add.existing(prefabGround_97);

		// prefabGround_98
		const prefabGround_98 = new PrefabGround(this, 529, 616);
		this.add.existing(prefabGround_98);

		// prefabGround_99
		const prefabGround_99 = new PrefabGround(this, 566, 616);
		this.add.existing(prefabGround_99);

		// prefabGround_100
		const prefabGround_100 = new PrefabGround(this, 603, 616);
		this.add.existing(prefabGround_100);

		// prefabGround_101
		const prefabGround_101 = new PrefabGround(this, 640, 616);
		this.add.existing(prefabGround_101);

		// prefabGround_102
		const prefabGround_102 = new PrefabGround(this, 677, 616);
		this.add.existing(prefabGround_102);

		// prefabGround_103
		const prefabGround_103 = new PrefabGround(this, 714, 616);
		this.add.existing(prefabGround_103);

		// prefabWall_76
		const prefabWall_76 = new PrefabWall(this, 751, 616);
		this.add.existing(prefabWall_76);

		// prefabWater_40
		const prefabWater_40 = new PrefabWater(this, 788, 616);
		this.add.existing(prefabWater_40);

		// prefabWater_41
		const prefabWater_41 = new PrefabWater(this, 825, 616);
		this.add.existing(prefabWater_41);

		// prefabGround_104
		const prefabGround_104 = new PrefabGround(this, 862, 616);
		this.add.existing(prefabGround_104);

		// prefabGround_105
		const prefabGround_105 = new PrefabGround(this, 899, 616);
		this.add.existing(prefabGround_105);

		// buttonbackground
		const buttonbackground = this.add.image(1117, 601, "buttonbackground1");
		buttonbackground.scaleX = 0.35;
		buttonbackground.scaleY = 0.35;

		// prefabMindCat2
		const prefabMindCat2 = new PrefabMindCat2(this, 190, 182);
		this.add.existing(prefabMindCat2);
		prefabMindCat2.name = "prefabMindCat2";
		prefabMindCat2.removeInteractive();
		prefabMindCat2.setInteractive(new Phaser.Geom.Rectangle(-18.75, -18.75, 37.5, 37.5), Phaser.Geom.Rectangle.Contains);

		// prefabMachineCat2
		const prefabMachineCat2 = new PrefabMachineCat2(this, 227, 223);
		this.add.existing(prefabMachineCat2);
		prefabMachineCat2.name = "prefabMachineCat2";
		prefabMachineCat2.removeInteractive();
		prefabMachineCat2.setInteractive(new Phaser.Geom.Rectangle(-18.75, -18.75, 37.5, 37.5), Phaser.Geom.Rectangle.Contains);

		// prefabMindCat1
		const prefabMindCat1 = new PrefabMindCat1(this, 234, 122);
		this.add.existing(prefabMindCat1);
		prefabMindCat1.name = "prefabMindCat1";
		prefabMindCat1.removeInteractive();
		prefabMindCat1.setInteractive(new Phaser.Geom.Rectangle(-18.75, -18.75, 37.5, 37.5), Phaser.Geom.Rectangle.Contains);

		// prefabMachineCat1
		const prefabMachineCat1 = new PrefabMachineCat1(this, 262, 167);
		this.add.existing(prefabMachineCat1);
		prefabMachineCat1.name = "prefabMachineCat1";
		prefabMachineCat1.removeInteractive();
		prefabMachineCat1.setInteractive(new Phaser.Geom.Rectangle(-18.75, -18.75, 37.5, 37.5), Phaser.Geom.Rectangle.Contains);

		// groundSprite
		const groundSprite = this.add.image(1060, 601, "groundSprite");
		groundSprite.name = "groundSprite";
		groundSprite.scaleX = 0.04;
		groundSprite.scaleY = 0.04;
		groundSprite.visible = false;

		// wallSprite
		const wallSprite = this.add.image(1060, 601, "wallSprite");
		wallSprite.name = "wallSprite";
		wallSprite.scaleX = 0.04;
		wallSprite.scaleY = 0.04;
		wallSprite.visible = false;

		// waterSprite
		const waterSprite = this.add.image(1060, 601, "waterSprite");
		waterSprite.name = "waterSprite";
		waterSprite.scaleX = 0.04;
		waterSprite.scaleY = 0.04;
		waterSprite.visible = false;

		// machineCat1
		const machineCat1 = this.add.image(1060, 601, "machineCat1");
		machineCat1.name = "machineCat1";
		machineCat1.scaleX = 0.04;
		machineCat1.scaleY = 0.04;
		machineCat1.visible = false;

		// machineCat2
		const machineCat2 = this.add.image(1060, 601, "machineCat2");
		machineCat2.name = "machineCat2";
		machineCat2.scaleX = 0.04;
		machineCat2.scaleY = 0.04;
		machineCat2.visible = false;

		// mindCat1
		const mindCat1 = this.add.image(1060, 601, "mindCat1");
		mindCat1.name = "mindCat1";
		mindCat1.scaleX = 0.04;
		mindCat1.scaleY = 0.04;
		mindCat1.visible = false;

		// mindCat2
		const mindCat2 = this.add.image(1060, 601, "mindCat2");
		mindCat2.name = "mindCat2";
		mindCat2.scaleX = 0.04;
		mindCat2.scaleY = 0.04;
		mindCat2.visible = false;

		// tileTypeDisplay
		const tileTypeDisplay = this.add.text(1119, 614, "", {});
		tileTypeDisplay.setStyle({ "align": "center", "color": "#000000ff", "fontStyle": "bold" });

		// buttonbackground_1
		const buttonbackground_1 = this.add.image(179, 91, "buttonbackground");
		buttonbackground_1.setInteractive(new Phaser.Geom.Polygon("578.1036185415164 489.5222184205315 1323.0599026744858 484.1808261391245 1466.305937872232 893.4552124183998 713.6958164364536 893.4552124183998"), Phaser.Geom.Polygon.Contains);
		buttonbackground_1.scaleX = 0.2;
		buttonbackground_1.scaleY = 0.2;

		// EndTurnText
		const endTurnText = this.add.text(101, 59, "", {});
		endTurnText.name = "EndTurnText";
		endTurnText.scaleX = 1.7;
		endTurnText.scaleY = 1.7;
		endTurnText.text = "New text";
		endTurnText.setStyle({ "color": "#000000ff" });

		// buttonbackground1
		const buttonbackground1 = this.add.image(1080, 86, "buttonbackground1");
		buttonbackground1.scaleX = 0.35;
		buttonbackground1.scaleY = 0.2;

		// currentTurnIndicator
		const currentTurnIndicator = this.add.text(988, 72, "", {});
		currentTurnIndicator.text = "Current turn is:";
		currentTurnIndicator.setStyle({ "color": "#000000ff", "fontSize": "20px" });

		// lifecatorange_9
		const lifecatorange_9 = this.add.image(914, 420, "lifecatorange 9");
		lifecatorange_9.scaleX = 0.3;
		lifecatorange_9.scaleY = 0.3;

		// lifecatorange_21
		const lifecatorange_21 = this.add.image(914, 420, "lifecatorange 21");
		lifecatorange_21.scaleX = 0.3;
		lifecatorange_21.scaleY = 0.3;

		// lifecatorange_1
		const lifecatorange_1 = this.add.image(914, 420, "lifecatorange 1");
		lifecatorange_1.scaleX = 0.3;
		lifecatorange_1.scaleY = 0.3;

		// lifecatorange_10
		const lifecatorange_10 = this.add.image(914, 420, "lifecatorange 10");
		lifecatorange_10.scaleX = 0.3;
		lifecatorange_10.scaleY = 0.3;

		// lifecatorange_11
		const lifecatorange_11 = this.add.image(914, 420, "lifecatorange 11");
		lifecatorange_11.scaleX = 0.3;
		lifecatorange_11.scaleY = 0.3;

		// lifecatorange_12
		const lifecatorange_12 = this.add.image(914, 420, "lifecatorange 12");
		lifecatorange_12.scaleX = 0.3;
		lifecatorange_12.scaleY = 0.3;

		// lifecatorange_13
		const lifecatorange_13 = this.add.image(914, 420, "lifecatorange 13");
		lifecatorange_13.scaleX = 0.3;
		lifecatorange_13.scaleY = 0.3;

		// lifecatorange_14
		const lifecatorange_14 = this.add.image(914, 420, "lifecatorange 14");
		lifecatorange_14.scaleX = 0.3;
		lifecatorange_14.scaleY = 0.3;

		// lifecatorange_15
		const lifecatorange_15 = this.add.image(914, 420, "lifecatorange 15");
		lifecatorange_15.scaleX = 0.3;
		lifecatorange_15.scaleY = 0.3;

		// lifecatorange_16
		const lifecatorange_16 = this.add.image(914, 420, "lifecatorange 16");
		lifecatorange_16.scaleX = 0.3;
		lifecatorange_16.scaleY = 0.3;

		// lifecatorange_17
		const lifecatorange_17 = this.add.image(914, 420, "lifecatorange 17");
		lifecatorange_17.scaleX = 0.3;
		lifecatorange_17.scaleY = 0.3;

		// lifecatorange_18
		const lifecatorange_18 = this.add.image(914, 420, "lifecatorange 18");
		lifecatorange_18.scaleX = 0.3;
		lifecatorange_18.scaleY = 0.3;

		// lifecatorange_19
		const lifecatorange_19 = this.add.image(914, 420, "lifecatorange 19");
		lifecatorange_19.scaleX = 0.3;
		lifecatorange_19.scaleY = 0.3;

		// lifecatorange_2
		const lifecatorange_2 = this.add.image(914, 420, "lifecatorange 2");
		lifecatorange_2.scaleX = 0.3;
		lifecatorange_2.scaleY = 0.3;

		// lifecatorange_20
		const lifecatorange_20 = this.add.image(914, 420, "lifecatorange 20");
		lifecatorange_20.scaleX = 0.3;
		lifecatorange_20.scaleY = 0.3;

		// lifecatorange_3
		const lifecatorange_3 = this.add.image(914, 420, "lifecatorange 3");
		lifecatorange_3.scaleX = 0.3;
		lifecatorange_3.scaleY = 0.3;

		// lifecatorange_4
		const lifecatorange_4 = this.add.image(914, 420, "lifecatorange 4");
		lifecatorange_4.scaleX = 0.3;
		lifecatorange_4.scaleY = 0.3;

		// lifecatorange_5
		const lifecatorange_5 = this.add.image(914, 420, "lifecatorange 5");
		lifecatorange_5.scaleX = 0.3;
		lifecatorange_5.scaleY = 0.3;

		// lifecatorange_6
		const lifecatorange_6 = this.add.image(914, 420, "lifecatorange 6");
		lifecatorange_6.scaleX = 0.3;
		lifecatorange_6.scaleY = 0.3;

		// lifecatorange_7
		const lifecatorange_7 = this.add.image(914, 420, "lifecatorange 7");
		lifecatorange_7.scaleX = 0.3;
		lifecatorange_7.scaleY = 0.3;

		// lifecatorange_8
		const lifecatorange_8 = this.add.image(914, 420, "lifecatorange 8");
		lifecatorange_8.scaleX = 0.3;
		lifecatorange_8.scaleY = 0.3;

		// lifecatwhite_0
		const lifecatwhite_0 = this.add.image(344, 366, "lifecatwhite 21");
		lifecatwhite_0.scaleX = 0.3;
		lifecatwhite_0.scaleY = 0.3;

		// lifecatwhite_1
		const lifecatwhite_1 = this.add.image(344, 366, "lifecatwhite 1");
		lifecatwhite_1.scaleX = 0.3;
		lifecatwhite_1.scaleY = 0.3;

		// lifecatwhite_10
		const lifecatwhite_10 = this.add.image(344, 366, "lifecatwhite 10");
		lifecatwhite_10.scaleX = 0.3;
		lifecatwhite_10.scaleY = 0.3;

		// lifecatwhite_11
		const lifecatwhite_11 = this.add.image(344, 366, "lifecatwhite 11");
		lifecatwhite_11.scaleX = 0.3;
		lifecatwhite_11.scaleY = 0.3;

		// lifecatwhite_12
		const lifecatwhite_12 = this.add.image(344, 366, "lifecatwhite 12");
		lifecatwhite_12.scaleX = 0.3;
		lifecatwhite_12.scaleY = 0.3;

		// lifecatwhite_13
		const lifecatwhite_13 = this.add.image(344, 366, "lifecatwhite 13");
		lifecatwhite_13.scaleX = 0.3;
		lifecatwhite_13.scaleY = 0.3;

		// lifecatwhite_14
		const lifecatwhite_14 = this.add.image(344, 366, "lifecatwhite 14");
		lifecatwhite_14.scaleX = 0.3;
		lifecatwhite_14.scaleY = 0.3;

		// lifecatwhite_15
		const lifecatwhite_15 = this.add.image(344, 366, "lifecatwhite 15");
		lifecatwhite_15.scaleX = 0.3;
		lifecatwhite_15.scaleY = 0.3;

		// lifecatwhite_16
		const lifecatwhite_16 = this.add.image(344, 366, "lifecatwhite 16");
		lifecatwhite_16.scaleX = 0.3;
		lifecatwhite_16.scaleY = 0.3;

		// lifecatwhite_17
		const lifecatwhite_17 = this.add.image(344, 366, "lifecatwhite 17");
		lifecatwhite_17.scaleX = 0.3;
		lifecatwhite_17.scaleY = 0.3;

		// lifecatwhite_18
		const lifecatwhite_18 = this.add.image(344, 366, "lifecatwhite 18");
		lifecatwhite_18.scaleX = 0.3;
		lifecatwhite_18.scaleY = 0.3;

		// lifecatwhite_19
		const lifecatwhite_19 = this.add.image(344, 366, "lifecatwhite 19");
		lifecatwhite_19.scaleX = 0.3;
		lifecatwhite_19.scaleY = 0.3;

		// lifecatwhite_2
		const lifecatwhite_2 = this.add.image(344, 366, "lifecatwhite 2");
		lifecatwhite_2.scaleX = 0.3;
		lifecatwhite_2.scaleY = 0.3;

		// lifecatwhite_20
		const lifecatwhite_20 = this.add.image(344, 366, "lifecatwhite 20");
		lifecatwhite_20.scaleX = 0.3;
		lifecatwhite_20.scaleY = 0.3;

		// lifecatwhite_3
		const lifecatwhite_3 = this.add.image(344, 366, "lifecatwhite 3");
		lifecatwhite_3.scaleX = 0.3;
		lifecatwhite_3.scaleY = 0.3;

		// lifecatwhite_4
		const lifecatwhite_4 = this.add.image(344, 366, "lifecatwhite 4");
		lifecatwhite_4.scaleX = 0.3;
		lifecatwhite_4.scaleY = 0.3;

		// lifecatwhite_5
		const lifecatwhite_5 = this.add.image(344, 366, "lifecatwhite 5");
		lifecatwhite_5.scaleX = 0.3;
		lifecatwhite_5.scaleY = 0.3;

		// lifecatwhite_6
		const lifecatwhite_6 = this.add.image(344, 366, "lifecatwhite 6");
		lifecatwhite_6.scaleX = 0.3;
		lifecatwhite_6.scaleY = 0.3;

		// lifecatwhite_7
		const lifecatwhite_7 = this.add.image(344, 366, "lifecatwhite 7");
		lifecatwhite_7.scaleX = 0.3;
		lifecatwhite_7.scaleY = 0.3;

		// lifecatwhite_8
		const lifecatwhite_8 = this.add.image(344, 366, "lifecatwhite 8");
		lifecatwhite_8.scaleX = 0.3;
		lifecatwhite_8.scaleY = 0.3;

		// lifecatwhite_9
		const lifecatwhite_9 = this.add.image(344, 366, "lifecatwhite 9");
		lifecatwhite_9.scaleX = 0.3;
		lifecatwhite_9.scaleY = 0.3;

		// undobutton
		const undobutton = this.add.image(193, 130, "buttonbackground1");
		undobutton.setInteractive(new Phaser.Geom.Polygon("50.83870979758342 31.63442105157219 784.8191796635288 27.140662961197222 931.6152736367176 422.5913749141778 179.65977185568818 422.5913749141778"), Phaser.Geom.Polygon.Contains);
		undobutton.scaleX = 0.15;
		undobutton.scaleY = 0.1;

		// confirmbutton
		const confirmbutton = this.add.image(289, 611, "buttonbackground1");
		confirmbutton.setInteractive(new Phaser.Geom.Polygon("44.325728382410034 16.835371264776768 776.6113964099527 11.953466811260114 939 435 176.13714862736765 422.0334409066836"), Phaser.Geom.Polygon.Contains);
		confirmbutton.scaleX = 0.15;
		confirmbutton.scaleY = 0.15;
		confirmbutton.visible = false;

		// Undo
		const undo = this.add.text(172, 124, "", {});
		undo.text = "Undo";
		undo.setStyle({ "color": "#000000ff" });

		// Confirm
		const confirm = this.add.text(255, 596, "", {});
		confirm.visible = false;
		confirm.text = "Confirm\nMovement";
		confirm.setStyle({ "color": "#000000ff" });

		// choseAttackButton
		const choseAttackButton = this.add.image(108, 602, "buttonbackground1");
		choseAttackButton.setInteractive(new Phaser.Geom.Polygon("179.09904094474405 410.71318164292416 39.83293300660836 20.768069731753258 782.5855086766651 20.768069731753258 921.8516166148011 421.1581399976876"), Phaser.Geom.Polygon.Contains);
		choseAttackButton.scaleX = 0.15;
		choseAttackButton.scaleY = 0.2;
		choseAttackButton.visible = false;

		// Attack
		const attack = this.add.text(81, 602, "", {});
		attack.visible = false;
		attack.text = "Attack\n";
		attack.setStyle({ "color": "#000000ff" });

		// attacksendbutton
		const attacksendbutton = this.add.image(289, 611, "buttonbackground1");
		attacksendbutton.setInteractive(new Phaser.Geom.Polygon("44.325728382410034 16.835371264776768 776.6113964099527 11.953466811260114 939 435 176.13714862736765 422.0334409066836"), Phaser.Geom.Polygon.Contains);
		attacksendbutton.scaleX = 0.15;
		attacksendbutton.scaleY = 0.15;
		attacksendbutton.visible = false;

		// Confirm_1
		const confirm_1 = this.add.text(255, 596, "", {});
		confirm_1.visible = false;
		confirm_1.text = "Confirm\nAttack";
		confirm_1.setStyle({ "align": "right", "color": "#000000ff" });

		// updirection
		const updirection = this.add.image(108, 541, "arrow");
		updirection.name = "updirection";
		updirection.setInteractive(new Phaser.Geom.Rectangle(39, 41, 184.6677012646755, 147.13978452306225), Phaser.Geom.Rectangle.Contains);
		updirection.scaleX = 0.2;
		updirection.scaleY = 0.2;
		updirection.angle = -90;
		updirection.visible = false;

		// rightdirection
		const rightdirection = this.add.image(193, 603, "arrow");
		rightdirection.name = "rightdirection";
		rightdirection.setInteractive(new Phaser.Geom.Rectangle(40, 33, 178.3464048162827, 153.80040516677496), Phaser.Geom.Rectangle.Contains);
		rightdirection.scaleX = 0.2;
		rightdirection.scaleY = 0.2;
		rightdirection.visible = false;

		// downdirection
		const downdirection = this.add.image(108, 663, "arrow");
		downdirection.name = "downdirection";
		downdirection.setInteractive(new Phaser.Geom.Rectangle(49, 38, 178.11247751185033, 154.01624941430126), Phaser.Geom.Rectangle.Contains);
		downdirection.scaleX = 0.2;
		downdirection.scaleY = 0.2;
		downdirection.angle = 90;
		downdirection.visible = false;

		// leftdirection
		const leftdirection = this.add.image(29, 602, "arrow");
		leftdirection.name = "leftdirection";
		leftdirection.setInteractive(new Phaser.Geom.Rectangle(50, 28, 188.2962576137594, 160.3556288450942), Phaser.Geom.Rectangle.Contains);
		leftdirection.scaleX = 0.2;
		leftdirection.scaleY = 0.2;
		leftdirection.angle = -180;
		leftdirection.visible = false;

		// lists
		const listOfTiles = [prefabGround_6, prefabGround_9, prefabGround_8, prefabGround_7, prefabGround_5, prefabGround_4, prefabGround_3, prefabGround_2, prefabGround_1, prefabGround, prefabWall, prefabGround_21, prefabGround_20, prefabGround_19, prefabGround_18, prefabWall_7, prefabGround_17, prefabGround_16, prefabWall_6, prefabWall_5, prefabWall_4, prefabWall_3, prefabWall_2, prefabWall_1, prefabGround_15, prefabGround_14, prefabGround_13, prefabGround_12, prefabGround_11, prefabGround_10, prefabGround_22, prefabGround_77, prefabWall_54, prefabWall_53, prefabGround_76, prefabWall_52, prefabGround_75, prefabGround_74, prefabGround_73, prefabWater_29, prefabWater_28, prefabWall_51, prefabGround_72, prefabGround_71, prefabGround_70, prefabGround_69, prefabGround_68, prefabGround_67, prefabGround_66, prefabGround_65, prefabWall_50, prefabGround_64, prefabWater_27, prefabWater_26, prefabWater_25, prefabWater_24, prefabWall_49, prefabGround_63, prefabWall_48, prefabGround_62, prefabGround_61, prefabGround_60, prefabGround_59, prefabWall_47, prefabWall_46, prefabWall_45, prefabGround_58, prefabWall_44, prefabWater_23, prefabWall_43, prefabWater_22, prefabWall_42, prefabGround_57, prefabGround_56, prefabGround_55, prefabGround_54, prefabGround_53, prefabWater_21, prefabWall_41, prefabGround_52, prefabGround_51, prefabGround_50, prefabWall_40, prefabWater_20, prefabWall_39, prefabWater_19, prefabWall_38, prefabGround_49, prefabGround_48, prefabGround_47, prefabGround_46, prefabWater_18, prefabWater_17, prefabWater_16, prefabWater_15, prefabWall_37, prefabWall_36, prefabWall_35, prefabWall_34, prefabWall_33, prefabWall_32, prefabWall_31, prefabGround_45, prefabGround_44, prefabGround_43, prefabWall_30, prefabWater_14, prefabWall_29, prefabWater_13, prefabWater_12, prefabWater_11, prefabWater_10, prefabGround_42, prefabWall_28, prefabWater_9, prefabWater_8, prefabWall_27, prefabGround_41, prefabGround_40, prefabGround_39, prefabWall_26, prefabWater_7, prefabWall_25, prefabWall_24, prefabWater_6, prefabWall_23, prefabWall_22, prefabGround_38, prefabWall_21, prefabWater_5, prefabWall_20, prefabWall_19, prefabGround_37, prefabWall_18, prefabGround_36, prefabWall_17, prefabWater_4, prefabWater_3, prefabWall_16, prefabGround_35, prefabGround_34, prefabWall_15, prefabGround_33, prefabGround_32, prefabWater_2, prefabWater_1, prefabWall_14, prefabGround_31, prefabGround_30, prefabWall_13, prefabWall_12, prefabGround_29, prefabWall_11, prefabWall_10, prefabGround_28, prefabGround_27, prefabWall_9, prefabGround_26, prefabGround_25, prefabGround_24, prefabWater, prefabWall_8, prefabGround_23, prefabWall_55, prefabGround_105, prefabGround_104, prefabWater_41, prefabWater_40, prefabWall_76, prefabGround_103, prefabGround_102, prefabGround_101, prefabGround_100, prefabGround_99, prefabGround_98, prefabGround_97, prefabGround_96, prefabGround_95, prefabGround_94, prefabGround_93, prefabWater_39, prefabWater_38, prefabWater_37, prefabWall_75, prefabGround_92, prefabWall_74, prefabWall_73, prefabWall_72, prefabWall_71, prefabWall_70, prefabWall_69, prefabGround_91, prefabGround_90, prefabGround_89, prefabWall_68, prefabWall_67, prefabWater_36, prefabWall_66, prefabWall_65, prefabGround_88, prefabGround_87, prefabWater_35, prefabWater_34, prefabWater_33, prefabWater_32, prefabGround_86, prefabGround_85, prefabGround_84, prefabGround_83, prefabGround_82, prefabGround_81, prefabWater_31, prefabWater_30, prefabWall_64, prefabGround_80, prefabWall_63, prefabWall_62, prefabWall_61, prefabWall_60, prefabWall_59, prefabWall_58, prefabWall_57, prefabGround_79, prefabGround_78, prefabWall_56];
		const walkableTiles = [prefabGround, prefabGround_1, prefabGround_2, prefabGround_3, prefabGround_4, prefabGround_5, prefabGround_6, prefabGround_7, prefabGround_8, prefabGround_9, prefabGround_10, prefabGround_11, prefabGround_12, prefabGround_13, prefabGround_14, prefabGround_15, prefabGround_16, prefabGround_17, prefabGround_18, prefabGround_19, prefabGround_20, prefabGround_21, prefabGround_22, prefabGround_23, prefabGround_24, prefabWater, prefabGround_25, prefabGround_26, prefabGround_27, prefabGround_29, prefabGround_39, prefabGround_37, prefabWater_5, prefabGround_38, prefabWater_6, prefabWater_7, prefabGround_43, prefabGround_40, prefabGround_41, prefabWater_8, prefabWater_9, prefabGround_42, prefabWater_10, prefabWater_11, prefabWater_12, prefabWater_14, prefabGround_55, prefabGround_47, prefabGround_44, prefabGround_45, prefabWater_15, prefabWater_16, prefabWater_17, prefabWater_18, prefabGround_46, prefabGround_48, prefabGround_49, prefabWater_19, prefabWater_20, prefabGround_50, prefabGround_51, prefabGround_52, prefabWater_21, prefabGround_53, prefabGround_54, prefabGround_62, prefabGround_56, prefabGround_57, prefabWater_22, prefabWater_23, prefabGround_58, prefabGround_59, prefabGround_60, prefabGround_61, prefabGround_70, prefabGround_63, prefabWater_24, prefabWater_25, prefabWater_26, prefabGround_64, prefabGround_65, prefabGround_66, prefabGround_67, prefabWater_27, prefabGround_68, prefabGround_69, prefabGround_82, prefabGround_78, prefabGround_79, prefabGround_80, prefabWater_30, prefabWater_31, prefabGround_81, prefabGround_83, prefabGround_84, prefabGround_85, prefabGround_86, prefabWater_32, prefabWater_33, prefabWater_34, prefabWater_35, prefabGround_87, prefabGround_88, prefabWater_36, prefabGround_93, prefabGround_105, prefabGround_89, prefabGround_90, prefabGround_91, prefabGround_92, prefabWater_37, prefabWater_38, prefabWater_39, prefabGround_94, prefabGround_95, prefabGround_96, prefabGround_97, prefabGround_98, prefabGround_99, prefabGround_100, prefabGround_101, prefabGround_102, prefabGround_103, prefabWater_41, prefabGround_104, prefabGround_28, prefabGround_36, prefabWater_4, prefabWater_3, prefabGround_35, prefabGround_34, prefabGround_33, prefabGround_32, prefabWater_2, prefabWater_1, prefabGround_31, prefabGround_71, prefabGround_72, prefabWater_28, prefabGround_73, prefabGround_74, prefabGround_75, prefabGround_77, prefabGround_76, prefabWater_40, prefabWater_13, prefabGround_30, prefabWater_29];

		// prefabGround (prefab fields)
		prefabGround.tileID = 1;
		prefabGround.tileX = 1;
		prefabGround.tileY = 1;

		// prefabGround_1 (prefab fields)
		prefabGround_1.tileID = 2;
		prefabGround_1.tileX = 2;
		prefabGround_1.tileY = 1;

		// prefabGround_2 (prefab fields)
		prefabGround_2.tileID = 3;
		prefabGround_2.tileX = 3;
		prefabGround_2.tileY = 1;

		// prefabGround_3 (prefab fields)
		prefabGround_3.tileID = 4;
		prefabGround_3.tileX = 4;
		prefabGround_3.tileY = 1;

		// prefabGround_4 (prefab fields)
		prefabGround_4.tileID = 5;
		prefabGround_4.tileX = 5;
		prefabGround_4.tileY = 1;

		// prefabGround_5 (prefab fields)
		prefabGround_5.tileID = 6;
		prefabGround_5.tileX = 6;
		prefabGround_5.tileY = 1;

		// prefabGround_6 (prefab fields)
		prefabGround_6.tileID = 7;
		prefabGround_6.tileX = 7;
		prefabGround_6.tileY = 1;

		// prefabGround_7 (prefab fields)
		prefabGround_7.tileID = 8;
		prefabGround_7.tileX = 8;
		prefabGround_7.tileY = 1;

		// prefabGround_8 (prefab fields)
		prefabGround_8.tileID = 9;
		prefabGround_8.tileX = 9;
		prefabGround_8.tileY = 1;

		// prefabGround_9 (prefab fields)
		prefabGround_9.tileID = 10;
		prefabGround_9.tileX = 10;
		prefabGround_9.tileY = 1;

		// prefabWall (prefab fields)
		prefabWall.tileID = 11;
		prefabWall.tileX = 11;
		prefabWall.tileY = 1;

		// prefabGround_10 (prefab fields)
		prefabGround_10.tileID = 12;
		prefabGround_10.tileX = 12;
		prefabGround_10.tileY = 1;

		// prefabGround_11 (prefab fields)
		prefabGround_11.tileID = 13;
		prefabGround_11.tileX = 13;
		prefabGround_11.tileY = 1;

		// prefabGround_12 (prefab fields)
		prefabGround_12.tileID = 14;
		prefabGround_12.tileX = 14;
		prefabGround_12.tileY = 1;

		// prefabGround_13 (prefab fields)
		prefabGround_13.tileID = 15;
		prefabGround_13.tileX = 15;
		prefabGround_13.tileY = 1;

		// prefabGround_14 (prefab fields)
		prefabGround_14.tileID = 16;
		prefabGround_14.tileX = 1;
		prefabGround_14.tileY = 2;

		// prefabGround_15 (prefab fields)
		prefabGround_15.tileID = 17;
		prefabGround_15.tileX = 2;
		prefabGround_15.tileY = 2;

		// prefabWall_1 (prefab fields)
		prefabWall_1.tileID = 18;
		prefabWall_1.tileX = 3;
		prefabWall_1.tileY = 2;

		// prefabWall_2 (prefab fields)
		prefabWall_2.tileID = 19;
		prefabWall_2.tileX = 4;
		prefabWall_2.tileY = 2;

		// prefabWall_3 (prefab fields)
		prefabWall_3.tileID = 20;
		prefabWall_3.tileX = 5;
		prefabWall_3.tileY = 2;

		// prefabWall_4 (prefab fields)
		prefabWall_4.tileID = 21;
		prefabWall_4.tileX = 6;
		prefabWall_4.tileY = 2;

		// prefabWall_5 (prefab fields)
		prefabWall_5.tileID = 22;
		prefabWall_5.tileX = 7;
		prefabWall_5.tileY = 2;

		// prefabWall_6 (prefab fields)
		prefabWall_6.tileID = 23;
		prefabWall_6.tileX = 8;
		prefabWall_6.tileY = 2;

		// prefabGround_16 (prefab fields)
		prefabGround_16.tileID = 24;
		prefabGround_16.tileX = 9;
		prefabGround_16.tileY = 2;

		// prefabGround_17 (prefab fields)
		prefabGround_17.tileID = 25;
		prefabGround_17.tileX = 10;
		prefabGround_17.tileY = 2;

		// prefabWall_7 (prefab fields)
		prefabWall_7.tileID = 26;
		prefabWall_7.tileX = 11;
		prefabWall_7.tileY = 2;

		// prefabGround_18 (prefab fields)
		prefabGround_18.tileID = 27;
		prefabGround_18.tileX = 12;
		prefabGround_18.tileY = 2;

		// prefabGround_19 (prefab fields)
		prefabGround_19.tileID = 28;
		prefabGround_19.tileX = 13;
		prefabGround_19.tileY = 2;

		// prefabGround_20 (prefab fields)
		prefabGround_20.tileID = 29;
		prefabGround_20.tileX = 14;
		prefabGround_20.tileY = 2;

		// prefabGround_21 (prefab fields)
		prefabGround_21.tileID = 30;
		prefabGround_21.tileX = 15;
		prefabGround_21.tileY = 2;

		// prefabGround_22 (prefab fields)
		prefabGround_22.tileID = 31;
		prefabGround_22.tileX = 1;
		prefabGround_22.tileY = 3;

		// prefabGround_23 (prefab fields)
		prefabGround_23.tileID = 32;
		prefabGround_23.tileX = 2;
		prefabGround_23.tileY = 3;

		// prefabWall_8 (prefab fields)
		prefabWall_8.tileID = 33;
		prefabWall_8.tileX = 3;
		prefabWall_8.tileY = 3;

		// prefabWater (prefab fields)
		prefabWater.tileID = 34;
		prefabWater.tileX = 4;
		prefabWater.tileY = 3;

		// prefabGround_24 (prefab fields)
		prefabGround_24.tileID = 35;
		prefabGround_24.tileX = 5;
		prefabGround_24.tileY = 3;

		// prefabGround_25 (prefab fields)
		prefabGround_25.tileID = 36;
		prefabGround_25.tileX = 6;
		prefabGround_25.tileY = 3;

		// prefabGround_26 (prefab fields)
		prefabGround_26.tileID = 37;
		prefabGround_26.tileX = 7;
		prefabGround_26.tileY = 3;

		// prefabWall_9 (prefab fields)
		prefabWall_9.tileID = 38;
		prefabWall_9.tileX = 8;
		prefabWall_9.tileY = 3;

		// prefabGround_27 (prefab fields)
		prefabGround_27.tileID = 39;
		prefabGround_27.tileX = 9;
		prefabGround_27.tileY = 3;

		// prefabGround_28 (prefab fields)
		prefabGround_28.tileID = 40;
		prefabGround_28.tileX = 10;
		prefabGround_28.tileY = 3;

		// prefabWall_10 (prefab fields)
		prefabWall_10.tileID = 41;
		prefabWall_10.tileX = 11;
		prefabWall_10.tileY = 3;

		// prefabWall_11 (prefab fields)
		prefabWall_11.tileID = 42;
		prefabWall_11.tileX = 12;
		prefabWall_11.tileY = 3;

		// prefabGround_29 (prefab fields)
		prefabGround_29.tileID = 43;
		prefabGround_29.tileX = 13;
		prefabGround_29.tileY = 3;

		// prefabWall_12 (prefab fields)
		prefabWall_12.tileID = 44;
		prefabWall_12.tileX = 14;
		prefabWall_12.tileY = 3;

		// prefabWall_13 (prefab fields)
		prefabWall_13.tileID = 45;
		prefabWall_13.tileX = 15;
		prefabWall_13.tileY = 3;

		// prefabGround_30 (prefab fields)
		prefabGround_30.tileID = 46;
		prefabGround_30.tileX = 1;
		prefabGround_30.tileY = 4;

		// prefabGround_31 (prefab fields)
		prefabGround_31.tileID = 47;
		prefabGround_31.tileX = 2;
		prefabGround_31.tileY = 4;

		// prefabWall_14 (prefab fields)
		prefabWall_14.tileID = 48;
		prefabWall_14.tileX = 3;
		prefabWall_14.tileY = 4;

		// prefabWater_1 (prefab fields)
		prefabWater_1.tileID = 49;
		prefabWater_1.tileX = 4;
		prefabWater_1.tileY = 4;

		// prefabWater_2 (prefab fields)
		prefabWater_2.tileID = 50;
		prefabWater_2.tileX = 5;
		prefabWater_2.tileY = 4;

		// prefabGround_32 (prefab fields)
		prefabGround_32.tileID = 51;
		prefabGround_32.tileX = 6;
		prefabGround_32.tileY = 4;

		// prefabGround_33 (prefab fields)
		prefabGround_33.tileID = 52;
		prefabGround_33.tileX = 7;
		prefabGround_33.tileY = 4;

		// prefabWall_15 (prefab fields)
		prefabWall_15.tileID = 53;
		prefabWall_15.tileX = 8;
		prefabWall_15.tileY = 4;

		// prefabGround_34 (prefab fields)
		prefabGround_34.tileID = 54;
		prefabGround_34.tileX = 9;
		prefabGround_34.tileY = 4;

		// prefabGround_35 (prefab fields)
		prefabGround_35.tileID = 55;
		prefabGround_35.tileX = 10;
		prefabGround_35.tileY = 4;

		// prefabWall_16 (prefab fields)
		prefabWall_16.tileID = 56;
		prefabWall_16.tileX = 11;
		prefabWall_16.tileY = 4;

		// prefabWater_3 (prefab fields)
		prefabWater_3.tileID = 57;
		prefabWater_3.tileX = 12;
		prefabWater_3.tileY = 4;

		// prefabWater_4 (prefab fields)
		prefabWater_4.tileID = 58;
		prefabWater_4.tileX = 13;
		prefabWater_4.tileY = 4;

		// prefabWall_17 (prefab fields)
		prefabWall_17.tileID = 59;
		prefabWall_17.tileX = 14;
		prefabWall_17.tileY = 4;

		// prefabGround_36 (prefab fields)
		prefabGround_36.tileID = 60;
		prefabGround_36.tileX = 15;
		prefabGround_36.tileY = 4;

		// prefabWall_18 (prefab fields)
		prefabWall_18.tileID = 61;
		prefabWall_18.tileX = 1;
		prefabWall_18.tileY = 5;

		// prefabGround_37 (prefab fields)
		prefabGround_37.tileID = 62;
		prefabGround_37.tileX = 2;
		prefabGround_37.tileY = 5;

		// prefabWall_19 (prefab fields)
		prefabWall_19.tileID = 63;
		prefabWall_19.tileX = 3;
		prefabWall_19.tileY = 5;

		// prefabWall_20 (prefab fields)
		prefabWall_20.tileID = 64;
		prefabWall_20.tileX = 4;
		prefabWall_20.tileY = 5;

		// prefabWater_5 (prefab fields)
		prefabWater_5.tileID = 65;
		prefabWater_5.tileX = 5;
		prefabWater_5.tileY = 5;

		// prefabWall_21 (prefab fields)
		prefabWall_21.tileID = 66;
		prefabWall_21.tileX = 6;
		prefabWall_21.tileY = 5;

		// prefabGround_38 (prefab fields)
		prefabGround_38.tileID = 67;
		prefabGround_38.tileX = 7;
		prefabGround_38.tileY = 5;

		// prefabWall_22 (prefab fields)
		prefabWall_22.tileID = 68;
		prefabWall_22.tileX = 8;
		prefabWall_22.tileY = 5;

		// prefabWall_23 (prefab fields)
		prefabWall_23.tileID = 69;
		prefabWall_23.tileX = 9;
		prefabWall_23.tileY = 5;

		// prefabWater_6 (prefab fields)
		prefabWater_6.tileID = 70;
		prefabWater_6.tileX = 10;
		prefabWater_6.tileY = 5;

		// prefabWall_24 (prefab fields)
		prefabWall_24.tileID = 71;
		prefabWall_24.tileX = 11;
		prefabWall_24.tileY = 5;

		// prefabWall_25 (prefab fields)
		prefabWall_25.tileID = 72;
		prefabWall_25.tileX = 12;
		prefabWall_25.tileY = 5;

		// prefabWater_7 (prefab fields)
		prefabWater_7.tileID = 73;
		prefabWater_7.tileX = 13;
		prefabWater_7.tileY = 5;

		// prefabWall_26 (prefab fields)
		prefabWall_26.tileID = 74;
		prefabWall_26.tileX = 14;
		prefabWall_26.tileY = 5;

		// prefabGround_39 (prefab fields)
		prefabGround_39.tileID = 75;
		prefabGround_39.tileX = 15;
		prefabGround_39.tileY = 5;

		// prefabGround_40 (prefab fields)
		prefabGround_40.tileID = 76;
		prefabGround_40.tileX = 1;
		prefabGround_40.tileY = 6;

		// prefabGround_41 (prefab fields)
		prefabGround_41.tileID = 77;
		prefabGround_41.tileX = 2;
		prefabGround_41.tileY = 6;

		// prefabWall_27 (prefab fields)
		prefabWall_27.tileID = 78;
		prefabWall_27.tileX = 3;
		prefabWall_27.tileY = 6;

		// prefabWater_8 (prefab fields)
		prefabWater_8.tileID = 79;
		prefabWater_8.tileX = 4;
		prefabWater_8.tileY = 6;

		// prefabWater_9 (prefab fields)
		prefabWater_9.tileID = 80;
		prefabWater_9.tileX = 5;
		prefabWater_9.tileY = 6;

		// prefabWall_28 (prefab fields)
		prefabWall_28.tileID = 81;
		prefabWall_28.tileX = 6;
		prefabWall_28.tileY = 6;

		// prefabGround_42 (prefab fields)
		prefabGround_42.tileID = 82;
		prefabGround_42.tileX = 7;
		prefabGround_42.tileY = 6;

		// prefabWater_10 (prefab fields)
		prefabWater_10.tileID = 83;
		prefabWater_10.tileX = 8;
		prefabWater_10.tileY = 6;

		// prefabWater_11 (prefab fields)
		prefabWater_11.tileID = 84;
		prefabWater_11.tileX = 9;
		prefabWater_11.tileY = 6;

		// prefabWater_12 (prefab fields)
		prefabWater_12.tileID = 85;
		prefabWater_12.tileX = 10;
		prefabWater_12.tileY = 6;

		// prefabWater_13 (prefab fields)
		prefabWater_13.tileID = 86;
		prefabWater_13.tileX = 11;
		prefabWater_13.tileY = 6;

		// prefabWall_29 (prefab fields)
		prefabWall_29.tileID = 87;
		prefabWall_29.tileX = 12;
		prefabWall_29.tileY = 6;

		// prefabWater_14 (prefab fields)
		prefabWater_14.tileID = 88;
		prefabWater_14.tileX = 13;
		prefabWater_14.tileY = 6;

		// prefabWall_30 (prefab fields)
		prefabWall_30.tileID = 89;
		prefabWall_30.tileX = 14;
		prefabWall_30.tileY = 6;

		// prefabGround_43 (prefab fields)
		prefabGround_43.tileID = 90;
		prefabGround_43.tileX = 15;
		prefabGround_43.tileY = 6;

		// prefabGround_44 (prefab fields)
		prefabGround_44.tileID = 91;
		prefabGround_44.tileX = 1;
		prefabGround_44.tileY = 7;

		// prefabGround_45 (prefab fields)
		prefabGround_45.tileID = 92;
		prefabGround_45.tileX = 2;
		prefabGround_45.tileY = 7;

		// prefabWall_31 (prefab fields)
		prefabWall_31.tileID = 93;
		prefabWall_31.tileX = 3;
		prefabWall_31.tileY = 7;

		// prefabWall_32 (prefab fields)
		prefabWall_32.tileID = 94;
		prefabWall_32.tileX = 4;
		prefabWall_32.tileY = 7;

		// prefabWall_33 (prefab fields)
		prefabWall_33.tileID = 95;
		prefabWall_33.tileX = 5;
		prefabWall_33.tileY = 7;

		// prefabWall_34 (prefab fields)
		prefabWall_34.tileID = 96;
		prefabWall_34.tileX = 6;
		prefabWall_34.tileY = 7;

		// prefabWall_35 (prefab fields)
		prefabWall_35.tileID = 97;
		prefabWall_35.tileX = 7;
		prefabWall_35.tileY = 7;

		// prefabWall_36 (prefab fields)
		prefabWall_36.tileID = 98;
		prefabWall_36.tileX = 8;
		prefabWall_36.tileY = 7;

		// prefabWall_37 (prefab fields)
		prefabWall_37.tileID = 99;
		prefabWall_37.tileX = 9;
		prefabWall_37.tileY = 7;

		// prefabWater_15 (prefab fields)
		prefabWater_15.tileID = 100;
		prefabWater_15.tileX = 10;
		prefabWater_15.tileY = 7;

		// prefabWater_16 (prefab fields)
		prefabWater_16.tileID = 101;
		prefabWater_16.tileX = 11;
		prefabWater_16.tileY = 7;

		// prefabWater_17 (prefab fields)
		prefabWater_17.tileID = 102;
		prefabWater_17.tileX = 12;
		prefabWater_17.tileY = 7;

		// prefabWater_18 (prefab fields)
		prefabWater_18.tileID = 103;
		prefabWater_18.tileX = 13;
		prefabWater_18.tileY = 7;

		// prefabGround_46 (prefab fields)
		prefabGround_46.tileID = 104;
		prefabGround_46.tileX = 14;
		prefabGround_46.tileY = 7;

		// prefabGround_47 (prefab fields)
		prefabGround_47.tileID = 105;
		prefabGround_47.tileX = 15;
		prefabGround_47.tileY = 7;

		// prefabGround_48 (prefab fields)
		prefabGround_48.tileID = 106;
		prefabGround_48.tileX = 1;
		prefabGround_48.tileY = 8;

		// prefabGround_49 (prefab fields)
		prefabGround_49.tileID = 107;
		prefabGround_49.tileX = 2;
		prefabGround_49.tileY = 8;

		// prefabWall_38 (prefab fields)
		prefabWall_38.tileID = 108;
		prefabWall_38.tileX = 3;
		prefabWall_38.tileY = 8;

		// prefabWater_19 (prefab fields)
		prefabWater_19.tileID = 109;
		prefabWater_19.tileX = 4;
		prefabWater_19.tileY = 8;

		// prefabWall_39 (prefab fields)
		prefabWall_39.tileID = 110;
		prefabWall_39.tileX = 5;
		prefabWall_39.tileY = 8;

		// prefabWater_20 (prefab fields)
		prefabWater_20.tileID = 111;
		prefabWater_20.tileX = 6;
		prefabWater_20.tileY = 8;

		// prefabWall_40 (prefab fields)
		prefabWall_40.tileID = 112;
		prefabWall_40.tileX = 7;
		prefabWall_40.tileY = 8;

		// prefabGround_50 (prefab fields)
		prefabGround_50.tileID = 113;
		prefabGround_50.tileX = 8;
		prefabGround_50.tileY = 8;

		// prefabGround_51 (prefab fields)
		prefabGround_51.tileID = 114;
		prefabGround_51.tileX = 9;
		prefabGround_51.tileY = 8;

		// prefabGround_52 (prefab fields)
		prefabGround_52.tileID = 115;
		prefabGround_52.tileX = 10;
		prefabGround_52.tileY = 8;

		// prefabWall_41 (prefab fields)
		prefabWall_41.tileID = 116;
		prefabWall_41.tileX = 11;
		prefabWall_41.tileY = 8;

		// prefabWater_21 (prefab fields)
		prefabWater_21.tileID = 117;
		prefabWater_21.tileX = 12;
		prefabWater_21.tileY = 8;

		// prefabGround_53 (prefab fields)
		prefabGround_53.tileID = 118;
		prefabGround_53.tileX = 13;
		prefabGround_53.tileY = 8;

		// prefabGround_54 (prefab fields)
		prefabGround_54.tileID = 119;
		prefabGround_54.tileX = 14;
		prefabGround_54.tileY = 8;

		// prefabGround_55 (prefab fields)
		prefabGround_55.tileID = 120;
		prefabGround_55.tileX = 15;
		prefabGround_55.tileY = 8;

		// prefabGround_56 (prefab fields)
		prefabGround_56.tileID = 121;
		prefabGround_56.tileX = 1;
		prefabGround_56.tileY = 9;

		// prefabGround_57 (prefab fields)
		prefabGround_57.tileID = 122;
		prefabGround_57.tileX = 2;
		prefabGround_57.tileY = 9;

		// prefabWall_42 (prefab fields)
		prefabWall_42.tileID = 123;
		prefabWall_42.tileX = 3;
		prefabWall_42.tileY = 9;

		// prefabWater_22 (prefab fields)
		prefabWater_22.tileID = 124;
		prefabWater_22.tileX = 4;
		prefabWater_22.tileY = 9;

		// prefabWall_43 (prefab fields)
		prefabWall_43.tileID = 125;
		prefabWall_43.tileX = 5;
		prefabWall_43.tileY = 9;

		// prefabWater_23 (prefab fields)
		prefabWater_23.tileID = 126;
		prefabWater_23.tileX = 6;
		prefabWater_23.tileY = 9;

		// prefabWall_44 (prefab fields)
		prefabWall_44.tileID = 127;
		prefabWall_44.tileX = 7;
		prefabWall_44.tileY = 9;

		// prefabGround_58 (prefab fields)
		prefabGround_58.tileID = 128;
		prefabGround_58.tileX = 8;
		prefabGround_58.tileY = 9;

		// prefabWall_45 (prefab fields)
		prefabWall_45.tileID = 129;
		prefabWall_45.tileX = 9;
		prefabWall_45.tileY = 9;

		// prefabWall_46 (prefab fields)
		prefabWall_46.tileID = 130;
		prefabWall_46.tileX = 10;
		prefabWall_46.tileY = 9;

		// prefabWall_47 (prefab fields)
		prefabWall_47.tileID = 131;
		prefabWall_47.tileX = 11;
		prefabWall_47.tileY = 9;

		// prefabGround_59 (prefab fields)
		prefabGround_59.tileID = 132;
		prefabGround_59.tileX = 12;
		prefabGround_59.tileY = 9;

		// prefabGround_60 (prefab fields)
		prefabGround_60.tileID = 133;
		prefabGround_60.tileX = 13;
		prefabGround_60.tileY = 9;

		// prefabGround_61 (prefab fields)
		prefabGround_61.tileID = 134;
		prefabGround_61.tileX = 14;
		prefabGround_61.tileY = 9;

		// prefabGround_62 (prefab fields)
		prefabGround_62.tileID = 135;
		prefabGround_62.tileX = 15;
		prefabGround_62.tileY = 9;

		// prefabWall_48 (prefab fields)
		prefabWall_48.tileID = 136;
		prefabWall_48.tileX = 1;
		prefabWall_48.tileY = 10;

		// prefabGround_63 (prefab fields)
		prefabGround_63.tileID = 137;
		prefabGround_63.tileX = 2;
		prefabGround_63.tileY = 10;

		// prefabWall_49 (prefab fields)
		prefabWall_49.tileID = 138;
		prefabWall_49.tileX = 3;
		prefabWall_49.tileY = 10;

		// prefabWater_24 (prefab fields)
		prefabWater_24.tileID = 139;
		prefabWater_24.tileX = 4;
		prefabWater_24.tileY = 10;

		// prefabWater_25 (prefab fields)
		prefabWater_25.tileID = 140;
		prefabWater_25.tileX = 5;
		prefabWater_25.tileY = 10;

		// prefabWater_26 (prefab fields)
		prefabWater_26.tileID = 141;
		prefabWater_26.tileX = 6;
		prefabWater_26.tileY = 10;

		// prefabWater_27 (prefab fields)
		prefabWater_27.tileID = 142;
		prefabWater_27.tileX = 7;
		prefabWater_27.tileY = 10;

		// prefabGround_64 (prefab fields)
		prefabGround_64.tileID = 143;
		prefabGround_64.tileX = 8;
		prefabGround_64.tileY = 10;

		// prefabWall_50 (prefab fields)
		prefabWall_50.tileID = 144;
		prefabWall_50.tileX = 9;
		prefabWall_50.tileY = 10;

		// prefabGround_65 (prefab fields)
		prefabGround_65.tileID = 145;
		prefabGround_65.tileX = 10;
		prefabGround_65.tileY = 10;

		// prefabGround_66 (prefab fields)
		prefabGround_66.tileID = 146;
		prefabGround_66.tileX = 11;
		prefabGround_66.tileY = 10;

		// prefabGround_67 (prefab fields)
		prefabGround_67.tileID = 147;
		prefabGround_67.tileX = 12;
		prefabGround_67.tileY = 10;

		// prefabGround_68 (prefab fields)
		prefabGround_68.tileID = 148;
		prefabGround_68.tileX = 13;
		prefabGround_68.tileY = 10;

		// prefabGround_69 (prefab fields)
		prefabGround_69.tileID = 149;
		prefabGround_69.tileX = 14;
		prefabGround_69.tileY = 10;

		// prefabGround_70 (prefab fields)
		prefabGround_70.tileID = 150;
		prefabGround_70.tileX = 15;
		prefabGround_70.tileY = 10;

		// prefabGround_71 (prefab fields)
		prefabGround_71.tileID = 151;
		prefabGround_71.tileX = 1;
		prefabGround_71.tileY = 11;

		// prefabGround_72 (prefab fields)
		prefabGround_72.tileID = 152;
		prefabGround_72.tileX = 2;
		prefabGround_72.tileY = 11;

		// prefabWall_51 (prefab fields)
		prefabWall_51.tileID = 153;
		prefabWall_51.tileX = 3;
		prefabWall_51.tileY = 11;

		// prefabWater_28 (prefab fields)
		prefabWater_28.tileID = 154;
		prefabWater_28.tileX = 4;
		prefabWater_28.tileY = 11;

		// prefabWater_29 (prefab fields)
		prefabWater_29.tileID = 155;
		prefabWater_29.tileX = 5;
		prefabWater_29.tileY = 11;

		// prefabGround_73 (prefab fields)
		prefabGround_73.tileID = 156;
		prefabGround_73.tileX = 6;
		prefabGround_73.tileY = 11;

		// prefabGround_74 (prefab fields)
		prefabGround_74.tileID = 157;
		prefabGround_74.tileX = 7;
		prefabGround_74.tileY = 11;

		// prefabGround_75 (prefab fields)
		prefabGround_75.tileID = 158;
		prefabGround_75.tileX = 8;
		prefabGround_75.tileY = 11;

		// prefabWall_52 (prefab fields)
		prefabWall_52.tileID = 159;
		prefabWall_52.tileX = 9;
		prefabWall_52.tileY = 11;

		// prefabGround_76 (prefab fields)
		prefabGround_76.tileID = 160;
		prefabGround_76.tileX = 10;
		prefabGround_76.tileY = 11;

		// prefabWall_53 (prefab fields)
		prefabWall_53.tileID = 161;
		prefabWall_53.tileX = 11;
		prefabWall_53.tileY = 11;

		// prefabWall_54 (prefab fields)
		prefabWall_54.tileID = 162;
		prefabWall_54.tileX = 12;
		prefabWall_54.tileY = 11;

		// prefabGround_77 (prefab fields)
		prefabGround_77.tileID = 163;
		prefabGround_77.tileX = 13;
		prefabGround_77.tileY = 11;

		// prefabWall_55 (prefab fields)
		prefabWall_55.tileID = 164;
		prefabWall_55.tileX = 14;
		prefabWall_55.tileY = 11;

		// prefabWall_56 (prefab fields)
		prefabWall_56.tileID = 165;
		prefabWall_56.tileX = 15;
		prefabWall_56.tileY = 11;

		// prefabGround_78 (prefab fields)
		prefabGround_78.tileID = 166;
		prefabGround_78.tileX = 1;
		prefabGround_78.tileY = 12;

		// prefabGround_79 (prefab fields)
		prefabGround_79.tileID = 167;
		prefabGround_79.tileX = 2;
		prefabGround_79.tileY = 12;

		// prefabWall_57 (prefab fields)
		prefabWall_57.tileID = 168;
		prefabWall_57.tileX = 3;
		prefabWall_57.tileY = 12;

		// prefabWall_58 (prefab fields)
		prefabWall_58.tileID = 169;
		prefabWall_58.tileX = 4;
		prefabWall_58.tileY = 12;

		// prefabWall_59 (prefab fields)
		prefabWall_59.tileID = 170;
		prefabWall_59.tileX = 5;
		prefabWall_59.tileY = 12;

		// prefabWall_60 (prefab fields)
		prefabWall_60.tileID = 171;
		prefabWall_60.tileX = 6;
		prefabWall_60.tileY = 12;

		// prefabWall_61 (prefab fields)
		prefabWall_61.tileID = 172;
		prefabWall_61.tileX = 7;
		prefabWall_61.tileY = 12;

		// prefabWall_62 (prefab fields)
		prefabWall_62.tileID = 173;
		prefabWall_62.tileX = 8;
		prefabWall_62.tileY = 12;

		// prefabWall_63 (prefab fields)
		prefabWall_63.tileID = 174;
		prefabWall_63.tileX = 9;
		prefabWall_63.tileY = 12;

		// prefabGround_80 (prefab fields)
		prefabGround_80.tileID = 175;
		prefabGround_80.tileX = 10;
		prefabGround_80.tileY = 12;

		// prefabWall_64 (prefab fields)
		prefabWall_64.tileID = 176;
		prefabWall_64.tileX = 11;
		prefabWall_64.tileY = 12;

		// prefabWater_30 (prefab fields)
		prefabWater_30.tileID = 177;
		prefabWater_30.tileX = 12;
		prefabWater_30.tileY = 12;

		// prefabWater_31 (prefab fields)
		prefabWater_31.tileID = 178;
		prefabWater_31.tileX = 13;
		prefabWater_31.tileY = 12;

		// prefabGround_81 (prefab fields)
		prefabGround_81.tileID = 179;
		prefabGround_81.tileX = 14;
		prefabGround_81.tileY = 12;

		// prefabGround_82 (prefab fields)
		prefabGround_82.tileID = 180;
		prefabGround_82.tileX = 15;
		prefabGround_82.tileY = 12;

		// prefabGround_83 (prefab fields)
		prefabGround_83.tileID = 181;
		prefabGround_83.tileX = 1;
		prefabGround_83.tileY = 13;

		// prefabGround_84 (prefab fields)
		prefabGround_84.tileID = 182;
		prefabGround_84.tileX = 2;
		prefabGround_84.tileY = 13;

		// prefabGround_85 (prefab fields)
		prefabGround_85.tileID = 183;
		prefabGround_85.tileX = 3;
		prefabGround_85.tileY = 13;

		// prefabGround_86 (prefab fields)
		prefabGround_86.tileID = 184;
		prefabGround_86.tileX = 4;
		prefabGround_86.tileY = 13;

		// prefabWater_32 (prefab fields)
		prefabWater_32.tileID = 185;
		prefabWater_32.tileX = 5;
		prefabWater_32.tileY = 13;

		// prefabWater_33 (prefab fields)
		prefabWater_33.tileID = 186;
		prefabWater_33.tileX = 6;
		prefabWater_33.tileY = 13;

		// prefabWater_34 (prefab fields)
		prefabWater_34.tileID = 187;
		prefabWater_34.tileX = 7;
		prefabWater_34.tileY = 13;

		// prefabWater_35 (prefab fields)
		prefabWater_35.tileID = 188;
		prefabWater_35.tileX = 8;
		prefabWater_35.tileY = 13;

		// prefabGround_87 (prefab fields)
		prefabGround_87.tileID = 189;
		prefabGround_87.tileX = 9;
		prefabGround_87.tileY = 13;

		// prefabGround_88 (prefab fields)
		prefabGround_88.tileID = 190;
		prefabGround_88.tileX = 10;
		prefabGround_88.tileY = 13;

		// prefabWall_65 (prefab fields)
		prefabWall_65.tileID = 191;
		prefabWall_65.tileX = 11;
		prefabWall_65.tileY = 13;

		// prefabWall_66 (prefab fields)
		prefabWall_66.tileID = 192;
		prefabWall_66.tileX = 12;
		prefabWall_66.tileY = 13;

		// prefabWater_36 (prefab fields)
		prefabWater_36.tileID = 193;
		prefabWater_36.tileX = 13;
		prefabWater_36.tileY = 13;

		// prefabWall_67 (prefab fields)
		prefabWall_67.tileID = 194;
		prefabWall_67.tileX = 14;
		prefabWall_67.tileY = 13;

		// prefabWall_68 (prefab fields)
		prefabWall_68.tileID = 195;
		prefabWall_68.tileX = 15;
		prefabWall_68.tileY = 13;

		// prefabGround_89 (prefab fields)
		prefabGround_89.tileID = 196;
		prefabGround_89.tileX = 1;
		prefabGround_89.tileY = 14;

		// prefabGround_90 (prefab fields)
		prefabGround_90.tileID = 197;
		prefabGround_90.tileX = 2;
		prefabGround_90.tileY = 14;

		// prefabGround_91 (prefab fields)
		prefabGround_91.tileID = 198;
		prefabGround_91.tileX = 3;
		prefabGround_91.tileY = 14;

		// prefabWall_69 (prefab fields)
		prefabWall_69.tileID = 199;
		prefabWall_69.tileX = 4;
		prefabWall_69.tileY = 14;

		// prefabWall_73 (prefab fields)
		prefabWall_73.tileID = 203;
		prefabWall_73.tileX = 8;
		prefabWall_73.tileY = 14;

		// prefabWall_70 (prefab fields)
		prefabWall_70.tileID = 200;
		prefabWall_70.tileX = 5;
		prefabWall_70.tileY = 14;

		// prefabWall_71 (prefab fields)
		prefabWall_71.tileID = 201;
		prefabWall_71.tileX = 6;
		prefabWall_71.tileY = 14;

		// prefabWall_72 (prefab fields)
		prefabWall_72.tileID = 202;
		prefabWall_72.tileX = 7;
		prefabWall_72.tileY = 14;

		// prefabWall_74 (prefab fields)
		prefabWall_74.tileID = 204;
		prefabWall_74.tileX = 9;
		prefabWall_74.tileY = 14;

		// prefabGround_92 (prefab fields)
		prefabGround_92.tileID = 205;
		prefabGround_92.tileX = 10;
		prefabGround_92.tileY = 14;

		// prefabWall_75 (prefab fields)
		prefabWall_75.tileID = 206;
		prefabWall_75.tileX = 11;
		prefabWall_75.tileY = 14;

		// prefabWater_37 (prefab fields)
		prefabWater_37.tileID = 207;
		prefabWater_37.tileX = 12;
		prefabWater_37.tileY = 14;

		// prefabWater_38 (prefab fields)
		prefabWater_38.tileID = 208;
		prefabWater_38.tileX = 13;
		prefabWater_38.tileY = 14;

		// prefabWater_39 (prefab fields)
		prefabWater_39.tileID = 209;
		prefabWater_39.tileX = 14;
		prefabWater_39.tileY = 14;

		// prefabGround_93 (prefab fields)
		prefabGround_93.tileID = 210;
		prefabGround_93.tileX = 15;
		prefabGround_93.tileY = 14;

		// prefabGround_94 (prefab fields)
		prefabGround_94.tileID = 211;
		prefabGround_94.tileX = 1;
		prefabGround_94.tileY = 15;

		// prefabGround_95 (prefab fields)
		prefabGround_95.tileID = 212;
		prefabGround_95.tileX = 2;
		prefabGround_95.tileY = 15;

		// prefabGround_96 (prefab fields)
		prefabGround_96.tileID = 213;
		prefabGround_96.tileX = 3;
		prefabGround_96.tileY = 15;

		// prefabGround_97 (prefab fields)
		prefabGround_97.tileID = 214;
		prefabGround_97.tileX = 4;
		prefabGround_97.tileY = 15;

		// prefabGround_98 (prefab fields)
		prefabGround_98.tileID = 215;
		prefabGround_98.tileX = 5;
		prefabGround_98.tileY = 15;

		// prefabGround_99 (prefab fields)
		prefabGround_99.tileID = 216;
		prefabGround_99.tileX = 6;
		prefabGround_99.tileY = 15;

		// prefabGround_100 (prefab fields)
		prefabGround_100.tileID = 217;
		prefabGround_100.tileX = 7;
		prefabGround_100.tileY = 15;

		// prefabGround_101 (prefab fields)
		prefabGround_101.tileID = 218;
		prefabGround_101.tileX = 8;
		prefabGround_101.tileY = 15;

		// prefabGround_102 (prefab fields)
		prefabGround_102.tileID = 219;
		prefabGround_102.tileX = 9;
		prefabGround_102.tileY = 15;

		// prefabGround_103 (prefab fields)
		prefabGround_103.tileID = 220;
		prefabGround_103.tileX = 10;
		prefabGround_103.tileY = 15;

		// prefabWall_76 (prefab fields)
		prefabWall_76.tileID = 221;
		prefabWall_76.tileX = 11;
		prefabWall_76.tileY = 15;

		// prefabWater_40 (prefab fields)
		prefabWater_40.tileID = 222;
		prefabWater_40.tileX = 12;
		prefabWater_40.tileY = 15;

		// prefabWater_41 (prefab fields)
		prefabWater_41.tileID = 223;
		prefabWater_41.tileX = 13;
		prefabWater_41.tileY = 15;

		// prefabGround_104 (prefab fields)
		prefabGround_104.tileID = 224;
		prefabGround_104.tileX = 14;
		prefabGround_104.tileY = 15;

		// prefabGround_105 (prefab fields)
		prefabGround_105.tileID = 225;
		prefabGround_105.tileX = 15;
		prefabGround_105.tileY = 15;

		this.prefabGround = prefabGround;
		this.prefabGround_1 = prefabGround_1;
		this.prefabGround_2 = prefabGround_2;
		this.prefabGround_3 = prefabGround_3;
		this.prefabGround_4 = prefabGround_4;
		this.prefabGround_5 = prefabGround_5;
		this.prefabGround_6 = prefabGround_6;
		this.prefabGround_7 = prefabGround_7;
		this.prefabGround_8 = prefabGround_8;
		this.prefabGround_9 = prefabGround_9;
		this.prefabWall = prefabWall;
		this.prefabGround_10 = prefabGround_10;
		this.prefabGround_11 = prefabGround_11;
		this.prefabGround_12 = prefabGround_12;
		this.prefabGround_13 = prefabGround_13;
		this.prefabGround_14 = prefabGround_14;
		this.prefabGround_15 = prefabGround_15;
		this.prefabWall_1 = prefabWall_1;
		this.prefabWall_2 = prefabWall_2;
		this.prefabWall_3 = prefabWall_3;
		this.prefabWall_4 = prefabWall_4;
		this.prefabWall_5 = prefabWall_5;
		this.prefabWall_6 = prefabWall_6;
		this.prefabGround_16 = prefabGround_16;
		this.prefabGround_17 = prefabGround_17;
		this.prefabWall_7 = prefabWall_7;
		this.prefabGround_18 = prefabGround_18;
		this.prefabGround_19 = prefabGround_19;
		this.prefabGround_20 = prefabGround_20;
		this.prefabGround_21 = prefabGround_21;
		this.prefabGround_22 = prefabGround_22;
		this.prefabGround_23 = prefabGround_23;
		this.prefabWall_8 = prefabWall_8;
		this.prefabWater = prefabWater;
		this.prefabGround_24 = prefabGround_24;
		this.prefabGround_25 = prefabGround_25;
		this.prefabGround_26 = prefabGround_26;
		this.prefabWall_9 = prefabWall_9;
		this.prefabGround_27 = prefabGround_27;
		this.prefabGround_28 = prefabGround_28;
		this.prefabWall_10 = prefabWall_10;
		this.prefabWall_11 = prefabWall_11;
		this.prefabGround_29 = prefabGround_29;
		this.prefabWall_12 = prefabWall_12;
		this.prefabWall_13 = prefabWall_13;
		this.prefabGround_30 = prefabGround_30;
		this.prefabGround_31 = prefabGround_31;
		this.prefabWall_14 = prefabWall_14;
		this.prefabWater_1 = prefabWater_1;
		this.prefabWater_2 = prefabWater_2;
		this.prefabGround_32 = prefabGround_32;
		this.prefabGround_33 = prefabGround_33;
		this.prefabWall_15 = prefabWall_15;
		this.prefabGround_34 = prefabGround_34;
		this.prefabGround_35 = prefabGround_35;
		this.prefabWall_16 = prefabWall_16;
		this.prefabWater_3 = prefabWater_3;
		this.prefabWater_4 = prefabWater_4;
		this.prefabWall_17 = prefabWall_17;
		this.prefabGround_36 = prefabGround_36;
		this.prefabWall_18 = prefabWall_18;
		this.prefabGround_37 = prefabGround_37;
		this.prefabWall_19 = prefabWall_19;
		this.prefabWall_20 = prefabWall_20;
		this.prefabWater_5 = prefabWater_5;
		this.prefabWall_21 = prefabWall_21;
		this.prefabGround_38 = prefabGround_38;
		this.prefabWall_22 = prefabWall_22;
		this.prefabWall_23 = prefabWall_23;
		this.prefabWater_6 = prefabWater_6;
		this.prefabWall_24 = prefabWall_24;
		this.prefabWall_25 = prefabWall_25;
		this.prefabWater_7 = prefabWater_7;
		this.prefabWall_26 = prefabWall_26;
		this.prefabGround_39 = prefabGround_39;
		this.prefabGround_40 = prefabGround_40;
		this.prefabGround_41 = prefabGround_41;
		this.prefabWall_27 = prefabWall_27;
		this.prefabWater_8 = prefabWater_8;
		this.prefabWater_9 = prefabWater_9;
		this.prefabWall_28 = prefabWall_28;
		this.prefabGround_42 = prefabGround_42;
		this.prefabWater_10 = prefabWater_10;
		this.prefabWater_11 = prefabWater_11;
		this.prefabWater_12 = prefabWater_12;
		this.prefabWater_13 = prefabWater_13;
		this.prefabWall_29 = prefabWall_29;
		this.prefabWater_14 = prefabWater_14;
		this.prefabWall_30 = prefabWall_30;
		this.prefabGround_43 = prefabGround_43;
		this.prefabGround_44 = prefabGround_44;
		this.prefabGround_45 = prefabGround_45;
		this.prefabWall_31 = prefabWall_31;
		this.prefabWall_32 = prefabWall_32;
		this.prefabWall_33 = prefabWall_33;
		this.prefabWall_34 = prefabWall_34;
		this.prefabWall_35 = prefabWall_35;
		this.prefabWall_36 = prefabWall_36;
		this.prefabWall_37 = prefabWall_37;
		this.prefabWater_15 = prefabWater_15;
		this.prefabWater_16 = prefabWater_16;
		this.prefabWater_17 = prefabWater_17;
		this.prefabWater_18 = prefabWater_18;
		this.prefabGround_46 = prefabGround_46;
		this.prefabGround_47 = prefabGround_47;
		this.prefabGround_48 = prefabGround_48;
		this.prefabGround_49 = prefabGround_49;
		this.prefabWall_38 = prefabWall_38;
		this.prefabWater_19 = prefabWater_19;
		this.prefabWall_39 = prefabWall_39;
		this.prefabWater_20 = prefabWater_20;
		this.prefabWall_40 = prefabWall_40;
		this.prefabGround_50 = prefabGround_50;
		this.prefabGround_51 = prefabGround_51;
		this.prefabGround_52 = prefabGround_52;
		this.prefabWall_41 = prefabWall_41;
		this.prefabWater_21 = prefabWater_21;
		this.prefabGround_53 = prefabGround_53;
		this.prefabGround_54 = prefabGround_54;
		this.prefabGround_55 = prefabGround_55;
		this.prefabGround_56 = prefabGround_56;
		this.prefabGround_57 = prefabGround_57;
		this.prefabWall_42 = prefabWall_42;
		this.prefabWater_22 = prefabWater_22;
		this.prefabWall_43 = prefabWall_43;
		this.prefabWater_23 = prefabWater_23;
		this.prefabWall_44 = prefabWall_44;
		this.prefabGround_58 = prefabGround_58;
		this.prefabWall_45 = prefabWall_45;
		this.prefabWall_46 = prefabWall_46;
		this.prefabWall_47 = prefabWall_47;
		this.prefabGround_59 = prefabGround_59;
		this.prefabGround_60 = prefabGround_60;
		this.prefabGround_61 = prefabGround_61;
		this.prefabGround_62 = prefabGround_62;
		this.prefabWall_48 = prefabWall_48;
		this.prefabGround_63 = prefabGround_63;
		this.prefabWall_49 = prefabWall_49;
		this.prefabWater_24 = prefabWater_24;
		this.prefabWater_25 = prefabWater_25;
		this.prefabWater_26 = prefabWater_26;
		this.prefabWater_27 = prefabWater_27;
		this.prefabGround_64 = prefabGround_64;
		this.prefabWall_50 = prefabWall_50;
		this.prefabGround_65 = prefabGround_65;
		this.prefabGround_66 = prefabGround_66;
		this.prefabGround_67 = prefabGround_67;
		this.prefabGround_68 = prefabGround_68;
		this.prefabGround_69 = prefabGround_69;
		this.prefabGround_70 = prefabGround_70;
		this.prefabGround_71 = prefabGround_71;
		this.prefabGround_72 = prefabGround_72;
		this.prefabWall_51 = prefabWall_51;
		this.prefabWater_28 = prefabWater_28;
		this.prefabWater_29 = prefabWater_29;
		this.prefabGround_73 = prefabGround_73;
		this.prefabGround_74 = prefabGround_74;
		this.prefabGround_75 = prefabGround_75;
		this.prefabWall_52 = prefabWall_52;
		this.prefabGround_76 = prefabGround_76;
		this.prefabWall_53 = prefabWall_53;
		this.prefabWall_54 = prefabWall_54;
		this.prefabGround_77 = prefabGround_77;
		this.prefabWall_55 = prefabWall_55;
		this.prefabWall_56 = prefabWall_56;
		this.prefabGround_78 = prefabGround_78;
		this.prefabGround_79 = prefabGround_79;
		this.prefabWall_57 = prefabWall_57;
		this.prefabWall_58 = prefabWall_58;
		this.prefabWall_59 = prefabWall_59;
		this.prefabWall_60 = prefabWall_60;
		this.prefabWall_61 = prefabWall_61;
		this.prefabWall_62 = prefabWall_62;
		this.prefabWall_63 = prefabWall_63;
		this.prefabGround_80 = prefabGround_80;
		this.prefabWall_64 = prefabWall_64;
		this.prefabWater_30 = prefabWater_30;
		this.prefabWater_31 = prefabWater_31;
		this.prefabGround_81 = prefabGround_81;
		this.prefabGround_82 = prefabGround_82;
		this.prefabGround_83 = prefabGround_83;
		this.prefabGround_84 = prefabGround_84;
		this.prefabGround_85 = prefabGround_85;
		this.prefabGround_86 = prefabGround_86;
		this.prefabWater_32 = prefabWater_32;
		this.prefabWater_33 = prefabWater_33;
		this.prefabWater_34 = prefabWater_34;
		this.prefabWater_35 = prefabWater_35;
		this.prefabGround_87 = prefabGround_87;
		this.prefabGround_88 = prefabGround_88;
		this.prefabWall_65 = prefabWall_65;
		this.prefabWall_66 = prefabWall_66;
		this.prefabWater_36 = prefabWater_36;
		this.prefabWall_67 = prefabWall_67;
		this.prefabWall_68 = prefabWall_68;
		this.prefabGround_89 = prefabGround_89;
		this.prefabGround_90 = prefabGround_90;
		this.prefabGround_91 = prefabGround_91;
		this.prefabWall_69 = prefabWall_69;
		this.prefabWall_73 = prefabWall_73;
		this.prefabWall_70 = prefabWall_70;
		this.prefabWall_71 = prefabWall_71;
		this.prefabWall_72 = prefabWall_72;
		this.prefabWall_74 = prefabWall_74;
		this.prefabGround_92 = prefabGround_92;
		this.prefabWall_75 = prefabWall_75;
		this.prefabWater_37 = prefabWater_37;
		this.prefabWater_38 = prefabWater_38;
		this.prefabWater_39 = prefabWater_39;
		this.prefabGround_93 = prefabGround_93;
		this.prefabGround_94 = prefabGround_94;
		this.prefabGround_95 = prefabGround_95;
		this.prefabGround_96 = prefabGround_96;
		this.prefabGround_97 = prefabGround_97;
		this.prefabGround_98 = prefabGround_98;
		this.prefabGround_99 = prefabGround_99;
		this.prefabGround_100 = prefabGround_100;
		this.prefabGround_101 = prefabGround_101;
		this.prefabGround_102 = prefabGround_102;
		this.prefabGround_103 = prefabGround_103;
		this.prefabWall_76 = prefabWall_76;
		this.prefabWater_40 = prefabWater_40;
		this.prefabWater_41 = prefabWater_41;
		this.prefabGround_104 = prefabGround_104;
		this.prefabGround_105 = prefabGround_105;
		this.prefabMindCat2 = prefabMindCat2;
		this.prefabMachineCat2 = prefabMachineCat2;
		this.prefabMindCat1 = prefabMindCat1;
		this.prefabMachineCat1 = prefabMachineCat1;
		this.groundSprite = groundSprite;
		this.wallSprite = wallSprite;
		this.waterSprite = waterSprite;
		this.machineCat1 = machineCat1;
		this.machineCat2 = machineCat2;
		this.mindCat1 = mindCat1;
		this.mindCat2 = mindCat2;
		this.tileTypeDisplay = tileTypeDisplay;
		this.buttonbackground_1 = buttonbackground_1;
		this.endTurnText = endTurnText;
		this.currentTurnIndicator = currentTurnIndicator;
		this.lifecatorange_9 = lifecatorange_9;
		this.lifecatorange_21 = lifecatorange_21;
		this.lifecatorange_1 = lifecatorange_1;
		this.lifecatorange_10 = lifecatorange_10;
		this.lifecatorange_11 = lifecatorange_11;
		this.lifecatorange_12 = lifecatorange_12;
		this.lifecatorange_13 = lifecatorange_13;
		this.lifecatorange_14 = lifecatorange_14;
		this.lifecatorange_15 = lifecatorange_15;
		this.lifecatorange_16 = lifecatorange_16;
		this.lifecatorange_17 = lifecatorange_17;
		this.lifecatorange_18 = lifecatorange_18;
		this.lifecatorange_19 = lifecatorange_19;
		this.lifecatorange_2 = lifecatorange_2;
		this.lifecatorange_20 = lifecatorange_20;
		this.lifecatorange_3 = lifecatorange_3;
		this.lifecatorange_4 = lifecatorange_4;
		this.lifecatorange_5 = lifecatorange_5;
		this.lifecatorange_6 = lifecatorange_6;
		this.lifecatorange_7 = lifecatorange_7;
		this.lifecatorange_8 = lifecatorange_8;
		this.lifecatwhite_0 = lifecatwhite_0;
		this.lifecatwhite_1 = lifecatwhite_1;
		this.lifecatwhite_10 = lifecatwhite_10;
		this.lifecatwhite_11 = lifecatwhite_11;
		this.lifecatwhite_12 = lifecatwhite_12;
		this.lifecatwhite_13 = lifecatwhite_13;
		this.lifecatwhite_14 = lifecatwhite_14;
		this.lifecatwhite_15 = lifecatwhite_15;
		this.lifecatwhite_16 = lifecatwhite_16;
		this.lifecatwhite_17 = lifecatwhite_17;
		this.lifecatwhite_18 = lifecatwhite_18;
		this.lifecatwhite_19 = lifecatwhite_19;
		this.lifecatwhite_2 = lifecatwhite_2;
		this.lifecatwhite_20 = lifecatwhite_20;
		this.lifecatwhite_3 = lifecatwhite_3;
		this.lifecatwhite_4 = lifecatwhite_4;
		this.lifecatwhite_5 = lifecatwhite_5;
		this.lifecatwhite_6 = lifecatwhite_6;
		this.lifecatwhite_7 = lifecatwhite_7;
		this.lifecatwhite_8 = lifecatwhite_8;
		this.lifecatwhite_9 = lifecatwhite_9;
		this.undobutton = undobutton;
		this.confirmbutton = confirmbutton;
		this.undo = undo;
		this.confirm = confirm;
		this.choseAttackButton = choseAttackButton;
		this.attack = attack;
		this.attacksendbutton = attacksendbutton;
		this.confirm_1 = confirm_1;
		this.updirection = updirection;
		this.rightdirection = rightdirection;
		this.downdirection = downdirection;
		this.leftdirection = leftdirection;
		this.listOfTiles = listOfTiles;
		this.walkableTiles = walkableTiles;

		this.events.emit("scene-awake");
	}

	/** @type {PrefabGround} */
	prefabGround;
	/** @type {PrefabGround} */
	prefabGround_1;
	/** @type {PrefabGround} */
	prefabGround_2;
	/** @type {PrefabGround} */
	prefabGround_3;
	/** @type {PrefabGround} */
	prefabGround_4;
	/** @type {PrefabGround} */
	prefabGround_5;
	/** @type {PrefabGround} */
	prefabGround_6;
	/** @type {PrefabGround} */
	prefabGround_7;
	/** @type {PrefabGround} */
	prefabGround_8;
	/** @type {PrefabGround} */
	prefabGround_9;
	/** @type {PrefabWall} */
	prefabWall;
	/** @type {PrefabGround} */
	prefabGround_10;
	/** @type {PrefabGround} */
	prefabGround_11;
	/** @type {PrefabGround} */
	prefabGround_12;
	/** @type {PrefabGround} */
	prefabGround_13;
	/** @type {PrefabGround} */
	prefabGround_14;
	/** @type {PrefabGround} */
	prefabGround_15;
	/** @type {PrefabWall} */
	prefabWall_1;
	/** @type {PrefabWall} */
	prefabWall_2;
	/** @type {PrefabWall} */
	prefabWall_3;
	/** @type {PrefabWall} */
	prefabWall_4;
	/** @type {PrefabWall} */
	prefabWall_5;
	/** @type {PrefabWall} */
	prefabWall_6;
	/** @type {PrefabGround} */
	prefabGround_16;
	/** @type {PrefabGround} */
	prefabGround_17;
	/** @type {PrefabWall} */
	prefabWall_7;
	/** @type {PrefabGround} */
	prefabGround_18;
	/** @type {PrefabGround} */
	prefabGround_19;
	/** @type {PrefabGround} */
	prefabGround_20;
	/** @type {PrefabGround} */
	prefabGround_21;
	/** @type {PrefabGround} */
	prefabGround_22;
	/** @type {PrefabGround} */
	prefabGround_23;
	/** @type {PrefabWall} */
	prefabWall_8;
	/** @type {PrefabWater} */
	prefabWater;
	/** @type {PrefabGround} */
	prefabGround_24;
	/** @type {PrefabGround} */
	prefabGround_25;
	/** @type {PrefabGround} */
	prefabGround_26;
	/** @type {PrefabWall} */
	prefabWall_9;
	/** @type {PrefabGround} */
	prefabGround_27;
	/** @type {PrefabGround} */
	prefabGround_28;
	/** @type {PrefabWall} */
	prefabWall_10;
	/** @type {PrefabWall} */
	prefabWall_11;
	/** @type {PrefabGround} */
	prefabGround_29;
	/** @type {PrefabWall} */
	prefabWall_12;
	/** @type {PrefabWall} */
	prefabWall_13;
	/** @type {PrefabGround} */
	prefabGround_30;
	/** @type {PrefabGround} */
	prefabGround_31;
	/** @type {PrefabWall} */
	prefabWall_14;
	/** @type {PrefabWater} */
	prefabWater_1;
	/** @type {PrefabWater} */
	prefabWater_2;
	/** @type {PrefabGround} */
	prefabGround_32;
	/** @type {PrefabGround} */
	prefabGround_33;
	/** @type {PrefabWall} */
	prefabWall_15;
	/** @type {PrefabGround} */
	prefabGround_34;
	/** @type {PrefabGround} */
	prefabGround_35;
	/** @type {PrefabWall} */
	prefabWall_16;
	/** @type {PrefabWater} */
	prefabWater_3;
	/** @type {PrefabWater} */
	prefabWater_4;
	/** @type {PrefabWall} */
	prefabWall_17;
	/** @type {PrefabGround} */
	prefabGround_36;
	/** @type {PrefabWall} */
	prefabWall_18;
	/** @type {PrefabGround} */
	prefabGround_37;
	/** @type {PrefabWall} */
	prefabWall_19;
	/** @type {PrefabWall} */
	prefabWall_20;
	/** @type {PrefabWater} */
	prefabWater_5;
	/** @type {PrefabWall} */
	prefabWall_21;
	/** @type {PrefabGround} */
	prefabGround_38;
	/** @type {PrefabWall} */
	prefabWall_22;
	/** @type {PrefabWall} */
	prefabWall_23;
	/** @type {PrefabWater} */
	prefabWater_6;
	/** @type {PrefabWall} */
	prefabWall_24;
	/** @type {PrefabWall} */
	prefabWall_25;
	/** @type {PrefabWater} */
	prefabWater_7;
	/** @type {PrefabWall} */
	prefabWall_26;
	/** @type {PrefabGround} */
	prefabGround_39;
	/** @type {PrefabGround} */
	prefabGround_40;
	/** @type {PrefabGround} */
	prefabGround_41;
	/** @type {PrefabWall} */
	prefabWall_27;
	/** @type {PrefabWater} */
	prefabWater_8;
	/** @type {PrefabWater} */
	prefabWater_9;
	/** @type {PrefabWall} */
	prefabWall_28;
	/** @type {PrefabGround} */
	prefabGround_42;
	/** @type {PrefabWater} */
	prefabWater_10;
	/** @type {PrefabWater} */
	prefabWater_11;
	/** @type {PrefabWater} */
	prefabWater_12;
	/** @type {PrefabWater} */
	prefabWater_13;
	/** @type {PrefabWall} */
	prefabWall_29;
	/** @type {PrefabWater} */
	prefabWater_14;
	/** @type {PrefabWall} */
	prefabWall_30;
	/** @type {PrefabGround} */
	prefabGround_43;
	/** @type {PrefabGround} */
	prefabGround_44;
	/** @type {PrefabGround} */
	prefabGround_45;
	/** @type {PrefabWall} */
	prefabWall_31;
	/** @type {PrefabWall} */
	prefabWall_32;
	/** @type {PrefabWall} */
	prefabWall_33;
	/** @type {PrefabWall} */
	prefabWall_34;
	/** @type {PrefabWall} */
	prefabWall_35;
	/** @type {PrefabWall} */
	prefabWall_36;
	/** @type {PrefabWall} */
	prefabWall_37;
	/** @type {PrefabWater} */
	prefabWater_15;
	/** @type {PrefabWater} */
	prefabWater_16;
	/** @type {PrefabWater} */
	prefabWater_17;
	/** @type {PrefabWater} */
	prefabWater_18;
	/** @type {PrefabGround} */
	prefabGround_46;
	/** @type {PrefabGround} */
	prefabGround_47;
	/** @type {PrefabGround} */
	prefabGround_48;
	/** @type {PrefabGround} */
	prefabGround_49;
	/** @type {PrefabWall} */
	prefabWall_38;
	/** @type {PrefabWater} */
	prefabWater_19;
	/** @type {PrefabWall} */
	prefabWall_39;
	/** @type {PrefabWater} */
	prefabWater_20;
	/** @type {PrefabWall} */
	prefabWall_40;
	/** @type {PrefabGround} */
	prefabGround_50;
	/** @type {PrefabGround} */
	prefabGround_51;
	/** @type {PrefabGround} */
	prefabGround_52;
	/** @type {PrefabWall} */
	prefabWall_41;
	/** @type {PrefabWater} */
	prefabWater_21;
	/** @type {PrefabGround} */
	prefabGround_53;
	/** @type {PrefabGround} */
	prefabGround_54;
	/** @type {PrefabGround} */
	prefabGround_55;
	/** @type {PrefabGround} */
	prefabGround_56;
	/** @type {PrefabGround} */
	prefabGround_57;
	/** @type {PrefabWall} */
	prefabWall_42;
	/** @type {PrefabWater} */
	prefabWater_22;
	/** @type {PrefabWall} */
	prefabWall_43;
	/** @type {PrefabWater} */
	prefabWater_23;
	/** @type {PrefabWall} */
	prefabWall_44;
	/** @type {PrefabGround} */
	prefabGround_58;
	/** @type {PrefabWall} */
	prefabWall_45;
	/** @type {PrefabWall} */
	prefabWall_46;
	/** @type {PrefabWall} */
	prefabWall_47;
	/** @type {PrefabGround} */
	prefabGround_59;
	/** @type {PrefabGround} */
	prefabGround_60;
	/** @type {PrefabGround} */
	prefabGround_61;
	/** @type {PrefabGround} */
	prefabGround_62;
	/** @type {PrefabWall} */
	prefabWall_48;
	/** @type {PrefabGround} */
	prefabGround_63;
	/** @type {PrefabWall} */
	prefabWall_49;
	/** @type {PrefabWater} */
	prefabWater_24;
	/** @type {PrefabWater} */
	prefabWater_25;
	/** @type {PrefabWater} */
	prefabWater_26;
	/** @type {PrefabWater} */
	prefabWater_27;
	/** @type {PrefabGround} */
	prefabGround_64;
	/** @type {PrefabWall} */
	prefabWall_50;
	/** @type {PrefabGround} */
	prefabGround_65;
	/** @type {PrefabGround} */
	prefabGround_66;
	/** @type {PrefabGround} */
	prefabGround_67;
	/** @type {PrefabGround} */
	prefabGround_68;
	/** @type {PrefabGround} */
	prefabGround_69;
	/** @type {PrefabGround} */
	prefabGround_70;
	/** @type {PrefabGround} */
	prefabGround_71;
	/** @type {PrefabGround} */
	prefabGround_72;
	/** @type {PrefabWall} */
	prefabWall_51;
	/** @type {PrefabWater} */
	prefabWater_28;
	/** @type {PrefabWater} */
	prefabWater_29;
	/** @type {PrefabGround} */
	prefabGround_73;
	/** @type {PrefabGround} */
	prefabGround_74;
	/** @type {PrefabGround} */
	prefabGround_75;
	/** @type {PrefabWall} */
	prefabWall_52;
	/** @type {PrefabGround} */
	prefabGround_76;
	/** @type {PrefabWall} */
	prefabWall_53;
	/** @type {PrefabWall} */
	prefabWall_54;
	/** @type {PrefabGround} */
	prefabGround_77;
	/** @type {PrefabWall} */
	prefabWall_55;
	/** @type {PrefabWall} */
	prefabWall_56;
	/** @type {PrefabGround} */
	prefabGround_78;
	/** @type {PrefabGround} */
	prefabGround_79;
	/** @type {PrefabWall} */
	prefabWall_57;
	/** @type {PrefabWall} */
	prefabWall_58;
	/** @type {PrefabWall} */
	prefabWall_59;
	/** @type {PrefabWall} */
	prefabWall_60;
	/** @type {PrefabWall} */
	prefabWall_61;
	/** @type {PrefabWall} */
	prefabWall_62;
	/** @type {PrefabWall} */
	prefabWall_63;
	/** @type {PrefabGround} */
	prefabGround_80;
	/** @type {PrefabWall} */
	prefabWall_64;
	/** @type {PrefabWater} */
	prefabWater_30;
	/** @type {PrefabWater} */
	prefabWater_31;
	/** @type {PrefabGround} */
	prefabGround_81;
	/** @type {PrefabGround} */
	prefabGround_82;
	/** @type {PrefabGround} */
	prefabGround_83;
	/** @type {PrefabGround} */
	prefabGround_84;
	/** @type {PrefabGround} */
	prefabGround_85;
	/** @type {PrefabGround} */
	prefabGround_86;
	/** @type {PrefabWater} */
	prefabWater_32;
	/** @type {PrefabWater} */
	prefabWater_33;
	/** @type {PrefabWater} */
	prefabWater_34;
	/** @type {PrefabWater} */
	prefabWater_35;
	/** @type {PrefabGround} */
	prefabGround_87;
	/** @type {PrefabGround} */
	prefabGround_88;
	/** @type {PrefabWall} */
	prefabWall_65;
	/** @type {PrefabWall} */
	prefabWall_66;
	/** @type {PrefabWater} */
	prefabWater_36;
	/** @type {PrefabWall} */
	prefabWall_67;
	/** @type {PrefabWall} */
	prefabWall_68;
	/** @type {PrefabGround} */
	prefabGround_89;
	/** @type {PrefabGround} */
	prefabGround_90;
	/** @type {PrefabGround} */
	prefabGround_91;
	/** @type {PrefabWall} */
	prefabWall_69;
	/** @type {PrefabWall} */
	prefabWall_73;
	/** @type {PrefabWall} */
	prefabWall_70;
	/** @type {PrefabWall} */
	prefabWall_71;
	/** @type {PrefabWall} */
	prefabWall_72;
	/** @type {PrefabWall} */
	prefabWall_74;
	/** @type {PrefabGround} */
	prefabGround_92;
	/** @type {PrefabWall} */
	prefabWall_75;
	/** @type {PrefabWater} */
	prefabWater_37;
	/** @type {PrefabWater} */
	prefabWater_38;
	/** @type {PrefabWater} */
	prefabWater_39;
	/** @type {PrefabGround} */
	prefabGround_93;
	/** @type {PrefabGround} */
	prefabGround_94;
	/** @type {PrefabGround} */
	prefabGround_95;
	/** @type {PrefabGround} */
	prefabGround_96;
	/** @type {PrefabGround} */
	prefabGround_97;
	/** @type {PrefabGround} */
	prefabGround_98;
	/** @type {PrefabGround} */
	prefabGround_99;
	/** @type {PrefabGround} */
	prefabGround_100;
	/** @type {PrefabGround} */
	prefabGround_101;
	/** @type {PrefabGround} */
	prefabGround_102;
	/** @type {PrefabGround} */
	prefabGround_103;
	/** @type {PrefabWall} */
	prefabWall_76;
	/** @type {PrefabWater} */
	prefabWater_40;
	/** @type {PrefabWater} */
	prefabWater_41;
	/** @type {PrefabGround} */
	prefabGround_104;
	/** @type {PrefabGround} */
	prefabGround_105;
	/** @type {PrefabMindCat2} */
	prefabMindCat2;
	/** @type {PrefabMachineCat2} */
	prefabMachineCat2;
	/** @type {PrefabMindCat1} */
	prefabMindCat1;
	/** @type {PrefabMachineCat1} */
	prefabMachineCat1;
	/** @type {Phaser.GameObjects.Image} */
	groundSprite;
	/** @type {Phaser.GameObjects.Image} */
	wallSprite;
	/** @type {Phaser.GameObjects.Image} */
	waterSprite;
	/** @type {Phaser.GameObjects.Image} */
	machineCat1;
	/** @type {Phaser.GameObjects.Image} */
	machineCat2;
	/** @type {Phaser.GameObjects.Image} */
	mindCat1;
	/** @type {Phaser.GameObjects.Image} */
	mindCat2;
	/** @type {Phaser.GameObjects.Text} */
	tileTypeDisplay;
	/** @type {Phaser.GameObjects.Image} */
	buttonbackground_1;
	/** @type {Phaser.GameObjects.Text} */
	endTurnText;
	/** @type {Phaser.GameObjects.Text} */
	currentTurnIndicator;
	/** @type {Phaser.GameObjects.Image} */
	lifecatorange_9;
	/** @type {Phaser.GameObjects.Image} */
	lifecatorange_21;
	/** @type {Phaser.GameObjects.Image} */
	lifecatorange_1;
	/** @type {Phaser.GameObjects.Image} */
	lifecatorange_10;
	/** @type {Phaser.GameObjects.Image} */
	lifecatorange_11;
	/** @type {Phaser.GameObjects.Image} */
	lifecatorange_12;
	/** @type {Phaser.GameObjects.Image} */
	lifecatorange_13;
	/** @type {Phaser.GameObjects.Image} */
	lifecatorange_14;
	/** @type {Phaser.GameObjects.Image} */
	lifecatorange_15;
	/** @type {Phaser.GameObjects.Image} */
	lifecatorange_16;
	/** @type {Phaser.GameObjects.Image} */
	lifecatorange_17;
	/** @type {Phaser.GameObjects.Image} */
	lifecatorange_18;
	/** @type {Phaser.GameObjects.Image} */
	lifecatorange_19;
	/** @type {Phaser.GameObjects.Image} */
	lifecatorange_2;
	/** @type {Phaser.GameObjects.Image} */
	lifecatorange_20;
	/** @type {Phaser.GameObjects.Image} */
	lifecatorange_3;
	/** @type {Phaser.GameObjects.Image} */
	lifecatorange_4;
	/** @type {Phaser.GameObjects.Image} */
	lifecatorange_5;
	/** @type {Phaser.GameObjects.Image} */
	lifecatorange_6;
	/** @type {Phaser.GameObjects.Image} */
	lifecatorange_7;
	/** @type {Phaser.GameObjects.Image} */
	lifecatorange_8;
	/** @type {Phaser.GameObjects.Image} */
	lifecatwhite_0;
	/** @type {Phaser.GameObjects.Image} */
	lifecatwhite_1;
	/** @type {Phaser.GameObjects.Image} */
	lifecatwhite_10;
	/** @type {Phaser.GameObjects.Image} */
	lifecatwhite_11;
	/** @type {Phaser.GameObjects.Image} */
	lifecatwhite_12;
	/** @type {Phaser.GameObjects.Image} */
	lifecatwhite_13;
	/** @type {Phaser.GameObjects.Image} */
	lifecatwhite_14;
	/** @type {Phaser.GameObjects.Image} */
	lifecatwhite_15;
	/** @type {Phaser.GameObjects.Image} */
	lifecatwhite_16;
	/** @type {Phaser.GameObjects.Image} */
	lifecatwhite_17;
	/** @type {Phaser.GameObjects.Image} */
	lifecatwhite_18;
	/** @type {Phaser.GameObjects.Image} */
	lifecatwhite_19;
	/** @type {Phaser.GameObjects.Image} */
	lifecatwhite_2;
	/** @type {Phaser.GameObjects.Image} */
	lifecatwhite_20;
	/** @type {Phaser.GameObjects.Image} */
	lifecatwhite_3;
	/** @type {Phaser.GameObjects.Image} */
	lifecatwhite_4;
	/** @type {Phaser.GameObjects.Image} */
	lifecatwhite_5;
	/** @type {Phaser.GameObjects.Image} */
	lifecatwhite_6;
	/** @type {Phaser.GameObjects.Image} */
	lifecatwhite_7;
	/** @type {Phaser.GameObjects.Image} */
	lifecatwhite_8;
	/** @type {Phaser.GameObjects.Image} */
	lifecatwhite_9;
	/** @type {Phaser.GameObjects.Image} */
	undobutton;
	/** @type {Phaser.GameObjects.Image} */
	confirmbutton;
	/** @type {Phaser.GameObjects.Text} */
	undo;
	/** @type {Phaser.GameObjects.Text} */
	confirm;
	/** @type {Phaser.GameObjects.Image} */
	choseAttackButton;
	/** @type {Phaser.GameObjects.Text} */
	attack;
	/** @type {Phaser.GameObjects.Image} */
	attacksendbutton;
	/** @type {Phaser.GameObjects.Text} */
	confirm_1;
	/** @type {Phaser.GameObjects.Image} */
	updirection;
	/** @type {Phaser.GameObjects.Image} */
	rightdirection;
	/** @type {Phaser.GameObjects.Image} */
	downdirection;
	/** @type {Phaser.GameObjects.Image} */
	leftdirection;
	/** @type {Array<PrefabGround|PrefabWall|PrefabWater>} */
	listOfTiles;
	/** @type {Array<PrefabGround|PrefabWater>} */
	walkableTiles;

	/* START-USER-CODE */

	// Write more your code here

	create() {

		this.editorCreate();
		//false by default but turns on when movementButton is clicked
		this.inMovementMode = false;
		// array that stores clicked tiles when movementMode is on
		this.selectedTiles = [];
		this.confirmbutton.visible = this.selectedTiles.length > 0;
		this.undobutton.visible = this.selectedTiles.length > 0;
		this.undo.visible = this.selectedTiles.length > 0 

		//topLeftUI
		this.endTurnText.text = "End Turn"
		var itsNotUrTurn = false
		if (itsNotUrTurn == true){
			this.buttonbackground_1.visible = false
			this.endTurnText.visible = false
		}
		else{
			this.buttonbackground_1.visible = true
			this.endTurnText.visible = true
		}
		this.buttonbackground_1.on('pointerdown', () => {
			this.skipingturn()
		})
		//end of topLeftUI


		this.prefabMindCat1.on('pointerover', () => {
			this.tileTypeDisplay.text = "Mind-Cat \n player1"
			this.mindCat1.visible = true
			this.mindCat2.visible = false
			this.machineCat1.visible = false
			this.machineCat2.visible = false
			this.tileTypeDisplay.visible = true
		})

		this.prefabMindCat2.on('pointerover', () => {
			this.tileTypeDisplay.text = "Mind-Cat \n player 2"
			this.mindCat1.visible = false
			this.mindCat2.visible = true
			this.machineCat1.visible = false
			this.machineCat2.visible = false
			this.tileTypeDisplay.visible = true
		})

		this.prefabMachineCat1.on('pointerover', () => {
			this.tileTypeDisplay.text = "Machine-Cat \n player 1"
			this.mindCat1.visible = false
			this.mindCat2.visible = false
			this.machineCat1.visible = true
			this.machineCat2.visible = false
			this.tileTypeDisplay.visible = true
		})

		this.prefabMachineCat2.on('pointerover', () => {
			this.tileTypeDisplay.text = "Machine-Cat \n player 2"
			this.mindCat1.visible = false
			this.mindCat2.visible = false
			this.machineCat1.visible = false
			this.machineCat2.visible = true
			this.tileTypeDisplay.visible = true
		})

		this.prefabMindCat1.on('pointerout', () => {
			this.mindCat1.visible = false
			this.mindCat2.visible = false
			this.machineCat1.visible = false
			this.machineCat2.visible = false
			this.tileTypeDisplay.visible = false
		})

		this.prefabMindCat2.on('pointerout', () => {
			this.mindCat1.visible = false
			this.mindCat2.visible = false
			this.machineCat1.visible = false
			this.machineCat2.visible = false
			this.tileTypeDisplay.visible = false
		})

		this.prefabMachineCat1.on('pointerout', () => {
			this.mindCat1.visible = false
			this.mindCat2.visible = false
			this.machineCat1.visible = false
			this.machineCat2.visible = false
			this.tileTypeDisplay.visible = false
		})

		this.prefabMachineCat2.on('pointerout', () => {
			this.mindCat1.visible = false
			this.mindCat2.visible = false
			this.machineCat1.visible = false
			this.machineCat2.visible = false
			this.tileTypeDisplay.visible = false
		})



		this.listOfTiles.forEach((tile) => {

			tile.on('pointerover', () => {

				this.tileTypeDisplay.text = tile.tileType;

				if (tile.tileType === "water") {
					this.groundSprite.visible = false
					this.waterSprite.visible = true
					this.wallSprite.visible = false
					this.tileTypeDisplay.visible = true
				} 

				else if (tile.tileType === "ground") {
					this.groundSprite.visible = true
					this.waterSprite.visible = false
					this.wallSprite.visible = false
					this.tileTypeDisplay.visible = true
				} 

				else if (tile.tileType === "wall") {
					this.groundSprite.visible = false
					this.waterSprite.visible = false
					this.wallSprite.visible = true
					this.tileTypeDisplay.visible = true
				}

			});



			tile.on('pointerout', () => {
				// Hide the tile type in the UI when the mouse is not over the tile
				this.tileTypeDisplay.text = "";
				if (tile.tileType === "water") {
					this.groundSprite.visible = false
					this.waterSprite.visible = false
					this.wallSprite.visible = false
					this.tileTypeDisplay.visible = false
				} 

				else if (tile.tileType === "ground") {
					this.groundSprite.visible = false
					this.waterSprite.visible = false
					this.wallSprite.visible = false
					this.tileTypeDisplay.visible = false
				} 

				else if (tile.tileType === "wall") {
					this.groundSprite.visible = false
					this.waterSprite.visible = false
					this.wallSprite.visible = false
					this.tileTypeDisplay.visible = false
				}

			});

			//when clicking on a tile
			tile.on('pointerdown', event => {
				//when clicking on a tile just log coordinates
				console.log("tileID: " + tile.tileID + " tileX: " + tile.tileX + " tileY: "+ tile.tileY)
				//when clicking on a tile if not movement mode end
				if (!this.isReadyforAction){
					return
				}
				//when clicking on a tile if movement mode on make an array
				else {
					this.selectedTiles.push([tile.tileX, tile.tileY])
					tile.list[1].visible = true;
					this.confirmbutton.visible = this.selectedTiles.length > 1;
					this.undobutton.visible = this.selectedTiles.length > 0;
					this.undo.visible = this.selectedTiles.length > 0;
					console.log('Selected tiles:', this.selectedTiles);
				}
			});

        })




		//move send button
		this.confirmbutton.on('pointerdown', () => {
			console.log("Move pawn");
			this.undo.visible = false
			this.undobutton.visible = false
			this.listOfTiles.forEach((tile) => {
				if (tile.type=="Container"){
					for (var i = 0; i < tile.list.length; i++){
						if (i == 1){
							tile.list[i].visible = false;
						}
					}
				}
			})
			this.movePawn()
		});
		this.choseAttackButton.on ('pointerdown', () => {
            console.log("chose an attack");
			this.selectedTiles = []
			this.listOfTiles.forEach((tile) => {

				if (tile.type=="Container"){

					for (var i = 0; i < tile.list.length; i++){
						if (i == 1){
							tile.list[i].visible = false;
						}
					}
				}
			})
			this.confirmbutton.visible = false
			this.confirm.visible = false
            this.updirection.visible = true
            this.downdirection.visible = true
            this.leftdirection.visible = true
            this.rightdirection.visible = true
        });
        this.updirection.on ('pointerdown', () => {
            console.log("up");
            direction = "up"
            this.attacksendbutton.visible = true
        });
        this.downdirection.on ('pointerdown', () => {
            console.log("down");
            direction = "down"
            this.attacksendbutton.visible = true
        });
        this.leftdirection.on ('pointerdown', () => {
            console.log("left");
            direction = "left"
            this.attacksendbutton.visible = true
        });
        this.rightdirection.on ('pointerdown', () => {
            console.log("right");
            direction = "right"
            this.attacksendbutton.visible = true
        });
        this.attacksendbutton.on ('pointerdown', () => {
            console.log("send attack");
            this.doTheAttack()
        });

		//undo movement button
		this.undobutton.on('pointerdown', event => {

			this.isReadyforAction = false

			console.log("movementmode anad attackmode is off")

			this.selectedTiles = []; //reset selectedTiles

			this.listOfTiles.forEach((tile) => {

				if (tile.type=="Container"){

					for (var i = 0; i < tile.list.length; i++){
						if (i == 1){
							tile.list[i].visible = false;
						}
					}
				}
			})

			this.confirmbutton.visible  = this.selectedTiles.length > 0;
			this.undobutton.visible = this.selectedTiles.length > 0;
			this.undo.visible = this.selectedTiles.length > 0
			this.choseAttackButton.visible = false
			this.attack.visible = false

			this.updirection.visible = false
			this.downdirection.visible = false
			this.leftdirection.visible = false
			this.rightdirection.visible = false

			this.attacksendbutton.visible = false


		})


		//from here clicking cat to move
		//mind-cat 1
		this.prefabMindCat1.on('pointerdown', () => {

			this.selectedTiles = []

			this.listOfTiles.forEach((tile) => {

				if (tile.type=="Container"){

					for (var i = 0; i < tile.list.length; i++){
						if (i == 1){
							tile.list[i].visible = false;
						}
					}
				}
			})

			if (this.prefabMindCat1.playerOwner == true){

                this.updirection.visible = false
                this.downdirection.visible = false
                this.leftdirection.visible = false
                this.rightdirection.visible = false
                this.attacksendbutton.visible = false

				console.log("É teu")
				console.log(this.prefabMindCat1.playerOwner)

				if( Player1Turn == true) {

					this.confirm.visible = true
					this.attack.visible = true
					this.isReadyforAction = true

					if (this.isReadyforAction == true){

						chosen_pawn_movement = 1
						chosen_pawn_attack = 1
						attack_name = "Taser-shot"
	
						this.selectedTiles.push([mind_cat1x, mind_cat1y])
						this.confirmbutton.visible = this.selectedTiles.length > 1;
						this.confirm.visible = this.selectedTiles.length > 1
						this.undobutton.visible = this.selectedTiles.length > 0;
						this.undo.visible = this.selectedTiles.length > 0
						this.choseAttackButton.visible = true
	
						console.log("movementmode is on")
						console.log("selected tiles" + this.selectedTiles)
					}
				}else {
					console.log("Not your turn to move")
				}
			}

			else if (this.prefabMindCat1.playerOwner == false){
				console.log(this.prefabMindCat1.playerOwner)
				console.log("Nonono, nao e teu!");

				this.isReadyforAction = false

				this.selectedTiles = []; //reset selectedTiles

				this.listOfTiles.forEach((tile) => {

					if (tile.type=="Container"){

						for (var i = 0; i < tile.list.length; i++){
							if (i == 1){
								tile.list[i].visible = false;
							}
						}
					}
				})

				this.confirmbutton.visible  = this.selectedTiles.length > 0;
				this.undobutton.visible = this.selectedTiles.length > 0;
				this.undo.visible = this.selectedTiles.length > 0
				this.choseAttackButton.visible = false
				this.attack.visible = false

				this.updirection.visible = false
                this.downdirection.visible = false
                this.leftdirection.visible = false
                this.rightdirection.visible = false

				this.attacksendbutton.visible = false
			}
		})

		//machine-cat 1
		this.prefabMachineCat1.on('pointerdown', () => {

			this.selectedTiles = []

			this.listOfTiles.forEach((tile) => {

				if (tile.type=="Container"){

					for (var i = 0; i < tile.list.length; i++){
						if (i == 1){
							tile.list[i].visible = false;
						}
					}
				}
			})

			if (this.prefabMachineCat1.playerOwner == true){

                this.updirection.visible = false
                this.downdirection.visible = false
                this.leftdirection.visible = false
                this.rightdirection.visible = false
                this.attacksendbutton.visible = false

				console.log("É teu")
				console.log(this.prefabMachineCat1.playerOwner)
				

				if (Player1Turn == true) {

					this.confirm.visible = true
					this.attack.visible = true
					this.isReadyforAction = true

					if (this.isReadyforAction == true){

						chosen_pawn_movement = 2
						chosen_pawn_attack = 2
						attack_name = "T-attack"
	
						this.selectedTiles.push([machine_cat1x, machine_cat1y])
						this.confirmbutton.visible = this.selectedTiles.length > 1;
						this.confirm.visible = this.selectedTiles.length > 1
						this.undobutton.visible = this.selectedTiles.length > 0;
						this.undo.visible = this.selectedTiles.length > 0;
						this.choseAttackButton.visible = true
	
						console.log("movementmode is on")
						console.log("selected tiles" + this.selectedTiles)
					}
				} else {
					console.log("not your turn to move")
				}

			}

			else if (this.prefabMachineCat1.playerOwner == false){
				console.log(this.prefabMindCat1.playerOwner)
				console.log("Nonono, nao e teu!");

				this.isReadyforAction = false

				this.selectedTiles = []; //reset selectedTiles

				this.listOfTiles.forEach((tile) => {

					if (tile.type=="Container"){

						for (var i = 0; i < tile.list.length; i++){
							if (i == 1){
								tile.list[i].visible = false;
							}
						}
					}
				})

				this.confirmbutton.visible  = this.selectedTiles.length > 0;
				this.undobutton.visible = this.selectedTiles.length > 0;
				this.undo.visible = this.selectedTiles.length > 0
				this.choseAttackButton.visible = false
				this.attack.visible = false

				this.updirection.visible = false
                this.downdirection.visible = false
                this.leftdirection.visible = false
                this.rightdirection.visible = false

				this.attacksendbutton.visible = false
			}
		})

		//mind-cat 2
		this.prefabMindCat2.on('pointerdown', () => {

			this.selectedTiles = []

			this.listOfTiles.forEach((tile) => {

				if (tile.type=="Container"){

					for (var i = 0; i < tile.list.length; i++){
						if (i == 1){
							tile.list[i].visible = false;
						}
					}
				}
			})

			if (this.prefabMindCat2.playerOwner == true) {

				this.updirection.visible = false
                this.downdirection.visible = false
                this.leftdirection.visible = false
                this.rightdirection.visible = false
                this.attacksendbutton.visible = false

				console.log("É teu")
				console.log(this.prefabMindCat2.playerOwner)

				if (Player2Turn == true) {
					this.confirm.visible = true
					this.attack.visible = true
					this.isReadyforAction = true

					if (this.isReadyforAction == true){

						chosen_pawn_movement = 1
						chosen_pawn_attack = 1
						attack_name = "Taser-shot"
	
						this.selectedTiles.push([mind_cat2x, mind_cat2y])
						this.confirmbutton.visible = this.selectedTiles.length > 1;
						this.confirm.visible = this.selectedTiles.length > 1;
						this.undobutton.visible = this.selectedTiles.length > 0;
						this. undo.visible = this.selectedTiles. length > 0
						this.choseAttackButton.visible = true
	
						console.log("movementmode is on")
						console.log("selected tiles" + this.selectedTiles)
					}

				}else {
					console.log("Not your turn to move")
				}
			}

			else if(this.prefabMindCat2.playerOwner == false){
				console.log(this.prefabMindCat2.playerOwner)
				console.log("Nonono, nao e teu!");

				this.isReadyforAction = false

				this.selectedTiles = []; //reset selectedTiles

				this.listOfTiles.forEach((tile) => {

					if (tile.type=="Container"){

						for (var i = 0; i < tile.list.length; i++){
							if (i == 1){
								tile.list[i].visible = false;
							}
						}
					}
				})

				this.confirmbutton.visible  = this.selectedTiles.length > 0;
				this.undobutton.visible = this.selectedTiles.length > 0;
				this.undo.visible = this.selectedTiles.length > 0
				this.choseAttackButton.visible = false
				this.attack.visible = false

				this.updirection.visible = false
                this.downdirection.visible = false
                this.leftdirection.visible = false
                this.rightdirection.visible = false

				this.attacksendbutton.visible = false
			}
		})

		//machine-cat 2
		this.prefabMachineCat2.on('pointerdown', () => {

			this.selectedTiles = []

			this.listOfTiles.forEach((tile) => {
					if (tile.type=="Container"){

						for (var i = 0; i < tile.list.length; i++){
							if (i == 1){
								tile.list[i].visible = false;
							}
						}
					}
			})

			if (this.prefabMachineCat2.playerOwner == true){


				this.updirection.visible = false
                this.downdirection.visible = false
                this.leftdirection.visible = false
                this.rightdirection.visible = false
                this.attacksendbutton.visible = false
				

				console.log("É teu")
				console.log(this.prefabMachineCat2.playerOwner)

				if ( Player2Turn == true) {

					this.confirm.visible = true
					this.attack.visible = true
					this.isReadyforAction = true;

					if (this.isReadyforAction == true){

						chosen_pawn_movement = 2
						chosen_pawn_attack = 2
						attack_name = "T-attack"

						this.selectedTiles.push([machine_cat2x, machine_cat2y])
						this.confirmbutton.visible = this.selectedTiles.length > 1;
						this.confirm.visible = this.selectedTiles.length > 1
						this.undobutton.visible = this.selectedTiles.length > 0;
						this.undo.visible = this.selectedTiles.length > 0;
						this.choseAttackButton.visible = true
						

						console.log("movementmode is on")
						console.log("selected tiles" + this.selectedTiles)
					}


				}
				else {
					console.log("Not your turn to move")
				}
					

			}

			else if (this.prefabMachineCat2.playerOwner == false){
				console.log(this.prefabMindCat1.playerOwner)
				console.log("Nonono, nao e teu!");

				this.isReadyforAction = false

				this.selectedTiles = []; //reset selectedTiles

				this.listOfTiles.forEach((tile) => {

					if (tile.type=="Container"){

						for (var i = 0; i < tile.list.length; i++){
							if (i == 1){
								tile.list[i].visible = false;
							}
						}
					}
				})

				this.confirmbutton.visible  = this.selectedTiles.length > 0;
				this.undobutton.visible = this.selectedTiles.length > 0;
				this.undo.visible = this.selectedTiles.length > 0
				this.choseAttackButton.visible = false
				this.attack.visible = false

				this.updirection.visible = false
                this.downdirection.visible = false
                this.leftdirection.visible = false
                this.rightdirection.visible = false

				this.attacksendbutton.visible = false

			}
		})
		//end clicking cat to move

		this.turnUI();
		this.getPlayerPawn();
		setInterval(() => {
			console.log("set interval loop");
			this.getPlayerPawn();
			this.turnUI();
		}, 3000)
	}

	movePawn() { //fix this
		if (this.selectedTiles.length == 0){
			return;
		}

		this.confirmbutton.visible = false
		this.confirm.visible = false
		this.attacksendbutton.visible = false

		//move pawn request
		var xhttp = new XMLHttpRequest();

		xhttp.onreadystatechange =  () => {
			if (xhttp.readyState == 4) {

				console.log("DATAAAAAAAAAAAAAAAAAAAAA:");
				console.log(xhttp.responseText)

			}
		};

		// Data being sent to the server
		var data = {
			"pawn_id": chosen_pawn_movement,
			"positions": this.selectedTiles
		}

		console.log("Sending THIS Data to the server hehe :)");
		console.log(data);

		xhttp.open("POST", "/movement/pawn", true);
		xhttp.setRequestHeader("Content-Type", "application/json");
		xhttp.send(JSON.stringify(data));
	}

	skipingturn() { 
		this.confirmbutton.visible = false
		this.confirm.visible = false
		this.attacksendbutton.visible = false

        //move pawn request
        var xhttp = new XMLHttpRequest();


        xhttp.onreadystatechange =  () => {
            if (xhttp.readyState == 4) {

                console.log("level.js function: skipTurn:")
                console.log(xhttp.responseText)

            }
        };

        // // Data being sent to the server
        // var data = {
        //     "pawn_id": chosen_pawn_movement,
        //     "attack_name": attack_name,
        //     "direction": direction,
        // }

        // console.log("Sending attack Data to the server hehe :)");
        // console.log(data);

        xhttp.open("POST", "/game/turnskip", true);
        xhttp.setRequestHeader("Content-Type", "application/json");
		xhttp.send();
        //xhttp.send(JSON.stringify(data));
    }

	doTheAttack() { 
		this.confirmbutton.visible = false
		this.confirm.visible = false
		this.attacksendbutton.visible = false

        //move pawn request
        var xhttp = new XMLHttpRequest();

		console.log("Sending attack?");


        xhttp.onreadystatechange =  () => {
            if (xhttp.readyState == 4) {

                console.log("level.js function: doTheAttack:")
                console.log(xhttp.responseText)

            }
        };

        // Data being sent to the server
        var data = {
            "pawn_id": chosen_pawn_movement,
            "attack_name": attack_name,
            "direction": direction,
        }

        console.log("Sending attack Data to the server hehe :)");
        console.log(data);

        xhttp.open("POST", "/attack/action", true);
        xhttp.setRequestHeader("Content-Type", "application/json");
        xhttp.send(JSON.stringify(data));
    }

	turnUI(){

		//console.log("level.js function: turnUI");

		var xhttp = new XMLHttpRequest();

		xhttp.onreadystatechange  = () => {

			if (xhttp.readyState == 4) {

					// //Turn UI
					if (xhttp.status == 200 || xhttp.status == 302) {
						var response = JSON.parse(xhttp.responseText);
						console.log(response);
						var currentTurn = response.currentTurn;
						var player1Name = response.player1Name
						var player2Name = response.player2Name

						if (currentTurn == 1){
							this.currentTurnIndicator.text = ("Current turn: \n" + player1Name + "'s attack")
							Player1Turn = true
							Player2Turn = false
						}
						if (currentTurn == 2){
							this.currentTurnIndicator.text = ("Current turn: \n" + player2Name + "'s attack")
							Player1Turn = false
							Player2Turn = true
						}
						if (currentTurn == 3){ 
							this.currentTurnIndicator.text = ("Current turn: Resolution")
							Player1Turn = false
							Player2Turn = false
						}
						if (currentTurn == 4){
							this.currentTurnIndicator.text = ("Current turn: \n" + player2Name + "'s attack")
							Player1Turn = false
							Player2Turn = true
						}
						if (currentTurn == 5){
							this.currentTurnIndicator.text = ("Current turn: \n" + player1Name + "'s attack")
							Player1Turn = true
							Player2Turn = false
						}
						if (currentTurn == 6){
							this.currentTurnIndicator.text = ("Current turn: Resolution")
							Player1Turn = false
							Player2Turn = false
						}

					}
					else if (xhttp.status == 403){

						console.log("Unothorised access to enter a game");
						window.location.replace("../login.html");
					}

			}
		}
		xhttp.open("GET", "../views/checkCurrentTurn", true);
		xhttp.send();
	}

	getPlayerPawn() {

		//console.log("level.js function: getPlayerPawn");

		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = (data) => {
			//console.log(data)

			// readyState == 4 means is done (enum). status == 200 - estado http tudo OK
			if (xhttp.readyState == 4) {

				console.log(xhttp.status)
				//console.log(xhttp.responseText);

				if (xhttp.status == 200 || xhttp.status == 302){

						var response = JSON.parse(xhttp.responseText);
						//console.log(response);


						mind_cat1x = response.player1Rows[0].tile_x_coordinate
						mind_cat2x = response.player2Rows[0].tile_x_coordinate
						machine_cat1x = response.player1Rows[1].tile_x_coordinate
						machine_cat2x = response.player2Rows[1].tile_x_coordinate

						mind_cat1y = response.player1Rows[0].tile_y_coordinate
						mind_cat2y = response.player2Rows[0].tile_y_coordinate
						machine_cat1y = response.player1Rows[1].tile_y_coordinate
						machine_cat2y = response.player2Rows[1].tile_y_coordinate

						player1Health = response.player1Rows[0].health
						player2Health = response.player2Rows[0].health
						console.log(player1Health, player2Health)

						//console.log(response.player1Rows[0].player_id) //look at this!!!

						if (player1Health == 20) {
							this.lifecatwhite_0.visible = false
							this.lifecatwhite_20.visible = true
							this.lifecatwhite_19.visible = false
							this.lifecatwhite_18.visible = false
							this.lifecatwhite_17.visible = false
							this.lifecatwhite_16.visible = false
							this.lifecatwhite_15.visible = false
							this.lifecatwhite_14.visible = false
							this.lifecatwhite_13.visible = false
							this.lifecatwhite_12.visible = false
							this.lifecatwhite_11.visible = false
							this.lifecatwhite_10.visible = false
							this.lifecatwhite_9.visible = false
							this.lifecatwhite_8.visible = false
							this.lifecatwhite_7.visible = false
							this.lifecatwhite_6.visible = false
							this.lifecatwhite_5.visible = false
							this.lifecatwhite_4.visible = false
							this.lifecatwhite_3.visible = false
							this.lifecatwhite_2.visible = false
							this.lifecatwhite_1.visible = false

						}
						else if (player1Health == 19){
							this.lifecatwhite_0.visible = false
							this.lifecatwhite_20.visible = false
							this.lifecatwhite_19.visible = true
							this.lifecatwhite_18.visible = false
							this.lifecatwhite_17.visible = false
							this.lifecatwhite_16.visible = false
							this.lifecatwhite_15.visible = false
							this.lifecatwhite_14.visible = false
							this.lifecatwhite_13.visible = false
							this.lifecatwhite_12.visible = false
							this.lifecatwhite_11.visible = false
							this.lifecatwhite_10.visible = false
							this.lifecatwhite_9.visible = false
							this.lifecatwhite_8.visible = false
							this.lifecatwhite_7.visible = false
							this.lifecatwhite_6.visible = false
							this.lifecatwhite_5.visible = false
							this.lifecatwhite_4.visible = false
							this.lifecatwhite_3.visible = false
							this.lifecatwhite_2.visible = false
							this.lifecatwhite_1.visible = false

						}
						else if (player1Health == 18){
							this.lifecatwhite_0.visible = false
							this.lifecatwhite_20.visible = false
							this.lifecatwhite_19.visible = false
							this.lifecatwhite_18.visible = true
							this.lifecatwhite_17.visible = false
							this.lifecatwhite_16.visible = false
							this.lifecatwhite_15.visible = false
							this.lifecatwhite_14.visible = false
							this.lifecatwhite_13.visible = false
							this.lifecatwhite_12.visible = false
							this.lifecatwhite_11.visible = false
							this.lifecatwhite_10.visible = false
							this.lifecatwhite_9.visible = false
							this.lifecatwhite_8.visible = false
							this.lifecatwhite_7.visible = false
							this.lifecatwhite_6.visible = false
							this.lifecatwhite_5.visible = false
							this.lifecatwhite_4.visible = false
							this.lifecatwhite_3.visible = false
							this.lifecatwhite_2.visible = false
							this.lifecatwhite_1.visible = false
						}
						else if (player1Health == 17){

							this.lifecatwhite_0.visible = false
							this.lifecatwhite_20.visible = false
							this.lifecatwhite_19.visible = false
							this.lifecatwhite_18.visible = false
							this.lifecatwhite_17.visible = true
							this.lifecatwhite_16.visible = false
							this.lifecatwhite_15.visible = false
							this.lifecatwhite_14.visible = false
							this.lifecatwhite_13.visible = false
							this.lifecatwhite_12.visible = false
							this.lifecatwhite_11.visible = false
							this.lifecatwhite_10.visible = false
							this.lifecatwhite_9.visible = false
							this.lifecatwhite_8.visible = false
							this.lifecatwhite_7.visible = false
							this.lifecatwhite_6.visible = false
							this.lifecatwhite_5.visible = false
							this.lifecatwhite_4.visible = false
							this.lifecatwhite_3.visible = false
							this.lifecatwhite_2.visible = false
							this.lifecatwhite_1.visible = false
						}
						else if (player1Health == 16){

							this.lifecatwhite_0.visible = false
							this.lifecatwhite_20.visible = false
							this.lifecatwhite_19.visible = false
							this.lifecatwhite_18.visible = false
							this.lifecatwhite_17.visible = false
							this.lifecatwhite_16.visible = true
							this.lifecatwhite_15.visible = false
							this.lifecatwhite_14.visible = false
							this.lifecatwhite_13.visible = false
							this.lifecatwhite_12.visible = false
							this.lifecatwhite_11.visible = false
							this.lifecatwhite_10.visible = false
							this.lifecatwhite_9.visible = false
							this.lifecatwhite_8.visible = false
							this.lifecatwhite_7.visible = false
							this.lifecatwhite_6.visible = false
							this.lifecatwhite_5.visible = false
							this.lifecatwhite_4.visible = false
							this.lifecatwhite_3.visible = false
							this.lifecatwhite_2.visible = false
							this.lifecatwhite_1.visible = false
						}
						else if (player1Health == 15){
							this.lifecatwhite_0.visible = false
							this.lifecatwhite_20.visible = false
							this.lifecatwhite_19.visible = false
							this.lifecatwhite_18.visible = false
							this.lifecatwhite_17.visible = false
							this.lifecatwhite_16.visible = false
							this.lifecatwhite_15.visible = true
							this.lifecatwhite_14.visible = false
							this.lifecatwhite_13.visible = false
							this.lifecatwhite_12.visible = false
							this.lifecatwhite_11.visible = false
							this.lifecatwhite_10.visible = false
							this.lifecatwhite_9.visible = false
							this.lifecatwhite_8.visible = false
							this.lifecatwhite_7.visible = false
							this.lifecatwhite_6.visible = false
							this.lifecatwhite_5.visible = false
							this.lifecatwhite_4.visible = false
							this.lifecatwhite_3.visible = false
							this.lifecatwhite_2.visible = false
							this.lifecatwhite_1.visible = false
						}
						else if (player1Health == 14){

							this.lifecatwhite_0.visible = false
							this.lifecatwhite_20.visible = false
							this.lifecatwhite_19.visible = false
							this.lifecatwhite_18.visible = false
							this.lifecatwhite_17.visible = false
							this.lifecatwhite_16.visible = false
							this.lifecatwhite_15.visible = false
							this.lifecatwhite_14.visible = true
							this.lifecatwhite_13.visible = false
							this.lifecatwhite_12.visible = false
							this.lifecatwhite_11.visible = false
							this.lifecatwhite_10.visible = false
							this.lifecatwhite_9.visible = false
							this.lifecatwhite_8.visible = false
							this.lifecatwhite_7.visible = false
							this.lifecatwhite_6.visible = false
							this.lifecatwhite_5.visible = false
							this.lifecatwhite_4.visible = false
							this.lifecatwhite_3.visible = false
							this.lifecatwhite_2.visible = false
							this.lifecatwhite_1.visible = false
						}
						else if (player1Health == 13){
							this.lifecatwhite_0.visible = false
							this.lifecatwhite_20.visible = false
							this.lifecatwhite_19.visible = false
							this.lifecatwhite_18.visible = false
							this.lifecatwhite_17.visible = false
							this.lifecatwhite_16.visible = false
							this.lifecatwhite_15.visible = false
							this.lifecatwhite_14.visible = false
							this.lifecatwhite_13.visible = true
							this.lifecatwhite_12.visible = false
							this.lifecatwhite_11.visible = false
							this.lifecatwhite_10.visible = false
							this.lifecatwhite_9.visible = false
							this.lifecatwhite_8.visible = false
							this.lifecatwhite_7.visible = false
							this.lifecatwhite_6.visible = false
							this.lifecatwhite_5.visible = false
							this.lifecatwhite_4.visible = false
							this.lifecatwhite_3.visible = false
							this.lifecatwhite_2.visible = false
							this.lifecatwhite_1.visible = false
						}
						else if (player1Health == 12){
							this.lifecatwhite_0.visible = false
							this.lifecatwhite_20.visible = false
							this.lifecatwhite_19.visible = false
							this.lifecatwhite_18.visible = false
							this.lifecatwhite_17.visible = false
							this.lifecatwhite_16.visible = false
							this.lifecatwhite_15.visible = false
							this.lifecatwhite_14.visible = false
							this.lifecatwhite_13.visible = false
							this.lifecatwhite_12.visible = true
							this.lifecatwhite_11.visible = false
							this.lifecatwhite_10.visible = false
							this.lifecatwhite_9.visible = false
							this.lifecatwhite_8.visible = false
							this.lifecatwhite_7.visible = false
							this.lifecatwhite_6.visible = false
							this.lifecatwhite_5.visible = false
							this.lifecatwhite_4.visible = false
							this.lifecatwhite_3.visible = false
							this.lifecatwhite_2.visible = false
							this.lifecatwhite_1.visible = false
						}
						else if (player1Health == 11){
							this.lifecatwhite_0.visible = false
							this.lifecatwhite_20.visible = false
							this.lifecatwhite_19.visible = false
							this.lifecatwhite_18.visible = false
							this.lifecatwhite_17.visible = false
							this.lifecatwhite_16.visible = false
							this.lifecatwhite_15.visible = false
							this.lifecatwhite_14.visible = false
							this.lifecatwhite_13.visible = false
							this.lifecatwhite_12.visible = false
							this.lifecatwhite_11.visible = true
							this.lifecatwhite_10.visible = false
							this.lifecatwhite_9.visible = false
							this.lifecatwhite_8.visible = false
							this.lifecatwhite_7.visible = false
							this.lifecatwhite_6.visible = false
							this.lifecatwhite_5.visible = false
							this.lifecatwhite_4.visible = false
							this.lifecatwhite_3.visible = false
							this.lifecatwhite_2.visible = false
							this.lifecatwhite_1.visible = false
						}
						else if (player1Health == 10){
							this.lifecatwhite_0.visible = false
							this.lifecatwhite_20.visible = false
							this.lifecatwhite_19.visible = false
							this.lifecatwhite_18.visible = false
							this.lifecatwhite_17.visible = false
							this.lifecatwhite_16.visible = false
							this.lifecatwhite_15.visible = false
							this.lifecatwhite_14.visible = false
							this.lifecatwhite_13.visible = false
							this.lifecatwhite_12.visible = false
							this.lifecatwhite_11.visible = false
							this.lifecatwhite_10.visible = true
							this.lifecatwhite_9.visible = false
							this.lifecatwhite_8.visible = false
							this.lifecatwhite_7.visible = false
							this.lifecatwhite_6.visible = false
							this.lifecatwhite_5.visible = false
							this.lifecatwhite_4.visible = false
							this.lifecatwhite_3.visible = false
							this.lifecatwhite_2.visible = false
							this.lifecatwhite_1.visible = false
						}
						else if (player1Health == 9){
							this.lifecatwhite_0.visible = false
							this.lifecatwhite_20.visible = false
							this.lifecatwhite_19.visible = false
							this.lifecatwhite_18.visible = false
							this.lifecatwhite_17.visible = false
							this.lifecatwhite_16.visible = false
							this.lifecatwhite_15.visible = false
							this.lifecatwhite_14.visible = false
							this.lifecatwhite_13.visible = false
							this.lifecatwhite_12.visible = false
							this.lifecatwhite_11.visible = false
							this.lifecatwhite_10.visible = false
							this.lifecatwhite_9.visible = true
							this.lifecatwhite_8.visible = false
							this.lifecatwhite_7.visible = false
							this.lifecatwhite_6.visible = false
							this.lifecatwhite_5.visible = false
							this.lifecatwhite_4.visible = false
							this.lifecatwhite_3.visible = false
							this.lifecatwhite_2.visible = false
							this.lifecatwhite_1.visible = false
						}
						else if (player1Health == 8){
							this.lifecatwhite_0.visible = false
							this.lifecatwhite_20.visible = false
							this.lifecatwhite_19.visible = false
							this.lifecatwhite_18.visible = false
							this.lifecatwhite_17.visible = false
							this.lifecatwhite_16.visible = false
							this.lifecatwhite_15.visible = false
							this.lifecatwhite_14.visible = false
							this.lifecatwhite_13.visible = false
							this.lifecatwhite_12.visible = false
							this.lifecatwhite_11.visible = false
							this.lifecatwhite_10.visible = false
							this.lifecatwhite_9.visible = false
							this.lifecatwhite_8.visible = true
							this.lifecatwhite_7.visible = false
							this.lifecatwhite_6.visible = false
							this.lifecatwhite_5.visible = false
							this.lifecatwhite_4.visible = false
							this.lifecatwhite_3.visible = false
							this.lifecatwhite_2.visible = false
							this.lifecatwhite_1.visible = false
						}
						else if (player1Health == 7){
							this.lifecatwhite_0.visible = false
							this.lifecatwhite_20.visible = false
							this.lifecatwhite_19.visible = false
							this.lifecatwhite_18.visible = false
							this.lifecatwhite_17.visible = false
							this.lifecatwhite_16.visible = false
							this.lifecatwhite_15.visible = false
							this.lifecatwhite_14.visible = false
							this.lifecatwhite_13.visible = false
							this.lifecatwhite_12.visible = false
							this.lifecatwhite_11.visible = false
							this.lifecatwhite_10.visible = false
							this.lifecatwhite_9.visible = false
							this.lifecatwhite_8.visible = false
							this.lifecatwhite_7.visible = true
							this.lifecatwhite_6.visible = false
							this.lifecatwhite_5.visible = false
							this.lifecatwhite_4.visible = false
							this.lifecatwhite_3.visible = false
							this.lifecatwhite_2.visible = false
							this.lifecatwhite_1.visible = false
						}
						else if (player1Health == 6){
							this.lifecatwhite_0.visible = false
							this.lifecatwhite_20.visible = false
							this.lifecatwhite_19.visible = false
							this.lifecatwhite_18.visible = false
							this.lifecatwhite_17.visible = false
							this.lifecatwhite_16.visible = false
							this.lifecatwhite_15.visible = false
							this.lifecatwhite_14.visible = false
							this.lifecatwhite_13.visible = false
							this.lifecatwhite_12.visible = false
							this.lifecatwhite_11.visible = false
							this.lifecatwhite_10.visible = false
							this.lifecatwhite_9.visible = false
							this.lifecatwhite_8.visible = false
							this.lifecatwhite_7.visible = false
							this.lifecatwhite_6.visible = true
							this.lifecatwhite_5.visible = false
							this.lifecatwhite_4.visible = false
							this.lifecatwhite_3.visible = false
							this.lifecatwhite_2.visible = false
							this.lifecatwhite_1.visible = false
						}
						else if (player1Health == 5){
							this.lifecatwhite_0.visible = false
							this.lifecatwhite_20.visible = false
							this.lifecatwhite_19.visible = false
							this.lifecatwhite_18.visible = false
							this.lifecatwhite_17.visible = false
							this.lifecatwhite_16.visible = false
							this.lifecatwhite_15.visible = false
							this.lifecatwhite_14.visible = false
							this.lifecatwhite_13.visible = false
							this.lifecatwhite_12.visible = false
							this.lifecatwhite_11.visible = false
							this.lifecatwhite_10.visible = false
							this.lifecatwhite_9.visible = false
							this.lifecatwhite_8.visible = false
							this.lifecatwhite_7.visible = false
							this.lifecatwhite_6.visible = false
							this.lifecatwhite_5.visible = true
							this.lifecatwhite_4.visible = false
							this.lifecatwhite_3.visible = false
							this.lifecatwhite_2.visible = false
							this.lifecatwhite_1.visible = false
						}
						else if (player1Health == 4){
							this.lifecatwhite_0.visible = false
							this.lifecatwhite_20.visible = false
							this.lifecatwhite_19.visible = false
							this.lifecatwhite_18.visible = false
							this.lifecatwhite_17.visible = false
							this.lifecatwhite_16.visible = false
							this.lifecatwhite_15.visible = false
							this.lifecatwhite_14.visible = false
							this.lifecatwhite_13.visible = false
							this.lifecatwhite_12.visible = false
							this.lifecatwhite_11.visible = false
							this.lifecatwhite_10.visible = false
							this.lifecatwhite_9.visible = false
							this.lifecatwhite_8.visible = false
							this.lifecatwhite_7.visible = false
							this.lifecatwhite_6.visible = false
							this.lifecatwhite_5.visible = false
							this.lifecatwhite_4.visible = true
							this.lifecatwhite_3.visible = false
							this.lifecatwhite_2.visible = false
							this.lifecatwhite_1.visible = false
						}
						else if (player1Health == 3){
							this.lifecatwhite_0.visible = false
							this.lifecatwhite_20.visible = false
							this.lifecatwhite_19.visible = false
							this.lifecatwhite_18.visible = false
							this.lifecatwhite_17.visible = false
							this.lifecatwhite_16.visible = false
							this.lifecatwhite_15.visible = false
							this.lifecatwhite_14.visible = false
							this.lifecatwhite_13.visible = false
							this.lifecatwhite_12.visible = false
							this.lifecatwhite_11.visible = false
							this.lifecatwhite_10.visible = false
							this.lifecatwhite_9.visible = false
							this.lifecatwhite_8.visible = false
							this.lifecatwhite_7.visible = false
							this.lifecatwhite_6.visible = false
							this.lifecatwhite_5.visible = false
							this.lifecatwhite_4.visible = false
							this.lifecatwhite_3.visible = true
							this.lifecatwhite_2.visible = false
							this.lifecatwhite_1.visible = false
						}
						else if (player1Health == 2){
							this.lifecatwhite_0.visible = false
							this.lifecatwhite_20.visible = false
							this.lifecatwhite_19.visible = false
							this.lifecatwhite_18.visible = false
							this.lifecatwhite_17.visible = false
							this.lifecatwhite_16.visible = false
							this.lifecatwhite_15.visible = false
							this.lifecatwhite_14.visible = false
							this.lifecatwhite_13.visible = false
							this.lifecatwhite_12.visible = false
							this.lifecatwhite_11.visible = false
							this.lifecatwhite_10.visible = false
							this.lifecatwhite_9.visible = false
							this.lifecatwhite_8.visible = false
							this.lifecatwhite_7.visible = false
							this.lifecatwhite_6.visible = false
							this.lifecatwhite_5.visible = false
							this.lifecatwhite_4.visible = false
							this.lifecatwhite_3.visible = false
							this.lifecatwhite_2.visible = true
							this.lifecatwhite_1.visible = false
						}
						else if (player1Health == 1){
							this.lifecatwhite_0.visible = false
							this.lifecatwhite_20.visible = false
							this.lifecatwhite_19.visible = false
							this.lifecatwhite_18.visible = false
							this.lifecatwhite_17.visible = false
							this.lifecatwhite_16.visible = false
							this.lifecatwhite_15.visible = false
							this.lifecatwhite_14.visible = false
							this.lifecatwhite_13.visible = false
							this.lifecatwhite_12.visible = false
							this.lifecatwhite_11.visible = false
							this.lifecatwhite_10.visible = false
							this.lifecatwhite_9.visible = false
							this.lifecatwhite_8.visible = false
							this.lifecatwhite_7.visible = false
							this.lifecatwhite_6.visible = false
							this.lifecatwhite_5.visible = false
							this.lifecatwhite_4.visible = false
							this.lifecatwhite_3.visible = false
							this.lifecatwhite_2.visible = false
							this.lifecatwhite_1.visible = true
						}
						else if (player1Health == 0){
							this.lifecatwhite_0.visible = true
							this.lifecatwhite_20.visible = false
							this.lifecatwhite_19.visible = false
							this.lifecatwhite_18.visible = false
							this.lifecatwhite_17.visible = false
							this.lifecatwhite_16.visible = false
							this.lifecatwhite_15.visible = false
							this.lifecatwhite_14.visible = false
							this.lifecatwhite_13.visible = false
							this.lifecatwhite_12.visible = false
							this.lifecatwhite_11.visible = false
							this.lifecatwhite_10.visible = false
							this.lifecatwhite_9.visible = false
							this.lifecatwhite_8.visible = false
							this.lifecatwhite_7.visible = false
							this.lifecatwhite_6.visible = false
							this.lifecatwhite_5.visible = false
							this.lifecatwhite_4.visible = false
							this.lifecatwhite_3.visible = false
							this.lifecatwhite_2.visible = false
							this.lifecatwhite_1.visible = false
						}

						if (player2Health == 20){
							this.lifecatorange_21.visible = false
							this.lifecatorange_20.visible = true
							this.lifecatorange_19.visible = false
							this.lifecatorange_18.visible = false
							this.lifecatorange_17.visible = false
							this.lifecatorange_16.visible = false
							this.lifecatorange_15.visible = false
							this.lifecatorange_14.visible = false
							this.lifecatorange_13.visible = false
							this.lifecatorange_12.visible = false
							this.lifecatorange_11.visible = false
							this.lifecatorange_10.visible = false
							this.lifecatorange_9.visible = false
							this.lifecatorange_8.visible = false
							this.lifecatorange_7.visible = false
							this.lifecatorange_6.visible = false
							this.lifecatorange_5.visible = false
							this.lifecatorange_4.visible = false
							this.lifecatorange_3.visible = false
							this.lifecatorange_2.visible = false
							this.lifecatorange_1.visible = false
						}
						else if (player2Health == 19){
							this.lifecatorange_21.visible = false
							this.lifecatorange_20.visible = false
							this.lifecatorange_19.visible = true
							this.lifecatorange_18.visible = false
							this.lifecatorange_17.visible = false
							this.lifecatorange_16.visible = false
							this.lifecatorange_15.visible = false
							this.lifecatorange_14.visible = false
							this.lifecatorange_13.visible = false
							this.lifecatorange_12.visible = false
							this.lifecatorange_11.visible = false
							this.lifecatorange_10.visible = false
							this.lifecatorange_9.visible = false
							this.lifecatorange_8.visible = false
							this.lifecatorange_7.visible = false
							this.lifecatorange_6.visible = false
							this.lifecatorange_5.visible = false
							this.lifecatorange_4.visible = false
							this.lifecatorange_3.visible = false
							this.lifecatorange_2.visible = false
							this.lifecatorange_1.visible = false
						}
						else if (player2Health == 18){
							this.lifecatorange_21.visible = false
							this.lifecatorange_20.visible = false
							this.lifecatorange_19.visible = false
							this.lifecatorange_18.visible = true
							this.lifecatorange_17.visible = false
							this.lifecatorange_16.visible = false
							this.lifecatorange_15.visible = false
							this.lifecatorange_14.visible = false
							this.lifecatorange_13.visible = false
							this.lifecatorange_12.visible = false
							this.lifecatorange_11.visible = false
							this.lifecatorange_10.visible = false
							this.lifecatorange_9.visible = false
							this.lifecatorange_8.visible = false
							this.lifecatorange_7.visible = false
							this.lifecatorange_6.visible = false
							this.lifecatorange_5.visible = false
							this.lifecatorange_4.visible = false
							this.lifecatorange_3.visible = false
							this.lifecatorange_2.visible = false
							this.lifecatorange_1.visible = false
						}
						else if (player2Health == 17){
							this.lifecatorange_21.visible = false
							this.lifecatorange_20.visible = false
							this.lifecatorange_19.visible = false
							this.lifecatorange_18.visible = false
							this.lifecatorange_17.visible = true
							this.lifecatorange_16.visible = false
							this.lifecatorange_15.visible = false
							this.lifecatorange_14.visible = false
							this.lifecatorange_13.visible = false
							this.lifecatorange_12.visible = false
							this.lifecatorange_11.visible = false
							this.lifecatorange_10.visible = false
							this.lifecatorange_9.visible = false
							this.lifecatorange_8.visible = false
							this.lifecatorange_7.visible = false
							this.lifecatorange_6.visible = false
							this.lifecatorange_5.visible = false
							this.lifecatorange_4.visible = false
							this.lifecatorange_3.visible = false
							this.lifecatorange_2.visible = false
							this.lifecatorange_1.visible = false
						}
						else if (player2Health == 16){
							this.lifecatorange_21.visible = false
							this.lifecatorange_20.visible = false
							this.lifecatorange_19.visible = false
							this.lifecatorange_18.visible = false
							this.lifecatorange_17.visible = false
							this.lifecatorange_16.visible = true
							this.lifecatorange_15.visible = false
							this.lifecatorange_14.visible = false
							this.lifecatorange_13.visible = false
							this.lifecatorange_12.visible = false
							this.lifecatorange_11.visible = false
							this.lifecatorange_10.visible = false
							this.lifecatorange_9.visible = false
							this.lifecatorange_8.visible = false
							this.lifecatorange_7.visible = false
							this.lifecatorange_6.visible = false
							this.lifecatorange_5.visible = false
							this.lifecatorange_4.visible = false
							this.lifecatorange_3.visible = false
							this.lifecatorange_2.visible = false
							this.lifecatorange_1.visible = false
						}
						else if (player2Health == 15){
							this.lifecatorange_21.visible = false
							this.lifecatorange_20.visible = false
							this.lifecatorange_19.visible = false
							this.lifecatorange_18.visible = false
							this.lifecatorange_17.visible = false
							this.lifecatorange_16.visible = false
							this.lifecatorange_15.visible = true
							this.lifecatorange_14.visible = false
							this.lifecatorange_13.visible = false
							this.lifecatorange_12.visible = false
							this.lifecatorange_11.visible = false
							this.lifecatorange_10.visible = false
							this.lifecatorange_9.visible = false
							this.lifecatorange_8.visible = false
							this.lifecatorange_7.visible = false
							this.lifecatorange_6.visible = false
							this.lifecatorange_5.visible = false
							this.lifecatorange_4.visible = false
							this.lifecatorange_3.visible = false
							this.lifecatorange_2.visible = false
							this.lifecatorange_1.visible = false
						}
						else if (player2Health == 14){
							this.lifecatorange_21.visible = false
							this.lifecatorange_20.visible = false
							this.lifecatorange_19.visible = false
							this.lifecatorange_18.visible = false
							this.lifecatorange_17.visible = false
							this.lifecatorange_16.visible = false
							this.lifecatorange_15.visible = false
							this.lifecatorange_14.visible = true
							this.lifecatorange_13.visible = false
							this.lifecatorange_12.visible = false
							this.lifecatorange_11.visible = false
							this.lifecatorange_10.visible = false
							this.lifecatorange_9.visible = false
							this.lifecatorange_8.visible = false
							this.lifecatorange_7.visible = false
							this.lifecatorange_6.visible = false
							this.lifecatorange_5.visible = false
							this.lifecatorange_4.visible = false
							this.lifecatorange_3.visible = false
							this.lifecatorange_2.visible = false
							this.lifecatorange_1.visible = false
						}
						else if (player2Health == 13){
							this.lifecatorange_21.visible = false
							this.lifecatorange_20.visible = false
							this.lifecatorange_19.visible = false
							this.lifecatorange_18.visible = false
							this.lifecatorange_17.visible = false
							this.lifecatorange_16.visible = false
							this.lifecatorange_15.visible = false
							this.lifecatorange_14.visible = false
							this.lifecatorange_13.visible = true
							this.lifecatorange_12.visible = false
							this.lifecatorange_11.visible = false
							this.lifecatorange_10.visible = false
							this.lifecatorange_9.visible = false
							this.lifecatorange_8.visible = false
							this.lifecatorange_7.visible = false
							this.lifecatorange_6.visible = false
							this.lifecatorange_5.visible = false
							this.lifecatorange_4.visible = false
							this.lifecatorange_3.visible = false
							this.lifecatorange_2.visible = false
							this.lifecatorange_1.visible = false
						}
						else if (player2Health == 12){
							this.lifecatorange_21.visible = false
							this.lifecatorange_20.visible = false
							this.lifecatorange_19.visible = false
							this.lifecatorange_18.visible = false
							this.lifecatorange_17.visible = false
							this.lifecatorange_16.visible = false
							this.lifecatorange_15.visible = false
							this.lifecatorange_14.visible = false
							this.lifecatorange_13.visible = false
							this.lifecatorange_12.visible = true
							this.lifecatorange_11.visible = false
							this.lifecatorange_10.visible = false
							this.lifecatorange_9.visible = false
							this.lifecatorange_8.visible = false
							this.lifecatorange_7.visible = false
							this.lifecatorange_6.visible = false
							this.lifecatorange_5.visible = false
							this.lifecatorange_4.visible = false
							this.lifecatorange_3.visible = false
							this.lifecatorange_2.visible = false
							this.lifecatorange_1.visible = false
						}
						else if (player2Health == 11){
							this.lifecatorange_21.visible = false
							this.lifecatorange_20.visible = false
							this.lifecatorange_19.visible = false
							this.lifecatorange_18.visible = false
							this.lifecatorange_17.visible = false
							this.lifecatorange_16.visible = false
							this.lifecatorange_15.visible = false
							this.lifecatorange_14.visible = false
							this.lifecatorange_13.visible = false
							this.lifecatorange_12.visible = false
							this.lifecatorange_11.visible = true
							this.lifecatorange_10.visible = false
							this.lifecatorange_9.visible = false
							this.lifecatorange_8.visible = false
							this.lifecatorange_7.visible = false
							this.lifecatorange_6.visible = false
							this.lifecatorange_5.visible = false
							this.lifecatorange_4.visible = false
							this.lifecatorange_3.visible = false
							this.lifecatorange_2.visible = false
							this.lifecatorange_1.visible = false
						}
						else if (player2Health == 10){
							this.lifecatorange_21.visible = false
							this.lifecatorange_20.visible = false
							this.lifecatorange_19.visible = false
							this.lifecatorange_18.visible = false
							this.lifecatorange_17.visible = false
							this.lifecatorange_16.visible = false
							this.lifecatorange_15.visible = false
							this.lifecatorange_14.visible = false
							this.lifecatorange_13.visible = false
							this.lifecatorange_12.visible = false
							this.lifecatorange_11.visible = false
							this.lifecatorange_10.visible = true
							this.lifecatorange_9.visible = false
							this.lifecatorange_8.visible = false
							this.lifecatorange_7.visible = false
							this.lifecatorange_6.visible = false
							this.lifecatorange_5.visible = false
							this.lifecatorange_4.visible = false
							this.lifecatorange_3.visible = false
							this.lifecatorange_2.visible = false
							this.lifecatorange_1.visible = false
						}
						else if (player2Health == 9){
							this.lifecatorange_21.visible = false
							this.lifecatorange_20.visible = false
							this.lifecatorange_19.visible = false
							this.lifecatorange_18.visible = false
							this.lifecatorange_17.visible = false
							this.lifecatorange_16.visible = false
							this.lifecatorange_15.visible = false
							this.lifecatorange_14.visible = false
							this.lifecatorange_13.visible = false
							this.lifecatorange_12.visible = false
							this.lifecatorange_11.visible = false
							this.lifecatorange_10.visible = false
							this.lifecatorange_9.visible = true
							this.lifecatorange_8.visible = false
							this.lifecatorange_7.visible = false
							this.lifecatorange_6.visible = false
							this.lifecatorange_5.visible = false
							this.lifecatorange_4.visible = false
							this.lifecatorange_3.visible = false
							this.lifecatorange_2.visible = false
							this.lifecatorange_1.visible = false
						}
						else if (player2Health == 8){
							this.lifecatorange_21.visible = false
							this.lifecatorange_20.visible = false
							this.lifecatorange_19.visible = false
							this.lifecatorange_18.visible = false
							this.lifecatorange_17.visible = false
							this.lifecatorange_16.visible = false
							this.lifecatorange_15.visible = false
							this.lifecatorange_14.visible = false
							this.lifecatorange_13.visible = false
							this.lifecatorange_12.visible = false
							this.lifecatorange_11.visible = false
							this.lifecatorange_10.visible = false
							this.lifecatorange_9.visible = false
							this.lifecatorange_8.visible = true
							this.lifecatorange_7.visible = false
							this.lifecatorange_6.visible = false
							this.lifecatorange_5.visible = false
							this.lifecatorange_4.visible = false
							this.lifecatorange_3.visible = false
							this.lifecatorange_2.visible = false
							this.lifecatorange_1.visible = false
						}
						else if (player2Health == 7){
							this.lifecatorange_21.visible = false
							this.lifecatorange_20.visible = false
							this.lifecatorange_19.visible = false
							this.lifecatorange_18.visible = false
							this.lifecatorange_17.visible = false
							this.lifecatorange_16.visible = false
							this.lifecatorange_15.visible = false
							this.lifecatorange_14.visible = false
							this.lifecatorange_13.visible = false
							this.lifecatorange_12.visible = false
							this.lifecatorange_11.visible = false
							this.lifecatorange_10.visible = false
							this.lifecatorange_9.visible = false
							this.lifecatorange_8.visible = false
							this.lifecatorange_7.visible = true
							this.lifecatorange_6.visible = false
							this.lifecatorange_5.visible = false
							this.lifecatorange_4.visible = false
							this.lifecatorange_3.visible = false
							this.lifecatorange_2.visible = false
							this.lifecatorange_1.visible = false
						}
						else if (player2Health == 6){
							this.lifecatorange_21.visible = false
							this.lifecatorange_20.visible = false
							this.lifecatorange_19.visible = false
							this.lifecatorange_18.visible = false
							this.lifecatorange_17.visible = false
							this.lifecatorange_16.visible = false
							this.lifecatorange_15.visible = false
							this.lifecatorange_14.visible = false
							this.lifecatorange_13.visible = false
							this.lifecatorange_12.visible = false
							this.lifecatorange_11.visible = false
							this.lifecatorange_10.visible = false
							this.lifecatorange_9.visible = false
							this.lifecatorange_8.visible = false
							this.lifecatorange_7.visible = false
							this.lifecatorange_6.visible = true
							this.lifecatorange_5.visible = false
							this.lifecatorange_4.visible = false
							this.lifecatorange_3.visible = false
							this.lifecatorange_2.visible = false
							this.lifecatorange_1.visible = false
						}
						else if (player2Health == 5){
							this.lifecatorange_21.visible = false
							this.lifecatorange_20.visible = false
							this.lifecatorange_19.visible = false
							this.lifecatorange_18.visible = false
							this.lifecatorange_17.visible = false
							this.lifecatorange_16.visible = false
							this.lifecatorange_15.visible = false
							this.lifecatorange_14.visible = false
							this.lifecatorange_13.visible = false
							this.lifecatorange_12.visible = false
							this.lifecatorange_11.visible = false
							this.lifecatorange_10.visible = false
							this.lifecatorange_9.visible = false
							this.lifecatorange_8.visible = false
							this.lifecatorange_7.visible = false
							this.lifecatorange_6.visible = false
							this.lifecatorange_5.visible = true
							this.lifecatorange_4.visible = false
							this.lifecatorange_3.visible = false
							this.lifecatorange_2.visible = false
							this.lifecatorange_1.visible = false
						}
						else if (player2Health == 4){
							this.lifecatorange_21.visible = false
							this.lifecatorange_20.visible = false
							this.lifecatorange_19.visible = false
							this.lifecatorange_18.visible = false
							this.lifecatorange_17.visible = false
							this.lifecatorange_16.visible = false
							this.lifecatorange_15.visible = false
							this.lifecatorange_14.visible = false
							this.lifecatorange_13.visible = false
							this.lifecatorange_12.visible = false
							this.lifecatorange_11.visible = false
							this.lifecatorange_10.visible = false
							this.lifecatorange_9.visible = false
							this.lifecatorange_8.visible = false
							this.lifecatorange_7.visible = false
							this.lifecatorange_6.visible = false
							this.lifecatorange_5.visible = false
							this.lifecatorange_4.visible = true
							this.lifecatorange_3.visible = false
							this.lifecatorange_2.visible = false
							this.lifecatorange_1.visible = false
						}
						else if (player2Health == 3){
							this.lifecatorange_21.visible = false
							this.lifecatorange_20.visible = false
							this.lifecatorange_19.visible = false
							this.lifecatorange_18.visible = false
							this.lifecatorange_17.visible = false
							this.lifecatorange_16.visible = false
							this.lifecatorange_15.visible = false
							this.lifecatorange_14.visible = false
							this.lifecatorange_13.visible = false
							this.lifecatorange_12.visible = false
							this.lifecatorange_11.visible = false
							this.lifecatorange_10.visible = false
							this.lifecatorange_9.visible = false
							this.lifecatorange_8.visible = false
							this.lifecatorange_7.visible = false
							this.lifecatorange_6.visible = false
							this.lifecatorange_5.visible = false
							this.lifecatorange_4.visible = false
							this.lifecatorange_3.visible = true
							this.lifecatorange_2.visible = false
							this.lifecatorange_1.visible = false
						}
						else if (player2Health == 2){
							this.lifecatorange_21.visible = false
							this.lifecatorange_20.visible = false
							this.lifecatorange_19.visible = false
							this.lifecatorange_18.visible = false
							this.lifecatorange_17.visible = false
							this.lifecatorange_16.visible = false
							this.lifecatorange_15.visible = false
							this.lifecatorange_14.visible = false
							this.lifecatorange_13.visible = false
							this.lifecatorange_12.visible = false
							this.lifecatorange_11.visible = false
							this.lifecatorange_10.visible = false
							this.lifecatorange_9.visible = false
							this.lifecatorange_8.visible = false
							this.lifecatorange_7.visible = false
							this.lifecatorange_6.visible = false
							this.lifecatorange_5.visible = false
							this.lifecatorange_4.visible = false
							this.lifecatorange_3.visible = false
							this.lifecatorange_2.visible = true
							this.lifecatorange_1.visible = false
						}
						else if (player2Health == 1){
							this.lifecatorange_21.visible = false
							this.lifecatorange_20.visible = false
							this.lifecatorange_19.visible = false
							this.lifecatorange_18.visible = false
							this.lifecatorange_17.visible = false
							this.lifecatorange_16.visible = false
							this.lifecatorange_15.visible = false
							this.lifecatorange_14.visible = false
							this.lifecatorange_13.visible = false
							this.lifecatorange_12.visible = false
							this.lifecatorange_11.visible = false
							this.lifecatorange_10.visible = false
							this.lifecatorange_9.visible = false
							this.lifecatorange_8.visible = false
							this.lifecatorange_7.visible = false
							this.lifecatorange_6.visible = false
							this.lifecatorange_5.visible = false
							this.lifecatorange_4.visible = false
							this.lifecatorange_3.visible = false
							this.lifecatorange_2.visible = false
							this.lifecatorange_1.visible = true
						}
						else if (player2Health == 0){
							this.lifecatorange_21.visible = true
							this.lifecatorange_20.visible = false
							this.lifecatorange_19.visible = false
							this.lifecatorange_18.visible = false
							this.lifecatorange_17.visible = false
							this.lifecatorange_16.visible = false
							this.lifecatorange_15.visible = false
							this.lifecatorange_14.visible = false
							this.lifecatorange_13.visible = false
							this.lifecatorange_12.visible = false
							this.lifecatorange_11.visible = false
							this.lifecatorange_10.visible = false
							this.lifecatorange_9.visible = false
							this.lifecatorange_8.visible = false
							this.lifecatorange_7.visible = false
							this.lifecatorange_6.visible = false
							this.lifecatorange_5.visible = false
							this.lifecatorange_4.visible = false
							this.lifecatorange_3.visible = false
							this.lifecatorange_2.visible = false
							this.lifecatorange_1.visible = false
						}
					for (var i = 0; i < response.player1Rows.length; i++) {

						//console.log("start of xy array");
						//console.log(response.player1Rows[i].tile_location_board_id);
						//console.log(this.listOfTiles);

						this.listOfTiles.forEach((tile) => {

							if (tile.tileID == response.player1Rows[i].tile_location_board_id){

								//console.log("player1 xy pawns")

								if (response.player1Rows[i].pawn_name == "Mind-cat"){
									this.prefabMindCat1.x = tile.x
									this.prefabMindCat1.y = tile.y
									this.prefabMindCat1.playerOwner = response.player1IsLocal
								}

								if (response.player1Rows[i].pawn_name == "Machine-cat"){
									this.prefabMachineCat1.x = tile.x
									this.prefabMachineCat1.y = tile.y
									this.prefabMachineCat1.playerOwner = response.player1IsLocal
								}
							}

							if (tile.tileID == response.player2Rows[i].tile_location_board_id){

								//console.log("player2 xy pawns")

								if (response.player2Rows[i].pawn_name == "Mind-cat"){
									this.prefabMindCat2.x = tile.x
									this.prefabMindCat2.y = tile.y
									this.prefabMindCat2.playerOwner = response.player2IsLocal
								}

								if (response.player2Rows[i].pawn_name == "Machine-cat"){
									this.prefabMachineCat2.x = tile.x
									this.prefabMachineCat2.y = tile.y
									this.prefabMachineCat2.playerOwner = response.player2IsLocal
								}
							}
						})
					}
				}else if (xhttp.status == 403){

					console.log("Unothorised access");
					window.location.replace("../login.html");
				}

			}
		}

		xhttp.open("GET", "/map/match", true);
		xhttp.send();
	}	

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
