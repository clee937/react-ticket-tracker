type Profile = {
  experience: string;
  department: string;
  techstack: string[];
  profilePicture: string;
};

type Employee = {
  id: number;
  name: string;
  role: string;
  profile: Profile;
};

export default Employee;
