import { useLocation } from "react-router-dom"

const JobDetails = () => {

    const location = useLocation();
  const from  = "i";
  console.log(location.state);

    return (
        <div>from {from}</div>
    )
}

export default JobDetails