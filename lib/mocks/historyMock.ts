import { Transaction } from "@/types/Transaction";
import { Privacy, TransactionType } from "@/types/UtilityTypes";

const categories = [
  "Alimentación",
  "Transporte",
  "Entretenimiento",
  "Salud",
  "Educación",
  "Vivienda",
  "Servicios",
  "Ropa",
  "Tecnología",
  "Deportes",
  "Viajes",
  "Restaurantes",
  "Supermercado",
  "Gasolina",
  "Gym",
  "Streaming",
  "Internet",
  "Teléfono",
  "Seguro",
  "Inversiones",
];

const descriptions = [
  "Compra en supermercado",
  "Pago de servicio",
  "Salario mensual",
  "Freelance proyecto",
  "Cena con amigos",
  "Uber a casa",
  "Netflix mensual",
  "Compra online",
  "Regalo cumpleaños",
  "Pago de renta",
  "Factura electricidad",
  "Consulta médica",
  "Compra de libros",
  "Recarga celular",
  "Pago de internet",
  "Gasolina del mes",
  "Membresía gimnasio",
  "Compra de ropa",
  "Cine con familia",
  "Pago de tarjeta",
  "Ahorro mensual",
  "Inversión",
  "Venta de artículo",
  "Bonificación",
  "Comida rápida",
  "Café matutino",
  "Transporte público",
  "Compra de gadget",
  "Suscripción app",
  "Mantenimiento auto",
];

const generateRandomDate = (startYear: number = 2024, endYear: number = 2025) => {
  const year = Math.floor(Math.random() * (endYear - startYear + 1)) + startYear;
  const month = Math.floor(Math.random() * 12) + 1;
  const day = Math.floor(Math.random() * 28) + 1;
  return { day, month, year };
};

const generateRandomAmount = (type: TransactionType) => {
  if (type === TransactionType.INCOME) {
    return Math.floor(Math.random() * 50000) + 5000; // 5,000 - 55,000
  } else {
    return Math.floor(Math.random() * 5000) + 50; // 50 - 5,050
  }
};

const getRandomElement = <T,>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)];
};

const shouldHaveRelation = () => Math.random() > 0.7; // 30% chance

const generateRelation = () => {
  const types: Array<"INCOME" | "FIXED_EXPENSE" | "DEBT" | "SAVE"> = [
    "INCOME",
    "FIXED_EXPENSE",
    "DEBT",
    "SAVE",
  ];
  return {
    type: getRandomElement(types),
    id: `rel-${Math.random().toString(36).substring(7)}`,
  };
};

export const mockTransactions: Transaction[] = Array.from({ length: 100 }, (_, index) => {
  const transactionType = Math.random() > 0.6 ? TransactionType.EXPENSE : TransactionType.INCOME;
  const date = generateRandomDate();
  const createdAt = new Date(date.year, date.month - 1, date.day).toISOString();

  return {
    id: `tx-${String(index + 1).padStart(3, '0')}-${Math.random().toString(36).substring(7)}`,
    ownerId: `user-${Math.floor(Math.random() * 5) + 1}`,
    amount: generateRandomAmount(transactionType),
    transactionType,
    date,
    createdAt,
    type: Privacy.PRIVATE,
    category: Math.random() > 0.1 ? getRandomElement(categories) : undefined,
    description: Math.random() > 0.2 ? getRandomElement(descriptions) : undefined,
    relation: shouldHaveRelation() ? generateRelation() : undefined,
  };
}); 