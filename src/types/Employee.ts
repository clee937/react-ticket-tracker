type Profile = {
  experience: string;
  department: string;
  techstack: string[];
  profilePicture: string;
};

type EmployeeData = {
  id: number;
  name: string;
  role: string;
  profile: Profile;
};

export default EmployeeData;
