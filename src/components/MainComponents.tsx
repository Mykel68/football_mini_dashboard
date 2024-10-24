import WeeklyChallenge from "./WeeklyChanllenge"
import MatchList from "./MatchList"

export default function MainContent() {
    return (
        <main className="p-6">
            <WeeklyChallenge />
            <MatchList />
        </main>
    )
}