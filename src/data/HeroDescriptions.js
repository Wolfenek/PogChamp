import fullAna from "../images/FullImages/fullAna.png";
import ana1 from "../images/SkillIcons/ana1.png";
import ana3 from "../images/SkillIcons/ana3.png";
import fullBaptiste from "../images/FullImages/fullBaptiste.png";

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
        img: `${ana1}`,
        name: "Biotic Rifle",
        desc:
          "Ana’s rifle shoots darts that can restore health to her allies or deal ongoing damage to her enemies. She can use the rifle’s scope to zoom in on targets and make highly accurate shots.",
        tip: "This ability provides some solid long range healing",
        flavor:
          "Ana's sharp shooting skills may ease your pain... or give you a headache"
      },
      {
        img: "tba",
        name: "Sleep Dart",
        desc:
          "Ana fires a dart from her sidearm, rendering an enemy unconscious (though any damage will rouse them).",
        tip: "Try to get into the habit of not immediately waking up the enemy",
        flavor:
          "Nap time is an important part of every hero's day. Even if you're an enraged scientist from moon"
      },
      {
        img: `${ana3}`,
        name: "Biotic Grenade",
        desc:
          "Ana tosses a biotic bomb that deals damage to enemies and heals allies in a small area of effect. Affected allies briefly receive increased healing from all sources, while enemies caught in the blast cannot be healed for a few moments.",
        tip: "Zenyatta still cannot understand why his ultimate failed",
        flavor:
          "It's worth to cut down the enemies healing and focus them down as a team"
      },
      {
        img: "",
        name: "Nano Boost",
        desc:
          "After Ana hits one of her allies with a combat boost, they deal more damage, and take less damage from enemies’ attacks.",
        tip:
          "Use it to boost powerful ultimate abilities, or to safe an ally in need",
        flavor: "Lucio secretly dreams of becoming nano-boosted by Ana"
      }
    ]
  },
  {
    id: "ashe",
    name: "Ashe",
    img: "tba",
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
        name: "The Viper",
        desc:
          "Ashe's semi-automatic rifle fires quick shots, or she can use her aim-down sights for a more damaging, precise shot.",
        tip: "",
        flavor: ""
      },
      {
        img: "",
        name: "Dynamite",
        desc:
          "Ashe throws an explosive that detonates after a short delay or immediately when shot. The explosion from Dynamite also lights enemies on fire, dealing damage over time.",
        tip: "",
        flavor: ""
      },
      {
        img: "",
        name: "Coach Gun",
        desc:
          "Ashe blasts enemies in front of her, knocking them away and propelling herself backward for added mobility.",
        tip: "",
        flavor: ""
      },
      {
        img: "",
        name: "B.O.B",
        desc:
          "Ashe summons her trusted omnic sidekick, Bob, who charges forward and knocks enemies into the air, then lays down suppressing fire with his arm cannons.",
        tip: "",
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
        img: "",
        name: "Biotic Launcher",
        desc:
          "Baptiste’s three-round-burst Biotic Launcher rewards accuracy and recoil control with significant damage output. It also doubles as a healing device, lobbing projectiles that heal allies near the point of impact.",
        flavor: "",
        tip: ""
      },
      {
        img: "",
        name: "Regenerative Burst",
        desc:
          "Baptiste activates an intense regenerative burst that heals himself and nearby allies over time.",
        flavor: "",
        tip: ""
      },
      {
        img: "",
        name: "Immortality Field",
        desc:
          "Baptiste uses a device to create a field that prevents allies from dying. The generator can be destroyed.",
        flavor:
          "You wanted to bid farewell... But the lamp saved you once again",
        tip: ""
      },
      {
        img: "",
        name: "Amplification Matrix",
        desc:
          "Baptiste creates a matrix that doubles the damage and healing effects of friendly projectiles that pass through it.",
        flavor: "",
        tip: ""
      },
      {
        img: "",
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
    img: "",
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
        img: "",
        name: "Configuration: Reckon",
        desc:
          "In Recon mode, Bastion is fully mobile, outfitted with a submachine gun that fires steady bursts of bullets at medium range.",
        tip: "",
        flavor: ""
      },
      {
        img: "",
        name: "Configuration: Sentry",
        desc:
          "In Sentry mode, Bastion is a stationary powerhouse equipped with a gatling gun capable of unleashing a hail of bullets. The gun's aim can be 'walked' across multiple targets, dealing devastating damage at short to medium range.",
        tip: "",
        flavor: ""
      },
      {
        img: "",
        name: "Reconfigure",
        desc:
          "Bastion transforms between its two primary combat modes to adapt to battlefield conditions.",
        tip: "",
        flavor: ""
      },
      {
        img: "",
        name: "Self-Repair",
        desc:
          "Bastion restores its health; it cannot fire weapons while the repair process is in effect.",
        tip: "",
        flavor: ""
      },
      {
        img: "",
        name: "Configuration: Tank",
        desc:
          "In Tank mode, Bastion extends wheeled treads and a powerful long-range cannon. The cannon’s explosive shells demolish targets in a wide blast radius, but Bastion can only remain in this mode for a limited time.",
        tip: "",
        flavor: ""
      }
    ]
  }
];

export default HeroDescriptions;
