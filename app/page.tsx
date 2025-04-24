import { Suspense } from "react"
import Image from "next/image"
import { CalendarIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ConnectWallet } from "@/components/connect-wallet"
import { AttendanceCalendar } from "@/components/attendance-calendar"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-violet-800 to-indigo-900 flex flex-col">
      <header className="container mx-auto py-6 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <CalendarIcon className="h-8 w-8 text-pink-400" />
            <h1 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
              Gblend 🎨 Attendance
            </h1>
          </div>
          <ConnectWallet />
        </div>
      </header>

      <main className="container mx-auto flex-1 px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="col-span-1 lg:col-span-2 bg-black/20 border-purple-500/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">Attendance Calendar</CardTitle>
              <CardDescription className="text-purple-200">
                Mint an NFT daily to mark your attendance with 🎨
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading calendar...</div>}>
                <AttendanceCalendar />
              </Suspense>
            </CardContent>
          </Card>

          <div className="col-span-1 space-y-6">
            <Card className="bg-black/20 border-purple-500/20 backdrop-blur-sm overflow-hidden">
              <CardHeader>
                <CardTitle className="text-white">Today's NFT</CardTitle>
                <CardDescription className="text-purple-200">Mint this NFT to mark your attendance</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center gap-4">
                <div className="relative w-full aspect-square rounded-lg overflow-hidden border-2 border-purple-500/30 glow-sm">
                  <Image src="/images/dj-nft.png" alt="DJ NFT" fill className="object-cover" />
                  <div className="absolute top-2 left-2 bg-black/60 px-2 py-1 rounded-md text-white text-sm font-medium">
                    {new Date().toLocaleDateString()}
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
                  Mint NFT & Mark Attendance
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-black/20 border-purple-500/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Your Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-purple-200">Total Attendance:</span>
                    <span className="font-bold text-white">0 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-purple-200">Current Streak:</span>
                    <span className="font-bold text-white">0 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-purple-200">NFTs Minted:</span>
                    <span className="font-bold text-white">0</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <footer className="container mx-auto py-6 px-4 text-center text-purple-300 text-sm">
        <p>Gblend 🎨 Attendance © {new Date().getFullYear()} | Connect your wallet to start marking attendance</p>
      </footer>
    </div>
  )
}
