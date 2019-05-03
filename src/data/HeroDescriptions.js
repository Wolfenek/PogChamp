import fullAna from "../images/FullImages/fullAna.png";
import fullAshe from "../images/FullImages/fullAshe.png";
import fullBaptiste from "../images/FullImages/fullBaptiste.png";
import fullBastion from "../images/FullImages/fullBastion.png";
import fullBrigitte from "../images/FullImages/fullBrigitte.png";
import fullDVa from "../images/FullImages/fullDVa.png";
import fullDoomfist from "../images/FullImages/fullDoomfist.png";
import fullGenji from "../images/FullImages/fullGenji.png";
import fullHanzo from "../images/FullImages/fullHanzo.png";
import fullJunkrat from "../images/FullImages/fullJunkrat.png";
import fullLucio from "../images/FullImages/fullLucio.png";
import fullMcCree from "../images/FullImages/fullMcCree.png";
import fullMei from "../images/FullImages/fullMei.png";
import fullMercy from "../images/FullImages/fullMercy.png";
import fullMoira from "../images/FullImages/fullMoira.png";
import fullOrisa from "../images/FullImages/fullOrisa.png";
import fullPharah from "../images/FullImages/fullPharah.png";
import fullReaper from "../images/FullImages/fullReaper.png";
import fullReinhardt from "../images/FullImages/fullReinhardt.png";
import fullRoadhog from "../images/FullImages/fullRoadhog.png";
import fullSoldier from "../images/FullImages/fullSoldier.png";
import fullSombra from "../images/FullImages/fullSombra.png";
import fullSymmetra from "../images/FullImages/fullSymmetra.png";
import fullTorbjörn from "../images/FullImages/fullTorbjörn.png";
import fullTracer from "../images/FullImages/fullTracer.png";
import fullWidowmaker from "../images/FullImages/fullWidowmaker.png";
import fullWinston from "../images/FullImages/fullWinston.png";
import fullWreckingBall from "../images/FullImages/fullWreckingBall.png";
import fullZarya from "../images/FullImages/fullZarya.png";
import fullZenyatta from "../images/FullImages/fullZenyatta.png";

