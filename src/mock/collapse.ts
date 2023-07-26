export interface ICollapse {
  id: number;
  filterKey: string;
  options: IOption[];
}
export interface IOption {
  label: string;
  value: string;
}

/**TODO: Refactor gerek. */
export const collapseData: ICollapse[] = [
  {
    "id": 1,
    "filterKey": "status",
    "options": [
      { label: "Alive", value: "Alive" },
      { label: "Dead", value: "Dead" },
      { label: "Unknown", value: "Unknown" },
    ]
  },
  {
    "id": 2,
    "filterKey": "species",
    "options": [
      { label: "Human", value: "Human" },
      { label: "Alien", value: "Alien" },
      { label: "Humanoid", value: "Humanoid" },
      { label: "Poopybutthole", value: "Poopybutthole" },
      { label: "Mythological", value: "Mythological" },
      { label: "Unknown", value: "Unknown" },
      { label: "Animal", value: "Animal" },
      { label: "Disease", value: "Disease" },
      { label: "Robot", value: "Robot" },
      { label: "Cronenberg", value: "Cronenberg" },
      { label: "Planet", value: "Planet" },
    ]
  },
  {
    "id": 3,
    "filterKey": "gender",
    "options": [
      { label: "Female", value: "Female" },
      { label: "Male", value: "Male" },
      { label: "Unknown", value: "unknown" },
    ]
  },
];