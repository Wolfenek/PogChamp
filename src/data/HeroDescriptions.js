const HeroDescriptions = [
  {
    id: "ana",
    name: "Ana",
    role: "Support",
    hp: {
      get total() {
        return this.base_hp + this.armor + this.shield;
      },
      base_hp: 200,
      armor: 1000,
      shield: 0
    },
    skill_1: ["Biotic Rifle", "Damage: 70", "Healing: 75"],
    skill_2: ["Biotic Grenade", "Damage: 60", "Healing: 100"]
  },
  {
    id: "baptiste",
    name: "Baptiste",
    role: "Support",
    hp: {
      get total() {
        return this.base_hp + this.armor + this.shield;
      },
      base_hp: 200,
      armor: 0,
      shield: 20
    },
    skill_1: ["Dude", "Damage: 70", "Healing: 75"],
    skill_2: ["Biotic Grenade", "Damage: 60", "Healing: 100"],
    skill_3: ["Gargul", "Damage: 60", "Healing: 100"]
  }
];

export default HeroDescriptions;

// { "skills": [ { "name": "rifle", "damage": 70, "healing": 50 }, { "name": "knife", "damage": 15, "healing": 10 }] }
