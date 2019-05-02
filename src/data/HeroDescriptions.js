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
        flavor: "",
        type: "Linear projectile / Scoped hitscan",
        ammo: 14,
        duration: "~0.85 damage over time",
        dmg: 70,
        healing: 75,
        rot: "na",
        reload: 1.5,
        headshot: "no",
        knockback: "na",
        cooldown: "na",
        other: "na"
      },
      {
        img: "tba",
        name: "Sleep Dart",
        desc:
          "Ana fires a dart from her sidearm, rendering an enemy unconscious (though any damage will rouse them).",
        flavor: "",
        type: "Linear projectile",
        ammo: 1,
        duration: "max 6",
        aoe: "na",
        dmg: 5,
        healing: "na",
        rot: "na",
        reload: "na",
        headshot: "na",
        knockback: "na",
        cooldown: 12,
        other: ""
      },
      {
        img: `${ana3}`,
        name: "Biotic Grenade",
        desc:
          "Ana tosses a biotic bomb that deals damage to enemies and heals allies in a small area of effect. Affected allies briefly receive increased healing from all sources, while enemies caught in the blast cannot be healed for a few moments.",
        flavor: "",
        type: "Thrown arching projectile",
        ammo: 1,
        duration: 4,
        aoe: 4,
        dmg: 60,
        healing: 100,
        rot: "na",
        reload: "na",
        headshot: "no",
        knockback: "na",
        cooldown: 10,
        other: "na"
      },
      {
        img: "",
        name: "Nano Boost",
        desc:
          "After Ana hits one of her allies with a combat boost, they deal more damage, and take less damage from enemies’ attacks.",
        flavor: "",
        type: "Targeted hitscan",
        ammo: 1,
        duration: 8,
        aoe: "na",
        dmg: "+50% boost",
        healing: "dmg reduced by 50%",
        rot: "na",
        reload: "na",
        headshot: "na",
        knockback: "na",
        cooldown: "na",
        other: "Ultimate ability"
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
        name: "Biotic Launcher (Primary fire)",
        desc:
          "Baptiste’s three-round-burst Biotic Launcher rewards accuracy and recoil control with significant damage output. It also doubles as a healing device, lobbing projectiles that heal allies near the point of impact.",
        flavor: "",
        type: "Three-rounds hitscan",
        ammo: 45,
        duration: "na",
        aoe: "na",
        dmg: "12.5 - 25 per bullet",
        healing: "na",
        rot: "1 burst per 0.65 seconds, 3 bursts",
        reload: 1.5,
        headshot: "yes",
        knockback: "na",
        cooldown: "na",
        other: ""
      }
    ]
  }
];

export default HeroDescriptions;
