import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <div className="space-y-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Contact Me</h1>
        <p className="text-lg">Feel free to reach out to me using the form below.</p>
      </section>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <Input id="name" {...register("name", { required: true })} />
          {errors.name && <span className="text-red-500">This field is required</span>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <Input id="email" type="email" {...register("email", { required: true })} />
          {errors.email && <span className="text-red-500">This field is required</span>}
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
          <Input id="subject" {...register("subject", { required: true })} />
          {errors.subject && <span className="text-red-500">This field is required</span>}
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <Textarea id="message" {...register("message", { required: true })} />
          {errors.message && <span className="text-red-500">This field is required</span>}
        </div>
        <Button type="submit" variant="primary">Send Message</Button>
      </form>
    </div>
  );
}

export default Contact;