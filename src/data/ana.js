import Ana from "../images/HeroImages/icon-ana.png";

export const ana = {
  Hero: {
    Name: "Ana",
    Role: "Support"
  },

  "Health Points": {
    Total: "200",
    "Base Health": "200",
    Armor: "0",
    Shield: "0"
  },
  Abilities: {
    "Biotic Rifle": {
      Description:
        "Ana’s rifle shoots darts that can restore health to her allies or deal ongoing damage to her enemies. She can use the rifle’s scope to zoom in on targets and make highly accurate shots.",
      Image: `${Ana}`
    },
    "Primary Fire": {
      Type: "Linear projectile",
      Damage: "70",
      Healing: "75",
      "Rate of Fire": "1.25 / sec",
      Reload: "1.5 sec"
    },
    "Secondary Fire": {
      Type: "Single hitscan shot (scoped)",
      "Scope in": "0.25 sec",
      "Scope out": "0.16 sec",
      Headshot: "No"
    }
  }
};
