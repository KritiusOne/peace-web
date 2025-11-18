import { Privacy, TransactionType } from "@/types/UtilityTypes";

export type Transaction = {
  id: string;
  ownerId: string;
  amount: number;
  transactionType: TransactionType.INCOME | TransactionType.EXPENSE;
  date: {
    day: number;
    month: number;
    year: number;
  };
  createdAt: string;
  type: Privacy.COMMUNITY | Privacy.PRIVATE;
  category?: string | undefined;
  description?: string | undefined;
  relation?: {
    type: "INCOME" | "FIXED_EXPENSE" | "DEBT" | "SAVE";
    id: string;
  } | undefined;
}