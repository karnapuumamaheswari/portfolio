import { motion } from "framer-motion";
import { Github, Linkedin, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, type FormEvent } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const contactEmail = "karnapuumamaheswari022005@gmail.com";

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );

    window.open(`mailto:${contactEmail}?subject=${subject}&body=${body}`, "_blank");
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Feel free to reach out for collaborations, opportunities, or just a friendly chat!
          </p>

          {/* Contact Form */}
          <div className="glass-card rounded-2xl p-6 sm:p-8 mb-8 text-left">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium text-muted-foreground mb-1 block">Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-lg bg-muted border border-border px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground mb-1 block">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-lg bg-muted border border-border px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground mb-1 block">Message</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={4}
                  className="w-full rounded-lg bg-muted border border-border px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                  placeholder="Your message..."
                  required
                />
              </div>
              <Button type="submit" className="w-full rounded-full bg-primary text-primary-foreground glow-button">
                Send Message
              </Button>
            </form>
          </div>

          <p className="text-sm text-muted-foreground mb-6">
            Email:{" "}
            <a href={`mailto:${contactEmail}`} className="text-primary hover:underline">
              {contactEmail}
            </a>
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="outline" size="lg" className="rounded-full border-primary/30 hover:bg-primary/10">
              <a href={`mailto:${contactEmail}`}>
                {contactEmail}
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full border-primary/30 hover:bg-primary/10">
              <a href="https://github.com/karnapuumamaheswari" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full border-primary/30 hover:bg-primary/10">
              <a href="https://www.linkedin.com/in/uma-maheswari-b596a12a6/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </a>
            </Button>
            <Button asChild size="lg" className="rounded-full bg-primary text-primary-foreground glow-button">
              <a href="/umamaheswari_resume.pdf" target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2 h-4 w-4" /> View Resume
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
