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
        type: "Linear projectile / Scoped hitscan",
        dmg: 70,
        healing: 75,
        headshot: "no"
      },
      {
        img: `${ana3}`,
        name: "Biotic Grenade",
        desc:
          "Ana tosses a biotic bomb that deals damage to enemies and heals allies in a small area of effect. Affected allies briefly receive increased healing from all sources, while enemies caught in the blast cannot be healed for a few moments",
        type: "Thrown arching projectile",
        dmg: 60,
        healing: 100,
        headshot: "no"
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
        img: `${ana1}`,
        name: "Biotic Rifle",
        desc: "Baptiste description 1.",
        type: "Pimary fire: Linear projectile / Secondary fire: Scoped hitscan",
        dmg: 70,
        healing: 75,
        headshot: "no"
      },
      {
        img: `${ana3}`,
        name: "Baptiste description 2",
        type: "thrown arching projectile",
        desc: "cool ability",
        dmg: 60,
        healing: 100,
        headshot: "no"
      }
    ]
  }
];

export default HeroDescriptions;
