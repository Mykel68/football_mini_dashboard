import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bell, Heart, Mail } from "lucide-react"
import User from "@/public/user.svg"

export default function Header() {
    return (
        <header className="bg-white p-4 flex items-center justify-between">
            <Tabs defaultValue="matches">
                <TabsList>
                    <TabsTrigger value="matches">Matches</TabsTrigger>
                    <TabsTrigger value="live-score">Live Score</TabsTrigger>
                    <TabsTrigger value="statistics">Statistics</TabsTrigger>
                    <TabsTrigger value="analytics">Analytics</TabsTrigger>
                </TabsList>
            </Tabs>
            <div className="flex items-center space-x-4">
                <Input className="w-64" placeholder="Search Matches, Players, Stats..." />
                <Button variant="ghost" size="icon">
                    <Bell className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                    <Mail className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                    <Heart className="h-5 w-5" />
                </Button>
                <Avatar>
                    <AvatarImage src={User.src} />
                    <AvatarFallback>JD</AvatarFallback>
                </Avatar>
            </div>
        </header>
    )
}