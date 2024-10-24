import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Avatar1 from "@/public/best1.svg"
import Avatar2 from "@/public/best2.svg"
import Avatar3 from "@/public/best3.svg"
import Buccaneers from "@/public/buccaneers.svg"
import Titians from "@/public/titians.svg"
import Best1 from "@/public/eagles.svg"
import Best2 from "@/public/roger.svg"
import Best3 from "@/public/tigers.svg"
import Best4 from "@/public/nj_super.svg"
import Best5 from "@/public/tigers2.svg"

export default function LeftSidebar() {
    // Players and their avatars
    const players = ['John Smith', 'Barnet', 'Trevor'];
    const avatars = [Avatar1, Avatar2, Avatar3];

    // Teams and their logos
    const teams = ['Tigers VI', 'Roger II', 'Eagles NY', 'NJ Super', 'Tigers VI'];
    const teamLogos = [Best3, Best2, Best1, Best4, Best5];

    return (
        <div className="w-64 bg-white p-4 hidden md:block">
            <div className="flex items-center justify-between mb-6">
                <div className="text-2xl font-bold">Logo</div>
                <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                </Button>
            </div>
            <nav className="space-y-4">
                <div className="font-semibold text-gray-500">Live Matches</div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <img src={Buccaneers.src} alt="Buccaneers" className="h-8 w-8" />
                        <span>Buccaneers</span>
                    </div>
                    <span className="font-semibold">3</span>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <img src={Titians.src} className="h-8 w-8" alt="Titians" />
                        <span>Titans</span>
                    </div>
                    <span className="font-semibold">2</span>
                </div>

                <div className="font-semibold text-gray-500 mt-6">Teams</div>
                {teams.map((team, index) => (
                    <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <img src={teamLogos[index].src} alt={team} className="w-8 h-8" />
                            <span>{team}</span>
                        </div>
                        {index === 0 && <span className="text-green-500 text-xs">See Profile →</span>}
                    </div>
                ))}

                <div className="font-semibold text-gray-500 mt-6">Best Players</div>
                {players.map((player, index) => (
                    <div key={index} className="flex items-center space-x-2">
                        <Avatar className="w-8 h-8">
                            <AvatarImage src={avatars[index].src} alt={player} />
                            <AvatarFallback>{player[0]}</AvatarFallback>
                        </Avatar>
                        <span>{player}</span>
                        <span className="text-green-500 ml-auto">{18 - index}</span>
                    </div>
                ))}
            </nav>
        </div>
    )
}
