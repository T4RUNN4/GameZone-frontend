interface ReasonProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export default function ReasonCard({ icon, title, description }: ReasonProps) {
    return (
         <div
            className="rounded-lg border border-gray-700 px-8 py-12 shadow-md transition-transform duration-300 hover:scale-105 text-center"
          >
            <div className="mb-8 flex items-center justify-center">
              {icon}
            </div>
            <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
            <p className="text-gray-300 text-sm">{description}</p>
          </div>
    )
}