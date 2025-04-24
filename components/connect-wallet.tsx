"use client"

import { useState } from "react"
import { Wallet } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function ConnectWallet() {
  const [isConnected, setIsConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState("")
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const connectWallet = async (walletType: string) => {
    // In a real implementation, this would use ethers.js or web3.js to connect
    // For demo purposes, we'll simulate a connection
    try {
      console.log(`Connecting to ${walletType}...`)

      // Simulate wallet connection
      const mockAddress = "0x" + Math.random().toString(16).slice(2, 12) + "..."
      setWalletAddress(mockAddress)
      setIsConnected(true)
      setIsDialogOpen(false)

      // In a real app, we would use something like:
      // if (window.ethereum) {
      //   const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      //   setWalletAddress(accounts[0]);
      //   setIsConnected(true);
      // }
    } catch (error) {
      console.error("Error connecting wallet:", error)
    }
  }

  const disconnectWallet = () => {
    setIsConnected(false)
    setWalletAddress("")
  }

  return (
    <>
      {isConnected ? (
        <Button
          variant="outline"
          className="border-purple-500/30 text-white hover:bg-purple-500/20"
          onClick={disconnectWallet}
        >
          <Wallet className="mr-2 h-4 w-4" />
          {walletAddress}
        </Button>
      ) : (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
              <Wallet className="mr-2 h-4 w-4" />
              Connect Wallet
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md bg-gradient-to-br from-purple-900 to-indigo-900 border-purple-500/30">
            <DialogHeader>
              <DialogTitle className="text-white">Connect your wallet</DialogTitle>
              <DialogDescription className="text-purple-200">
                Connect your wallet to mint NFTs and mark attendance
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <Button className="bg-[#3b99fc] hover:bg-[#1f84e9] text-white" onClick={() => connectWallet("MetaMask")}>
                MetaMask
              </Button>
              <Button
                className="bg-[#5a5a5a] hover:bg-[#444444] text-white"
                onClick={() => connectWallet("WalletConnect")}
              >
                WalletConnect
              </Button>
              <Button
                className="bg-[#1e1e1e] hover:bg-black text-white"
                onClick={() => connectWallet("Coinbase Wallet")}
              >
                Coinbase Wallet
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  )
}
