import {
  AccessAlarm,
  ConnectWithoutContact,
  SelfImprovement,
  SettingsAccessibility,
  Spa,
} from "@mui/icons-material";

export interface Category {
  id: number;
  name: string;
  icon: any;
}

const Categories: Category[] = [
  {
    id: 1,
    name: "Health & Fitness",
    icon: <Spa />,
  },
  {
    id: 2,
    name: "Productivity",
    icon: <AccessAlarm />,
  },
  {
    id: 3,
    name: "Mindfull & Wellbeing",
    icon: <SelfImprovement />,
  },
  {
    id: 4,
    name: "Personal Groth",
    icon: <SettingsAccessibility />,
  },
  {
    id: 5,
    name: "Social & Relationships",
    icon: <ConnectWithoutContact />,
  },
];

export default Categories;
