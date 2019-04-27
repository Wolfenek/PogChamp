const HeroDescripton = [
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
    skills: [
      {
        name: "Biotic Rifle",
        desc:
          "Ana’s rifle shoots darts that can restore health to her allies or deal ongoing damage to her enemies. She can use the rifle’s scope to zoom in on targets and make highly accurate shots.",
        effect: "Damage:" + 70 / "Healing:" + 75
      },
      { name: "Altet", damage: 15, healing: 10, effect: "none" }
    ]
  }
];
