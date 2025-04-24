"use client"

import { useState } from "react"
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  addMonths,
  subMonths,
} from "date-fns"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// Mock data for attendance
const mockAttendance = [new Date(2025, 3, 20), new Date(2025, 3, 21), new Date(2025, 3, 22)]

export function AttendanceCalendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const monthStart = startOfMonth(currentMonth)
  const monthEnd = endOfMonth(monthStart)
  const monthDays = eachDayOfInterval({ start: monthStart, end: monthEnd })

  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1))
  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1))

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          size="icon"
          onClick={prevMonth}
          className="border-purple-500/30 text-white hover:bg-purple-500/20"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <h2 className="text-xl font-bold text-white">{format(currentMonth, "MMMM yyyy")}</h2>
        <Button
          variant="outline"
          size="icon"
          onClick={nextMonth}
          className="border-purple-500/30 text-white hover:bg-purple-500/20"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="grid grid-cols-7 gap-1">
        {weekdays.map((day) => (
          <div key={day} className="text-center py-2 text-sm font-medium text-purple-300">
            {day}
          </div>
        ))}

        {Array.from({ length: monthStart.getDay() }).map((_, index) => (
          <div key={`empty-start-${index}`} className="h-16 p-1 bg-black/10 rounded-md" />
        ))}

        {monthDays.map((day) => {
          const isAttended = mockAttendance.some((date) => isSameDay(date, day))

          return (
            <div
              key={day.toString()}
              className={cn(
                "h-16 p-1 rounded-md flex flex-col",
                isSameMonth(day, currentMonth) ? "bg-black/20 hover:bg-black/30 transition-colors" : "bg-black/10",
                isAttended && "border-2 border-pink-500/50",
              )}
            >
              <span className="text-sm font-medium text-white">{format(day, "d")}</span>
              {isAttended && (
                <div className="flex-1 flex items-center justify-center">
                  <span className="text-2xl">🎨</span>
                </div>
              )}
            </div>
          )
        })}

        {Array.from({ length: 6 - monthEnd.getDay() }).map((_, index) => (
          <div key={`empty-end-${index}`} className="h-16 p-1 bg-black/10 rounded-md" />
        ))}
      </div>
    </div>
  )
}
