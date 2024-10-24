import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart } from "lucide-react"
import Best1 from "@/public/eagles.svg"
import Best2 from "@/public/roger.svg"
import Best3 from "@/public/tigers.svg"
import Best4 from "@/public/nj_super.svg"
import Best5 from "@/public/tigers2.svg"

export default function MatchList() {
    const teamLogos = [Best3, Best2, Best1, Best4, Best5];
    return (
        <>
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Latest Matches</h3>
                <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500">Filter:</span>
                    <Button variant="outline" size="sm">Football</Button>
                    <Button variant="outline" size="sm">5 vs 5</Button>
                    <Button variant="outline" size="sm">London</Button>
                </div>
            </div>

            {[1, 2, 3, 4].map((_, index) => (
                <Card key={index} className="mb-4">
                    <CardContent className="p-4 flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <Avatar className="w-10 h-10">
                                <AvatarImage src={teamLogos[index].src} alt={teamLogos[index].alt} />
                                <AvatarFallback>T{index + 1}</AvatarFallback>
                            </Avatar>
                            <div>
                                <div className="font-semibold">NY Yorks</div>
                                <div className="text-sm text-gray-500">vs</div>
                                <div className="font-semibold">NY Yorks</div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="text-sm text-gray-500">5:00 PM</div>
                            <div className="text-sm text-gray-500">London</div>
                            <Button variant="ghost" size="sm">
                                <Heart className={`h-5 w-5 ${index === 1 ? 'text-red-500 fill-red-500' : ''}`} />
                            </Button>
                            <Button variant="link" size="sm">View Details →</Button>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </>
    )
}