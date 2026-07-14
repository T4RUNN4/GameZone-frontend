import Button from "@/components/Buttons";
import SectionContainer from "@/components/SectionContainer";

export default function NotFound() {
    return (
        <SectionContainer title="404 - Page Not Found" subtitle="The page you are looking for does not exist.">
            <div className="flex items-center justify-center">
                <Button text="Return Home" type="primary" task="hyperlink" href="/" />
            </div>
        </SectionContainer>
    )
}