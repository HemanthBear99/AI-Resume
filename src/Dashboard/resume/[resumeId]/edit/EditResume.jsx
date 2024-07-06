import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import FormSection from "../../Components/FormSection"
import ResumePreview from "../../Components/ResumePreview"
import { ResumeContext } from "@/context/ResumeContext"
import DummyData from "@/data/DummyData"

const EditResume = () => {
  const params = useParams()
  const [resumeInfo, setResumeInfo] = useState()
  useEffect(() => {
    setResumeInfo(DummyData)
  }, [])
  return (
    <ResumeContext.Provider value={{ resumeInfo, setResumeInfo }}>
      <div className="grid grid-cols-1 md:grid-cols-2 p-10 gap-10">
        <FormSection />
        <ResumePreview />
      </div>
    </ResumeContext.Provider>
  )
}

export default EditResume
