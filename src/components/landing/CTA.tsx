import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FadeIn from "./ui/FadeIn";

export default function CTA() {
  return (
    <section className="py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-xent-primary via-xent-primary to-xent-dark px-8 py-16 sm:px-14 sm:py-20 text-center shadow-xent">
            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/10 blur-2xl animate-float" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-white/10 blur-2xl" />

            <div className="relative max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                Bring your HR operations together.
              </h2>
              <p className="mt-4 text-white/85 leading-relaxed">
                Manage your people, attendance, leave and payroll from one
                connected platform.
              </p>
              <div className="mt-8">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-white text-xent-primary font-bold text-sm px-6 py-3 rounded-lg hover:bg-xent-subtle transition"
                >
                  Contact Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}