const HeroDescriptions = [
  {
    id: "ana",
    name: "Ana",
    img: `${fullAna}`,
    role: "Support",
    hp: {
      get total() {
        return this.base_hp + this.armor + this.shield;
      },
      base_hp: 200,
      armor: 0,
      shield: 0
    },
    skills: [
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/f/fc/Ability-ana1.png/100px-Ability-ana1.png?version=1101920478ed5840a6a4d4698ee87951",
        name: "Biotic Rifle",
        desc:
          "Ana’s rifle shoots darts that can restore health to her allies or deal ongoing damage to her enemies. She can use the rifle’s scope to zoom in on targets and make highly accurate shots.",
        flavor:
          "Ana's sharp shooting skills may ease your pain... or give you a headache"
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/5/58/Ability-ana2.png?version=ddddc400bb15ac26549dc1193fe6db9d",
        name: "Sleep Dart",
        desc:
          "Ana fires a dart from her sidearm, rendering an enemy unconscious (though any damage will rouse them).",
        flavor:
          "Nap time is an important part of every hero's day. Even if you're an enraged scientist from moon"
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/0/0c/Ability-ana3.png?version=ba9a0fa814527eac0282a5c18c0d5ffe",
        name: "Biotic Grenade",
        desc:
          "Ana tosses a biotic bomb that deals damage to enemies and heals allies in a small area of effect. Affected allies briefly receive increased healing from all sources, while enemies caught in the blast cannot be healed for a few moments.",
        flavor:
          "It's worth to cut down the enemies healing and focus them down as a team"
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/9/97/Ability-ana4.png?version=966233d09f58f30b5a8333307732b7ad",
        name: "Nano Boost",
        desc:
          "After Ana hits one of her allies with a combat boost, they deal more damage, and take less damage from enemies’ attacks.",
        flavor: "Lucio secretly dreams of becoming nano-boosted by Ana"
      }
    ]
  },
  {
    id: "ashe",
    name: "Ashe",
    img: `${fullAshe}`,
    role: "Damage",
    flavor: "",
    hp: {
      get total() {
        return this.base_hp + this.armor + this.shield;
      },
      base_hp: 200,
      armor: 0,
      shield: 0
    },
    skills: [
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/4/4e/Ability-ashe1.png?version=916fec8c5997f96a7d06affc386d804d",
        name: "The Viper",
        desc:
          "Ashe's semi-automatic rifle fires quick shots, or she can use her aim-down sights for a more damaging, precise shot.",
        flavor: ""
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/d/da/Ability-ashe2.png?version=a7d69052583a9a10ece0760fb5939c59",
        name: "Dynamite",
        desc:
          "Ashe throws an explosive that detonates after a short delay or immediately when shot. The explosion from Dynamite also lights enemies on fire, dealing damage over time.",
        flavor: ""
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/8/85/Ability-ashe3.png?version=d03adba0120bb8a62c850edafef5c31c",
        name: "Coach Gun",
        desc:
          "Ashe blasts enemies in front of her, knocking them away and propelling herself backward for added mobility.",
        flavor: ""
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/7/7a/Ability-ashe4.png?version=f52f6bd4e92b8b3f6e85273fd593483e",
        name: "B.O.B",
        desc:
          "Ashe summons her trusted omnic sidekick, Bob, who charges forward and knocks enemies into the air, then lays down suppressing fire with his arm cannons.",
        flavor: ""
      }
    ]
  },
  {
    id: "baptiste",
    name: "Baptiste",
    img: `${fullBaptiste}`,
    role: "Support",
    hp: {
      get total() {
        return this.base_hp + this.armor + this.shield;
      },
      base_hp: 200,
      armor: 0,
      shield: 0
    },
    skills: [
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/2/26/Baptiste-ability1.png?version=048919c1052311cb03194c5b4c572d27",
        name: "Biotic Launcher",
        desc:
          "Baptiste’s three-round-burst Biotic Launcher rewards accuracy and recoil control with significant damage output. It also doubles as a healing device, lobbing projectiles that heal allies near the point of impact.",
        flavor: "",
        tip: ""
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/b/b3/Baptiste-ability2.png?version=e0ef974ee5c547cf833d95c7dc979ada",
        name: "Regenerative Burst",
        desc:
          "Baptiste activates an intense regenerative burst that heals himself and nearby allies over time.",
        flavor: "",
        tip: ""
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/8/8d/Baptiste-ability3.png?version=ffb7a5578ffc3bb630f0dae3d9274ddb",
        name: "Immortality Field",
        desc:
          "Baptiste uses a device to create a field that prevents allies from dying. The generator can be destroyed.",
        flavor:
          "You wanted to bid farewell... But the lamp saved you once again",
        tip: ""
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/2/2d/Baptiste-ability4.png?version=083381313804f2ae2379ae0ec9bf436f",
        name: "Amplification Matrix",
        desc:
          "Baptiste creates a matrix that doubles the damage and healing effects of friendly projectiles that pass through it.",
        flavor: "",
        tip: ""
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/e/e5/Baptiste-ability5.png?version=5251ffaec4e9faf57c26446cc6f46f9e",
        name: "Exo Boots",
        desc: "By first crouching, Baptiste can jump higher.",
        flavor: "",
        tip: ""
      }
    ]
  },
  {
    id: "bastion",
    name: "Bastion",
    img: `${fullBastion}`,
    role: "Damage",
    flavor: "",
    hp: {
      get total() {
        return this.base_hp + this.armor + this.shield;
      },
      base_hp: 200,
      armor: 100,
      shield: 0
    },
    skills: [
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/9/9a/Ability-bastion1.png?version=e635c31e99634cf3391232e74fcd5bb1",
        name: "Configuration: Reckon",
        desc:
          "In Recon mode, Bastion is fully mobile, outfitted with a submachine gun that fires steady bursts of bullets at medium range.",
        flavor: ""
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/f/fc/Ability-bastion2.png?version=2f6f296e016b5b68f4e951881169e90d",
        name: "Configuration: Sentry",
        desc:
          "In Sentry mode, Bastion is a stationary powerhouse equipped with a gatling gun capable of unleashing a hail of bullets. The gun's aim can be 'walked' across multiple targets, dealing devastating damage at short to medium range.",
        flavor: ""
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/2/2e/Ability-bastion3.png?version=7ec9d59285b0ecb7293444d632a5743c",
        name: "Reconfigure",
        desc:
          "Bastion transforms between its two primary combat modes to adapt to battlefield conditions.",
        flavor: ""
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/2/24/Ability-bastion4.png?version=76a232bbfc34dc6f66807d36c6152b9e",
        name: "Self-Repair",
        desc:
          "Bastion restores its health; it cannot fire weapons while the repair process is in effect.",
        flavor: ""
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/2/2e/Achievement_Charge%21.png?version=785b3d5f71e7d0cc90ca8c4a62b473dc",
        name: "Configuration: Tank",
        desc:
          "In Tank mode, Bastion extends wheeled treads and a powerful long-range cannon. The cannon’s explosive shells demolish targets in a wide blast radius, but Bastion can only remain in this mode for a limited time.",
        flavor: ""
      }
    ]
  },
  {
    id: "brigitte",
    name: "Brigitte",
    img: `${fullBrigitte}`,
    role: "Support",
    flavor: "",
    hp: {
      get total() {
        return this.base_hp + this.armor + this.shield;
      },
      base_hp: 200,
      armor: 50,
      shield: 0
    },
    skills: [
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/2/21/Rocket_Flail.png?version=4788641ae586d80f7f0d3c534692f4b9",
        name: "Rocket Flail",
        desc:
          "Brigitte's melee weapon has an extended range, enabling her to strike multiple enemies with a single swing.",
        flavor: ""
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/0/05/Repair_Pack.png?version=0334a66328c5750c4bcd0a125ee93cec",
        name: "Repair Pack",
        desc:
          "Brigitte throws a Repair Pack that can heal an ally. Any healing over that ally’s maximum health provides them with armor instead.",
        flavor: ""
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/6/69/Whip_Shot.png?version=6299115bfb36fbfef983d21fdfdc8c98",
        name: "Whip Shot",
        desc:
          "Brigitte throws her flail a long distance, dealing damage and knocking an enemy away from her.",
        flavor: ""
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/5/55/Barrier_Shield.png?version=a751995499df21974a770e1ab978dda2",
        name: "Barrier Shield",
        desc:
          "Brigitte deploys a frontal energy barrier to absorb a limited amount of damage.",
        flavor: ""
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/8/86/Shield_Bash.png?version=daea33251bac55a912f4671690bb74cf",
        name: "Shield Bash",
        desc:
          "Once her Barrier Shield is deployed, Brigitte can dash forward to stun an enemy.",
        flavor: ""
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/0/07/Rally.png?version=02398f616cf13ce86f8a19c0ebe491b9",
        name: "Rally",
        desc:
          "Brigitte moves faster and provides all nearby allies with armor that lasts until it’s removed by damage.",
        flavor: ""
      }
    ]
  },
  {
    id: "dva",
    name: "D.Va",
    img: `${fullDVa}`,
    role: "Tank",
    flavor: "",
    hp: {
      get total() {
        return this.base_hp + this.armor + this.shield;
      },
      base_hp: 400,
      armor: 200,
      shield: 0
    },
    skills: [
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/b/b9/Ability-dva1.png?version=cf8fb9988ebe47e0cd99b56baa26bbbf",
        name: "Fusion Cannons",
        desc:
          "D.Va's mech is equipped with twin short-range rotating cannons. They lay down continuous, high-damage fire without needing to reload, but slow D.Va’s movement while they’re active.",
        flavor: ""
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/0/09/Ability-dva5.png?version=3759628835846362023e1fc3eaddb1eb",
        name: "Light Gun",
        desc:
          "While outside of her mech, D.Va can continue the fight with a mid-range automatic blaster.",
        flavor: ""
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/5/59/Ability-dva2.png?version=98f517813f247f09b24b2c27c4dea308",
        name: "Boosters",
        desc:
          "D.Va’s mech launches into the air, her momentum carrying her forward. She can turn and change directions or barrel through her enemies, knocking them back.",
        flavor: ""
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/3/3a/Ability-dva3.png?version=22ae7c0dca6d821bf40435af49a9897f",
        name: "Defense Matrix",
        desc:
          "D.Va can maintain this forward-facing targeting array for a short period of time; while active, it'll stop incoming projectiles.",
        flavor: ""
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/1/17/Ability-dva7.png?version=61b4fe48451e2d9229f467f1d259bdd8",
        name: "Micro Missiles",
        desc: "D.Va launches a volley of explosive rockets.",
        flavor: ""
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/4/44/Ability-dva4.png?version=71e82d50b5daf22057d42adbbb876c9c",
        name: "Self-Desctruct",
        desc:
          "D.Va ejects from her mech and sets its reactor to explode, dealing massive damage to nearby opponents.",
        flavor: ""
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/f/f0/Ability-dva6.png?version=be2b12a133c927cc39b736a055c8d2a1",
        name: "Call Mech",
        desc:
          "If her armored battle suit is destroyed, D.Va can call down a fresh mech and return to the fray.",
        flavor: ""
      }
    ]
  },
  {
    id: "doomfist",
    name: "Doomfist",
    img: `${fullDoomfist}`,
    role: "Damage",
    flavor: "",
    hp: {
      get total() {
        return this.base_hp + this.armor + this.shield;
      },
      base_hp: 250,
      armor: 0,
      shield: 0
    },
    skills: [
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/b/bb/Hand_cannon.png?version=78942e9eded8fac0e7fd202b51189e0a",
        name: "Hand Cannon",
        desc:
          "Doomfist fires a short-range burst from the knuckles of his fist. Its ammunition is automatically regenerated over a short time.",
        flavor: ""
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/e/eb/Ability_Doomfist_Seismic_Slam.png?version=fb176f120c4eb1ddeb138b96421dd4b3",
        name: "Seismic Slam",
        desc:
          "Doomfist leaps forward and smashes into the ground, knocking nearby enemies toward him.",
        flavor: ""
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/2/2c/Rising_uppercut.png?version=a5f84128951cf2b268c8bce6674c2f52",
        name: "Rising Uppercut",
        desc: "Doomfist uppercuts enemies in front of him into the air.",
        flavor: ""
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/e/ea/Rocket_punch.png?version=331f3d4f279b7dae16645d4fb0518578",
        name: "Rocket Punch",
        desc:
          "After charging up, Doomfist lunges forward and knocks an enemy back, dealing additional damage if they impact a wall.",
        flavor: ""
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/e/e7/Ability_Doomfist_Meteor_Strike.png?version=94d3b194418fb958dd98f9801569e83c",
        name: "Meteor Strike",
        desc:
          "Doomfist leaps into the sky, then crashes to the ground, dealing significant damage.",
        flavor: ""
      }
    ]
  },
  {
    id: "genji",
    name: "Genji",
    img: `${fullGenji}`,
    role: "Damage",
    flavor: "",
    hp: {
      get total() {
        return this.base_hp + this.armor + this.shield;
      },
      base_hp: 200,
      armor: 0,
      shield: 0
    },
    skills: [
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/2/28/Ability-genji1.png?version=8fbbf43f427b9a5d5f4ade87f4262e1f",
        name: "Shuriken",
        desc:
          "Genji looses three deadly throwing stars in quick succession. Alternatively, he can throw three shuriken in a wider spread.",
        flavor: ""
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/7/70/Ability-genji2.png?version=6e64341f37239a9c81f63733ae6e9d1d",
        name: "Deflect",
        desc:
          "With lightning-quick swipes of his sword, Genji reflects an oncoming projectile and sends it rebounding towards his opponent.",
        flavor: ""
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/0/02/Ability-genji3.png?version=e41160acb4e35313adeca5d2d951ada2",
        name: "Swift Strike",
        desc:
          "Genji darts forward, slashing with his katana and passing through foes in his path. If Genji eliminates a target, he can instantly use this ability again.",
        flavor: ""
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/3/38/Ability-genji4.png?version=3e42a2b1535d69e4f34352defb671d24",
        name: "Dragonblade",
        desc:
          "Genji brandishes his katana for a brief period of time. Until he sheathes his sword, Genji can deliver killing strikes to any targets within his reach.",
        flavor: ""
      }
    ]
  },
  {
    id: "hanzo",
    name: "Hanzo",
    img: `${fullHanzo}`,
    role: "Damage",
    flavor: "",
    hp: {
      get total() {
        return this.base_hp + this.armor + this.shield;
      },
      base_hp: 200,
      armor: 0,
      shield: 0
    },
    skills: [
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/e/e3/Ability-hanzo1.png?version=c244a4820ffa175db24bf6a0a65353d4",
        name: "Storm Bow",
        desc: "Hanzo nocks and fires an arrow at his target.",
        flavor: ""
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/7/76/Ability-hanzo2.png?version=0b26b4ce875781bd0697ec2794758e71",
        name: "Sonic Arrow",
        desc:
          "Hanzo launches an arrow that contains a sonar tracking device. Any enemy within its detection radius is visibly marked, making them easier for Hanzo and his allies to hunt down.",
        flavor: ""
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/b/bd/Ability-hanzo03.png?version=8b4206815673ac4ee2ade8c4456af27d",
        name: "Storm Arrows",
        desc:
          "Hanzo’s next several arrows fire instantly, but at reduced damage.",
        flavor: ""
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/5/57/Ability-hanzo01.png?version=20525e4115afd14267a16ed54f0416cd",
        name: "Lunge",
        desc:
          "Hanzo can double jump, allowing him to change direction mid-jump.",
        flavor: ""
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/4/44/Ability-hanzo4.png?version=af720bce822f5d94fe1bc996ce3673ad",
        name: "Dragonstrike",
        desc:
          "Hanzo summons a Spirit Dragon which travels through the air in a line. It passes through walls in its way, devouring any enemies it encounters.",
        flavor: ""
      }
    ]
  },
  {
    id: "junkrat",
    name: "Junkrat",
    img: `${fullJunkrat}`,
    role: "Damage",
    flavor: "",
    hp: {
      get total() {
        return this.base_hp + this.armor + this.shield;
      },
      base_hp: 200,
      armor: 0,
      shield: 0
    },
    skills: [
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/a/ab/Ability-Junkrat1.png?version=fc3cb2682995e4cbb31b57b0fdfda0ab",
        name: "Frag Launcher",
        desc:
          "Junkrat's Frag Launcher lobs grenades a significant distance. They bounce to reach their destination, and blow up when they strike an enemy.",
        flavor: ""
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/8/87/Ability-Junkrat2.png?version=62caaa89f5dda45592538ae9cad0070c",
        name: "Concussion Mine",
        desc:
          "After placing one of his homemade Concussion Mines, Junkrat can trigger it to damage enemies and send them flying... or propel himself through the air.",
        flavor: ""
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/9/9c/Ability-Junkrat3.png?version=b3da99c16e5768f084e2476845532b07",
        name: "Steel Trap",
        desc:
          "Junkrat tosses out a giant, metal-toothed trap. Should an enemy wander too close to the trap, it clamps on, injuring and immobilizing them.",
        flavor: ""
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/1/18/Ability-Junkrat4.png?version=b1e069ed228ee9e645553d36f60dd3d5",
        name: "Total Mayhem",
        desc:
          "Junkrat's deranged sense of humor persists past his death. If killed, he drops several live grenades.",
        flavor: ""
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/3/32/Ability-Junkrat5.png?version=5cac861b6ad0784be4a4fbf3991a14f5",
        name: "RIP-Tire",
        desc:
          "Junkrat revs up a motorized tire bomb and sends it rolling across the battlefield, climbing over walls and obstacles. He can remotely detonate the RIP-Tire to deal serious damage to enemies caught in the blast, or just wait for it to explode on its own.",
        flavor: ""
      }
    ]
  },
  {
    id: "lucio",
    name: "Lucio",
    img: `${fullLucio}`,
    role: "Support",
    flavor: "",
    hp: {
      get total() {
        return this.base_hp + this.armor + this.shield;
      },
      base_hp: 200,
      armor: 0,
      shield: 0
    },
    skills: [
      {
        img: "",
        name: "Sonic Amplifier",
        desc:
          "Lúcio can hit his enemies with sonic projectiles or knock them back with a blast of sound.",
        flavor: ""
      },
      {
        img: "",
        name: "Crossfade",
        desc:
          "Lúcio continuously energizes himself—and nearby teammates—with music. He can switch between two songs: one amplifies movement speed, while the other regenerates health.",
        flavor: ""
      },
      {
        img: "",
        name: "Amp It Up",
        desc:
          "Lúcio increases the volume on his speakers, boosting the effects of his songs.",
        flavor: ""
      },
      {
        img: "",
        name: "Sound Barrier",
        desc:
          "Protective waves radiate out from Lúcio’s Sonic Amplifier, briefly providing him and nearby allies with personal shields.",
        flavor: ""
      }
    ]
  },
  {
    id: "mccree",
    name: "McCree",
    img: `${fullMcCree}`,
    role: "Damage",
    flavor: "",
    hp: {
      get total() {
        return this.base_hp + this.armor + this.shield;
      },
      base_hp: 200,
      armor: 0,
      shield: 0
    },
    skills: [
      {
        img: "",
        name: "Peacekeeper",
        desc:
          "McCree fires off a round from his trusty six-shooter. He can fan the Peacekeeper’s hammer to swiftly unload the entire cylinder.",
        flavor: ""
      },
      {
        img: "",
        name: "Combat Roll",
        desc:
          "McCree dives in the direction he’s moving, effortlessly reloading his Peacekeeper in the process.",
        flavor: ""
      },
      {
        img: "",
        name: "Flashbang",
        desc:
          "McCree heaves a blinding grenade that explodes shortly after it leaves his hand. The blast staggers enemies in a small radius.",
        flavor: ""
      },
      {
        img: "",
        name: "Deadeye",
        desc:
          "Focus. Mark. Draw. McCree takes a few precious moments to aim; when he’s ready to fire, he shoots every enemy in his line of sight. The weaker his targets are, the faster he’ll line up a killshot.",
        flavor: ""
      }
    ]
  },
  {
    id: "mei",
    name: "Mei",
    img: `${fullMei}`,
    role: "Damage",
    flavor: "",
    hp: {
      get total() {
        return this.base_hp + this.armor + this.shield;
      },
      base_hp: 250,
      armor: 0,
      shield: 0
    },
    skills: [
      {
        img: "",
        name: "Endothermic Blaster",
        desc:
          "Mei’s blaster unleashes a concentrated, short-range stream of frost that damages, slows, and ultimately freezes enemies in place. Mei can also use her blaster to shoot icicle-like projectiles at medium range.",
        flavor: ""
      },
      {
        img: "",
        name: "Cryo-Freeze",
        desc:
          "Mei instantly surrounds herself with a block of thick ice. She heals and ignores damage while encased, but cannot move or use abilities.",
        flavor: ""
      },
      {
        img: "",
        name: "Ice Wall",
        desc:
          "Mei generates an enormous ice wall that obstructs lines of sight, stops movement, and blocks attacks.",
        flavor: ""
      },
      {
        img: "",
        name: "Blizzard",
        desc:
          "Mei deploys a weather-modification drone that emits gusts of wind and snow in a wide area. Enemies caught in the blizzard are slowed and take damage; those who linger too long are frozen solid.",
        flavor: ""
      }
    ]
  },
  {
    id: "mercy",
    name: "Mercy",
    img: `${fullMercy}`,
    role: "Support",
    flavor: "",
    hp: {
      get total() {
        return this.base_hp + this.armor + this.shield;
      },
      base_hp: 200,
      armor: 0,
      shield: 0
    },
    skills: [
      {
        img: "",
        name: "Caduceus Staff",
        desc:
          "Mercy engages one of two beams that connect to an ally. By maintaining the beams, she can either restore that ally’s health or increase the amount of damage they deal.",
        flavor: ""
      },
      {
        img: "",
        name: "Caduceus Blaster",
        desc: "Mercy shoots a round from her sidearm.",
        flavor: ""
      },
      {
        img: "",
        name: "Guardian Angel",
        desc:
          "Mercy flies towards a targeted ally, allowing her to reach them quickly and provide assistance in crucial moments.",
        flavor: ""
      },
      {
        img: "",
        name: "Resurrect",
        desc: "Mercy brings a dead ally back into the fight with full health.",
        flavor: ""
      },
      {
        img: "",
        name: "Angelic Descent",
        desc:
          "Propelled by her Valkyrie suit, Mercy slows the speed of her descent from great heights.",
        flavor: ""
      },
      {
        img: "",
        name: "Valkyrie",
        desc: "Gain the ability to fly. Mercy’s abilities are enhanced.",
        flavor: ""
      }
    ]
  },
  {
    id: "moira",
    name: "Moira",
    img: `${fullMoira}`,
    role: "Support",
    flavor: "",
    hp: {
      get total() {
        return this.base_hp + this.armor + this.shield;
      },
      base_hp: 200,
      armor: 0,
      shield: 0
    },
    skills: [
      {
        img: "",
        name: "Biotic Grasp",
        desc:
          "Using her left hand, Moira expends biotic energy to heal allies in front of her. Her right hand fires a long-range beam weapon that saps enemies’ health, healing Moira and replenishing her biotic energy.",
        flavor: ""
      },
      {
        img: "",
        name: "Biotic Orb",
        desc:
          "Moira launches a rebounding biotic sphere; she can choose between a regeneration effect that heals the allies it passes through, or a decay effect that deals damage to enemies.",
        flavor: ""
      },
      {
        img: "",
        name: "Fade",
        desc: "Moira quickly teleports a short distance.",
        flavor: ""
      },
      {
        img: "",
        name: "Coalescence",
        desc:
          "Moira channels a long-range beam that both heals allies and bypasses barriers to damage her enemies.",
        flavor: ""
      }
    ]
  },
  {
    id: "orisa",
    name: "Orisa",
    img: `${fullOrisa}`,
    role: "Tank",
    flavor: "",
    hp: {
      get total() {
        return this.base_hp + this.armor + this.shield;
      },
      base_hp: 200,
      armor: 0,
      shield: 200
    },
    skills: [
      {
        img: "",
        name: "Fusion Driver",
        desc:
          "Orisa’s automatic projectile cannon delivers sustained damage, but slows her movement while she fires it.",
        flavor: ""
      },
      {
        img: "",
        name: "Fortify",
        desc:
          "Orisa temporarily reduces damage she takes, and cannot be affected by action-impairing effects.",
        flavor: ""
      },
      {
        img: "",
        name: "HALT!",
        desc:
          "Orisa launches a graviton charge which she can detonate, slowing nearby enemies and pulling them towards the explosion.",
        flavor: ""
      },
      {
        img: "",
        name: "Protective Barrier",
        desc:
          "Orisa throws out a stationary barrier that can protect her and her allies from enemy fire.",
        flavor: ""
      },
      {
        img: "",
        name: "Supercharger",
        desc:
          "Orisa deploys a device to increase damage inflicted by allies within her line of sight.",
        flavor: ""
      }
    ]
  },
  {
    id: "pharah",
    name: "Pharah",
    img: `${fullPharah}`,
    role: "Damage",
    flavor: "",
    hp: {
      get total() {
        return this.base_hp + this.armor + this.shield;
      },
      base_hp: 200,
      armor: 0,
      shield: 0
    },
    skills: [
      {
        img: "Rocket Launcher",
        name:
          "Pharah’s primary weapon launches rockets that deal significant damage in a wide blast radius.",
        desc: "",
        flavor: ""
      },
      {
        img: "Jump Jet",
        name:
          "Propelled by her suit’s thrusters, Pharah soars high into the air.",
        desc: "",
        flavor: ""
      },
      {
        img: "Concussive Blast",
        name:
          "Pharah looses a wrist rocket that knocks back any enemies it strikes.",
        desc: "",
        flavor: ""
      },
      {
        img: "Barrage",
        name:
          "Pharah directs a continuous salvo of mini-rockets to destroy groups of enemies.",
        desc: "",
        flavor: ""
      }
    ]
  },
  {
    id: "reaper",
    name: "Reaper",
    img: `${fullReaper}`,
    role: "Damage",
    flavor: "",
    hp: {
      get total() {
        return this.base_hp + this.armor + this.shield;
      },
      base_hp: 250,
      armor: 0,
      shield: 0
    },
    skills: [
      {
        img: "",
        name: "Hellfire Shotguns",
        desc: "Reaper tears enemies apart with twin shotguns.",
        flavor: ""
      },
      {
        img: "",
        name: "Wraith Form",
        desc:
          "Reaper becomes a shadow for a short period of time. While in this form, he takes no damage and is able to pass through enemies, but cannot fire his weapons or use other abilities.",
        flavor: ""
      },
      {
        img: "",
        name: "Shadow Step",
        desc:
          "After marking a destination, Reaper disappears and reappears at that location.",
        flavor: ""
      },
      {
        img: "",
        name: "Death Blossom",
        desc:
          "In a blur of motion, Reaper empties both Hellfire Shotguns at breakneck speed, dealing massive damage to all nearby enemies.",
        flavor: ""
      }
    ]
  },
  {
    id: "reinhardt",
    name: "Reinhardt",
    img: `${fullReinhardt}`,
    role: "Tank",
    flavor: "",
    hp: {
      get total() {
        return this.base_hp + this.armor + this.shield;
      },
      base_hp: 300,
      armor: 200,
      shield: 0
    },
    skills: [
      {
        img: "",
        name: "Rocket Hammer",
        desc:
          "Reinhardt’s Rocket Hammer is an exemplary melee weapon, able to deal punishing damage in a wide arc with every swing.",
        flavor: ""
      },
      {
        img: "",
        name: "Barrier Field",
        desc:
          "Reinhardt projects a broad, forward-facing energy barrier, which can absorb substantial damage before it is destroyed. Though Reinhardt can protect himself and his companions behind the barrier, he cannot attack while sustaining it.",
        flavor: ""
      },
      {
        img: "",
        name: "Charge",
        desc:
          "Reinhardt charges forth in a straight line, pinning the first enemy in his path and knocking others aside. If he collides with a wall, the foe he’s carrying suffers extreme damage.",
        flavor: ""
      },
      {
        img: "",
        name: "Fire Strike",
        desc:
          "By whipping his Rocket Hammer forward, Reinhardt slings a flaming projectile which pierces and damages any enemies it touches.",
        flavor: ""
      },
      {
        img: "",
        name: "Earthshatter",
        desc:
          "Reinhardt forcefully slams his Rocket Hammer into the ground, knocking down and damaging all enemies in front of him.",
        flavor: ""
      }
    ]
  },
  {
    id: "roadhog",
    name: "Roadhog",
    img: `${fullRoadhog}`,
    role: "Tank",
    flavor: "",
    hp: {
      get total() {
        return this.base_hp + this.armor + this.shield;
      },
      base_hp: 600,
      armor: 0,
      shield: 0
    },
    skills: [
      {
        img: "",
        name: "Scrap Gun",
        desc:
          "Roadhog's Scrap Gun fires short-range blasts of shrapnel with a wide spread. Alternatively, it can launch a shrapnel ball that detonates farther away, scattering metal fragments from the point of impact.",
        flavor: ""
      },
      {
        img: "",
        name: "Take A Breather",
        desc:
          "Roadhog restores a chunk of his health over a brief period of time.",
        flavor: ""
      },
      {
        img: "",
        name: "Chain Hook",
        desc:
          "Roadhog hurls his chain at a target; if it catches, he yanks them into close range.",
        flavor: ""
      },
      {
        img: "",
        name: "Whole Hog",
        desc:
          "After cramming a top-loader onto his Scrap Gun, Roadhog pours in ammo. For a short time, he can crank out a stream of shrapnel that knocks back enemies.",
        flavor: ""
      }
    ]
  },
  {
    id: "soldier",
    name: "Soldier 76",
    img: `${fullSoldier}`,
    role: "Damage",
    flavor: "",
    hp: {
      get total() {
        return this.base_hp + this.armor + this.shield;
      },
      base_hp: 200,
      armor: 0,
      shield: 0
    },
    skills: [
      {
        img: "",
        name: "Heavy Pulse Rifle",
        desc:
          "Soldier: 76’s rifle remains particularly steady while unloading fully-automatic pulse fire.",
        flavor: ""
      },
      {
        img: "",
        name: "Helix Rockets",
        desc:
          "Tiny rockets spiral out of Soldier: 76’s Pulse Rifle in a single burst. The rockets’ explosion damages enemies in a small radius.",
        flavor: ""
      },
      {
        img: "",
        name: "Sprint",
        desc:
          "Whether he needs to evade a firefight or get back into one, Soldier: 76 can rush ahead in a burst of speed. His sprint ends if he takes an action other than charging forward.",
        flavor: ""
      },
      {
        img: "",
        name: "Biotic Field",
        desc:
          "Soldier: 76 plants a biotic emitter on the ground. Its energy projection restores health to 76 and any of his squadmates within the field.",
        flavor: ""
      },
      {
        img: "",
        name: "Tactical Visor",
        desc:
          "Soldier: 76’s pinpoint targeting visor “locks” his aim on the threat closest to his crosshairs. If an enemy leaves his line of sight, Soldier: 76 can quickly switch to another target.",
        flavor: ""
      }
    ]
  },
  {
    id: "sombra",
    name: "Sombra",
    img: `${fullSombra}`,
    role: "Damage",
    flavor: "",
    hp: {
      get total() {
        return this.base_hp + this.armor + this.shield;
      },
      base_hp: 200,
      armor: 0,
      shield: 0
    },
    skills: [
      {
        img: "",
        name: "Machine Pistol",
        desc:
          "Sombra’s fully-automatic machine pistol fires in a short-range spread.",
        flavor: ""
      },
      {
        img: "",
        name: "Hack",
        desc:
          "Sombra hacks enemies to temporarily stop them from using their abilities, or hacks first aid kits to make them useless to her opponents.",
        flavor: ""
      },
      {
        img: "",
        name: "Stealth",
        desc:
          "Sombra becomes invisible, during which her speed is boosted considerably. Attacking, using offensive abilities, or taking damage disables her camouflage. Sombra cannot capture objectives while invisible.",
        flavor: ""
      },
      {
        img: "",
        name: "Translocator",
        desc:
          "Sombra tosses out a translocator beacon. She can instantly return to the beacon’s location while it is active (including when it’s in mid-flight).",
        flavor: ""
      },
      {
        img: "",
        name: "EMP",
        desc:
          "Sombra discharges electromagnetic energy in a wide radius, destroying enemy barriers and shields and hacking all opponents caught in the blast.",
        flavor: ""
      }
    ]
  },
  {
    id: "symmetra",
    name: "Symmetra",
    img: `${fullSymmetra}`,
    role: "Damage",
    flavor: "",
    hp: {
      get total() {
        return this.base_hp + this.armor + this.shield;
      },
      base_hp: 100,
      armor: 0,
      shield: 100
    },
    skills: [
      {
        img: "",
        name: "Photon Projector",
        desc:
          "Symmetra’s weapon emits a ranged beam. It deals continuous damage that increases the longer it is connected. The projector can also release an explosive energy ball that deals high damage on contact.",
        flavor: ""
      },
      {
        img: "",
        name: "Sentry Turret",
        desc:
          "Symmetra launches a small turret that automatically fires speed-reducing blasts at the nearest enemy within range. Up to three turrets can be built on the battlefield at once.",
        flavor: ""
      },
      {
        img: "",
        name: "Teleporter",
        desc:
          "Symmetra places a temporary teleporter exit pad at a distance and connects it to a teleporter entry pad at her current location. Allies (and some of their abilities, such as Junkrat’s RIP-Tire) can travel from the entry pad to the exit pad instantly.",
        flavor: ""
      },
      {
        img: "",
        name: "Photon Barrier",
        desc:
          "Symmetra deploys a massive energy barrier which prevents ranged attacks and is big enough to cut through the entire map.",
        flavor: ""
      }
    ]
  },
  {
    id: "torbjörn",
    name: "Torbjörn",
    img: `${fullTorbjörn}`,
    role: "Damage",
    flavor: "",
    hp: {
      get total() {
        return this.base_hp + this.armor + this.shield;
      },
      base_hp: 200,
      armor: 50,
      shield: 0
    },
    skills: [
      {
        img: "",
        name: "Rivet Gun",
        desc:
          "Torbjörn fires rivets at long range or ejects molten metal from his gun in a short, close-range burst.",
        flavor: ""
      },
      {
        img: "",
        name: "Forge Hammer",
        desc:
          "This multipurpose hammer repairs turrets and, in a pinch, can also be used as a weapon.",
        flavor: ""
      },
      {
        img: "",
        name: "Deploy Turret",
        desc:
          "Torbjörn deploys a self-building turret which automatically tracks and attacks enemies.",
        flavor: ""
      },
      {
        img: "",
        name: "Overload",
        desc:
          "Torbjörn gains additional armor as well as improved attack, movement, and reload speed for a brief period.",
        flavor: ""
      },
      {
        img: "",
        name: "Molten Core",
        desc:
          "Torbjörn creates pools of molten slag that deal massive, sustained damage (plus bonus damage to armor), and can prevent enemies from moving through key locations.",
        flavor: ""
      }
    ]
  },
  {
    id: "tracer",
    name: "Tracer",
    img: `${fullTracer}`,
    role: "Damage",
    flavor: "",
    hp: {
      get total() {
        return this.base_hp + this.armor + this.shield;
      },
      base_hp: 150,
      armor: 0,
      shield: 0
    },
    skills: [
      {
        img: "",
        name: "Pulse Pistols",
        desc: "Tracer rapid-fires both of her pistols.",
        flavor: ""
      },
      {
        img: "",
        name: "Blink",
        desc:
          "Tracer zips horizontally through space in the direction she’s moving, and reappears several yards away. She stores up to three charges of the blink ability and generates more every few seconds.",
        flavor: ""
      },
      {
        img: "",
        name: "Recall",
        desc:
          "Tracer bounds backward in time, returning her health, ammo and position on the map to precisely where they were a few seconds before.",
        flavor: ""
      },
      {
        img: "",
        name: "Pulse Bomb",
        desc:
          "Tracer lobs a large bomb that adheres to any surface or unfortunate opponent it lands on. After a brief delay, the bomb explodes, dealing high damage to all enemies within its blast radius.",
        flavor: ""
      }
    ]
  },
  {
    id: "widowmaker",
    name: "Widowmaker",
    img: `${fullWidowmaker}`,
    role: "Damage",
    flavor: "",
    hp: {
      get total() {
        return this.base_hp + this.armor + this.shield;
      },
      base_hp: 200,
      armor: 0,
      shield: 0
    },
    skills: [
      {
        img: "",
        name: "Widow's Kiss",
        desc:
          "Widowmaker’s versatile sniper rifle is ideal for scope-aimed shots at distant targets. Should targets close to medium range, the rifle can also be fired in fully-automatic mode.",
        flavor: ""
      },
      {
        img: "",
        name: "Grappling Hook",
        desc:
          "Widowmaker launches a grappling hook towards the location she’s aiming at – when the hook connects with a scalable surface, she’s quickly drawn towards it, allowing her to expand her view of the battlefield and evade or flank targets.",
        flavor: ""
      },
      {
        img: "",
        name: "Venom Mine",
        desc:
          "Widowmaker adheres a swiftly-arming venom mine to nearly any surface. When a target wanders within range of the mine’s motion trigger, it explodes, delivering poison gas to any enemies in the vicinity.",
        flavor: ""
      },
      {
        img: "",
        name: "Infra-Sight",
        desc:
          "Widowmaker’s recon visor allows her to see the heat signatures of her targets through walls and objects for a moderate amount of time. This enhanced vision is shared with her allies.",
        flavor: ""
      }
    ]
  },
  {
    id: "winston",
    name: "Winston",
    img: `${fullWinston}`,
    role: "Tank",
    flavor: "",
    hp: {
      get total() {
        return this.base_hp + this.armor + this.shield;
      },
      base_hp: 400,
      armor: 100,
      shield: 0
    },
    skills: [
      {
        img: "",
        name: "Tesla Cannon",
        desc:
          "Winston’s weapon fires a short-range electric barrage for as long as he holds down the trigger.",
        flavor: ""
      },
      {
        img: "",
        name: "Jump Pack",
        desc:
          "Assisted by his energy pack, Winston lunges through the air, dealing significant damage and staggering nearby enemies when he lands.",
        flavor: ""
      },
      {
        img: "",
        name: "Barrier Projector",
        desc:
          "Winston’s barrier projector extends a bubble-shaped field that absorbs damage until it's destroyed. Allies protected by the barrier can return fire from within it.",
        flavor: ""
      },
      {
        img: "",
        name: "Primal Rage",
        desc:
          "Winston embraces his animal nature, significantly boosting his health and making him very difficult to kill, strengthening his melee attack, and allowing him to use his Jump Pack ability more frequently. While raging, Winston can only make melee and Jump Pack attacks.",
        flavor: ""
      }
    ]
  },
  {
    id: "wrecking ball",
    name: "Wrecking Ball",
    img: `${fullWreckingBall}`,
    role: "Tank",
    flavor: "",
    hp: {
      get total() {
        return this.base_hp + this.armor + this.shield;
      },
      base_hp: 500,
      armor: 0,
      shield: 100
    },
    skills: [
      {
        img: "",
        name: "Quad Cannons",
        desc:
          "Wrecking Ball’s automatic assault cannons tear apart threats at medium range.",
        flavor: ""
      },
      {
        img: "",
        name: "Roll",
        desc:
          "Wrecking Ball transforms into a ball, increasing his maximum movement speed.",
        flavor: ""
      },
      {
        img: "",
        name: "Grappling Claw",
        desc:
          "Wrecking Ball launches a grappling claw, enabling him to anchor to an area and swing from it. If he strikes an enemy with a powered-up swing, they’re damaged and knocked back.",
        flavor: ""
      },
      {
        img: "",
        name: "Adaptive Shield",
        desc:
          "Wrecking Ball’s temporary personal shields absorb damage, providing stronger defenses if more opponents are nearby.",
        flavor: ""
      },
      {
        img: "",
        name: "Piledriver",
        desc:
          "Wrecking Ball slams onto the ground below, damaging enemies and launching them upward.",
        flavor: ""
      },
      {
        img: "",
        name: "Minefield",
        desc:
          "Wrecking Ball deploys a field of long-lasting proximity mines which explode on contact with enemies.",
        flavor: ""
      }
    ]
  },
  {
    id: "zarya",
    name: "Zarya",
    img: `${fullZarya}`,
    role: "Tank",
    flavor: "",
    hp: {
      get total() {
        return this.base_hp + this.armor + this.shield;
      },
      base_hp: 200,
      armor: 0,
      shield: 200
    },
    skills: [
      {
        img: "",
        name: "Particle Cannon",
        desc:
          "Zarya’s mighty Particle Cannon unleashes a short-range beam of destructive energy. Alternatively, Zarya can lob an explosive charge to strike multiple opponents.",
        flavor: ""
      },
      {
        img: "",
        name: "Particle Barrier",
        desc:
          "The Particle Cannon can emit a personal barrier that shields Zarya against incoming attacks, redirecting their energy to enhance her weapon’s damage and the width of its beam.",
        flavor: ""
      },
      {
        img: "",
        name: "Projected Barrier",
        desc:
          "Zarya surrounds one of her teammates with an energy barrier that simultaneously absorbs fire and boosts the power of her Particle Cannon.",
        flavor: ""
      },
      {
        img: "",
        name: "Graviton Surge",
        desc:
          "Zarya launches a gravity bomb that draws in enemy combatants and deals damage while they’re trapped.",
        flavor: ""
      }
    ]
  },
  {
    id: "zenyatta",
    name: "Zenyatta",
    img: `${fullZenyatta}`,
    role: "Support",
    flavor: "",
    hp: {
      get total() {
        return this.base_hp + this.armor + this.shield;
      },
      base_hp: 150,
      armor: 0,
      shield: 50
    },
    skills: [
      {
        img: "",
        name: "Orb Of Destruction",
        desc:
          "Zenyatta projects his destructive energy orbs either individually, or in a rapid-fire volley after a few seconds spent gathering power.",
        flavor: ""
      },
      {
        img: "",
        name: "Orb Of Harmony",
        desc:
          "Zenyatta casts an orb over the shoulder of a targeted ally. So long as Zenyatta maintains line of sight, the orb slowly restores health to his ally. Only one ally can receive the orb's benefit at a time.",
        flavor: ""
      },
      {
        img: "",
        name: "Orb Of Discord",
        desc:
          "Attaching the orb of discord to an opponent amplifies the amount of damage they receive for as long as Zenyatta maintains line of sight. Only one opponent can suffer the orb's effects at a time.",
        flavor: ""
      },
      {
        img: "",
        name: "Transcendence",
        desc:
          "Zenyatta enters a state of heightened existence for a short period of time. While transcendent, Zenyatta cannot use abilities or weapons, but is immune to damage and automatically restores his health and that of nearby allies.",
        flavor: ""
      }
    ]
  }
];

export default HeroDescriptions;
