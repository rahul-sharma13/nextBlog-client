import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { formDataType} from "@/types/types";

const useSignup = () => {
  const [formData, setFormData] = useState<formDataType>({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const router = useRouter();

  // handling changes in form
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  // user sign in function
  const userSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/auth/signup",
        formData
      );

      if (response.status === 200) {
        router.push("/login");
      }
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        const status = error.response?.status;
        const data = error.response?.data;

        if (status === 409) {
          setErrorMessage("Conflict: This email is already in use.");
        } else if (status === 400) {
          setErrorMessage("Bad Request: Please check the provided data.");
        } else {
          setErrorMessage(
            data || "An unexpected error occurred. Please try again."
          );
        }
      } else {
        setErrorMessage("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    loading,
    errorMessage,
    handleChange,
    userSignUp,
  };
};

export default useSignup;
