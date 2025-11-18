import { CategoryType } from "./Category";
import { interval, Privacy, TransactionType } from "./UtilityTypes";

export interface IRecurringTransaction {
  id: string;
  ownerId: string;
  title: string;
  amount: number;
  transactionType: TransactionType.INCOME | TransactionType.EXPENSE;
  recurrenceInterval: interval;
  createdAt: string;
  type: Privacy;
  isActive: boolean;
  description?: string | undefined;
  category?: CategoryType.DEBT_REPAYMENT | CategoryType.ESSENTIAL | CategoryType.INCOME | CategoryType.SAVINGS | CategoryType.OTHER | CategoryType.NON_ESSENTIAL | undefined;
}