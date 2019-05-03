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
        flavor: ""
      }
    ]
  }
];
