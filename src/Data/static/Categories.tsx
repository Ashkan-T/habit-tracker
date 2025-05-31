import {
  AccessAlarm,
  ConnectWithoutContact,
  FreeBreakfastOutlined,
  SelfImprovement,
  SettingsAccessibility,
  Spa,
} from "@mui/icons-material";

const Categories = [
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
  {
    id: 6,
    name: "Liesure Time",
    icon: <FreeBreakfastOutlined />,
  },
];

export default Categories;
