import { ResumeContext } from "@/context/ResumeContext"
import { useContext } from "react"
import PersonalDetailPreview from "./preview/PersonalDetailPreview"
import SummaryDetailPreview from "./preview/SummaryDetailPreview"
import ProfessionalDetailExpreience from "./preview/ProfessionalDetailExpreience"
import EducationalDetailPreview from "./preview/EducationalDetailPreview"
import SkillsDetailPreview from "./preview/SkillsDetailPreview"

/**
 * ResumePreview component renders the resume preview section.
 * It receives the resume information from the ResumeContext and
 * renders the personal details, summary, professional experience,
 * educational details, and skills sections.
 *
 * @returns {JSX.Element} The resume preview section.
 */
const ResumePreview = () => {
  // Extract the resume information and setResumeInfo function from the ResumeContext.
  const { resumeInfo, setResumeInfo } = useContext(ResumeContext)

  return (
    // Render the resume preview section.
    <div
      className="shadow-lg h-full p-14 border-t-[20px]"
      style={{ borderColor: resumeInfo?.themeColor }}
    >
      {/* Render the personal details section */}
      <PersonalDetailPreview resumeInfo={resumeInfo} />

      {/* Render the summary section */}
      <SummaryDetailPreview resumeInfo={resumeInfo} />

      {/* Render the professional experience section */}
      <ProfessionalDetailExpreience resumeInfo={resumeInfo} />

      {/* Render the educational details section */}
      <EducationalDetailPreview resumeInfo={resumeInfo} />

      {/* Render the skills section */}
      <SkillsDetailPreview resumeInfo={resumeInfo} />
    </div>
  )
}

export default ResumePreview
