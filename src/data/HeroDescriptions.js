const HeroDescriptions = [
  {
    id: "ana",
    name: "Ana",
    role: "Support",
    health_points: {
      total: 200,
      base_hp: 200,
      armor: 0,
      shield: 0
    },
    abilities: {
      ability_1: "Biotic Rifle",
      description:
        "Ana’s rifle shoots darts that can restore health to her allies or deal ongoing damage to her enemies. She can use the rifle’s scope to zoom in on targets and make highly accurate shots.",
      icon: "insert-icon-here",
      mode: "Primary Fire",
      type: "Linear Projectile",
      dmg: "Damage: 70",
      heal: "Healing: 75",
      rof: "Rate of fire: 1.25 per sec",
      reload: "Reload time: 1.5 sec",
      mode_2: "Secondary Fire",
      type_2: "Single hitscan shit (scoped)",
      scope_in: "Scope in: 0.25 sec",
      scope_out: "Scope out: 0.16 sec",
      headshot: "Headshot: no"
    }
  },
  {
    id: "baptiste",
    name: "Baptiste",
    role: "Support",
    health_points: {
      total: 200,
      base_hp: 200,
      armor: 0,
      shield: 0
    }
  }
];

export default HeroDescriptions;
