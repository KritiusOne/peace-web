import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import Colors from "./Colors"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function getColor(type?: string) {
  if(!type) return Colors.PRIMARY[300];
  if(type === "yellow") return Colors.YELLOW[200];
  if(type === "red") return Colors.RED[200];
  if(type === "green") return Colors.GREEN[200];
  if(type === "secondary") return Colors.SECONDARY[400];
  return Colors.PRIMARY[300];
}