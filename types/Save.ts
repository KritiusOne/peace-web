import { Privacy } from "./UtilityTypes";

export interface ISave {
  id: string;
  ownerId: string;
  currentAmount: number;
  goalAmount: number;
  createdAt: string;
  updatedAt: string;
  type: Privacy.COMMUNITY | Privacy.PRIVATE;
  startDate: {
    day: number;
    month: number;
    year: number;
  };
  title: string;
  description?: string | undefined;
  minimumContribution: number;
}