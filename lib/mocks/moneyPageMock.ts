import { TransactionType, CardType } from "@/types/UtilityTypes";
import { IRecurringTransaction } from "@/types/RecurringTransaction";
import { Privacy } from "@/types/UtilityTypes";
import { ISave } from "@/types/Save";
import { IDebt } from "@/types/Debt";
import { CategoryType } from "@/types/Category";

interface CashFlowItem {
  id: string;
  type: CardType;
  amount: number;
  title: string;
}

export const cashFlowMock: CashFlowItem[] = [
  {
    id: "cf-001",
    type: CardType.NEUTRAL,
    amount: 12500,
    title: "Balance"
  },
  {
    id: "cf-002",
    type: CardType.INCOME,
    amount: 56000, // Total de ingresos
    title: "Ingresos mensuales"
  },
  {
    id: "cf-003",
    type: CardType.EXPENSE,
    amount: 29490, // Total de gastos (fijos + pagos de deuda)
    title: "Gastos mensuales"
  },
  {
    id: "cf-004",
    type: CardType.INFO,
    amount: 47.34, // Tasa de ahorro actualizada
    title: "Tasa de ahorro"
  }
];

// Deudas primero (para poder referenciarlas en fixedExpenses)
export const debtsMock: IDebt[] = [
  {
    id: "debt-001",
    ownerId: "user-1",
    title: "Préstamo personal",
    totalAmount: 50000,
    currentAmount: 35000,
    isPaid: false,
    createdAt: new Date(2023, 6, 15).toISOString(),
    updatedAt: new Date(2024, 10, 2).toISOString(),
    schedule: {
      interval: "monthly",
      occurrences: 24,
    },
    type: Privacy.PRIVATE,
    startDate: {
      day: 15,
      month: 7,
      year: 2023,
    },
    dueDate: {
      day: 15,
      month: 7,
      year: 2025,
    },
    description: "Préstamo bancario para consolidación de deudas",
    minimumPayment: 2100,
  },
  {
    id: "debt-002",
    ownerId: "user-1",
    title: "Tarjeta de crédito VISA",
    totalAmount: 15000,
    currentAmount: 8500,
    isPaid: false,
    createdAt: new Date(2024, 2, 10).toISOString(),
    updatedAt: new Date(2024, 10, 2).toISOString(),
    schedule: {
      interval: "monthly",
      occurrences: 12,
    },
    type: Privacy.PRIVATE,
    startDate: {
      day: 10,
      month: 3,
      year: 2024,
    },
    dueDate: {
      day: 10,
      month: 3,
      year: 2025,
    },
    description: "Saldo pendiente de tarjeta de crédito",
    minimumPayment: 710,
  },
  {
    id: "debt-003",
    ownerId: "user-2",
    title: "Crédito automotriz",
    totalAmount: 250000,
    currentAmount: 180000,
    isPaid: false,
    createdAt: new Date(2022, 9, 1).toISOString(),
    updatedAt: new Date(2024, 10, 2).toISOString(),
    schedule: {
      interval: "monthly",
      occurrences: 60,
    },
    type: Privacy.PRIVATE,
    startDate: {
      day: 1,
      month: 10,
      year: 2022,
    },
    dueDate: {
      day: 1,
      month: 10,
      year: 2027,
    },
    description: "Financiamiento de vehículo nuevo",
    creator: "Banco Automotriz SA",
    minimumPayment: 4167,
  },
];

// Gastos fijos regulares
const regularFixedExpenses: IRecurringTransaction[] = [
  {
    id: "fe-001",
    ownerId: "user-1",
    title: "Renta de apartamento",
    amount: 8500,
    transactionType: TransactionType.EXPENSE,
    recurrenceInterval: "monthly",
    createdAt: new Date(2024, 0, 1).toISOString(),
    type: Privacy.PRIVATE,
    isActive: true,
    category: CategoryType.ESSENTIAL,
    description: "Pago mensual de renta",
  },
  {
    id: "fe-002",
    ownerId: "user-2",
    title: "Netflix Premium",
    amount: 299,
    transactionType: TransactionType.EXPENSE,
    recurrenceInterval: "monthly",
    createdAt: new Date(2024, 2, 15).toISOString(),
    type: Privacy.PRIVATE,
    isActive: true,
    category: CategoryType.NON_ESSENTIAL,
    description: "Suscripción familiar",
  },
  {
    id: "fe-003",
    ownerId: "user-1",
    title: "Seguro de auto",
    amount: 1200,
    transactionType: TransactionType.EXPENSE,
    recurrenceInterval: "monthly",
    createdAt: new Date(2024, 1, 10).toISOString(),
    type: Privacy.PRIVATE,
    isActive: true,
    category: CategoryType.ESSENTIAL,
    description: "Pago mensual de seguro vehicular",
  },
  {
    id: "fe-004",
    ownerId: "user-3",
    title: "Gimnasio",
    amount: 750,
    transactionType: TransactionType.EXPENSE,
    recurrenceInterval: "monthly",
    createdAt: new Date(2024, 3, 5).toISOString(),
    type: Privacy.PRIVATE,
    isActive: false,
    category: CategoryType.NON_ESSENTIAL,
    description: "Membresía pausada",
  },
  {
    id: "fe-005",
    ownerId: "user-1",
    title: "Internet fibra óptica",
    amount: 599,
    transactionType: TransactionType.EXPENSE,
    recurrenceInterval: "monthly",
    createdAt: new Date(2024, 0, 20).toISOString(),
    type: Privacy.PRIVATE,
    isActive: true,
    category: CategoryType.ESSENTIAL,
    description: "Plan de 500 Mbps",
  },
  {
    id: "fe-006",
    ownerId: "user-2",
    title: "Spotify Premium",
    amount: 115,
    transactionType: TransactionType.EXPENSE,
    recurrenceInterval: "monthly",
    createdAt: new Date(2024, 4, 1).toISOString(),
    type: Privacy.PRIVATE,
    isActive: true,
    category: CategoryType.NON_ESSENTIAL,
    description: "Servicio de música en streaming",
  },
  {
    id: "fe-007",
    ownerId: "user-1",
    title: "Plan de teléfono",
    amount: 399,
    transactionType: TransactionType.EXPENSE,
    recurrenceInterval: "monthly",
    createdAt: new Date(2024, 1, 1).toISOString(),
    type: Privacy.PRIVATE,
    isActive: true,
    category: CategoryType.ESSENTIAL,
    description: "Plan ilimitado",
  },
];

