"use client"

import { ArrowRight } from "lucide-react"

export default function SunsetNotice() {
  return (
    <main className="relative h-screen overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 -z-10">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-orange-950 to-rose-950" />

        {/* Intense animated orbs */}
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-gradient-to-br from-orange-600 to-orange-900 opacity-40 blur-3xl rounded-full mix-blend-screen animate-blob" />
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-gradient-to-br from-rose-600 to-rose-900 opacity-35 blur-3xl rounded-full mix-blend-screen animate-blob-delayed" />
        <div className="absolute bottom-0 right-1/3 w-[600px] h-[600px] bg-gradient-to-tl from-red-600 to-orange-700 opacity-30 blur-3xl rounded-full mix-blend-screen animate-blob-slow" />

        {/* Radial glow effect */}
        <div className="absolute inset-0 radial-gradient-overlay" />
      </div>

      <div className="relative flex items-center justify-center w-full h-full px-4 sm:px-6">
        <div className="w-full max-w-3xl">
          <div className="space-y-8 text-center">
            <div className="inline-block">
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto">
                {/* Outer glow ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-b from-orange-400 via-red-500 to-rose-600 shadow-2xl animate-pulse opacity-100" />
                {/* Middle layer */}
                <div className="absolute inset-2 rounded-full bg-gradient-to-b from-orange-300 via-orange-500 to-red-500 opacity-90 animate-pulse-slow" />
                {/* Inner core with spin effect */}
                <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-yellow-200 via-orange-300 to-red-400 opacity-80 animate-spin-slow" />
                {/* Bright center */}
                <div className="absolute inset-6 rounded-full bg-gradient-to-b from-yellow-100 to-orange-200 opacity-100 blur-md" />
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-red-400 to-rose-300 drop-shadow-2xl">
                Website
              </h1>
              <div className="space-y-2">
                <p className="text-3xl sm:text-4xl font-bold text-orange-100 tracking-wide">Has Been Shut Down</p>
                <div className="h-1 w-24 mx-auto bg-gradient-to-r from-orange-500 via-red-500 to-rose-500" />
              </div>
            </div>

            <div className="space-y-4 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-800/80 backdrop-blur-xl rounded-2xl p-6 sm:p-8 shadow-2xl border border-orange-500/20">
              <p className="text-base sm:text-lg text-orange-100/80 leading-relaxed">
                You can now check your contributions in the global leaderboard.
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-1">
                <p className="text-xs font-bold text-orange-400/80 uppercase tracking-widest">
                  Check Your Contributions
                </p>
              </div>
              <a
                href="https://dev-activity-dashboard-gilt.vercel.app/leaderboard"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-600 via-red-600 to-rose-600 hover:from-orange-500 hover:via-red-500 hover:to-rose-500 text-white font-bold text-base rounded-full transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-orange-500/50 border border-orange-400/50 group"
              >
                <span>Visit Global Leaderboard</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <div className="pt-6 border-t border-orange-500/30">
              <p className="text-sm text-orange-200/60 font-light italic">
                Thank you for your contributions to the community.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-slate-950 via-transparent to-transparent pointer-events-none" />
    </main>
  )
}
