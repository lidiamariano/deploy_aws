interface ExperienceItemProps {
  company: string;
  role: string;
  duration: string;
  description: string;
}

export function ExperienceItem({ company, role, duration, description }: ExperienceItemProps) {
  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold">
        {company} | {role}
      </h3>
      <p className="text-gray-600">{duration}</p>
      <p className="mt-2">{description}</p>
    </div>
  );
}