// Generar pagos de deudas como fixed expenses
const debtPaymentsAsExpenses: IRecurringTransaction[] = debtsMock.map((debt) => ({
  id: `fe-debt-${debt.id}`,
  ownerId: debt.ownerId,
  title: `Pago de ${debt.title}`,
  amount: debt.minimumPayment,
  transactionType: TransactionType.EXPENSE,
  recurrenceInterval: debt.schedule.interval,
  createdAt: debt.createdAt,
  type: debt.type,
  isActive: !debt.isPaid,
  category: CategoryType.DEBT_REPAYMENT,
  description: `Pago mensual de ${debt.title}. ${debt.description || ''}`,
}));

// Combinar gastos regulares + pagos de deudas
export const fixedExpensesMock: IRecurringTransaction[] = [
  ...regularFixedExpenses,
  ...debtPaymentsAsExpenses,
].sort((a, b) => b.amount - a.amount); 

export const savingMock: SavingMock = {
  emergencyFund: {
    id: "save-emergency-001",
    ownerId: "user-1",
    currentAmount: 45000,
    goalAmount: 100000,
    createdAt: new Date(2024, 0, 1).toISOString(),
    updatedAt: new Date(2024, 10, 2).toISOString(),
    type: Privacy.PRIVATE,
    startDate: {
      day: 1,
      month: 1,
      year: 2024,
    },
    title: "Fondo de emergencia",
    description: "6 meses de gastos para emergencias",
    minimumContribution: 5000,
  },
  personalGoals: [
    {
      id: "save-goal-001",
      ownerId: "user-1",
      currentAmount: 25000,
      goalAmount: 80000,
      createdAt: new Date(2024, 1, 15).toISOString(),
      updatedAt: new Date(2024, 10, 2).toISOString(),
      type: Privacy.PRIVATE,
      startDate: {
        day: 15,
        month: 2,
        year: 2024,
      },
      title: "Laptop nueva",
      description: "MacBook Pro para trabajo",
      minimumContribution: 2000,
    },
    {
      id: "save-goal-002",
      ownerId: "user-1",
      currentAmount: 150000,
      goalAmount: 300000,
      createdAt: new Date(2024, 0, 10).toISOString(),
      updatedAt: new Date(2024, 10, 2).toISOString(),
      type: Privacy.PRIVATE,
      startDate: {
        day: 10,
        month: 1,
        year: 2024,
      },
      title: "Viaje a Europa",
      description: "Vacaciones 2025",
      minimumContribution: 10000,
    },
    {
      id: "save-goal-003",
      ownerId: "user-1",
      currentAmount: 8000,
      goalAmount: 15000,
      createdAt: new Date(2024, 3, 1).toISOString(),
      updatedAt: new Date(2024, 10, 2).toISOString(),
      type: Privacy.PRIVATE,
      startDate: {
        day: 1,
        month: 4,
        year: 2024,
      },
      title: "Curso online",
      description: "Certificación profesional",
      minimumContribution: 1000,
    },
    {
      id: "save-goal-004",
      ownerId: "user-1",
      currentAmount: 5000,
      goalAmount: 50000,
      createdAt: new Date(2024, 5, 20).toISOString(),
      updatedAt: new Date(2024, 10, 2).toISOString(),
      type: Privacy.PRIVATE,
      startDate: {
        day: 20,
        month: 6,
        year: 2024,
      },
      title: "Auto usado",
      description: "Enganche para coche",
      minimumContribution: 3000,
    },
    {
      id: "save-goal-005",
      ownerId: "user-2",
      currentAmount: 120000,
      goalAmount: 500000,
      createdAt: new Date(2024, 2, 5).toISOString(),
      updatedAt: new Date(2024, 10, 2).toISOString(),
      type: Privacy.PRIVATE,
      startDate: {
        day: 5,
        month: 3,
        year: 2024,
      },
      title: "Inversión inmobiliaria",
      description: "Capital para invertir en departamento",
      minimumContribution: 15000,
    },
  ],
};
export interface SavingMock {
  emergencyFund: ISave;
  personalGoals: ISave[];
}