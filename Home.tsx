import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SlideContent {
  matrix?: Array<{
    distribution: string;
    concentrated: string;
    fragmented: string;
    examples1: string;
    examples2: string;
  }>;
  headers?: string[];
  rows?: string[][];
  insights?: string[];
  synthesis?: string[];
}

interface Slide {
  title: string;
  subtitle?: string;
  authors?: string;
  date?: string;
  type: string;
  content?: SlideContent | string;
  sections?: Array<{
    heading?: string;
    points?: string[];
    note?: string;
  }>;
  institution?: string;
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const slides = [
    // Slide 0: Title
    {
      title: "Gestão de Políticas Públicas",
      subtitle: "Hill (2005): Chapter 2 – Theories of Power in the Policy Process",
      authors: "Pedro, Lorena & Dario",
      date: "November 2025",
      type: "title",
    },
    // Slide 1: Basic Concepts
    {
      title: "The Basic Concepts of the Article",
      subtitle: "Distribution and Structure of Power",
      type: "matrix",
      content: {
        matrix: [
          {
            distribution: "Power Distribution",
            concentrated: "1. Representative government where a unified executive responds to popular will.",
            fragmented: "2. Pluralist government where popular will prevails through competition between groups.",
            examples1: "Ex. France, USA",
            examples2: "Ex. Switzerland, Germany",
          },
          {
            distribution: "Power Unequally",
            concentrated: "3. Government by an unrepresentative elite or gripped by external influences.",
            fragmented: "4. Unpredictable and chaotic government, buffeted by multiple pressures.",
            examples1: "Ex. Russia, China",
            examples2: "Ex. Lebanon, Iraq",
          },
        ],
      },
    },
    // Slide 2: Pluralist Model
    {
      title: "The Pluralist Model",
      subtitle: "Power as a Competitive Marketplace",
      type: "content",
      sections: [
        {
          heading: "From Representative to Pluralist Democracy",
          points: [
            "Pluralism posits that power is widely, though not equally, distributed among different groups in society.",
            "Power is defined by resources (e.g., money, information, expertise, public support)",
            "Although a few scholars view the government as a neutral actor, most emphasize that it plays an active role, pursuing its own agenda within the process.",
          ],
        },
      ],
    },
    // Slide 3: Brazilian Political Arena
    {
      title: "Who are the players in the Brazilian political arena?",
      type: "players",
      content: "Multiple stakeholders including political parties, civil society organizations, business groups, labor unions, and government institutions shape policy outcomes.",
    },
    // Slide 4: Challenging Pluralism
    {
      title: "Challenging Pluralism",
      subtitle: "The Hidden Dimensions of Power",
      type: "content",
      sections: [
        {
          heading: "Lukes's Three-Dimensional View (1974)",
          points: [
            "First Dimension: Visible power and overt conflict",
            "Second Dimension: Controlling the political agenda",
            "Third Dimension: Shaping people's perception (to accept the existing order)",
          ],
        },
        {
          heading: "Bachrach & Baratz (1962): Two Faces of Power",
          points: [
            "First Face: Obvious political conflicts",
            "Second Face: Subtle shaping of the political agenda (or even protecting the agenda)",
            "Key concepts: Mobilization of bias, Nondecision-making",
          ],
        },
        {
          note: "The difficulty with Lukes's third dimension is that it requires identifying the 'true interests' of a group—a methodologically and philosophically problematic claim. Colin Hay reframes this as 'context-shaping.'",
        },
      ],
    },
    // Slide 5: Elite Theory
    {
      title: "Theories of Concentrated Power",
      subtitle: "Elite and Economic Class",
      type: "content",
      sections: [
        {
          heading: "The Elite Theory",
          points: [
            "Elite and Marxist theories assert a cohesive minority holds decisive influence over public policy",
            "Core argument: Governance by a minority is an inescapable feature of all societies",
            "Gaetano Mosca: All societies are divided into a ruling class (small, monopolizes power) and a ruled class (numerous, controlled by the first)",
          ],
        },
        {
          heading: "Sources of Elite Power",
          points: [
            "Large-scale organizations",
            "Military",
            "Wealth",
            "Technical expertise",
            "Relationships",
          ],
        },
        {
          heading: "C. Wright Mills's 'Power Elite' (1956)",
          points: [
            "Three key institutions: major business corporations, military, and federal government",
          ],
        },
      ],
    },
    // Slide 6: Historical Contingency
    {
      title: "Historical Contingency",
      subtitle: "The Foundational Principles of the Marxist Perspective",
      type: "content",
      sections: [
        {
          heading: "Key Insight",
          points: [
            "The specific order in which events occur can critically shape divergent political outcomes.",
            "Historical processes are not predetermined but contingent on specific circumstances and decisions.",
          ],
        },
      ],
    },
    // Slide 7: Structural Determinism
    {
      title: "Structural Determinism",
      subtitle: "How Context Shapes Policy",
      type: "content",
      sections: [
        {
          heading: "Structuralism",
          points: [
            "Large-scale, impersonal forces create a powerful impact and limit the choices of political actors",
          ],
        },
        {
          heading: "Globalism",
          points: [
            "The state's autonomy is increasingly challenged by global economic forces",
            "⚠️ But: Globalization can be a 'convenient alibi' for politicians",
          ],
        },
        {
          heading: "Other Deep Structures of Power",
          points: [
            "Gender, ethnicity, religion, and nationality shape political outcomes",
            "Acknowledging these structural constraints requires a more nuanced assessment of power than any single theory can provide",
          ],
        },
      ],
    },
    // Slide 8: Evolution of Perspectives
    {
      title: "Closing",
      subtitle: "Evolution of Perspectives",
      type: "table",
      content: {
        headers: ["Phase", "Focus", "Core Idea"],
        rows: [
          [
            "Pluralism",
            "Competition among many groups",
            "Politics as an open marketplace of interests",
          ],
          [
            "Elite Theory & Marxism",
            "Unequal distribution of power",
            "'The few decide for the many.'",
          ],
          [
            "Structuralism",
            "Deep underlying power structures",
            "Social and economic constraints determine the scope of action",
          ],
        ],
      },
    },
    // Slide 9: Central Insights
    {
      title: "Closing (2/2)",
      subtitle: "Central Insights",
      type: "insights",
      content: {
        insights: [
          "The political stage is not equally accessible to everyone – the rules of the game favor established interests.",
          "Power operates openly (through decisions) and covertly (through agenda-setting and ideology).",
          "Inequalities based on class, gender, and ethnicity shape the political process.",
          "Reality: 'A very unbalanced pluralism' (Schattschneider)",
        ],
        synthesis: [
          "No single theory fully explains power.",
          "Combination of actor- and structure-oriented perspectives is essential:",
          "Actors operate within structures, yet simultaneously transform those structures through their actions.",
          "⇒ For policy analysis, it is crucial to understand the interaction between agency and structure.",
        ],
      },
    },
    // Slide 10: Thank You
    {
      title: "Vielen Dank für Ihre Aufmerksamkeit",
      subtitle: "Thank you for your attention",
      type: "closing",
      institution: "FHO Fachhochschule Ostschweiz",
    },
  ];

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsMenuOpen(false);
  };

  const slide = slides[currentSlide];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-black/40 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold">
              HK
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold">Policy Analysis</h1>
              <p className="text-xs text-gray-400">Theories of Power</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:block text-sm text-gray-300">
              Slide {currentSlide + 1} of {slides.length}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:bg-white/10 rounded-lg transition"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Slide Menu */}
      {isMenuOpen && (
        <div className="fixed left-0 top-16 bottom-0 w-64 bg-black/80 backdrop-blur-md border-r border-white/10 overflow-y-auto z-30">
          <div className="p-4 space-y-2">
            {slides.map((s, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`w-full text-left px-4 py-3 rounded-lg transition ${
                  idx === currentSlide
                    ? "bg-blue-600 text-white"
                    : "bg-white/5 hover:bg-white/10 text-gray-300"
                }`}
              >
                <div className="text-sm font-semibold">{s.title}</div>
                <div className="text-xs text-gray-400">Slide {idx + 1}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="pt-20 pb-24 px-4 min-h-screen flex items-center justify-center">
        <div className="w-full max-w-4xl">
          {/* Title Slide */}
          {slide.type === "title" && (
            <div className="text-center space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl text-gray-300">{slide.subtitle}</p>
              </div>

              <div className="pt-8 space-y-4 text-gray-400">
                <p className="text-lg">{slide.authors}</p>
                <p className="text-sm">{slide.date}</p>
              </div>

              <div className="pt-12">
                <div className="inline-block px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-sm font-semibold">
                  Interactive Presentation
                </div>
              </div>
            </div>
          )}

          {/* Matrix Slide */}
          {slide.type === "matrix" && typeof slide.content === 'object' && 'matrix' in slide.content && (
            <div className="space-y-8 animate-fade-in">
              <div className="text-center space-y-2">
                <h2 className="text-4xl md:text-5xl font-bold">{slide.title}</h2>
                <p className="text-xl text-gray-400">{slide.subtitle}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {slide.content.matrix?.map((row: any, idx: number) => (
                  <div key={idx} className="space-y-4">
                    <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                    <h3 className="text-lg font-semibold text-gray-200">{row.distribution}</h3>

                    <div className="grid grid-cols-1 gap-4">
                      <div className="p-4 bg-blue-900/30 border border-blue-500/30 rounded-lg">
                        <p className="text-sm font-semibold text-blue-300 mb-2">Power Concentrated</p>
                        <p className="text-sm text-gray-300">{row.concentrated}</p>
                        <p className="text-xs text-gray-400 mt-2">{row.examples1}</p>
                      </div>

                      <div className="p-4 bg-purple-900/30 border border-purple-500/30 rounded-lg">
                        <p className="text-sm font-semibold text-purple-300 mb-2">Power Fragmented</p>
                        <p className="text-sm text-gray-300">{row.fragmented}</p>
                        <p className="text-xs text-gray-400 mt-2">{row.examples2}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Content Slide */}
          {slide.type === "content" && (
            <div className="space-y-8 animate-fade-in">
              <div className="text-center space-y-2">
                <h2 className="text-4xl md:text-5xl font-bold">{slide.title}</h2>
                {slide.subtitle && <p className="text-xl text-gray-400">{slide.subtitle}</p>}
              </div>

              <div className="space-y-6">
                {slide.sections?.map((section: any, idx: number) => (
                  <div key={idx} className="space-y-4">
                    {section.heading && (
                      <h3 className="text-2xl font-semibold text-blue-400">{section.heading}</h3>
                    )}

                    {section.points && (
                      <ul className="space-y-3">
                        {section.points.map((point: string, pidx: number) => (
                          <li key={pidx} className="flex gap-4 items-start">
                            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 mt-2 flex-shrink-0"></span>
                            <span className="text-gray-300 leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.note && (
                      <div className="mt-4 p-4 bg-amber-900/20 border border-amber-600/30 rounded-lg">
                        <p className="text-sm text-amber-200 italic">{section.note}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Players Slide */}
          {slide.type === "players" && (
            <div className="space-y-8 animate-fade-in">
              <div className="text-center space-y-2">
                <h2 className="text-4xl md:text-5xl font-bold">{slide.title}</h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  "Political Parties",
                  "Civil Society",
                  "Business Groups",
                  "Labor Unions",
                  "Government",
                  "Media",
                  "Academia",
                  "Religious Groups",
                  "International Orgs",
                ].map((player, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-blue-500/30 rounded-lg hover:border-blue-500/60 transition text-center"
                  >
                    <p className="font-semibold text-gray-200">{player}</p>
                  </div>
                ))}
              </div>

              <p className="text-center text-gray-400 mt-6">{typeof slide.content === 'string' ? slide.content : ''}</p>
            </div>
          )}

          {/* Table Slide */}
          {slide.type === "table" && typeof slide.content === 'object' && 'headers' in slide.content && (
            <div className="space-y-8 animate-fade-in">
              <div className="text-center space-y-2">
                <h2 className="text-4xl md:text-5xl font-bold">{slide.title}</h2>
                {slide.subtitle && <p className="text-xl text-gray-400">{slide.subtitle}</p>}
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-blue-500/50">
                      {slide.content.headers?.map((header: string, idx: number) => (
                        <th
                          key={idx}
                          className="px-4 py-3 text-left font-semibold text-blue-400 text-sm"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {slide.content.rows?.map((row: string[], ridx: number) => (
                      <tr
                        key={ridx}
                        className="border-b border-white/10 hover:bg-white/5 transition"
                      >
                        {row.map((cell: string, cidx: number) => (
                          <td key={cidx} className="px-4 py-3 text-sm text-gray-300">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Insights Slide */}
          {slide.type === "insights" && typeof slide.content === 'object' && 'insights' in slide.content && (
            <div className="space-y-8 animate-fade-in">
              <div className="text-center space-y-2">
                <h2 className="text-4xl md:text-5xl font-bold">{slide.title}</h2>
                {slide.subtitle && <p className="text-xl text-gray-400">{slide.subtitle}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-blue-400">Key Insights</h3>
                  <ul className="space-y-3">
                    {slide.content.insights?.map((insight: string, idx: number) => (
                      <li key={idx} className="flex gap-3 items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0"></span>
                        <span className="text-gray-300 text-sm leading-relaxed">{insight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-purple-400">Synthesis & Implications</h3>
                  <ul className="space-y-3">
                    {slide.content.synthesis?.map((point: string, idx: number) => (
                      <li key={idx} className="flex gap-3 items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0"></span>
                        <span className="text-gray-300 text-sm leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Closing Slide */}
          {slide.type === "closing" && (
            <div className="text-center space-y-12 animate-fade-in">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {slide.title}
                </h1>
                <p className="text-xl text-gray-400">{slide.subtitle}</p>
              </div>

              <div className="pt-12">
                <div className="inline-block">
                  <p className="text-lg font-semibold text-gray-300 mb-2">{slide.institution}</p>
                  <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Navigation Footer */}
      <footer className="fixed bottom-0 left-0 right-0 bg-black/40 backdrop-blur-md border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Button
            onClick={prevSlide}
            variant="outline"
            size="icon"
            className="border-white/20 hover:bg-white/10"
          >
            <ChevronLeft size={20} />
          </Button>

          <div className="flex-1 mx-4">
            <div className="w-full bg-white/10 rounded-full h-1">
              <div
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-1 rounded-full transition-all duration-300"
                style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
              ></div>
            </div>
          </div>

          <Button
            onClick={nextSlide}
            variant="outline"
            size="icon"
            className="border-white/20 hover:bg-white/10"
          >
            <ChevronRight size={20} />
          </Button>
        </div>
      </footer>

      {/* Animations */}
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}
