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
    flavor: "Ana is a famous tea gourmet and an excellent soldier",
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
        flavor: "Ana's biotic rifle may heal your wounds... or bring you pain."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/5/58/Ability-ana2.png?version=ddddc400bb15ac26549dc1193fe6db9d",
        name: "Sleep Dart",
        desc:
          "Ana fires a dart from her sidearm, rendering an enemy unconscious (though any damage will rouse them).",
        flavor:
          "Nap time is an important part of every hero's day. Even if you're an enraged scientist from the moon."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/0/0c/Ability-ana3.png?version=ba9a0fa814527eac0282a5c18c0d5ffe",
        name: "Biotic Grenade",
        desc:
          "Ana tosses a biotic bomb that deals damage to enemies and heals allies in a small area of effect. Affected allies briefly receive increased healing from all sources, while enemies caught in the blast cannot be healed for a few moments.",
        flavor:
          "It's worth to cut off your enemies from healing and then focus them down as a team."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/9/97/Ability-ana4.png?version=966233d09f58f30b5a8333307732b7ad",
        name: "Nano Boost",
        desc:
          "After Ana hits one of her allies with a combat boost, they deal more damage, and take less damage from enemies’ attacks.",
        flavor: "Lucio secretly dreams of being nano-boosted by Ana."
      }
    ]
  },
  {
    id: "ashe",
    name: "Ashe",
    img: `${fullAshe}`,
    role: "Damage",
    flavor: "If Ashe can't get something... BOB will get it for her",
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
        flavor:
          "In the time needed to reload this, you could drink a cup of tea with Ana."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/d/da/Ability-ashe2.png?version=a7d69052583a9a10ece0760fb5939c59",
        name: "Dynamite",
        desc:
          "Ashe throws an explosive that detonates after a short delay or immediately when shot. The explosion from Dynamite also lights enemies on fire, dealing damage over time.",
        flavor: "Fire in the hole! Wait, that isn't Ashe's line..."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/8/85/Ability-ashe3.png?version=d03adba0120bb8a62c850edafef5c31c",
        name: "Coach Gun",
        desc:
          "Ashe blasts enemies in front of her, knocking them away and propelling herself backward for added mobility.",
        flavor: "This gun will send you flying."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/7/7a/Ability-ashe4.png?version=f52f6bd4e92b8b3f6e85273fd593483e",
        name: "B.O.B",
        desc:
          "Ashe summons her trusted omnic sidekick, Bob, who charges forward and knocks enemies into the air, then lays down suppressing fire with his arm cannons.",
        flavor:
          "Ashe normally sends him to do something. He also knows how to dress well."
      }
    ]
  },
  {
    id: "baptiste",
    name: "Baptiste",
    img: `${fullBaptiste}`,
    role: "Support",
    flavor: "He can jump high, and he won't let you die!",
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
        flavor: "Arching healing projectiles for the rescue."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/b/b3/Baptiste-ability2.png?version=e0ef974ee5c547cf833d95c7dc979ada",
        name: "Regenerative Burst",
        desc:
          "Baptiste activates an intense regenerative burst that heals himself and nearby allies over time.",
        flavor: "Everyone should take a breather."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/8/8d/Baptiste-ability3.png?version=ffb7a5578ffc3bb630f0dae3d9274ddb",
        name: "Immortality Field",
        desc:
          "Baptiste uses a device to create a field that prevents allies from dying. The generator can be destroyed.",
        flavor:
          "You planned to bid farewell... But the lamp saved you once again."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/2/2d/Baptiste-ability4.png?version=083381313804f2ae2379ae0ec9bf436f",
        name: "Amplification Matrix",
        desc:
          "Baptiste creates a matrix that doubles the damage and healing effects of friendly projectiles that pass through it.",
        flavor: "The ultimate window of opportunity."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/e/e5/Baptiste-ability5.png?version=5251ffaec4e9faf57c26446cc6f46f9e",
        name: "Exo Boots",
        desc: "By first crouching, Baptiste can jump higher.",
        flavor: "No high ground's unreachable."
      }
    ]
  },
  {
    id: "bastion",
    name: "Bastion",
    img: `${fullBastion}`,
    role: "Damage",
    flavor: "He could be your toughest opponent... or your best robro",
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
        flavor:
          "The curious Bastion likes to explore the world. He's a walking Swiss army knife."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/f/fc/Ability-bastion2.png?version=2f6f296e016b5b68f4e951881169e90d",
        name: "Configuration: Sentry",
        desc:
          "In Sentry mode, Bastion is a stationary powerhouse equipped with a gatling gun capable of unleashing a hail of bullets. The gun's aim can be 'walked' across multiple targets, dealing devastating damage at short to medium range.",
        flavor:
          "When tired from exploration, he likes to sit down and have some fun."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/2/2e/Ability-bastion3.png?version=7ec9d59285b0ecb7293444d632a5743c",
        name: "Reconfigure",
        desc:
          "Bastion transforms between its two primary combat modes to adapt to battlefield conditions.",
        flavor: "The flexible siege automaton."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/2/24/Ability-bastion4.png?version=76a232bbfc34dc6f66807d36c6152b9e",
        name: "Self-Repair",
        desc:
          "Bastion restores its health; it cannot fire weapons while the repair process is in effect.",
        flavor: "Self-maintenance keeps the rust away."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/2/2e/Achievement_Charge%21.png?version=785b3d5f71e7d0cc90ca8c4a62b473dc",
        name: "Configuration: Tank",
        desc:
          "In Tank mode, Bastion extends wheeled treads and a powerful long-range cannon. The cannon’s explosive shells demolish targets in a wide blast radius, but Bastion can only remain in this mode for a limited time.",
        flavor: "Team: We need a tank! Bastion player: I have you covered!"
      }
    ]
  },
  {
    id: "brigitte",
    name: "Brigitte",
    img: `${fullBrigitte}`,
    role: "Support",
    flavor: "She likes cats, she's also a good brawler",
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
        flavor: "The coolest way to play a first person shooter game."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/0/05/Repair_Pack.png?version=0334a66328c5750c4bcd0a125ee93cec",
        name: "Repair Pack",
        desc:
          "Brigitte throws a Repair Pack that can heal an ally. Any healing over that ally’s maximum health provides them with armor instead.",
        flavor: "Papa Torb taught his daughter some tricks."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/6/69/Whip_Shot.png?version=6299115bfb36fbfef983d21fdfdc8c98",
        name: "Whip Shot",
        desc:
          "Brigitte throws her flail a long distance, dealing damage and knocking an enemy away from her.",
        flavor: "Protecting her private sphere from obtrusive enemies."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/5/55/Barrier_Shield.png?version=a751995499df21974a770e1ab978dda2",
        name: "Barrier Shield",
        desc:
          "Brigitte deploys a frontal energy barrier to absorb a limited amount of damage.",
        flavor: "I'm the tankiest of supports."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/8/86/Shield_Bash.png?version=daea33251bac55a912f4671690bb74cf",
        name: "Shield Bash",
        desc:
          "Once her Barrier Shield is deployed, Brigitte can dash forward to stun an enemy.",
        flavor: "Excellent for interrupting ultimate abilities."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/0/07/Rally.png?version=02398f616cf13ce86f8a19c0ebe491b9",
        name: "Rally",
        desc:
          "Brigitte moves faster and provides all nearby allies with armor that lasts until it’s removed by damage.",
        flavor: "Rally to her, if you hear it... Like, really do it!"
      }
    ]
  },
  {
    id: "dva",
    name: "D.Va",
    img: `${fullDVa}`,
    role: "Tank",
    flavor: "One of Korea's top pro gamers and MEKA pilots",
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
        flavor: "No need to reload these guns. Strong at a shorter range."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/0/09/Ability-dva5.png?version=3759628835846362023e1fc3eaddb1eb",
        name: "Light Gun",
        desc:
          "While outside of her mech, D.Va can continue the fight with a mid-range automatic blaster.",
        flavor:
          "If you play as Baby D.Va, the enemies might stare in awe at you. Some call it staggering, but in fact, it's D.Va's fame that's captivating them."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/5/59/Ability-dva2.png?version=98f517813f247f09b24b2c27c4dea308",
        name: "Boosters",
        desc:
          "D.Va’s mech launches into the air, her momentum carrying her forward. She can turn and change directions or barrel through her enemies, knocking them back.",
        flavor: "What would be a combat mech without the ability to fly?"
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/3/3a/Ability-dva3.png?version=22ae7c0dca6d821bf40435af49a9897f",
        name: "Defense Matrix",
        desc:
          "D.Va can maintain this forward-facing targeting array for a short period of time; while active, it'll stop incoming projectiles.",
        flavor: "A well-timed matrix can eat a grav or blizzard."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/1/17/Ability-dva7.png?version=61b4fe48451e2d9229f467f1d259bdd8",
        name: "Micro Missiles",
        desc: "D.Va launches a volley of explosive rockets.",
        flavor: "Now you can shoot and use defense matrix at the same time."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/4/44/Ability-dva4.png?version=71e82d50b5daf22057d42adbbb876c9c",
        name: "Self-Desctruct",
        desc:
          "D.Va ejects from her mech and sets its reactor to explode, dealing massive damage to nearby opponents.",
        flavor: "Blow up some foes, and take a selfie."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/f/f0/Ability-dva6.png?version=be2b12a133c927cc39b736a055c8d2a1",
        name: "Call Mech",
        desc:
          "If her armored battle suit is destroyed, D.Va can call down a fresh mech and return to the fray.",
        flavor: "Where do these mechs actually come from?"
      }
    ]
  },
  {
    id: "doomfist",
    name: "Doomfist",
    img: `${fullDoomfist}`,
    role: "Damage",
    flavor: "In his childhood, he probably watched One Punch Man",
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
        flavor: "Not a cannon you hold in your hand."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/e/eb/Ability_Doomfist_Seismic_Slam.png?version=fb176f120c4eb1ddeb138b96421dd4b3",
        name: "Seismic Slam",
        desc:
          "Doomfist leaps forward and smashes into the ground, knocking nearby enemies toward him.",
        flavor: "It's time to slam!"
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/2/2c/Rising_uppercut.png?version=a5f84128951cf2b268c8bce6674c2f52",
        name: "Rising Uppercut",
        desc: "Doomfist uppercuts enemies in front of him into the air.",
        flavor: "Street Fighter fans should be delighted."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/e/ea/Rocket_punch.png?version=331f3d4f279b7dae16645d4fb0518578",
        name: "Rocket Punch",
        desc:
          "After charging up, Doomfist lunges forward and knocks an enemy back, dealing additional damage if they impact a wall.",
        flavor: "Hits like a ton of bricks. Also let's you move around quickly."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/e/e7/Ability_Doomfist_Meteor_Strike.png?version=94d3b194418fb958dd98f9801569e83c",
        name: "Meteor Strike",
        desc:
          "Doomfist leaps into the sky, then crashes to the ground, dealing significant damage.",
        flavor:
          "Clever players will use it to slide on ledges or escape from danger."
      }
    ]
  },
  {
    id: "genji",
    name: "Genji",
    img: `${fullGenji}`,
    role: "Damage",
    flavor: "A double-jumping and wall-climbing ninja",
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
        flavor: "Ninja style weapon."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/7/70/Ability-genji2.png?version=6e64341f37239a9c81f63733ae6e9d1d",
        name: "Deflect",
        desc:
          "With lightning-quick swipes of his sword, Genji reflects an oncoming projectile and sends it rebounding towards his opponent.",
        flavor:
          "Throws your gravs, blizzards, dragons, and other stuff back at you."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/0/02/Ability-genji3.png?version=e41160acb4e35313adeca5d2d951ada2",
        name: "Swift Strike",
        desc:
          "Genji darts forward, slashing with his katana and passing through foes in his path. If Genji eliminates a target, he can instantly use this ability again.",
        flavor:
          "Genji's agility can be impressive, especially if he keeps slashing back and forth."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/3/38/Ability-genji4.png?version=3e42a2b1535d69e4f34352defb671d24",
        name: "Dragonblade",
        desc:
          "Genji brandishes his katana for a brief period of time. Until he sheathes his sword, Genji can deliver killing strikes to any targets within his reach.",
        flavor: "Sushi master Genji will show you how to slice and dice."
      }
    ]
  },
  {
    id: "hanzo",
    name: "Hanzo",
    img: `${fullHanzo}`,
    role: "Damage",
    flavor: "Never runs out of arrows. Some people say he's got a dragon pet",
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
        flavor: "Target practice."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/7/76/Ability-hanzo2.png?version=0b26b4ce875781bd0697ec2794758e71",
        name: "Sonic Arrow",
        desc:
          "Hanzo launches an arrow that contains a sonar tracking device. Any enemy within its detection radius is visibly marked, making them easier for Hanzo and his allies to hunt down.",
        flavor: "Hanzo can see your every move."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/b/bd/Ability-hanzo03.png?version=8b4206815673ac4ee2ade8c4456af27d",
        name: "Storm Arrows",
        desc:
          "Hanzo’s next several arrows fire instantly, but at reduced damage.",
        flavor:
          "This ability replaced Scatter Arrow. Geometry is not so simple anymore."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/5/57/Ability-hanzo01.png?version=20525e4115afd14267a16ed54f0416cd",
        name: "Lunge",
        desc:
          "Hanzo can double jump, allowing him to change direction mid-jump.",
        flavor: "Increased mobility for the bowman."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/4/44/Ability-hanzo4.png?version=af720bce822f5d94fe1bc996ce3673ad",
        name: "Dragonstrike",
        desc:
          "Hanzo summons a Spirit Dragon which travels through the air in a line. It passes through walls in its way, devouring any enemies it encounters.",
        flavor:
          "Hanzo releases his dragon, so it gets some fresh air and a snack. According to rumors, Hanzo also owns a wolf."
      }
    ]
  },
  {
    id: "junkrat",
    name: "Junkrat",
    img: `${fullJunkrat}`,
    role: "Damage",
    flavor: "This madman certainly likes explosives",
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
        flavor: "Spammable, bouncy, exploding!"
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/8/87/Ability-Junkrat2.png?version=62caaa89f5dda45592538ae9cad0070c",
        name: "Concussion Mine",
        desc:
          "After placing one of his homemade Concussion Mines, Junkrat can trigger it to damage enemies and send them flying... or propel himself through the air.",
        flavor: "He carries two of them for extra jumping potential."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/9/9c/Ability-Junkrat3.png?version=b3da99c16e5768f084e2476845532b07",
        name: "Steel Trap",
        desc:
          "Junkrat tosses out a giant, metal-toothed trap. Should an enemy wander too close to the trap, it clamps on, injuring and immobilizing them.",
        flavor: "Did you really step into his trap?"
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/1/18/Ability-Junkrat4.png?version=b1e069ed228ee9e645553d36f60dd3d5",
        name: "Total Mayhem",
        desc:
          "Junkrat's deranged sense of humor persists past his death. If killed, he drops several live grenades.",
        flavor: "When eliminating Junkrat, you wanna keep your distance."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/3/32/Ability-Junkrat5.png?version=5cac861b6ad0784be4a4fbf3991a14f5",
        name: "RIP-Tire",
        desc:
          "Junkrat revs up a motorized tire bomb and sends it rolling across the battlefield, climbing over walls and obstacles. He can remotely detonate the RIP-Tire to deal serious damage to enemies caught in the blast, or just wait for it to explode on its own.",
        flavor:
          "The rolling tire can climb walls and ambush your team, but you can try to destroy it before it blows you up."
      }
    ]
  },
  {
    id: "lucio",
    name: "Lucio",
    img: `${fullLucio}`,
    role: "Support",
    flavor: "The wall-riding DJ",
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
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/b/b8/Ability-Lucio1.png?version=1729d95a365637d3d35e38ad8738455b",
        name: "Sonic Amplifier",
        desc:
          "Lúcio can hit his enemies with sonic projectiles or knock them back with a blast of sound.",
        flavor:
          "Listening to loud music can hurt your ears. Or boop you off the map."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/a/a0/Ability-Lucio2.png?version=0f50a700677faffd0b738c66b8c19c66",
        name: "Crossfade",
        desc:
          "Lúcio continuously energizes himself—and nearby teammates—with music. He can switch between two songs: one amplifies movement speed, while the other regenerates health.",
        flavor: "It's speed or healing. It might even change every second."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/3/3f/Ability-Lucio3.png?version=62ccc5ae450d4c46eb297058bb15edd8",
        name: "Amp It Up",
        desc:
          "Lúcio increases the volume on his speakers, boosting the effects of his songs.",
        flavor: "Let's play it louder!"
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/2/24/Ability-Lucio4.png?version=29afbc51e6b7ddf40ca7e563d30e474e",
        name: "Sound Barrier",
        desc:
          "Protective waves radiate out from Lúcio’s Sonic Amplifier, briefly providing him and nearby allies with personal shields.",
        flavor: "Juicy ultimate that can save you from trouble."
      }
    ]
  },
  {
    id: "mccree",
    name: "McCree",
    img: `${fullMcCree}`,
    role: "Damage",
    flavor: "The gunslinger from the wild west",
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
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/0/08/Ability-mccree1.png?version=12bc0c5734dabdb0b2d03e248d4a8b3f",
        name: "Peacekeeper",
        desc:
          "McCree fires off a round from his trusty six-shooter. He can fan the Peacekeeper’s hammer to swiftly unload the entire cylinder.",
        flavor: "Justice ain't gonna dispense itself."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/9/9e/Ability-mccree2.png?version=61209d7d78d95c789f548b26dd57eb8a",
        name: "Combat Roll",
        desc:
          "McCree dives in the direction he’s moving, effortlessly reloading his Peacekeeper in the process.",
        flavor: "How does he reload that gun so fast?"
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/1/18/Ability-mccree3.png?version=c47d565a4359f1d013185473494a6df0",
        name: "Flashbang",
        desc:
          "McCree heaves a blinding grenade that explodes shortly after it leaves his hand. The blast staggers enemies in a small radius.",
        flavor: "Oh, excuse me..."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/6/68/Ability-mccree4.png?version=650b601e0e297ab70aaa78f669b71d3f",
        name: "Deadeye",
        desc:
          "Focus. Mark. Draw. McCree takes a few precious moments to aim; when he’s ready to fire, he shoots every enemy in his line of sight. The weaker his targets are, the faster he’ll line up a killshot.",
        flavor: "It's high noon somewhere in the world."
      }
    ]
  },
  {
    id: "mei",
    name: "Mei",
    img: `${fullMei}`,
    role: "Damage",
    flavor: "Mei can give you the chills",
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
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/d/d8/Ability-mei1.png?version=ceb5ca557b73c9e329e6f1e4820489c8",
        name: "Endothermic Blaster",
        desc:
          "Mei’s blaster unleashes a concentrated, short-range stream of frost that damages, slows, and ultimately freezes enemies in place. Mei can also use her blaster to shoot icicle-like projectiles at medium range.",
        flavor: "Why did it suddenly become so cold?"
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/2/2b/Ability-mei2.png?version=8c69ce0e732d8a989b451e8900280e7b",
        name: "Cryo-Freeze",
        desc:
          "Mei instantly surrounds herself with a block of thick ice. She heals and ignores damage while encased, but cannot move or use abilities.",
        flavor:
          "Mei doesn't recommend this technique if you wish to stop your aging process."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/e/ea/Ability-mei3.png?version=465cbb5f110df8e13d48b9e5e1644157",
        name: "Ice Wall",
        desc:
          "Mei generates an enormous ice wall that obstructs lines of sight, stops movement, and blocks attacks.",
        flavor: "Let one enemy in. Wall off the rest."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/f/f0/Ability-mei4.png?version=72e56ced794b084217e4ed9a5350da43",
        name: "Blizzard",
        desc:
          "Mei deploys a weather-modification drone that emits gusts of wind and snow in a wide area. Enemies caught in the blizzard are slowed and take damage; those who linger too long are frozen solid.",
        flavor: "You can't go skiing in the snow dome, you might get frozen."
      }
    ]
  },
  {
    id: "mercy",
    name: "Mercy",
    img: `${fullMercy}`,
    role: "Support",
    flavor: "Your guardian angel",
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
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/f/f4/Ability-mercy1.png?version=6bf39f67ec0fdc9630e7f16a3b182185",
        name: "Caduceus Staff",
        desc:
          "Mercy engages one of two beams that connect to an ally. By maintaining the beams, she can either restore that ally’s health or increase the amount of damage they deal.",
        flavor: "Please pocket me, Mercy!"
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/4/48/Ability-mercy2.png?version=5fbeef4ed769b0003e5d8513276b8239",
        name: "Caduceus Blaster",
        desc: "Mercy shoots a round from her sidearm.",
        flavor:
          "If you don't play well, you might activate the Battle Mercy who's tired of your lack of DPS."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/e/ea/Ability-mercy3.png?version=26d5cad4fc45105e406376a56721b827",
        name: "Guardian Angel",
        desc:
          "Mercy flies towards a targeted ally, allowing her to reach them quickly and provide assistance in crucial moments.",
        flavor: "Insiders use it for super jumping."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/3/3e/Ability-mercy5.png?version=7e0fe581e0e4485f5583c4f120ec5c2e",
        name: "Resurrect",
        desc: "Mercy brings a dead ally back into the fight with full health.",
        flavor: "A shadow of its former glory, but still a useful ability."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/e/e9/Ability-mercy4.png?version=18eee900c154b1fc7b5dd7120f1060ba",
        name: "Angelic Descent",
        desc:
          "Propelled by her Valkyrie suit, Mercy slows the speed of her descent from great heights.",
        flavor:
          "Please get to the edge of the platform, so a falling Mercy can save herself."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/f/f9/Ability-mercy6.png?version=a7f96516024c02602e6e9b831fe58f46",
        name: "Valkyrie",
        desc: "Gain the ability to fly. Mercy’s abilities are enhanced.",
        flavor:
          "Healing and damage boosting is now AoE, and you fly better than Pharah."
      }
    ]
  },
  {
    id: "moira",
    name: "Moira",
    img: `${fullMoira}`,
    role: "Support",
    flavor: "Your ethically questionable genetic scientist healer",
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
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/d/d7/Ability_Moira_Biotic_Grasp.png?version=dcaf06a74808eff1c984fc82d94c0eaa",
        name: "Biotic Grasp",
        desc:
          "Using her left hand, Moira expends biotic energy to heal allies in front of her. Her right hand fires a long-range beam weapon that saps enemies’ health, healing Moira and replenishing her biotic energy.",
        flavor: "Siphon your foe's life energy to restore your juice."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/a/a9/Ability_Moira_Biotic_Orb.png?version=0495f7532162163b022a3036b2fcf5c0",
        name: "Biotic Orb",
        desc:
          "Moira launches a rebounding biotic sphere; she can choose between a regeneration effect that heals the allies it passes through, or a decay effect that deals damage to enemies.",
        flavor:
          "Yellow orb or purple orb? One of the toughest decisions to make."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/4/48/Ability_Moira_Fade.png?version=d4621c4df3eb4199c1ab1927413f62bb",
        name: "Fade",
        desc: "Moira quickly teleports a short distance.",
        flavor: "I don't like this place."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/0/05/Ability_Moira_Coalescence.png?version=8527f25cc46b2fcd53879f9e8a15e993",
        name: "Coalescence",
        desc:
          "Moira channels a long-range beam that both heals allies and bypasses barriers to damage her enemies.",
        flavor: "Kamehame-Ha!"
      }
    ]
  },
  {
    id: "orisa",
    name: "Orisa",
    img: `${fullOrisa}`,
    role: "Tank",
    flavor:
      "Built by the prodigy Efi Oladele, this pony will be your stallwart protector",
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
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/4/4a/Ability_Orisa_Fusion_Driver.png?version=52a61d0a950a257b97ca8dc400d83ae1",
        name: "Fusion Driver",
        desc:
          "Orisa’s automatic projectile cannon delivers sustained damage, but slows her movement while she fires it.",
        flavor: "A solid gun, for a tank character."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/f/f6/Ability_Orisa_Fortify.png?version=f47b3ff45ff0e1410adcaab3bdcdf814",
        name: "Fortify",
        desc:
          "Orisa temporarily reduces damage she takes, and cannot be affected by action-impairing effects.",
        flavor:
          "Stops charging Reinhardts, punching Doomfists, or hooking Roadhogs."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/2/22/Ability_Orisa_Halt%21.png?version=f0b17fed0f3e126d5db4a24836618b71",
        name: "HALT!",
        desc:
          "Orisa launches a graviton charge which she can detonate, slowing nearby enemies and pulling them towards the explosion.",
        flavor: "The mini graviton surge. Popular combo with Roadhog's hook."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/9/92/Ability_Orisa_Protective_Barrier.png?version=c0b7f5e056e12d062aeb3801c574855a",
        name: "Protective Barrier",
        desc:
          "Orisa throws out a stationary barrier that can protect her and her allies from enemy fire.",
        flavor: "Bastion's best friend."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/a/a4/Ability_Orisa_Supercharger.png?version=11aa00c0d7f524a8ecc561f17f5eb0d7",
        name: "Supercharger",
        desc:
          "Orisa deploys a device to increase damage inflicted by allies within her line of sight.",
        flavor:
          "The bongo provides your team with a nano-boost-level damage buff."
      }
    ]
  },
  {
    id: "pharah",
    name: "Pharah",
    img: `${fullPharah}`,
    role: "Damage",
    flavor:
      "Flying suit? Check. Rocket jumping? Check. Pharah reports for duty",
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
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/7/78/Ability-parah1.png?version=d4dc434e4338c874a4e72f829ec17676",
        name: "Rocket Launcher",
        desc:
          "Pharah’s primary weapon launches rockets that deal significant damage in a wide blast radius.",
        flavor:
          "Direct rocket hits grant maximum satisfaction to Phara players."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/1/14/Ability-parah2.png?version=ac22c7eb21f5dabbaa87b5d7e6d9fa86",
        name: "Jump Jet",
        desc:
          "Propelled by her suit’s thrusters, Pharah soars high into the air.",
        flavor: "The skies are Phara's domain."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/c/ce/Ability-parah3.png?version=6f1b108f9d40428d6ed687702b92c9f3",
        name: "Concussive Blast",
        desc:
          "Pharah looses a wrist rocket that knocks back any enemies it strikes.",
        flavor: "Push foes off the map or quickly reposition yourself."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/8/8f/Ability-parah4.png?version=6e834d9de5fd0d4c6ebb51978f0ac0ca",
        name: "Barrage",
        desc:
          "Pharah directs a continuous salvo of mini-rockets to destroy groups of enemies.",
        flavor:
          "According to latest weather forecast, it will be raining justice."
      }
    ]
  },
  {
    id: "reaper",
    name: "Reaper",
    img: `${fullReaper}`,
    role: "Damage",
    flavor: "The close range tank shredder",
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
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/d/df/Ability-reaper1.png?version=55f7bf9728df09cec7895b47c72135ce",
        name: "Hellfire Shotguns",
        desc: "Reaper tears enemies apart with twin shotguns.",
        flavor: "Getting close with an enemy reaper is strongly discouraged."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/6/66/Ability-reaper2.png?version=4e283936eac5f4c2c6d3f376f19dd978",
        name: "Wraith Form",
        desc:
          "Reaper becomes a shadow for a short period of time. While in this form, he takes no damage and is able to pass through enemies, but cannot fire his weapons or use other abilities.",
        flavor:
          "Literally turns into a ghost-like being to escape from any incoming damage."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/9/97/Ability-reaper3.png?version=5fbbd1a1754b2bcea2fbea31518014d2",
        name: "Shadow Step",
        desc:
          "After marking a destination, Reaper disappears and reappears at that location.",
        flavor:
          "It's possible that Reaper came up with this ability after playing a rogue in WoW."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/a/ac/Ability-reaper4.png?version=3bb8055be0e5694b4e5fcd5b39d5f163",
        name: "Death Blossom",
        desc:
          "In a blur of motion, Reaper empties both Hellfire Shotguns at breakneck speed, dealing massive damage to all nearby enemies.",
        flavor: "The spinning beyblade of doom."
      }
    ]
  },
  {
    id: "reinhardt",
    name: "Reinhardt",
    img: `${fullReinhardt}`,
    role: "Tank",
    flavor: "Your most iconic main tank",
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
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/c/c4/Ability-reinhardt1.png?version=163cdf2b6a9744dab97ff1741bd1e1cc",
        name: "Rocket Hammer",
        desc:
          "Reinhardt’s Rocket Hammer is an exemplary melee weapon, able to deal punishing damage in a wide arc with every swing.",
        flavor:
          "A robust and heavy melee weapon carried by a 2,23 m tall warrior."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/9/97/Ability-reinhardt2.png?version=247b1962c54cd8fbec70aec61a862a5e",
        name: "Barrier Field",
        desc:
          "Reinhardt projects a broad, forward-facing energy barrier, which can absorb substantial damage before it is destroyed. Though Reinhardt can protect himself and his companions behind the barrier, he cannot attack while sustaining it.",
        flavor: "Guys, just stay behind the shield, and we win."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/9/9f/Ability-reinhardt3.png?version=e03dac03a81726538ce9099483e13f94",
        name: "Charge",
        desc:
          "Reinhardt charges forth in a straight line, pinning the first enemy in his path and knocking others aside. If he collides with a wall, the foe he’s carrying suffers extreme damage.",
        flavor: "A ride with the Reinhardt train is a painful experience."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/9/99/Ability-reinhardt4.png?version=ce6f4bb089a6086dc5ccb10809bcdba0",
        name: "Fire Strike",
        desc:
          "By whipping his Rocket Hammer forward, Reinhardt slings a flaming projectile which pierces and damages any enemies it touches.",
        flavor: "Cheeky fire strikes help you charge your ultimate faster."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/2/22/Ability-reinhardt5.png?version=5f7560465631a78572d5934c47acf042",
        name: "Earthshatter",
        desc:
          "Reinhardt forcefully slams his Rocket Hammer into the ground, knocking down and damaging all enemies in front of him.",
        flavor: "Hammer down!"
      }
    ]
  },
  {
    id: "roadhog",
    name: "Roadhog",
    img: `${fullRoadhog}`,
    role: "Tank",
    flavor: "He might not look very fit, but he will soak some damage for you",
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
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/f/f4/Ability-Roadhog1.png?version=9d0b059a8b45e559df4dfed7b2e9dc83",
        name: "Scrap Gun",
        desc:
          "Roadhog's Scrap Gun fires short-range blasts of shrapnel with a wide spread. Alternatively, it can launch a shrapnel ball that detonates farther away, scattering metal fragments from the point of impact.",
        flavor:
          "Back in the days, this gun used to one-shot people. Now it's a bit weaker but still dangerous."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/a/a0/Ability-Roadhog2.png?version=4404eab3ad162b08c589e74de2733c4e",
        name: "Take A Breather",
        desc:
          "Roadhog restores a chunk of his health over a brief period of time.",
        flavor: "He likes to briefly relax between tense fights."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/4/4d/Ability-Roadhog3.png?version=97d9d1923bed704fe74e5a23d1908663",
        name: "Chain Hook",
        desc:
          "Roadhog hurls his chain at a target; if it catches, he yanks them into close range.",
        flavor:
          "Fisherman Roadhog enjoys hooking his foes and cooking them right away."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/9/95/Ability-Roadhog4.png?version=7df4d5f64516aee43bd7769bdaa173e1",
        name: "Whole Hog",
        desc:
          "After cramming a top-loader onto his Scrap Gun, Roadhog pours in ammo. For a short time, he can crank out a stream of shrapnel that knocks back enemies.",
        flavor: "Fill your gun with a ton of junk and go wild!"
      }
    ]
  },
  {
    id: "soldier",
    name: "Soldier 76",
    img: `${fullSoldier}`,
    role: "Damage",
    flavor: "A flexible and reliable fighter",
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
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/c/cc/Icon-ability.hpr.png?version=a1476d75af4ff03bde0efb4e2b68aec4",
        name: "Heavy Pulse Rifle",
        desc:
          "Soldier: 76’s rifle remains particularly steady while unloading fully-automatic pulse fire.",
        flavor: "The source of your sustained DPS."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/f/f3/Icon-ability.helixrockets.png?version=a6ab136fe59435a35ef330232b25a491",
        name: "Helix Rockets",
        desc:
          "Tiny rockets spiral out of Soldier: 76’s Pulse Rifle in a single burst. The rockets’ explosion damages enemies in a small radius.",
        flavor:
          "Also useful for rocket jumping and getting to otherwise unreachable places."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/b/bd/Icon-ability.sprint.png?version=855228ccb3b43b0d4a1334052c382e5d",
        name: "Sprint",
        desc:
          "Whether he needs to evade a firefight or get back into one, Soldier: 76 can rush ahead in a burst of speed. His sprint ends if he takes an action other than charging forward.",
        flavor: "This soldier surely has great stamina."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/5/50/Icon-ability.bioticfield.png?version=d916d65defaf0395f89449d68526c885",
        name: "Biotic Field",
        desc:
          "Soldier: 76 plants a biotic emitter on the ground. Its energy projection restores health to 76 and any of his squadmates within the field.",
        flavor: "Join your teammate for a rejuvenating session."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/d/d1/Icon-ability.tacticalvisor.png?version=612905b2468c7b2ba63129e6fcecc00f",
        name: "Tactical Visor",
        desc:
          "Soldier: 76’s pinpoint targeting visor “locks” his aim on the threat closest to his crosshairs. If an enemy leaves his line of sight, Soldier: 76 can quickly switch to another target.",
        flavor: "He's got you in his sights. You better should hide."
      }
    ]
  },
  {
    id: "sombra",
    name: "Sombra",
    img: `${fullSombra}`,
    role: "Damage",
    flavor:
      "Sombra is a notorious hacker. She knows more about you than you think",
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
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/a/a4/Ability_Sombra_Machine_Pistol.png?version=474b58cb0c009ace31c7f01a7806c679",
        name: "Machine Pistol",
        desc:
          "Sombra’s fully-automatic machine pistol fires in a short-range spread.",
        flavor: "It's worth reloading this while you're invisible."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/6/6d/Ability_Sombra_Hack.png?version=1b9742d0ad60e71c62b2e3ec8c05c91d",
        name: "Hack",
        desc:
          "Sombra hacks enemies to temporarily stop them from using their abilities, or hacks first aid kits to make them useless to her opponents.",
        flavor:
          "The reason why Hammond mains consider switching their character."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/3/35/Ability_Sombra_Thermoptic_Camo.png?version=16b53d0d085deb770984220f168930ba",
        name: "Stealth",
        desc:
          "Sombra becomes invisible, during which her speed is boosted considerably. Attacking, using offensive abilities, or taking damage disables her camouflage. Sombra cannot capture objectives while invisible.",
        flavor:
          "It's good to sneak behind the enemy lines. You can see them, they can't see you."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/6/61/Ability_Sombra_Translocator.png?version=9bdef9838f8d3e15e9fe691b0d964f8e",
        name: "Translocator",
        desc:
          "Sombra tosses out a translocator beacon. She can instantly return to the beacon’s location while it is active (including when it’s in mid-flight).",
        flavor: "The IT-girl has to have the latest tech."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/c/c7/Ability_Sombra_EMP.png?version=71be7a3ff20a032a7bc2a8be3a80e211",
        name: "EMP",
        desc:
          "Sombra discharges electromagnetic energy in a wide radius, destroying enemy barriers and shields and hacking all opponents caught in the blast.",
        flavor: "A blackout in town. And the cure for bunker comp."
      }
    ]
  },
  {
    id: "symmetra",
    name: "Symmetra",
    img: `${fullSymmetra}`,
    role: "Damage",
    flavor:
      "Symmetra's unusual combat techniques are a result of her ability to utilize hard-light technology.",
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
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/7/7e/Ability-symmetra1.png?version=1a6f7f92898f5de2ae1b2afb4b446c8d",
        name: "Photon Projector",
        desc:
          "Symmetra’s weapon emits a ranged beam. It deals continuous damage that increases the longer it is connected. The projector can also release an explosive energy ball that deals high damage on contact.",
        flavor:
          "The level 3 beam can become a laser of destruction. Back in the days, this ability used to auto-aim, but Blizzard decided it was time to stop."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/f/f4/Ability-symmetra2.png?version=132ce6b4865c9dff6edefa51182d4b3a",
        name: "Sentry Turret",
        desc:
          "Symmetra launches a small turret that automatically fires speed-reducing blasts at the nearest enemy within range. Up to three turrets can be built on the battlefield at once.",
        flavor: "Setting up the car wash."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/e/e0/Ability-symmetra4.png?version=1a1909ed6c0f0e2954933b51ee06bf46",
        name: "Teleporter",
        desc:
          "Symmetra places a temporary teleporter exit pad at a distance and connects it to a teleporter entry pad at her current location. Allies (and some of their abilities, such as Junkrat’s RIP-Tire) can travel from the entry pad to the exit pad instantly.",
        flavor:
          "One of the funkiest abilities in the game. Surprise your enemies with teleported turrets, Bastions, DV.a bombs, and more."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/d/d7/Photon_Barrier.png?version=4524ddf52602ecea4d7212d6e40108cc",
        name: "Photon Barrier",
        desc:
          "Symmetra deploys a massive energy barrier which prevents ranged attacks and is big enough to cut through the entire map.",
        flavor:
          "It can protect you from adversaries. But be careful, Sombra knows how to deal with this..."
      }
    ]
  },
  {
    id: "torbjörn",
    name: "Torbjörn",
    img: `${fullTorbjörn}`,
    role: "Damage",
    flavor: "The iconic short stocky engineer and his turret.",
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
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/b/b2/Ability-torbjorn1.png?version=21d5cacb2998f5ab3fe0ab4ea08e09f9",
        name: "Rivet Gun",
        desc:
          "Torbjörn fires rivets at long range or ejects molten metal from his gun in a short, close-range burst.",
        flavor:
          "Reinhardt to Torbjörn: Well done, my diminutive Swedish friend!"
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/3/37/Ability-torbjorn2.png?version=1d9df205f0a613c5e445bff524d1c04f",
        name: "Forge Hammer",
        desc:
          "This multipurpose hammer repairs turrets and, in a pinch, can also be used as a weapon.",
        flavor:
          "Back in the old times, master Torb players would hammer a wall while the turret would get them the Play of the Game."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/a/a7/Ability-torbjorn3.png?version=8d74124f56a0466eea919773cef1485a",
        name: "Deploy Turret",
        desc:
          "Torbjörn deploys a self-building turret which automatically tracks and attacks enemies.",
        flavor:
          "This bad boy is his best friend. It auto-shoots, and makes papa Torb proud."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/a/af/Ability-torbjorn4.png?version=dd63fdb886885ba2ea43aa9f71f5444b",
        name: "Overload",
        desc:
          "Torbjörn gains additional armor as well as improved attack, movement, and reload speed for a brief period.",
        flavor: "The cheeky builder becomes even more powerful and nimble."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/e/ef/Ability-torbjorn5.png?version=dafabf4c8e6721acefea2db406cb47f0",
        name: "Molten Core",
        desc:
          "Torbjörn creates pools of molten slag that deal massive, sustained damage (plus bonus damage to armor), and can prevent enemies from moving through key locations.",
        flavor:
          "The ultimate goo dispenser, and a pinch of Splatoon in Overwatch."
      }
    ]
  },
  {
    id: "tracer",
    name: "Tracer",
    img: `${fullTracer}`,
    role: "Damage",
    flavor: "It's T-Racer! The one from the front cover",
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
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/f/ff/Ability-tracer1.png?version=0d52f1f48dc75ac72bdc568f3b1e7887",
        name: "Pulse Pistols",
        desc: "Tracer rapid-fires both of her pistols.",
        flavor: "She shoots, she scores."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/5/54/Ability-tracer2.png?version=0aba40beb66bbd9193f730650b3d0110",
        name: "Blink",
        desc:
          "Tracer zips horizontally through space in the direction she’s moving, and reappears several yards away. She stores up to three charges of the blink ability and generates more every few seconds.",
        flavor: "The source of Tracer's astounding mobility and nimbleness."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/6/63/Ability-tracer3.png?version=0a83d45705067399ea8b6402d7359c2f",
        name: "Recall",
        desc:
          "Tracer bounds backward in time, returning her health, ammo and position on the map to precisely where they were a few seconds before.",
        flavor: "If you screw up, press 'E' for a second chance."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/a/af/Ability-tracer4.png?version=33d7dbc44b777d69da3adf5ed450b3cb",
        name: "Pulse Bomb",
        desc:
          "Tracer lobs a large bomb that adheres to any surface or unfortunate opponent it lands on. After a brief delay, the bomb explodes, dealing high damage to all enemies within its blast radius.",
        flavor: "Wait for it... oh, it's 300 damage now."
      }
    ]
  },
  {
    id: "widowmaker",
    name: "Widowmaker",
    img: `${fullWidowmaker}`,
    role: "Damage",
    flavor: "Playing Widowmaker will put your aim to the test.",
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
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/b/bf/Ability-widowmaker1.png?version=f92ccb0b7d9cab4cbde8ad709d27d06a",
        name: "Widow's Kiss",
        desc:
          "Widowmaker’s versatile sniper rifle is ideal for scope-aimed shots at distant targets. Should targets close to medium range, the rifle can also be fired in fully-automatic mode.",
        flavor: "Don't argue with Widowmaker. You might lose face."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/5/5b/Ability-widowmaker2.png?version=a74951ea8ab1148fa9513f2442905f9d",
        name: "Grappling Hook",
        desc:
          "Widowmaker launches a grappling hook towards the location she’s aiming at – when the hook connects with a scalable surface, she’s quickly drawn towards it, allowing her to expand her view of the battlefield and evade or flank targets.",
        flavor: "Smooth as silk."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/0/08/Ability-widowmaker3.png?version=448b47d425fe2849e4d22a8f4f38b2f3",
        name: "Venom Mine",
        desc:
          "Widowmaker adheres a swiftly-arming venom mine to nearly any surface. When a target wanders within range of the mine’s motion trigger, it explodes, delivering poison gas to any enemies in the vicinity.",
        flavor:
          "Often used by Widow as an alarm device. She wants to know when someone enters her territory."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/9/94/Ability-widowmaker4.png?version=93ad65b2ffc5a5069c8aaf8e55f1786b",
        name: "Infra-Sight",
        desc:
          "Widowmaker’s recon visor allows her to see the heat signatures of her targets through walls and objects for a moderate amount of time. This enhanced vision is shared with her allies.",
        flavor: "No one can hide from her sights."
      }
    ]
  },
  {
    id: "winston",
    name: "Winston",
    img: `${fullWinston}`,
    role: "Tank",
    flavor: "It's not a monkey! It's a scientist!",
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
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/1/17/Ability-winston1.png?version=23bec3f59bf86c11586c9e830d4be5dd",
        name: "Tesla Cannon",
        desc:
          "Winston’s weapon fires a short-range electric barrage for as long as he holds down the trigger.",
        flavor:
          "You don't need to aim this very well. It's not too strong, but it's AoE damage and it's electrifying."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/6/64/Ability-winston2.png?version=632f7724387e00c46876bc72bab6586f",
        name: "Jump Pack",
        desc:
          "Assisted by his energy pack, Winston lunges through the air, dealing significant damage and staggering nearby enemies when he lands.",
        flavor: "Being able to jump with Winston means a lot of fun!."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/1/13/Ability-winston3.png?version=d6febe9cb82560b86805f72ec8d5815f",
        name: "Barrier Projector",
        desc:
          "Winston’s barrier projector extends a bubble-shaped field that absorbs damage until it's destroyed. Allies protected by the barrier can return fire from within it.",
        flavor: "Blocking D.Va bombs just in time!"
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/1/10/Ability-winston4.png?version=955c61ecead521b5aaf0d23878d47219",
        name: "Primal Rage",
        desc:
          "Winston embraces his animal nature, significantly boosting his health and making him very difficult to kill, strengthening his melee attack, and allowing him to use his Jump Pack ability more frequently. While raging, Winston can only make melee and Jump Pack attacks.",
        flavor:
          "No wonder he freaked out after some weirdo stepped on his glasses."
      }
    ]
  },
  {
    id: "wrecking ball",
    name: "Wrecking Ball",
    img: `${fullWreckingBall}`,
    role: "Tank",
    flavor: "A hamster rolling around in a ball. Super mobile and fast.",
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
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/9/92/Quad_cannons.png?version=dec2d7be89ef7bd32f488c1a13dd4390",
        name: "Quad Cannons",
        desc:
          "Wrecking Ball’s automatic assault cannons tear apart threats at medium range.",
        flavor:
          "Instead of reloading these guns, you might wanna spend 2 seconds in ball form."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/1/15/Roll.png?version=6d195484ef431ff7e27ca66437e12f63",
        name: "Roll",
        desc:
          "Wrecking Ball transforms into a ball, increasing his maximum movement speed.",
        flavor: "They see me rollin'... They hatin'..."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/f/fe/Grappling_claw.png?version=56ec9bb21497a13ecef5221d19e207de",
        name: "Grappling Claw",
        desc:
          "Wrecking Ball launches a grappling claw, enabling him to anchor to an area and swing from it. If he strikes an enemy with a powered-up swing, they’re damaged and knocked back.",
        flavor: "Reaching areas beyond imagination."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/9/94/Adaptive_shield.png?version=a3571020851ad62f21eb14efba3bc170",
        name: "Adaptive Shield",
        desc:
          "Wrecking Ball’s temporary personal shields absorb damage, providing stronger defenses if more opponents are nearby.",
        flavor:
          "A powerful defensive ability. Wrecking Ball can gain a ridiculous amount of extra health."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/0/0b/Piledriver.png?version=2c2f7c29c5e35a2d41bbbf4c1277fa03",
        name: "Piledriver",
        desc:
          "Wrecking Ball slams onto the ground below, damaging enemies and launching them upward.",
        flavor:
          "Dropping from above. Probably the most important offensive skill of the hamster."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/3/32/Minefield.png?version=6feb4a4eb6df75b58ba755f2223d268e",
        name: "Minefield",
        desc:
          "Wrecking Ball deploys a field of long-lasting proximity mines which explode on contact with enemies.",
        flavor: "Mines? They explode? What else does he hide in that mech?"
      }
    ]
  },
  {
    id: "zarya",
    name: "Zarya",
    img: `${fullZarya}`,
    role: "Tank",
    flavor: "A strong weight-lifting soldier from Russia",
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
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/4/48/Ability-zarya1.png?version=3c51837fea6ec22b49fc8a0d5afd787d",
        name: "Particle Cannon",
        desc:
          "Zarya’s mighty Particle Cannon unleashes a short-range beam of destructive energy. Alternatively, Zarya can lob an explosive charge to strike multiple opponents.",
        flavor:
          "Beams cannot be blocked by defense matrix, nor deflected by Genji."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/7/71/Ability-zarya2.png?version=b4d709fe522e00cb170ebd49d09b4521",
        name: "Particle Barrier",
        desc:
          "The Particle Cannon can emit a personal barrier that shields Zarya against incoming attacks, redirecting their energy to enhance her weapon’s damage and the width of its beam.",
        flavor: "C'mon, try to damage her! She will become even stronger."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/9/9e/Ability-zarya3.png?version=7a751a71dec7729641223e411459cb04",
        name: "Projected Barrier",
        desc:
          "Zarya surrounds one of her teammates with an energy barrier that simultaneously absorbs fire and boosts the power of her Particle Cannon.",
        flavor: "Zarya's bubble saved your life. Once again."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/5/5d/Ability-zarya4.png?version=5a790cdf8a63e01d0d0d2cca8a88725a",
        name: "Graviton Surge",
        desc:
          "Zarya launches a gravity bomb that draws in enemy combatants and deals damage while they’re trapped.",
        flavor:
          "When you're caught in this, and you hear Japanese, you know you're in trouble."
      }
    ]
  },
  {
    id: "zenyatta",
    name: "Zenyatta",
    img: `${fullZenyatta}`,
    role: "Support",
    flavor: "A floating cyber monk who will throw some balls at you",
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
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/d/d1/Ability-zenyatta1.png?version=b18fae91a23a51e8113d52be9fb8672f",
        name: "Orb Of Destruction",
        desc:
          "Zenyatta projects his destructive energy orbs either individually, or in a rapid-fire volley after a few seconds spent gathering power.",
        flavor:
          "They serve as a constant stream of damage. Extra powerful if five of them are thrown at an unexpecting foe."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/0/0c/Ability-zenyatta2.png?version=5f898e181a4b1fe740f2c4f87a52ee11",
        name: "Orb Of Harmony",
        desc:
          "Zenyatta casts an orb over the shoulder of a targeted ally. So long as Zenyatta maintains line of sight, the orb slowly restores health to his ally. Only one ally can receive the orb's benefit at a time.",
        flavor:
          "The healing orb eases your pain and supports you on the battlefield."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/0/04/Ability-zenyatta3.png?version=10766a31fad2d8c8267fc78573dd1b9b",
        name: "Orb Of Discord",
        desc:
          "Attaching the orb of discord to an opponent amplifies the amount of damage they receive for as long as Zenyatta maintains line of sight. Only one opponent can suffer the orb's effects at a time.",
        flavor:
          "The enemy marked by this can become easy prey for a coordinated team."
      },
      {
        img:
          "https://gamepedia.cursecdn.com/overwatch_gamepedia/5/5e/Ability-zenyatta4.png?version=82d2a5cbb1089dbadb4e0d8ce7633b07",
        name: "Transcendence",
        desc:
          "Zenyatta enters a state of heightened existence for a short period of time. While transcendent, Zenyatta cannot use abilities or weapons, but is immune to damage and automatically restores his health and that of nearby allies.",
        flavor:
          "Experience Zen's soothing tranquility. And avoid Ana's biotic grenade at all cost."
      }
    ]
  }
];

export default HeroDescriptions;
