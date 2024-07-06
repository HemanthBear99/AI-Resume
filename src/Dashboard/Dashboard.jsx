import { useUser } from "@clerk/clerk-react"
import AddResume from "./Components/AddResume"
import GlobalApi from "./../../service/GlobalApi"
import { useEffect, useState } from "react"
import ResumeCardItem from "./Components/ResumeCardItem"

/**
 * Renders the Dashboard component which displays the list of resumes for the current user.
 *
 * @return {JSX.Element} The Dashboard component.
 */
const Dashboard = () => {
  // Get the user information using the useUser hook
  const { user } = useUser()
  // State to hold the list of resumes for the current user
  const [resumeList, setResumeList] = useState([])

  // Fetch the list of resumes for the current user when the component mounts
  useEffect(() => {
    user && GetResumesLists()
  }, [])

  /**
   * Fetches the list of resumes for the current user and updates the state.
   *
   * @return {Promise<void>} - A Promise that resolves when the resume list is fetched and the state is updated.
   */
  const GetResumesLists = async () => {
    try {
      // Fetch the list of resumes for the current user
      const response = await GlobalApi.GetUserResumes(
        user?.primaryEmailAddress?.emailAddress
      )

      // Update the state with the fetched resume list
      setResumeList(response.data.data)
    } catch (error) {
      // Handle any errors that occur during the API call
      console.error("Error fetching resume list:", error)
    }
  }

  return (
    <div className="p-10 md:px-20 lg:px-32">
      {/* Display the title of the dashboard */}
      <h2 className=" font-bold text-3xl">My Resume</h2>

      {/* Display a brief description */}
      <p>Start creating AI resume to your next Job role</p>

      {/* Display the list of resumes */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-10 gap-5">
        <AddResume />
        {resumeList.length > 0 &&
          resumeList.map((resume, index) => (
            <ResumeCardItem resume={resume} key={index} />
          ))}
      </div>
    </div>
  )
}

export default Dashboard
