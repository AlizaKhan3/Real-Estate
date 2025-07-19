import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import { axiosInstance } from "../config/axiosInstance";
import { jwtDecode } from "jwt-decode";

export default function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        // console.log("Form Data:", data);

        try {
            const response = await axiosInstance.post('/login', data);
            console.log("post data:", data);

            // ✅ Get token from response
            const token = response.data.token;
            localStorage.setItem("token", token);

            //decoding this token is mein role hoga.
            const decodedToken = jwtDecode(token);
            console.log(decodedToken)

            if (decodedToken.role === "admin") {
                navigate("/dashboard")
            } else {
                navigate("/properties");
            }

        } catch (error) {
            console.log(error)
        }
    };


    return (
        <section
            className="relative pt-20 flex items-center justify-center min-h-screen bg-cover bg-center"
            style={{
                backgroundImage:
                    "url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c)",
            }}
        >
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative z-10 w-full max-w-md p-6 bg-white/50 rounded-2xl shadow-xl backdrop-blur-md">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
                    Login
                </h2>

                <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label className="block text-gray-700 text-sm font-medium">
                            Email Address
                        </label>
                        <Input
                            type="email"
                            placeholder="you@example.com"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value:
                                        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Enter a valid email",
                                },
                            })}
                        />
                        {errors.email && (
                            <p className="text-red-600 text-sm">{errors.email.message}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <label className="block text-gray-700 text-sm font-medium">
                            Password
                        </label>
                        <Input
                            type="password"
                            placeholder="••••••••"
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 4,
                                    message: "Password must be at least 6 characters",
                                },
                            })}
                        />
                        {errors.password && (
                            <p className="text-red-600 text-sm">{errors.password.message}</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-lg font-semibold mt-2"
                    >
                        Login
                    </button>
                </form>

                <p className="text-center text-sm text-gray-600 mt-6">
                    Don&apos;t have an account?{" "}
                    <Link to="/register" className="text-blue-600 hover:underline">
                        Register here
                    </Link>
                </p>
            </div>
        </section>
    );
}
