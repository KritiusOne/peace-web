import { ChartPieInteractive } from "@/components/ui/BuiltCharts";
import { MoneyCard } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cashFlowMock, fixedExpensesMock, getChartConfigMock, debtsMock, savingMock } from "@/lib/mocks/moneyPageMock";
import { CardType } from "@/types/UtilityTypes";
import { TargetIcon } from "@radix-ui/react-icons";
import React from "react";

const colors = [
  '#4ade80',
  '#60a5fa',
  '#fbbf24',
  '#f87171',
  '#a78bfa'
];

export const CashFlow: React.FC = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <h2 className="text-2xl font-semibold">
        Cash flow
      </h2>
      <div className="w-full flex flex-row gap-4 flex-wrap justify-evenly">
        {
          cashFlowMock.map(({
            id, title, amount, type
          }) => {
            return (
              <MoneyCard key={id} id={id} headText={title} mainText={`${type === CardType.INFO ? `${amount}%` : `$${amount}`}`} type={type} />
            );
          })
        }
      </div>
    </div>
  );
}
export const BasicLivingCost: React.FC = () => {
  return (
    <div className="w-full flex flex-col">
      <h2 className="text-2xl font-semibold">
        Basic living cost
      </h2>
      <div className="flex flex-col lg:flex-row justify-between gap-4">
        <ChartPieInteractive chartConfig={getChartConfigMock(cashFlowMock)}
        data={cashFlowMock.map((item, index) => {
          return {
            label: item.title,
            value: item.amount,
            fill: colors[index],
            key: item.id
          }
        }) as any}
          subtitle="USD"
          title="Basic living cost chart"
          description="A chart representation of your basic living cost"
        />
        <div className="border py-4 px-6 rounded-lg flex flex-col gap-4 w-full lg:w-md ">
          <h3 className="text-2xl font-semibold">
            Total amount fixed expenses: <span>
              {
                fixedExpensesMock.reduce((acc, curr) => acc + curr.amount, 0)
              }
            </span>
          </h3>
          <div className="flex flex-col gap-2">
            {
              fixedExpensesMock.map((expense) => (
                <div key={expense.id} className="py-1 px-2 bg-neutral-600 text-lg rounded-lg flex flex-row justify-between">
                  <span> {expense.title} </span>
                  <strong> {expense.amount} </strong>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

const mensualPayment = (minimumPayment: number, type: "daily" | "weekly" | "monthly" | "yearly") => {
  if(type === "daily") {
    return minimumPayment * 30;
  }
  if(type === "weekly") {
    return minimumPayment * 4;
  }
  if(type === "monthly") {
    return minimumPayment;
  }
  return minimumPayment / 12;
}
const debtsSummary = [
  {
    label: "Total Debts",
    amount: debtsMock.reduce((acc, curr) => acc + curr.totalAmount, 0),
    footer: debtsMock.reduce((acc, curr) => acc + curr.currentAmount, 0) * 100 / 56000
  },
  {
    label: "Min Monthly Payment",
    amount: debtsMock.reduce((acc, curr) => acc + (mensualPayment(curr.minimumPayment, curr.schedule.interval)), 0)
  }
]
export const DebtsSection: React.FC = () => {
  return (
    <div className="flex flex-col items-start gap-4 w-full">
      <h2 className="text-2xl font-semibold">
        Debts
      </h2>
      <div className="flex flex-col md:flex-row gap-2 justify-evenly w-full">
        {
          debtsSummary.map(({label, amount, footer}) => (
            <MoneyCard 
              key={label}
              headText={label}
              mainText={`$${amount}`}
              footerText={footer ? `Paid: ${footer.toFixed(2)}%` : undefined}
              type={CardType.NEUTRAL}
            />
          ))
        }
      </div>
      <div className="flex flex-col gap-4 w-full">
        <h3 className="text-xl semibold">Debts details</h3>
        <div className="flex flex-col gap-2 w-full">
          {
            debtsMock.map((debt) => (
              <div key={debt.id} className="py-1 px-3 bg-neutral-700 text-lg rounded-lg flex flex-row justify-between w-full">
                <div className="flex flex-col">
                  <span> {debt.title} </span>
                  <span className="text-sm"> Interval: {debt.schedule.interval} </span> 
                </div>
                <div className="flex flex-col">
                  <strong> {debt.totalAmount} </strong>
                  <span className="text-sm">
                    minimum payment: {debt.minimumPayment}
                  </span>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export const SavingsSection: React.FC = () => {
  return (
    <div className="flex flex-col items-start gap-4 w-full">
      <h2 className="text-2xl font-semibold">Savings</h2>
      <div className="w-full flex flex-col md:flex-row gap-8 justify-between">
        <div className="flex flex-col flex-1 gap-2">
          <h3 className="text-xl semibold flex flex-row justify-between w-full">
            Emergency Fund <strong> {savingMock.emergencyFund.currentAmount / savingMock.emergencyFund.goalAmount * 100}%</strong>
          </h3>
          <div className="flex flex-col w-full gap-2">
            <div className="flex flex-row justify-between">
              <span className="text-sm text-neutral-300"> Current</span>
              <span className="text-sm text-neutral-300"> {savingMock.emergencyFund.currentAmount} </span>
            </div>
            <Progress value={savingMock.emergencyFund.currentAmount / savingMock.emergencyFund.goalAmount * 100} className="bg-secondary-500 w-full " progressColor="green" />
            <div className="flex flex-row justify-between mb-4">
              <span className="text-sm text-neutral-300"> Goal </span>
              <span className="text-sm text-neutral-300"> {savingMock.emergencyFund.goalAmount} </span>
            </div>
            <p className="text-sm text-neutral-400">
              You need {savingMock.emergencyFund.goalAmount - savingMock.emergencyFund.currentAmount} more to reach your goal.
            </p>
          </div>
        </div>
        <div className="flex flex-col flex-1 gap-2">
          <h3 className="text-xl semibold">Personal goals</h3>
          <div className="flex flex-col gap-4">
            {
              savingMock.personalGoals.map((goal) => {
                return (
                  <div key={goal.id} className="flex flex-col gap-2">
                    <div className="flex flex-row justify-between w-full">
                      <div className="flex flex-row justify-center items-center gap-1">
                        <TargetIcon /> <span>{goal.title}</span>
                      </div>
                      <span className="text-sm text-neutral-400"> {goal.currentAmount } / {goal.goalAmount} </span>
                    </div>
                    <Progress value={goal.currentAmount / goal.goalAmount * 100} className="bg-secondary-500 w-full " progressColor="green" />
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}