const HeroDescriptions = [
  {
    id: "",
    name: "",
    img: "",
    role: "",
    flavor: "",
    hp: {
      get total() {
        return this.base_hp + this.armor + this.shield;
      },
      base_hp: 0,
      armor: 0,
      shield: 0
    },
    skills: [
      {
        img: "",
        name: "",
        desc: "",
        flavor: "",
        type: "",
        ammo: 0,
        duration: 0,
        aoe: 0,
        dmg: 0,
        healing: 0,
        rot: 0,
        reload: "",
        headshot: "",
        knockback: "",
        cooldown: 0,
        other: ""
      }
    ]
  }
];
