import { useForm } from "react-hook-form";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";



const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email format").required("Email is required"),
  message: yup.string().min(10, "Message must be at least 10 characters").required("Message is required"),
});


const Contact =()=>{

    const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(schema),
  });


// ✅ Submit handler
  const onSubmit = async (data) => {
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      console.log(result);

      if (res.ok) {
        // alert("Message sent successfully!");
        toast.success("Message sent successfully!");

        reset(); // clear the form
      } else {
        toast.error("Something went wrong!");
        // alert("Error sending message. Try again.");
      }
    } catch (error) {
      console.error("Submit error:", error);
      alert("Something went wrong!");
    }
  };

     return (

      <section id="contact" className="bg-[hsl(172,90%,69%)]  py-6   ">
            <div className="px-10  ">
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto  p-6 rounded-3xl shadow-2xl   space-y-4">
      <h2 className="text-2xl font-semibold mb-4 text-center">Contact Me</h2>

      <div className=" ">
        <label className="block text-sm font-medium">Name</label>
        <input
          {...register("name")}
          type="text"
          className="w-full p-2 border  border-teal-800 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium">Email</label>
        <input
          {...register("email")}
          type="email"
          className="w-full p-2 border border-teal-800 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>

      <div >
        <label className="block text-sm font-medium">Message</label>
        <textarea
          {...register("message")}
          rows={5}
          className="w-full p-2 border-teal-800 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gray-500 text-white p-2 rounded hover:bg-slate-900 disabled:opacity-50"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>

      {isSubmitSuccessful && <p className="text-green-600 mt-2 text-center">Your message has been sent!</p>}
    </form>
</div>
    </section>
  );
};

export default Contact;