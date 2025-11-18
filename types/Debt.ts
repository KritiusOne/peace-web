import {interval, Privacy} from "./UtilityTypes";
export interface IDebt {
  id: string;
  ownerId: string;
  title: string;
  totalAmount: number;
  currentAmount: number;
  isPaid: boolean;
  createdAt: string;
  updatedAt: string;
  schedule: {
    interval: interval;
    occurrences: number;
  };
  type: Privacy;
  startDate: {
    day: number;
    month: number;
    year: number;
  };
  description?: string | undefined;
  dueDate?: {
    day: number;
    month: number;
    year: number;
  } | undefined;
  creator?: string | undefined;
  minimumPayment: number;
}