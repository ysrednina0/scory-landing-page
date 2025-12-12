import { Users, Award, TrendingUp } from 'lucide-react';
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function SocialProof() {
  const testimonials = [
    {
      quote:
        "Finally, a tool that adapts to ME. The Personal Reading Level feature helps me understand complex international journals without constantly checking a dictionary. It bridges the language gap perfectly.",
      name: "Sekar",
      designation: "Mahasiswa",
      src: "src/assets/image 21.png",
    },
    {
      quote:
        "I used to rely on ChatGPT, but the hallucinations were risky for my thesis. Scory is different—it uses RAG technology so I know the summaries are 100% accurate and safe to cite.",
      name: "Amgad",
      designation: "Mahasiswa",
      src: "src/assets/image 22.png",
    },
    {
      quote:
        "Research usually feels draining, but Scory makes it addictive. I love the gamification features! Building my reading streak and taking quick quizzes keeps me motivated to finish my reading list.",
      name: "Reva",
      designation: "Mahasiswa",
      src: "src/assets/image 24.png",
    },
    {
      quote:
        "Scory doesn't just simplify text; it preserves the scientific context. I can grasp difficult concepts in minutes rather than hours. It’s an absolute game-changer for tight deadlines.",
      name: "Lintang",
      designation: "Mahasiswa",
      src: "src/assets/image 25.png",
    },
    {
      quote:
        "The 'Zero Hallucination' promise is real. Unlike other AI tools that make things up, Scory sticks strictly to the source material. It gives me the confidence to use the insights for my assignments.",
      name: "Dimas",
      designation: "Mahasiswa",
      src: "src/assets/image 26.png",
    },
    {
      quote:
        "As a non-native English speaker, academic jargon was my biggest enemy. Scory transforms dense paragraphs into clear, understandable language. It actually helps improve my literacy.",
      name: "Fasya",
      designation: "Mahasiswa",
      src: "src/assets/image 27.png",
    }
  ];
  return (
    <section className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <AnimatedTestimonials testimonials={testimonials} />

        </div>
      </div>
    </section>
  );
}


