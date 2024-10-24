import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Avatar1 from "@/public/avatar1.svg"
import Avatar2 from "@/public/avatar2.svg"
import Avatar3 from "@/public/avatar3.svg"
import Avatar4 from "@/public/avatar4.svg"
import First from "@/public/first.svg"
import Second from "@/public/second.svg"
import { Clock, LocateIcon } from "lucide-react"

export default function WeeklyChallenge() {
    // List of avatars for users
    const userAvatars = [Avatar1, Avatar2, Avatar3, Avatar4];

    return (
        <Card className="mb-6 bg-green-600 text-white">
            <CardContent className="p-6 flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold mb-2">Weekly Football Challenge</h2>
                    <div className="flex items-center space-x-2 mb-4">
                        <Avatar className="w-8 h-8">
                            <AvatarImage src={First.src} />
                            <AvatarFallback>T1</AvatarFallback>
                        </Avatar>
                        <span>vs</span>
                        <Avatar className="w-8 h-8">
                            <AvatarImage src={Second.src} />
                            <AvatarFallback>T2</AvatarFallback>
                        </Avatar>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                            {/* <div className="w-4 h-4 bg-white rounded-full" /> */}
                            <Clock />
                            <span>5:00 PM</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            {/* <div className="w-4 h-4 bg-white rounded-full" /> */}
                            <LocateIcon />
                            <span>London</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-end">
                    <Button className="bg-white text-green-600 hover:bg-gray-100">Join Now →</Button>
                    <div className="flex mt-4">
                        {userAvatars.map((avatar, index) => (
                            <Avatar key={index} className="w-8 h-8 -ml-2 border-2 border-white">
                                <AvatarImage src={avatar.src} />
                                <AvatarFallback>U{index + 1}</AvatarFallback>
                            </Avatar>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
