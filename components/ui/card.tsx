import * as React from "react"

import { cn } from "@/lib/utils"
import { ArrowBottomRightIcon, ArrowTopRightIcon, DrawingPinFilledIcon, InfoCircledIcon } from "@radix-ui/react-icons"

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  )
}

import { CardType } from "@/types/UtilityTypes"

interface MoneyCardProps extends React.ComponentProps<typeof Card> {
  headText: string;
  mainText: string;
  footerText?: string;
  type: CardType;
}
const MoneyCard: React.FC<MoneyCardProps> = ({
  headText,
  mainText,
  footerText,
  type,
  ...props
}) => {
  const getBackgroundColor = () => {
    switch(type) {
      case CardType.INCOME:
        return "bg-primary-500";
      case CardType.EXPENSE:
        return "bg-red-200";
      case CardType.INFO:
        return "bg-secondary-400";
      case CardType.NEUTRAL:
      default:
        return "bg-neutral-700";
    }
  };

  return (
    <Card className={`border-none flex flex-row justify-around items-center px-4 ${getBackgroundColor()} w-md ${props.className}`} {...props}>
      <CardContent className={`w-32 flex flex-col gap-2 justify-start items-start p-0`}>
          <span className="text-left text-lg font-medium text-neutral-300 leading-none">
            {headText}
          </span>
          <h3 className="text-left text-3xl font-bold text-neutral-100">
            {mainText}
          </h3>
          {
            footerText && <span className="text-left text-sm text-neutral-200 flex flex-row gap-0 justify-center items-center">
            {
              type === CardType.INCOME && <ArrowTopRightIcon className="text-green-200" height={16} width={16} />
            }
            {
              type === CardType.EXPENSE && <ArrowBottomRightIcon className="text-red-100" height={16} width={16} />
            }
            {footerText}
          </span>
          }
      </CardContent>
      <CardFooter className={`bg-neutral-900 rounded-md p-2`}>
        {
          type === CardType.INCOME && <ArrowTopRightIcon className="text-green-200" height={48} width={48} />
        }
        {
          type === CardType.EXPENSE && <ArrowBottomRightIcon className="text-red-100" height={48} width={48} />
        }
        {
          type === CardType.NEUTRAL && <DrawingPinFilledIcon className="text-blue-200" height={48} width={48} />
        }
        {
          type === CardType.INFO && <InfoCircledIcon className="text-yellow-200" height={48} width={48} />
        }
      </CardFooter>
    </Card>
  ) 
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
  MoneyCard,
}
