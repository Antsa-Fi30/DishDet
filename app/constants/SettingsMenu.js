export const SettingsMenu = [
  {
    id: "1",
    label: "setting.lang",
    type: "lang",
    options: [
      {
        label: "Francais",
        value: "fr",
      },
      {
        label: "English",
        value: "en",
      },
      {
        label: "Malagasy",
        value: "mg",
      },
    ],
  },
  {
    id: "2",
    label: "setting.pref",
    type: "pref",
    options: [
      {
        key: "theme",
        label: "setting.prefs.theme",
        value: false, // Valeur par défaut du mode sombre
        type: "switch",
      },
      {
        key: "position",
        label: "setting.prefs.pos",
        value: false, // Valeur par défaut du mode sombre
        type: "switch",
      },
    ],
  },
];
