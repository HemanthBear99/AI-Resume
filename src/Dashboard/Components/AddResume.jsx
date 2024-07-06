import { Loader2, PlusSquare } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { v4 as uuidv4 } from "uuid"
import GlobalApi from "./../../../service/GlobalApi"
import { useUser } from "@clerk/clerk-react"

const AddResume = () => {
  const [openDailog, setOpenDialog] = useState(false)
  const [resumeTitle, setResumeTitle] = useState()
  const { user } = useUser()
  const [loading, setLoading] = useState(false)

  const onCreate = () => {
    setLoading(true)
    const uuid = uuidv4()
    const data = {
      data: {
        title: resumeTitle,
        resumeId: uuid,
        userEmail: user?.primaryEmailAddress?.emailAddress,
        userName: user?.fullName,
      },
    }
    GlobalApi.CreateNewResume(data).then(
      (resp) => {
        console.log(resp)
        if (resp) {
          setLoading(false)
        }
      },
      (error) => {
        setLoading(false)
      }
    )
  }

  return (
    <div>
      <div
        className="p-14 py-24 border items-center flex justify-center bg-secondary rounded-lg mt-10 h-[280px] hover:scale-105 transition-all hover:shadow-md cursor-pointer"
        onClick={() => setOpenDialog(true)}
      >
        <PlusSquare />
      </div>
      <Dialog open={openDailog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Resume</DialogTitle>
            <DialogDescription>
              <p>Add a title for your new resume</p>
              <Input
                className="my-2"
                placeholder="Resume Title"
                onChange={(e) => setResumeTitle(e.target.value)}
              />
            </DialogDescription>
            <div className="flex justify-end gap-5">
              <Button
                onClick={() => setOpenDialog(false)}
                variant="destructive"
              >
                Cancle
              </Button>
              <Button
                onClick={() => onCreate()}
                disabled={!resumeTitle || loading}
              >
                {loading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  "Create"
                )}
              </Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default AddResume
