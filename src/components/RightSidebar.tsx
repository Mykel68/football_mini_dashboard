import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import TopScorer from "@/public/top-scorer.svg"

export default function RightSidebar() {
    return (
        <div className="w-64 bg-white p-4 hidden lg:block ">
            <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4">Trending Now</h3>
                <div className="flex items-center space-x-4 mb-4">
                    <Avatar className="w-12 h-12">
                        <AvatarImage src={TopScorer.src} />
                        <AvatarFallback>JT</AvatarFallback>
                    </Avatar>
                    <div>
                        <div className="font-semibold">Jack Travor</div>
                        <div className="text-sm text-gray-500">305 Goals</div>
                    </div>
                </div>
                <Button variant="link" size="sm" className="text-green-500">View Profile</Button>
            </div>
            <Card>
                <CardContent className="p-4">
                    <h3 className="text-lg font-semibold mb-4">Create Game</h3>
                    <div className="space-y-4">
                        <Input placeholder="Select Location" />
                        <Input placeholder="Select Ground" />
                        <Input placeholder="Select Date" />
                        <Input placeholder="Number of Players" />
                        <Button className="w-full">Create Now</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}