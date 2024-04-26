export const SettingsMenu = [
  {
    id: "1",
    label: "setting.lang",
    type: "radio",
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
    type: "switch",
    options: [
      {
        label: "setting.prefs.theme",
        value: false, // Valeur par défaut du mode sombre
        type: "switch",
      },
    ],
  },
];