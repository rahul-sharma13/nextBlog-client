import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { formDataType } from "@/types/types";

const useLogin = () => {
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

  // user log in function
  const userLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/auth/login",
        formData,
        { withCredentials: true }
      );
      console.log(response);
      if (response.status === 200) {
        router.push("/");
      }
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        const status = error.response?.status;
        const data = error.response?.data;

        if (status === 404) {
          setErrorMessage("User not found");
        } else if (status === 400) {
          setErrorMessage("Bad Request: Please check the provided data.");
        } else if (status == 401) {
          setErrorMessage("Password is not correct");
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
    userLogin,
  };
};

export default useLogin;
